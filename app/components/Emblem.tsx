export default function Emblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.25"
      />
      <path
        d="M20 5 L22.5 20 L20 35 L17.5 20 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M5 20 L20 22.5 L35 20 L20 17.5 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <circle cx="20" cy="20" r="1.2" fill="currentColor" />
    </svg>
  );
}
