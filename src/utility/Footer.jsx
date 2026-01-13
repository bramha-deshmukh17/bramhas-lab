export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-auto bg-[var(--bg-color)] text-[var(--text-color)] border-t">
            <div className="mx-auto px-4 py-5 ">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center gap-3 md:justify-start">
                            <a href="/">
                                <img src="/images/logo.png" width="60" height="50" alt="Bramha's Lab Logo" />
                            </a>
                            <div className="leading-tight">
                                <div className="text-lg font-semibold brand-gradient">Bramha&apos;s Lab</div>
                                <div className="text-sm">Simple tools. Clean design.</div>
                            </div>
                        </div>

                        <div className="mt-4 ml-3 flex items-center justify-center gap-3 md:justify-start">
                            <a href="https://play.google.com/store/apps/dev?id=8070286036703301695" target="_blank">
                                <img src="/images/play-account.png" width={200} alt="Google Play Image" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 gap-8 text-center md:col-span-2 md:grid-cols-3 md:text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="text-sm font-semibold">Apps</div>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li>
                                    <a href="/app/rupee-diary">Rupee Diary</a>
                                </li>
                                <li>More apps coming soon...</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <div className="text-sm font-semibold tracking-wide">Legal</div>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li>
                                    <a href="/privacy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/terms">Terms of Service</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <div className="text-sm font-semibold tracking-wide">Support</div>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                                <li>
                                    <a href="/support">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex gap-3 border-t pt-6 items-center justify-center ">
                    <p className="text-sm opacity-85">
                        © {year} <span className="brand-gradient">Bramha&apos;s Lab</span>. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
}