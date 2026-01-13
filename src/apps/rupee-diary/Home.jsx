import { Link } from "react-router-dom";
import { useAppTheme } from "../../theme/AppTheme.jsx";
import RupeeDiaryNavbar from "./Navbar.jsx";
import RupeeDiaryCarousel from "./Carousel.jsx";

export default function RupeeDiary() {

    useAppTheme("rupee-diary");

    return (
        <section id="app-rupee-diary" className="px-10 pb-10 bg-[var(--bg-color)] text-[var(--text-color)]">
            <RupeeDiaryNavbar />

            <header>
                <h1 className="text-3xl font-bold text-[var(--app-accent-color)]">Rupee Diary</h1>
                <p className="mt-2 max-w-xl">
                    Rupee Diary is a simple and private expense tracking app designed to
                    help you record daily income and expenses with ease. It focuses on
                    clarity, speed, and offline-first usage.
                </p>
            </header>

            <RupeeDiaryCarousel />

            <div className="mt-8 mb-8">
                <h2 className="text-xl font-semibold text-[var(--app-accent-color)]">Key Features</h2>
                <ul className="mt-3 list-disc list-inside">
                    <li>Quick daily expense and income entries</li>
                    <li>Category-wise spending overview</li>
                    <li>Offline-first - data stored on your device</li>
                    <li>Simple reports for better money tracking</li>
                    <li>Privacy-focused with no data sharing</li>
                    <li>Get your transactions in CSV format</li>
                    <li>Set reminder for your bill payments</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-[var(--app-accent-color)]">Availability</h2>
                <p className="my-3">
                    Rupee Diary is available on Google Play.
                </p>

                <a
                    href="https://play.google.com/store/apps/details?id=com.bramhaslab.rupeediary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/images/google-play.png" width={250} />
                </a>
            </div>
        </section>
    );
}
