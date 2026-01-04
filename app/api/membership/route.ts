import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, fullName, age, phone, occupation, motivations, qualities, expectations } = body;

        // Validate required fields
        if (!email || !fullName || !age || !phone || !occupation || !motivations || !qualities || !expectations) {
            return NextResponse.json(
                { error: 'Toate câmpurile sunt obligatorii' },
                { status: 400 }
            );
        }

        if (motivations.length === 0) {
            return NextResponse.json(
                { error: 'Selectează cel puțin o motivație' },
                { status: 400 }
            );
        }

        const airtableToken = process.env.AIRTABLE_ACCESS_TOKEN;
        const baseId = process.env.AIRTABLE_BASE_ID || 'app4iC8wBigNyF5ja';

        if (!airtableToken) {
            console.error('Missing AIRTABLE_ACCESS_TOKEN');
            return NextResponse.json(
                { error: 'Configurare incompletă. Contactează administratorul.' },
                { status: 500 }
            );
        }

        // Submit to Airtable
        const airtableResponse = await fetch(
            `https://api.airtable.com/v0/${baseId}/Membership%20Requests`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${airtableToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fields: {
                        'Email Address': email,
                        'Full Name': fullName,
                        'Age': parseInt(age),
                        'Phone Number': phone,
                        'Occupation': occupation,
                        'Motivations': motivations,
                        'Qualities': qualities,
                        'Expectations': expectations,
                        'Submission Status': 'New'
                    }
                })
            }
        );

        const airtableData = await airtableResponse.json();

        if (!airtableResponse.ok) {
            console.error('Airtable API Error:', airtableData);
            return NextResponse.json(
                { error: 'Eroare la salvarea datelor. Te rugăm să încerci din nou.' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Cererea a fost trimisă cu succes!'
        });

    } catch (error) {
        console.error('Error submitting membership form:', error);
        return NextResponse.json(
            { error: 'Eroare la trimiterea formularului. Te rugăm să încerci din nou.' },
            { status: 500 }
        );
    }
}
