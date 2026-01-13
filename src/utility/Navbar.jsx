import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider.jsx";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === "dark" ? "fa-sun" : "fa-moon";
    const themeLabel = theme === "dark" ? "Switch to light" : "Switch to dark";

    return (
        <header className="sticky top-0 z-100 bg-[var(--bg-color)] text-[var(--text-color)] shadow-lg">
            <nav className="w-full flex items-center justify-between px-4 py-2">
                <div className="text-2xl flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2 font-semibold flex-none">
                        <img src="/images/logo.png" width="60" height="50" alt="Bramha's Lab Logo" />
                        <span className="brand-gradient">Bramha&apos;s Lab</span>
                    </a>
                </div>

                <div className="hidden md:flex flex-1 justify-center items-center gap-6">
                    <a href="/apps" className="flex items-center gap-2 text-sm">
                        <i className="fa-solid fa-table-cells" /> Apps
                    </a>
                    <a href="/support" className="flex items-center gap-2 text-sm">
                        <i className="fa-solid fa-circle-question" /> Support
                    </a>
                    <a href="/privacy" className="flex items-center gap-2 text-sm">
                        <i className="fa-solid fa-shield-halved" /> Privacy
                    </a>
                    <a href="/contact" className="flex items-center gap-2 text-sm">
                        <i className="fa-solid fa-envelope" /> Contact
                    </a>
                </div>

                {/* Right: theme toggle (desktop) */}
                <div className="hidden md:flex flex-none theme-btn">
                    <button
                        className="p-2 rounded hover:bg-black/5"
                        aria-label={themeLabel}
                        onClick={toggleTheme}
                        type="button"
                    >
                        <i className={`fa-solid ${themeIcon}`} />
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    className="md:hidden p-2 rounded hover:bg-black/5"
                    aria-label="Toggle menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden fixed inset-0 z-100 bg-[var(--bg-color)]">
                    <div
                        className="text-2xl flex items-center justify-between px-4 py-2"
                    >
                        <a href="/" className="flex items-center gap-2 font-semibold flex-none">
                            <img src="/images/logo.png" width="50" height="50" alt="Bramha's Lab Logo" />
                            <span className="brand-gradient">Bramha&apos;s Lab</span>
                        </a>
                        <button
                            type="button"
                            className="p-2 rounded hover:bg-black/5"
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                        >
                            <i className="fa-solid fa-xmark" />
                        </button>
                    </div>

                    <div className="space-y-2 px-6 py-4">
                        <a href="/apps" className="flex items-center gap-2 text-sm">
                            <i className="fa-solid fa-table-cells" /> Apps
                        </a>
                        <a href="/support" className="flex items-center gap-2 text-sm">
                            <i className="fa-solid fa-circle-question" /> Support
                        </a>
                        <a href="/privacy" className="flex items-center gap-2 text-sm">
                            <i className="fa-solid fa-shield-halved" /> Privacy
                        </a>
                        <a href="/contact" className="flex items-center gap-2 text-sm">
                            <i className="fa-solid fa-envelope" /> Contact
                        </a>

                        <button
                            className="flex items-center gap-3 text-sm theme-btn"
                            aria-label={themeLabel}
                            onClick={toggleTheme}
                            type="button"
                        >
                            <i className={`fa-solid ${themeIcon}`} /><span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}