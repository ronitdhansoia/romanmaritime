import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="fixed inset-0 overflow-hidden bg-background">
      <div className="flex h-full w-full flex-col items-center px-6 pt-[4.5vh] pb-[4vh] sm:px-10 sm:pt-[6.5vh] sm:pb-[5.5vh]">
        <Header />

        <div className="flex w-full flex-1 items-center justify-center py-4 sm:py-6">
          <figure className="flex w-full max-w-[min(1120px,86vw)] flex-col items-center">
            <div className="relative w-full aspect-[1530/960] ring-1 ring-foreground/10">
              <Image
                src="/hero.jpg"
                alt="Aerial view of a vessel at sea"
                fill
                priority
                sizes="(max-width: 768px) 86vw, 1120px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 font-serif italic text-[clamp(0.95rem,1.25vw,1.125rem)] text-foreground/70">
              navigare necesse est; vivere non est necesse.
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
    </main>
  );
}
