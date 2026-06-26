"use client";

import { useState, useEffect } from "react";

import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

import useActiveSection from "@/components/activeSection"

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    }
  }, [open])

  useEffect(() => {
    function handleRezise(e: MediaQueryListEvent){
      if(e.matches){
        setOpen(false)
      }
    }

    let windowWidth = matchMedia("(min-width: 768px)")
    windowWidth.addEventListener("change", handleRezise);

    return () => {
      windowWidth.addEventListener("change", handleRezise)
    }
  }, [])

  function toggleMenu() {
    setOpen(prev => !prev)
  }

  return (
    <div className="md:hidden">
      <button type="button" title="menu">
        {open ? (
          <IoIosClose
            size={45}
            className="cursor-pointer bg-[#0B0F1A] rounded-md"
            color="#6366F1"
            data-aos="zoom-in"
            onClick={toggleMenu}
          />
        ) : (
          <div className="flex items-center justify-center h-20">
            <IoMenu
            size={45}
            className="cursor-pointer bg-[#0B0F1A] p-1 rounded-md"
            color="#6366F1"
            data-aos="zoom-in"
            onClick={toggleMenu}
            />
          </div>
        )}
      </button>

      {open && (
        <>
        <div
          className="absolute left-0 w-full z-20 bg-[#0F172A] gap-10 p-3 border-t border-[#6366F1]/20"
          data-aos="fade-down"
        >
          <div className="flex flex-col items-center justify-between gap-3 text-[#D1D5DB]">
            <a
              href="#inicio"
              className={`hover:bg-[#4F46E5] active:scale-95 active:bg-[#4F46E5] w-full text-center py-3 rounded-md transition-all duration-300 cursor-pointer text-lg font-bold ${activeSection === "inicio" ? "bg-[#6366F1]" : ""}`}
              onClick={toggleMenu}
            >
              Início
            </a>
            <a
              href="#sobre"
              className={`hover:bg-[#4F46E5] active:scale-95 active:bg-[#4F46E5] w-full text-center py-3 rounded-md transition-all duration-300 cursor-pointer text-lg font-bold ${activeSection === "sobre" ? "bg-[#6366F1]" : ""}`}
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a
              href="#tecnologias"
              className={`hover:bg-[#4F46E5] active:scale-95 active:bg-[#4F46E5] w-full text-center py-3 rounded-md transition-all duration-300 cursor-pointer text-lg font-bold ${activeSection === "tecnologias" ? "bg-[#6366F1]" : ""}`}
              onClick={toggleMenu}
            >
              Tecnologias
            </a>
            <a
              href="#projetos"
              className={`hover:bg-[#4F46E5] active:scale-95 active:bg-[#4F46E5] w-full text-center py-3 rounded-md transition-all duration-300 cursor-pointer text-lg font-bold ${activeSection === "projetos" ? "bg-[#6366F1]" : ""}`}
              onClick={toggleMenu}
            >
              Projetos
            </a>
            <a
              href="#contato"
              className={`hover:bg-[#4F46E5] active:scale-95 active:bg-[#4F46E5] w-full text-center py-3 rounded-md transition-all duration-300 cursor-pointer text-lg font-bold ${activeSection === "contato" ? "bg-[#6366F1]" : ""}`}
              onClick={toggleMenu}
            >
              Contato
            </a>
          </div>
        </div>

        <div 
          className="bg-black/20 backdrop-blur-xs fixed h-screen w-full top-20 left-0 right-0 bottom-0 z-10 transition-all duration-300"
          onClick={toggleMenu}
        ></div>
        </>
      )}
    </div>
  );
}
