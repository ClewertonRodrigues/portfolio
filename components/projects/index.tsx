import Image from "next/image";
import { ProjectsProps } from "@/utils/project.type";

import { TbWorld } from "react-icons/tb";
import { FaEye } from "react-icons/fa";

interface listProjectsProps{
  objects: ProjectsProps;
}

export function Projects({ objects }: listProjectsProps) {
  return (
    <section className="py-10 bg-[#12182A]" id="projetos">
      <h2
        className="mb-2 text-center text-4xl font-bold text-[#6366F1]"
        data-aos="fade-up"
      >
        Projetos
      </h2>

      <div className="w-full max-w-7xl mt-10 mx-auto grid md:grid-cols-2 gap-6 md:gap-4 px-3">
        {objects.objects.map(project => (
          <div
            key={project.metadata.title}
            className="bg-[#0F172A] rounded-xl overflow-hidden border border-[#1F2937] group hover:-translate-y-2 hover:shadow hover:shadow-[#6366F1]/20 transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="group-hover:scale-105 md:min-h-80 transition-all duration-500 relative">
              <div className="w-full min-h-52 md:min-h-80 relative">
                <Image
                  src={project.metadata.thumbnail.url}
                  alt="imagem do projeto"
                  priority={true}
                  fill={true}
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 md:min-h-80 bg-black/70 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition">
                <div className="flex w-full h-full justify-center items-center gap-5 z-50">
                  <a
                    href={project.metadata.live_url}
                    target="_blank"
                    className="bg-[#6366F1] border-2 text-white font-bold px-4 py-2 rounded-md cursor-pointer flex gap-2 items-center hover:bg-[#4F46E5] transition-all duration-300"
                  >
                    <TbWorld />
                    Acessar
                  </a>
                  <a
                    href={project.metadata.github_url}
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
              <h3 className="text-2xl font-bold text-white">
                {project.metadata.title}
              </h3>
              <p className="mb-1 mt-2 text-[#D1D5DB]">
                {project.metadata.description}
              </p>
            </div>
            <ol className="px-4 pb-4 w-full my-1 flex flex-wrap gap-3">
              {project.metadata.techs.map((tech, index) => (
                <li
                  key={index}
                  className="bg-[#6366F1]/10 text-[#A5B4FC] border border-[#6366F1]/20 text-sm px-2 py-1 rounded"
                >
                  {tech.name}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
