export default function WarpedClockDoodle({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 140 140"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M70 15 C 100 15, 122 40, 118 72 C 115 98, 95 120, 72 128 C 55 133, 40 122, 42 105 C 44 90, 58 88, 60 100 C 61 108, 52 112, 48 106" />
            <path d="M70 15 C 40 17, 20 42, 22 70 C 23 85, 30 95, 40 100" opacity="0.6" />
            <path d="M70 30 L 70 70 L 95 85" strokeWidth="1.2" />
            <circle cx="70" cy="70" r="3" fill="currentColor" stroke="none" />
            <path d="M70 8 L 70 15 M132 70 L 125 70 M70 132 Q 68 135 65 133" opacity="0.5" />
        </svg>
    );
}
