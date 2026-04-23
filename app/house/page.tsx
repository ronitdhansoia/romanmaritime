import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "The House · Roman Maritime",
};

export default function HousePage() {
  return (
    <>
      <main className="flex-1 bg-background">
        <div className="px-6 pt-[4.5vh] sm:px-10 sm:pt-[6.5vh]">
          <Header />
        </div>
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-24">
              <figure className="relative mx-auto w-full max-w-[440px] aspect-[736/918] ring-1 ring-foreground/10 md:mx-0">
                <Image
                  src="/house.jpg"
                  alt="A portrait in the Italian manner"
                  fill
                  sizes="(max-width: 768px) 78vw, (max-width: 1280px) 40vw, 440px"
                  className="object-cover"
                />
              </figure>

              <div className="max-w-xl text-center md:text-left">
                <p className="font-display text-[10px] tracking-[0.45em] uppercase text-mute">
                  The House
                </p>
                <h2 className="mt-8 font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-light leading-[1.15]">
                  A trading house attentive to the slow, considered movement of
                  goods across the seas.
                </h2>
                <div
                  aria-hidden
                  className="mx-auto mt-10 h-px w-12 bg-foreground/25 md:mx-0"
                />
                <p className="mt-10 text-left font-serif text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.75] text-foreground/72">
                  <span className="float-left mr-3 mt-[0.18em] font-serif text-[3.25rem] leading-[0.85] text-foreground/85">
                    R
                  </span>
                  oman Maritime is a privately held trading concern. We treat
                  each passage as an obligation, to the counterparty, to the
                  cargo, and to the water that carries it. Our work is old in
                  temperament and particular in execution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
