export default function Contact() {
    return (
        <section id="contact" className="px-10 py-10 bg-[var(--bg-color)] text-[var(--text-color)]">
            <h1 className="text-3xl font-semibold text-[var(--app-accent-color)]">Contact</h1>

            <p className="mt-3">
                If you have questions, feedback, or need assistance with any application
                published under Bramha's Lab, please use the contact information below.
            </p>

            <h2 className="mt-8 text-xl font-medium">Email</h2>
            <p className="mt-2">
                You can reach us at:
            </p>

            <p className="mt-1">
                <a
                    href="mailto:support@bramhadeshmukh.me"
                    className="underline text-[var(--app-accent-color)]"
                >
                    support@bramhadeshmukh.me
                </a>
            </p>

            <h2 className="mt-8 text-xl font-medium">Response Time</h2>
            <p className="mt-2">
                We aim to respond to inquiries within a reasonable timeframe. Response
                times may vary depending on the nature of the request.
            </p>
        </section>
    );
}
