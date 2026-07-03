export default function EyeDoodle({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M10 60 C 40 15, 160 15, 190 60 C 160 105, 40 105, 10 60 Z" />
            <path d="M12 62 C 45 20, 155 18, 188 58" opacity="0.5" />
            <circle cx="100" cy="60" r="28" />
            <circle cx="100" cy="60" r="10" />
            <path d="M100 32 L100 20 M100 88 L100 100 M65 60 L52 60 M148 60 L135 60" opacity="0.6" />
        </svg>
    );
}
