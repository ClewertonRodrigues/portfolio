import { MobileMenu } from "../mobileMenu";
import { DesktopMenu } from "../desktopMenu";

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

        <DesktopMenu />

        <MobileMenu />
      </div>
    </header>
  );
}
