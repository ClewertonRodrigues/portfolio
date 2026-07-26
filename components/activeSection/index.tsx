"use client";

import { useState, useEffect } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    function handleScroll(){
      const scrollPosition = window.scrollY + window.innerHeight * 0.5;

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if(scrollPosition >= sectionTop){
          currentSection = section.id;
        }
      })

      setActiveSection(currentSection);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    }
  }, []);

  return activeSection;
}
