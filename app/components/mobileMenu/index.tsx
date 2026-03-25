"use client";

import { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  function openMenu() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
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
            onClick={openMenu}
          />
        ) : (
          <div className="flex items-center justify-center h-20">
            <IoMenu
            size={45}
            className="cursor-pointer bg-[#0B0F1A] p-1 rounded-md"
            color="#6366F1"
            data-aos="zoom-in"
            onClick={openMenu}
            />
          </div>
        )}
      </button>

      {open && (
        <div
          className="absolute left-0 w-full bg-[#0F172A] gap-10 p-3 border-t border-[#6366F1]/20"
          data-aos="fade-down"
        >
          <div className="flex flex-col items-center justify-between gap-3 text-[#D1D5DB]">
            <a
              href="#inicio"
              className="hover:bg-[#4F46E5] w-full text-center py-3 rounded-md transition-colors cursor-pointer text-xl"
              onClick={openMenu}
            >
              Início
            </a>
            <a
              href="#sobre"
              className="hover:bg-[#4F46E5] w-full text-center py-3 rounded-md transition-colors cursor-pointer text-xl"
              onClick={openMenu}
            >
              Sobre
            </a>
            <a
              href="#tecnologias"
              className="hover:bg-[#4F46E5] w-full text-center py-3 rounded-md transition-colors cursor-pointer text-xl"
              onClick={openMenu}
            >
              Tecnologias
            </a>
            <a
              href="#projetos"
              className="hover:bg-[#4F46E5] w-full text-center py-3 rounded-md transition-colors cursor-pointer text-xl"
              onClick={openMenu}
            >
              Projetos
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
