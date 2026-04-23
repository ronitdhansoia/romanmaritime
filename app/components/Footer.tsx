import Emblem from "./Emblem";

export default function Footer() {
  return (
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
  );
}
