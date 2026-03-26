import Image, { StaticImageData } from "next/image";

import { TbWorld } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa";

interface ProjetoProps {
  imgUrl: StaticImageData;
  title: string;
  descripton: string;
  languagens: string[];
  linkAcess: string;
  linkRepo: string;
}

export function Project({
  imgUrl,
  title,
  descripton,
  languagens,
  linkAcess,
  linkRepo,
}: ProjetoProps) {
  return (
    <div
      className="bg-[#0F172A] rounded-xl overflow-hidden border border-[#1F2937] group hover:-translate-y-2 hover:shadow hover:shadow-[#6366F1]/20 transition-all duration-300"
      data-aos="fade-up"
    >
      <div className="group-hover:scale-105 md:min-h-80 transition-all duration-500 relative">
        <div className="w-full min-h-52 md:min-h-80 relative">
          <Image
            src={imgUrl}
            alt="imagem do projeto"
            priority={true}
            fill={true}
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 md:min-h-80 bg-black/70 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition">
          <div className="flex w-full h-full justify-center items-center gap-5 z-50">
            <a
              href={linkAcess}
              target="_blank"
              className="bg-[#6366F1] border-2 text-white font-bold px-4 py-2 rounded-md cursor-pointer flex gap-2 items-center hover:bg-[#4F46E5] transition-all duration-300"
            >
              <TbWorld />
              Acessar
            </a>
            <a
              href={linkRepo}
              target="_blank"
              className="border-2 border-[#6366F1]/50 px-4 py-1.5 rounded-md font-bold text-[#A5B4FC] cursor-pointer flex gap-2 items-center hover:bg-[#6366F1]/10 transition-all duration-300"
            >
              <FaEye />
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mb-1 mt-2 text-[#D1D5DB]">{descripton}</p>
      </div>
      <ol className="px-4 pb-4 w-full my-1 flex flex-wrap gap-3">
        {languagens.map((languagem) => (
          <li
            key={languagem}
            className="bg-[#6366F1]/10 text-[#A5B4FC] border border-[#6366F1]/20 text-sm px-2 py-1 rounded"
          >
            {languagem}
          </li>
        ))}
      </ol>
    </div>
  );
}
