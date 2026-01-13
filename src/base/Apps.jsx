export default function Apps() {
    return (
        <section id="apps" className="px-10 py-10 bg-[var(--bg-color)] text-[var(--text-color)]">
            <h1 className="text-3xl font-semibold text-[var(--app-accent-color)]">Apps</h1>

            <p className="mt-3 opacity-80 max-w-2xl">
                Below is a list of applications published under Bramha's Lab. Each app
                has its own dedicated page with detailed information, support, and
                privacy policy.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {/* App Card */}
                <div className="border rounded-lg p-5 bg-white/5">
                    <h2 className="text-xl font-medium">Rupee Diary</h2>
                    <p className="mt-2">
                        A simple and intuitive expense tracker app to help you manage your daily
                        finances with ease.
                    </p>

                    <div className="mt-4 flex gap-4 text-sm">
                        <a href="/app/rupee-diary">
                            View
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.bramhaslab.rupeediary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Play
                        </a>
                    </div>
                </div>

                {/* Future App Placeholder */}
                <div className="border rounded-lg p-5 bg-white/5 opacity-70">
                    <h2 className="text-xl font-medium">More apps coming soon</h2>
                    <p className="mt-2 opacity-80">
                        New applications are currently in development.
                    </p>
                </div>
            </div>
        </section>
    );
}
