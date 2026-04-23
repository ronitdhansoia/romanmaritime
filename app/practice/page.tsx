import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Practice · Roman Maritime",
};

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

export default function PracticePage() {
  return (
    <>
      <main className="flex-1 bg-background">
        <div className="px-6 pt-[4.5vh] sm:px-10 sm:pt-[6.5vh]">
          <Header />
        </div>
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="font-display text-[10px] tracking-[0.45em] uppercase text-mute">
                Practice
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
      </main>
      <Footer />
    </>
  );
}
