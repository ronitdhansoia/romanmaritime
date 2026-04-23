import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorldMap from "../components/WorldMap";

export const metadata: Metadata = {
  title: "Network · Roman Maritime",
};

export default function NetworkPage() {
  return (
    <>
      <main className="flex-1 bg-background">
        <div className="px-6 pt-[4.5vh] sm:px-10 sm:pt-[6.5vh]">
          <Header />
        </div>
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="font-display text-[10px] tracking-[0.45em] uppercase text-mute">
                Network
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
      </main>
      <Footer />
    </>
  );
}
