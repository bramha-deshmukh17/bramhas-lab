export default function Support() {
    return (
        <section id="support" className="px-10 py-10 bg-[var(--bg-color)] text-[var(--text-color)]">
            <h1 className="text-3xl font-semibold text-[var(--app-accent-color)]">Support</h1>

            <p className="mt-3">
                Bramha's Lab provides support for all applications published under this
                developer account. If you are facing an issue, have a question, or would
                like to report a bug, please use the information below.
            </p>

            <h2 className="mt-8 text-xl font-medium">How to Get Help</h2>
            <p className="mt-2">
                For the fastest assistance, please contact us via email and include the
                name of the app you are using along with a brief description of the
                issue.
            </p>

            <ul className="mt-3 list-disc list-inside">
                <li>App name</li>
                <li>Device model and OS version</li>
                <li>Steps to reproduce the issue (if applicable)</li>
            </ul>

            <h2 className="mt-8 text-xl font-medium">App-Specific Support</h2>
            <p className="mt-2">
                Some apps may provide additional support or documentation on their
                individual pages.
            </p>

            <ul className="mt-3 list-disc list-inside">
                <li>
                    <a href="/app/rupee-diary/support" className="underline">
                        Rupee Diary Support
                    </a>
                </li>
                {/* Add more apps here */}
            </ul>

            <h2 className="mt-8 text-xl font-medium">Response Time</h2>
            <p className="mt-2">
                We aim to respond to support requests within a reasonable timeframe.
                Response times may vary depending on the nature of the request.
            </p>

        </section>
    );
}
