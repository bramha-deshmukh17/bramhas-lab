import { NavLink } from "react-router-dom";

export default function RupeeDiaryNavbar() {
    const baseClass =
        "px-3 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap";

    const activeClass =
        "text-[var(--app-accent-color)] border-b-2 border-[var(--app-accent-color)]";

    const inactiveClass =
        "opacity-80 hover:text-[var(--app-accent-color)]";

    return (
        <nav
            id="app-rupee-diary-navbar"
            className="sticky top-18 mb-5 w-full border-b border-white/10 bg-[var(--bg-color)] py-2 z-51"
        >
            <ul
                className="
                    flex items-center gap-2 sm:gap-6
                    overflow-x-auto sm:overflow-visible
                    overflow-y-hidden
                    whitespace-nowrap
                    px-2 sm:px-0 py-2 md:py-0

                    /* Firefox */
                    [scrollbar-width:thin]
                    [scrollbar-color:var(--app-accent-color)_transparent]

                    /* Chromium / Edge / Safari */
                    [&::-webkit-scrollbar]:h-[1px]
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-[color:var(--app-accent-color)]
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:opacity-40
                    [&::-webkit-scrollbar-thumb:hover]:opacity-70
                "
            >
                <li>
                    <NavLink
                        to="/app/rupee-diary"
                        end
                        className={({ isActive }) =>
                            `${baseClass} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        Overview
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/app/rupee-diary/privacy-policy"
                        className={({ isActive }) =>
                            `${baseClass} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        Privacy Policy
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/app/rupee-diary/support"
                        className={({ isActive }) =>
                            `${baseClass} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        Support
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/app/rupee-diary/terms"
                        className={({ isActive }) =>
                            `${baseClass} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        Terms of Service
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
