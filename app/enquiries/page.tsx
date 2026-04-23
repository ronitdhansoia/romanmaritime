import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Enquiries · Roman Maritime",
};

export default function EnquiriesPage() {
  return (
    <>
      <main className="flex-1 bg-background">
        <div className="px-6 pt-[4.5vh] sm:px-10 sm:pt-[6.5vh]">
          <Header />
        </div>
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-[10px] tracking-[0.45em] uppercase text-mute">
              Enquiries
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
              href="mailto:contact@romanmaritime.com"
              className="mt-10 inline-block font-display text-[11px] tracking-[0.35em] uppercase border-b border-foreground/40 pb-1 transition-colors hover:border-foreground"
            >
              contact@romanmaritime.com
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
      <Footer />
    </>
  );
}
