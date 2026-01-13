import { useAppTheme } from "../../theme/AppTheme.jsx";
import RupeeDiaryNavbar from "./Navbar.jsx";

export default function RupeeDiaryTerms() {
    useAppTheme("rupee-diary");

    return (
        <section className="px-10 pb-10  bg-[var(--bg-color)] text-[var(--text-color)]">
            <RupeeDiaryNavbar />

            <h1 className="mt-6 text-3xl font-bold text-[var(--app-accent-color)]">
                Terms of Service
            </h1>

            <p className="mt-2">
                Last updated: January 2026
            </p>
            <p>
                These Terms of Service govern your use of the Rupee Diary mobile
                application (“the App”), developed and published by Bramha's Lab.
                By using the App, you agree to these terms.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">
                Use of the App
            </h2>
            <p>
                Rupee Diary is provided for personal, non-commercial use. You agree
                to use the App only for lawful purposes and in accordance with these
                terms.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">
                User Data
            </h2>
            <p>
                The App stores financial records locally on your device by default.
                You are responsible for maintaining backups of your data. Bramha's
                Lab is not responsible for data loss resulting from device failure,
                uninstallation, or user actions.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">
                No Financial Advice
            </h2>
            <p>
                Rupee Diary is a personal expense tracking tool and does not provide
                financial, legal, or tax advice. All information displayed in the App
                is for informational purposes only.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">
                Limitation of Liability
            </h2>
            <p>
                Bramha's Lab shall not be liable for any direct or indirect damages
                arising from the use or inability to use the App, including but not
                limited to data loss or financial decisions made based on the App.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">
                Changes to the Service
            </h2>
            <p>
                We may update or modify the App at any time, including adding or
                removing features. Continued use of the App after changes constitutes
                acceptance of the updated terms.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">
                Termination
            </h2>
            <p>
                We reserve the right to suspend or discontinue the App at any time
                without prior notice.
            </p>
        </section>
    );
}
