import { ReactNode } from "react";

interface TecnologiaProps {
  icon: ReactNode;
  name: string;
}

export function Technology({ icon, name }: TecnologiaProps) {
  return (
    <div
      className="bg-[#0F172A] flex flex-col gap-2 items-center p-4 border border-[#1F2937] rounded-lg group transition-all duration-500 hover:-translate-y-2 hover:border-[#6366F1] hover:shadow-xl hover:shadow-[#6366F1]/20 "
      data-aos="zoom-in"
    >
      <div className="lg:opacity-80 group-hover:opacity-100 group-hover:scale-110">
        {icon}
      </div>
      <p
        className={`text-center text-white font-bold text-sm group-hover:text-[#6366F1]`}
      >
        {name}
      </p>
    </div>
  );
}
