"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";

export function AosProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return <div>{children}</div>;
}
