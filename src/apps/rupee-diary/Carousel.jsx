import { useState, useEffect } from "react";

const images = [
    "/images/rupeediary/s1.jpg",
    "/images/rupeediary/s2.jpg",
    "/images/rupeediary/s3.jpg",
    "/images/rupeediary/s4.jpg",
    "/images/rupeediary/s5.jpg",
];

export default function RupeeDiaryCarousel() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    // Auto rotate
    useEffect(() => {
        if (paused) return;

        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 1500); // 3 seconds

        return () => clearInterval(timer);
    }, [paused]);

    const prev = () =>
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

    const next = () =>
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <div
            className="mt-10 max-w-md mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="relative overflow-hidden rounded-xl border">
                <img
                    src={images[index]}
                    alt={`Rupee Diary screenshot ${index + 1}`}
                    className="w-auto h-150 m-auto transition-all duration-500"
                />

                {/* Controls */}
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
                    aria-label="Previous screenshot"
                >
                    ‹
                </button>

                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
                    aria-label="Next screenshot"
                >
                    ›
                </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to screenshot ${i + 1}`}
                        className={`h-2 w-2 rounded-full transition-all ${i === index
                                ? "bg-[var(--app-accent-color)] scale-110"
                                : "bg-gray-400/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}