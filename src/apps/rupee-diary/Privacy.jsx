import { useAppTheme } from "../../theme/AppTheme.jsx";
import RupeeDiaryNavbar from "./Navbar.jsx";

export default function RupeeDiaryPrivacy() {
    useAppTheme("rupee-diary");

    return (
        <section id="app-rupee-diary-privacy" className="px-10 pb-10 bg-[var(--bg-color)] text-[var(--text-color)]">
            <RupeeDiaryNavbar />

            <h1 className="text-2xl font-semibold text-[var(--app-accent-color)]">
                Rupee Diary - Privacy Policy
            </h1>
            <p>Rupee Diary Mobile Application</p>
            <p>Last updated: 03/01/2026</p>

            <p className="mt-4">
                Rupee Diary respects your privacy. This page explains how your financial data
                is handled within the Rupee Diary mobile application.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">Data Collection</h2>
            <p>
                Rupee Diary does not collect, store, or transmit personal or financial data to
                any external servers. All data entered by the user remains stored locally on
                the user's device.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">Internet Usage</h2>
            <p>
                The app may use internet connectivity for optional features. No personal or
                financial data is uploaded or shared with any service.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">Local Storage</h2>
            <p>
                All financial records, transactions, and settings are stored locally using
                the device's internal storage and are never accessed remotely.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">Data Backup &amp; Restore</h2>
            <p>
                Users may optionally export or import their data manually. Backup files remain
                fully under the user's control and are never transmitted to any server.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">Third-Party Services</h2>
            <p>
                Rupee Diary does not use advertising, analytics, or tracking services of any
                kind.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">Data Security</h2>
            <p>
                Reasonable measures are taken to protect data stored locally on the user's
                device against unauthorized access.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">Children's Privacy</h2>
            <p>
                Rupee Diary is not intended for children under the age of 13 and does not
                knowingly collect data from children.
            </p>

            <h2 className="text-[var(--app-accent-color)] mt-6">Policy Updates</h2>
            <p>
                This privacy policy may be updated in future versions of the app. Any changes
                will be reflected on this page.
            </p>
        </section>
    );
}
