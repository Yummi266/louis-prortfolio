import { useState } from "react";

const navigation = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT ME", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACTS", href: "#contacts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 sm:h-[70px] md:h-[74px]
      bg-[#0b0b0b] border-b border-white/10">

      <nav className="h-full w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16
        flex items-center justify-between">

        <div className="hidden md:flex items-center gap-7 lg:gap-11">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}
              className="text-xs lg:text-[13px] font-semibold
              tracking-wider text-white/95 hover:text-white/60
              transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white p-1"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="flex items-center gap-3.5 ml-auto">
          <span className="font-serif text-sm tracking-wide text-white/90">LOUIS</span>
          <img
            src="/images/icon.png"
            alt="Louis"
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full
            object-cover object-top border border-white/15"
          />
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full
          bg-[#0b0b0b] border-b border-white/10
          flex flex-col p-5 gap-4 md:hidden">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold py-1">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
