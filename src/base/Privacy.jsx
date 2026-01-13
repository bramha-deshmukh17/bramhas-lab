export default function Privacy() {
    return (
        <section id="privacy" className="px-10 py-10 bg-[var(--bg-color)] text-[var(--text-color)]">
            <h1 className="text-3xl font-semibold text-[var(--app-accent-color)]">Privacy</h1>

            <p className="mt-3">
                Bramha's Lab is committed to protecting user privacy and ensuring
                transparency across all applications published under this developer
                account. This page provides an overview of our privacy practices and
                links to app-specific privacy policies.
            </p>

            <h2 className="mt-8 text-xl font-medium">Developer-Level Privacy</h2>
            <p className="mt-2">
                We design our applications with privacy in mind. Each app only collects
                data that is necessary for its core functionality. We do not sell user
                data or use it for purposes unrelated to the app experience.
            </p>

            <p className="mt-3">
                Specific data collection, usage, and storage details vary by application
                and are documented in each app's individual privacy policy.
            </p>

            <h2 className="mt-8 text-xl font-medium">App Privacy Policies</h2>
            <p className="mt-2">
                Please review the privacy policy for the specific app you are using:
            </p>

            <ul className="mt-3 list-disc list-inside">
                <li>
                    <a href="/app/rupee-diary/privacy-policy" className="underline">
                        Rupee Diary Privacy Policy
                    </a>
                </li>
                {/* Add more apps here */}
            </ul>

        </section>
    );
}
