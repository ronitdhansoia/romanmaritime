import Image from "next/image";
import WorldMap from "./components/WorldMap";

const disciplines = [
  {
    title: "Chartering",
    body: "Bulk and specialty tonnage engaged across the major trade lanes.",
  },
  {
    title: "Commodities",
    body: "Agricultural, metals, and energy, in measured volumes.",
  },
  {
    title: "Advisory",
    body: "Counsel to owners, shippers, and buyers of long standing.",
  },
];

function Emblem({ className }: { className?: string }) {
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

export default function Home() {
  return (
    <>
      <main>
        {/* I. Hero */}
        <section className="relative h-[100svh] w-full overflow-hidden bg-background">
          <div className="flex h-full w-full flex-col items-center px-6 pt-[4.5vh] pb-[4vh] sm:px-10 sm:pt-[6.5vh] sm:pb-[5.5vh]">
            <div className="flex flex-col items-center">
              <p className="font-display text-[9px] tracking-[0.5em] uppercase text-foreground/45 sm:text-[10px]">
                Vol. I &middot; MMXXVI &middot; Dubai
              </p>
              <h1 className="mt-5 font-display text-[clamp(0.95rem,1.7vw,1.375rem)] font-medium uppercase tracking-[0.28em] sm:mt-6">
                Roman&nbsp;Maritime
              </h1>
              <div
                aria-hidden
                className="mt-4 h-px w-12 bg-foreground/45 sm:mt-5 sm:w-16"
              />
            </div>

            <div className="flex w-full flex-1 items-center justify-center py-4 sm:py-6">
              <figure className="flex w-full max-w-[min(900px,78vw)] flex-col items-center">
                <div className="relative w-full aspect-[1530/960] ring-1 ring-foreground/10">
                  <Image
                    src="/hero.jpg"
                    alt="Aerial view of a vessel at sea"
                    fill
                    priority
                    sizes="(max-width: 768px) 78vw, 900px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-5 font-display text-[9px] tracking-[0.45em] uppercase text-foreground/45 sm:text-[10px]">
                  Plate I &middot; Arabian Waters
                </figcaption>
              </figure>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-serif italic text-[clamp(1rem,1.4vw,1.2rem)] text-foreground/80">
                Overseas Merchants
              </p>
              <p className="mt-2 text-[10px] tracking-[0.45em] uppercase text-foreground/55 sm:mt-3 sm:text-[11px]">
                Est. MMXXVI
              </p>
            </div>
          </div>
        </section>

        {/* II. The House */}
        <section id="house" className="bg-background px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-[10px] tracking-[0.45em] uppercase text-mute">
              I. The House
            </p>
            <h2 className="mt-8 font-serif text-[clamp(1.75rem,3.6vw,2.625rem)] font-light leading-[1.15]">
              A trading house attentive to the slow, considered movement of
              goods across the seas.
            </h2>
            <div
              aria-hidden
              className="mx-auto mt-12 h-px w-12 bg-foreground/25"
            />
            <p className="mt-12 text-left font-serif text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.75] text-foreground/72">
              <span className="float-left mr-3 mt-[0.18em] font-serif text-[3.25rem] leading-[0.85] text-foreground/85">
                R
              </span>
              oman Maritime is a privately held trading concern. We treat each
              passage as an obligation, to the counterparty, to the cargo, and
              to the water that carries it. Our work is old in temperament and
              particular in execution.
            </p>
          </div>
        </section>

        {/* III. Practice */}
        <section
          id="practice"
          className="border-t border-foreground/10 bg-background px-6 py-28 sm:py-36"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="font-display text-[10px] tracking-[0.45em] uppercase text-mute">
                II. Practice
              </p>
              <h2 className="mt-8 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-light">
                Disciplines of the House
              </h2>
              <div
                aria-hidden
                className="mx-auto mt-10 h-px w-12 bg-foreground/25"
              />
            </div>
            <div className="mt-16 grid gap-14 sm:grid-cols-3 sm:gap-12">
              {disciplines.map((d, i) => (
                <div
                  key={d.title}
                  className={`text-center ${
                    i > 0 ? "sm:border-l sm:border-foreground/10 sm:pl-12" : ""
                  }`}
                >
                  <h3 className="font-serif text-[1.5rem] italic font-normal">
                    {d.title}
                  </h3>
                  <p className="mt-5 font-serif text-[1.0625rem] leading-[1.7] text-foreground/65">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IV. Network */}
        <section
          id="network"
          className="border-t border-foreground/10 bg-background px-6 py-28 sm:py-36"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="font-display text-[10px] tracking-[0.45em] uppercase text-mute">
                III. Network
              </p>
              <h2 className="mt-8 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-light">
                Ports of Call
              </h2>
              <div
                aria-hidden
                className="mx-auto mt-10 h-px w-12 bg-foreground/25"
              />
            </div>
            <WorldMap className="mt-16 w-full text-foreground" />
          </div>
        </section>

        {/* V. Maxim */}
        <section className="relative overflow-hidden bg-[#08111d] px-6 py-32 text-background sm:py-40">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            aria-hidden
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[#05101c]/75"
          />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <p className="font-display text-[10px] tracking-[0.45em] uppercase text-background/50">
              IV. Maxim
            </p>
            <blockquote className="mt-10 font-serif italic text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.3] text-background/95">
              &ldquo;Navigare necesse est; vivere non est necesse.&rdquo;
            </blockquote>
            <p className="mt-8 font-serif text-[0.95rem] tracking-wide text-background/55">
              To sail is necessary; to live is not. &nbsp;&middot;&nbsp; Pompey
            </p>
          </div>
        </section>

        {/* VI. Enquiries */}
        <section id="contact" className="bg-background px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-[10px] tracking-[0.45em] uppercase text-mute">
              V. Enquiries
            </p>
            <h2 className="mt-8 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-light">
              Correspondence
            </h2>
            <div
              aria-hidden
              className="mx-auto mt-10 h-px w-12 bg-foreground/25"
            />
            <p className="mt-12 font-serif text-[1.0625rem] leading-[1.7] text-foreground/70">
              For matters of trade, charter, or counsel, please write.
            </p>
            <a
              href="mailto:enquiries@romanmaritime.com"
              className="mt-10 inline-block font-display text-[11px] tracking-[0.35em] uppercase border-b border-foreground/40 pb-1 transition-colors hover:border-foreground"
            >
              enquiries@romanmaritime.com
            </a>
            <address className="mt-10 not-italic font-serif text-[0.9375rem] leading-relaxed text-foreground/55">
              <span className="block italic">The Offices of Roman Maritime</span>
              <span className="block">Dubai &middot; United Arab Emirates</span>
              <span className="block">Gujarat &middot; India</span>
            </address>
            <p className="mt-8 font-serif italic text-[0.875rem] text-foreground/45">
              By appointment
            </p>
          </div>
        </section>
      </main>

      {/* VII. Footer */}
      <footer className="border-t border-foreground/10 bg-background px-6 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
          <Emblem className="h-8 w-8 text-foreground/70" />
          <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="font-display text-[10px] tracking-[0.35em] uppercase text-mute">
              Roman Maritime &copy; MMXXVI
            </p>
            <p className="font-display text-[10px] tracking-[0.35em] uppercase text-mute">
              Dubai &middot; Gujarat &middot; Mumbai
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
