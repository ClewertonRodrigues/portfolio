import { MobileMenu } from "../mobileMenu";

import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

export function Header() {
  return (
    <header className="bg-[#0F172A] w-full border-b border-[#6366F1]/20 sticky top-0 z-20">
      <div className="mx-auto w-full max-w-7xl h-20 flex items-center justify-between flex-row px-3">
        <div className="flex items-center gap-1 transition-transform hover:scale-105">
          <FaLessThan color="#6366F1" />
          <span className="text-[#6366F1] font-extrabold text-xl">
            Clewerton
          </span>
          <FaGreaterThan color="#6366F1" />
        </div>

        <nav className="hidden md:flex gap-10 items-center text-[#6366F1] font-extrabold">
          <a
            href="#inicio"
            className="hover:text-[#4F46E5] transition-colors cursor-pointer text-lg"
          >
            Início
          </a>
          <a
            href="#sobre"
            className="hover:text-[#4F46E5] transition-colors cursor-pointer text-lg"
          >
            Sobre
          </a>
          <a
            href="#tecnologias"
            className="hover:text-[#4F46E5] transition-colors cursor-pointer text-lg"
          >
            Tecnologias
          </a>
          <a
            href="#projetos"
            className="hover:text-[#4F46E5] transition-colors cursor-pointer text-lg"
          >
            Projetos
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
