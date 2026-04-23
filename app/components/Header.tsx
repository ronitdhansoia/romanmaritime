import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="font-display text-[clamp(0.95rem,1.7vw,1.375rem)] font-medium uppercase tracking-[0.28em]">
        <Link href="/">Roman&nbsp;Maritime</Link>
      </h1>
      <nav className="mt-0.5 sm:mt-1" aria-label="Primary">
        <ul className="flex items-center gap-4 font-display text-[10px] lowercase tracking-[0.22em] text-foreground/55 sm:gap-10 sm:text-[11px]">
          <li>
            <Link
              href="/house"
              className="transition-colors hover:text-foreground"
            >
              the&nbsp;house
            </Link>
          </li>
          <li>
            <Link
              href="/practice"
              className="transition-colors hover:text-foreground"
            >
              practice
            </Link>
          </li>
          <li>
            <Link
              href="/network"
              className="transition-colors hover:text-foreground"
            >
              network
            </Link>
          </li>
          <li>
            <Link
              href="/enquiries"
              className="transition-colors hover:text-foreground"
            >
              enquiries
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
