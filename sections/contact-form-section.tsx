export default function ContactFormSection() {
    return (
        <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 border-b border-border">
            <div className="max-w-7xl mx-auto border-x border-border px-4">
                <iframe
                    className="airtable-embed w-full"
                    src="https://airtable.com/embed/app4iC8wBigNyF5ja/pag2VUONuoJssqt59/form"
                    width="100%"
                    height="533"
                    style={{ background: 'transparent', border: '1px solid #ccc' }}
                />
            </div>
        </section>
    );
}
