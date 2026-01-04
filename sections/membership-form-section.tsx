'use client';

import { useState } from 'react';
import SectionTitle from '@/components/section-title';
import { UserPlusIcon } from 'lucide-react';
import AnimatedContent from '@/components/animated-content';

const MOTIVATIONS = [
    'Doresc să cunosc persoane noi și să leg prietenii',
    'Doresc să îmi dezvolt noi abilități',
    'Imi place să organizez proiecte',
    'Imi place să particip la proiecte',
    'Doresc să particip la dezvoltarea comunității arădene',
    'Imi place să lucrez în echipă'
];

const OCCUPATIONS = [
    { value: 'Angajat/ă', label: 'Angajat/ă' },
    { value: 'Student/ă', label: 'Student/ă' },
    { value: 'Altceva', label: 'Altceva' }
];

export default function MembershipFormSection() {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        age: '',
        phone: '',
        occupation: '',
        motivations: [] as string[],
        qualities: '',
        expectations: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleMotivationToggle = (motivation: string) => {
        setFormData(prev => ({
            ...prev,
            motivations: prev.motivations.includes(motivation)
                ? prev.motivations.filter(m => m !== motivation)
                : [...prev.motivations, motivation]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/membership', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Eroare la trimiterea formularului');
            }

            setSubmitStatus('success');
            setFormData({
                email: '',
                fullName: '',
                age: '',
                phone: '',
                occupation: '',
                motivations: [],
                qualities: '',
                expectations: ''
            });
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Eroare la trimiterea formularului');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 border-b border-border">
            <div className="max-w-4xl mx-auto">
                <SectionTitle
                    icon={UserPlusIcon}
                    title="Alătură-te Echipei Noastre"
                    subtitle="Ne bucurăm nespus că dorești să faci parte din echipa noastră."
                />

                <AnimatedContent className="mt-12 bg-bg-muted border border-primary-200 rounded-2xl p-8 md:p-12">
                    <div className="prose prose-pink max-w-none mb-8">
                        <p className="text-text-muted leading-relaxed">
                            Rotaract este o organizație mondială de voluntariat care unește persoane din fiecare oraș cu vârsta de peste 18 ani,
                            pentru a face schimb de idei cu lideri din comunitate, pentru a dezvolta abilități profesionale și de conducere și
                            pentru a crea proiecte ce au ca scop dezvoltarea comunității.
                        </p>
                        <p className="text-text-muted leading-relaxed mt-4">
                            Astfel, am aprecia să ne spui câteva lucruri despre tine pentru a putea programa cât mai curând interviul online de recrutare.
                        </p>
                    </div>

                    {submitStatus === 'success' ? (
                        <div className="text-center py-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-text mb-4">Mulțumim pentru aplicație!</h3>
                            <p className="text-lg text-text-muted mb-6 max-w-md mx-auto">
                                Formularul tău a fost trimis cu succes. Te vom contacta în curând pentru a programa interviul online de recrutare.
                            </p>
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-full">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>Verifică-ți emailul</span>
                            </div>
                            <p className="mt-8 text-text-muted">
                                Cu respect și prietenie, <br />
                                <span className="font-medium text-brand">Rotaract Arad Cetate</span>
                            </p>
                        </div>
                    ) : (
                        <>
                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-800 font-medium">❌ {errorMessage}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                                Adresa de e-mail <span className="text-brand">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                placeholder="exemplu@email.com"
                            />
                        </div>

                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-text mb-2">
                                Nume și prenume <span className="text-brand">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                required
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className="w-full px-4 py-3 border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                placeholder="Nume Prenume"
                            />
                        </div>

                        {/* Age and Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-text mb-2">
                                    Vârsta <span className="text-brand">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="age"
                                    required
                                    min="18"
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    className="w-full px-4 py-3 border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                    placeholder="25"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                                    Număr de telefon <span className="text-brand">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                    placeholder="+40 7XX XXX XXX"
                                />
                            </div>
                        </div>

                        {/* Occupation */}
                        <div>
                            <label className="block text-sm font-medium text-text mb-3">
                                Ocupația <span className="text-brand">*</span>
                            </label>
                            <div className="space-y-2">
                                {OCCUPATIONS.map((occupation) => (
                                    <label key={occupation.value} className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="occupation"
                                            required
                                            value={occupation.value}
                                            checked={formData.occupation === occupation.value}
                                            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                                            className="w-4 h-4 text-brand border-border-dark focus:ring-2 focus:ring-brand"
                                        />
                                        <span className="ml-3 text-text-muted">{occupation.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Motivations */}
                        <div>
                            <label className="block text-sm font-medium text-text mb-3">
                                Care sunt principalele motive pentru care dorești să faci parte dintr-o organizație de voluntariat? <span className="text-brand">*</span>
                            </label>
                            <div className="space-y-2">
                                {MOTIVATIONS.map((motivation) => (
                                    <label key={motivation} className="flex items-start cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.motivations.includes(motivation)}
                                            onChange={() => handleMotivationToggle(motivation)}
                                            className="w-4 h-4 mt-1 text-brand border-border-dark rounded focus:ring-2 focus:ring-brand"
                                        />
                                        <span className="ml-3 text-text-muted">{motivation}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Qualities */}
                        <div>
                            <label htmlFor="qualities" className="block text-sm font-medium text-text mb-2">
                                Spune-ne 3 calități care te reprezintă <span className="text-brand">*</span>
                            </label>
                            <textarea
                                id="qualities"
                                required
                                rows={3}
                                value={formData.qualities}
                                onChange={(e) => setFormData({ ...formData, qualities: e.target.value })}
                                className="w-full px-4 py-3 border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                                placeholder="De exemplu: comunicativ, organizat, empatic..."
                            />
                        </div>

                        {/* Expectations */}
                        <div>
                            <label htmlFor="expectations" className="block text-sm font-medium text-text mb-2">
                                Ce așteptări ai de la organizația noastră? <span className="text-brand">*</span>
                            </label>
                            <textarea
                                id="expectations"
                                required
                                rows={4}
                                value={formData.expectations}
                                onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                                className="w-full px-4 py-3 border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                                placeholder="Descrie așteptările tale..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting || formData.motivations.length === 0}
                            className="w-full py-4 px-8 bg-linear-to-r from-primary-600 to-brand text-white font-medium rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Se trimite...' : 'Trimite Cererea'}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-text-muted">
                        Cu respect și prietenie, <br />
                        <span className="font-medium text-brand">Rotaract Arad Cetate</span>
                    </p>
                        </>
                    )}
                </AnimatedContent>
            </div>
        </section>
    );
}
