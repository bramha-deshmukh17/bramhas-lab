import { useAppTheme } from "../../theme/AppTheme.jsx";
import RupeeDiaryNavbar from "./Navbar.jsx";

export default function RupeeDiarySupport() {
    useAppTheme("rupee-diary");
    return (
        <section className="px-10 pb-10 bg-[var(--bg-color)] text-[var(--text-color)]">

            <RupeeDiaryNavbar />

            <h1 className="text-2xl font-semibold text-[var(--app-accent-color)]">Rupee Diary - Support</h1>

            <p className="mt-3">
                For help with Rupee Diary, please include the app name, your device
                model, and a brief description of the issue.
            </p>

            <h2 className="mt-6 text-lg font-medium text-[var(--app-accent-color)]">Contact</h2>
            <p className="mt-2">
                Email:{" "}
                <a
                    href="mailto:support@bramhadeshmukh.me"
                    className="underline"
                    style={{ color: "var(--app-accent-color)" }}
                >
                    support@bramhadeshmukh.me
                </a>
            </p>

            <h2 className="mt-6 text-lg font-medium text-[var(--app-accent-color)]">Common Questions</h2>

            <details className="mt-3">
                <summary className="cursor-pointer">
                    Is my data stored online?
                </summary>
                <p className="mt-2">
                    No. By default, all data is stored locally on your device unless you
                    choose to export or back it up.
                </p>
            </details>

            <details className="mt-3">
                <summary className="cursor-pointer">
                    How can I export my data?
                </summary>
                <p className="mt-2">
                    You can export your data from the app settings if the feature is
                    available.
                </p>
            </details>
        </section>
    );
}
