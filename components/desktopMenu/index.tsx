"use client"

import useActiveSection from "@/components/activeSection"

export function DesktopMenu() {

    const activeSection = useActiveSection();

  return (
    <nav className="hidden md:flex gap-10 items-center text-[#6366F1] font-extrabold">
      <a
        href="#inicio"
        className={`hover:text-[#4F46E5] transition-colors cursor-pointer text-lg relative after:content-[''] after:absolute after:bottom-0 after:bg-[#6366F1] after:h-0.5 after:left-0 after:w-0 after:transition-[width] after:duration-300 after:ease-out ${activeSection === "inicio" ? "after:w-full" : ""}`}
      >
        Início
      </a>
      <a
        href="#sobre"
        className={`hover:text-[#4F46E5] transition-colors cursor-pointer text-lg relative after:content-[''] after:absolute after:bottom-0 after:bg-[#6366F1] after:h-0.5 after:left-0 after:w-0 after:transition-[width] after:duration-300 after:ease-out ${activeSection === "sobre" ? "after:w-full" : ""}`}
      >
        Sobre
      </a>
      <a
        href="#tecnologias"
        className={`hover:text-[#4F46E5] transition-colors cursor-pointer text-lg relative after:content-[''] after:absolute after:bottom-0 after:bg-[#6366F1] after:h-0.5 after:left-0 after:w-0 after:transition-[width] after:duration-300 after:ease-out ${activeSection === "tecnologias" ? "after:w-full" : ""}`}
      >
        Tecnologias
      </a>
      <a
        href="#projetos"
        className={`hover:text-[#4F46E5] transition-colors cursor-pointer text-lg relative after:content-[''] after:absolute after:bottom-0 after:bg-[#6366F1] after:h-0.5 after:left-0 after:w-0 after:transition-[width] after:duration-300 after:ease-out ${activeSection === "projetos" ? "after:w-full" : ""}`}
      >
        Projetos
      </a>
      <a
        href="#contato"
        className={`hover:text-[#4F46E5] transition-colors cursor-pointer text-lg relative after:content-[''] after:absolute after:bottom-0 after:bg-[#6366F1] after:h-0.5 after:left-0 after:w-0 after:transition-[width] after:duration-300 after:ease-out ${activeSection === "contato" ? "after:w-full" : ""}`}
      >
        Contato
      </a>
    </nav>
  );
}
