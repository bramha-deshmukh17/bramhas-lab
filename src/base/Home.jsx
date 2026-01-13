export default function Home() {
    return (
        <section id="home" className="px-10 py-10 bg-[var(--bg-color)] text-[var(--text-color)]">
            <h1 className="text-3xl font-semibold  text-[var(--app-accent-color)]">Bramha's Lab</h1>

            <p className="mt-3 max-w-2xl opacity-80">
                Bramha's Lab is an independent app studio focused on building simple,
                reliable, and user-friendly mobile applications. Our apps are designed
                to solve everyday problems with clean design, thoughtful features, and
                a strong focus on privacy.
            </p>

            <p className="mt-3 max-w-2xl opacity-80">
                Each application published under Bramha's Lab has its support and privacy policy,
                ensuring transparency and a trustworthy
                experience for users.
            </p>
        </section>
    );
}
