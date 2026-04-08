import myImg from "@/assets/new-img.jpeg";

import Image from "next/image";

import imgPortfolio from "@/assets/img-portfolio3.png";

import { FormContact } from "@/components/formContact";
import { Technology } from "@/components/technology";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

import { getDataSobre } from "@/lib/cosmic";
import { SobreDataProps } from "@/utils/sobre.type";

import { getDataProjects } from "@/lib/cosmic";
import { ProjectsProps } from "@/utils/project.type";

import {
  FaGithub,
  FaLinkedin,
  FaFile,
  FaHtml5,
  FaReact,
  FaSass,
  FaGitAlt,
  FaCopyright,
} from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

import { TitleAnimated } from "@/components/animationTitle";

export default async function Home() {
  const { object }: SobreDataProps = await getDataSobre();
  const projects: ProjectsProps = await getDataProjects();

  const year = new Date().getFullYear();

  return (
    <main>
      <section
        className="min-h-[calc(100vh-80px)] w-full bg-[#0B0F1A] flex justify-center items-center"
        id="inicio"
      >
        <div className="w-full max-w-7xl flex justify-between items-center px-3">
          <div className="w-full lg:max-w-2xl" data-aos="fade-right">
            <div className="text-center lg:text-start">
              <TitleAnimated />
            </div>
            <p className="mt-5 mb-10 text-lg lg:text-xl text-center lg:text-start text-[#F3F4F6] leading-relaxed">
              Transformo ideias em soluções digitais eficientes, desenvolvendo
              aplicações modernas, performáticas e centradas na experiência do
              usuário<span className="text-[#6366F1] font-bold"> Next</span>,{" "}
              <span className="text-[#6366F1] font-bold">React</span> e{" "}
              <span className="text-[#6366F1] font-bold">TypeScript</span>.
            </p>
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-3">
              <a
                href="#projetos"
                className="rounded-xl bg-[#6366F1] text-white font-bold px-14.5 lg:px-8 py-4 text-xl border-2 hover:scale-105 hover:bg-[#4F46E5] hover:shadow-lg shadow-[#6366F1]/40 transition-transform duration-500 cursor-pointer"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="rounded-xl text-[#6366F1] font-bold px-8 py-4 text-xl border-2 border-[#6366F1] hover:scale-105 hover:bg-[#6366F1]/10 transition-transform duration-500 cursor-pointer"
              >
                Entre em contato
              </a>
            </div>
            <div className="mt-10 flex justify-center lg:justify-start gap-5">
              <a
                href="https://www.linkedin.com/in/clewerton-rodrigues"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className="bg-[#6366F1] p-2 rounded-full hover:scale-110 hover:bg-[#4F46E5] transition-all duration-300 cursor-pointer"
              >
                <FaLinkedin color="white" size={28} />
              </a>
              <a
                href="https://github.com/ClewertonRodrigues"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
                className="bg-[#6366F1] p-2 rounded-full hover:scale-110 hover:bg-[#4F46E5] transition-all duration-300 cursor-pointer"
              >
                <FaGithub color="white" size={28} />
              </a>
              <a
                href="/curriculo.pdf"
                download="Clewerton_Rodrigues_CV.pdf"
                aria-label="curriculo"
                className="bg-[#6366F1] p-2 rounded-full hover:scale-110 hover:bg-[#4F46E5] transition-all duration-300 cursor-pointer"
              >
                <FaFile color="white" size={28} />
              </a>
            </div>
          </div>

          <div className="w-full max-w-md h-75 hidden lg:flex justify-center items-center relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={imgPortfolio}
                alt="Imagem ilustrativa de desenvolvimento web"
                priority={true}
                fill={true}
                className="object-contain drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                data-aos="fade-left"
              />

              <div className="size-0 lg:size-60 opacity-20 rounded-full blur-3xl bg-radial-[at_25%_25%] from-white to-[#6366F1] to-75% animate-[ping_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      <About
        name={object.metadata.name}
        bio={object.metadata.bio}
        imgUrl={object.metadata.hero.url}
        infos={object.metadata.infos}
      />

      <section className="py-15 bg-[#0B0F1A]" id="tecnologias">
        <h2
          className="mb-2 text-center text-3xl md:text-4xl font-bold text-[#6366F1]"
          data-aos="fade-up"
        >
          Tecnologias
        </h2>
        <p className="text-center text-[#F3F4F6] px-3" data-aos="fade-up">
          Tecnologias usadas para criar minhas soluções
        </p>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-3 lg:grid-cols-5 gap-5 mt-10 px-3">
          <Technology
            icon={<FaHtml5 size={50} color="#E34F26" />}
            name="HTML"
          />
          <Technology icon={<FaCss size={50} color="#6B399C" />} name="CSS" />
          <Technology
            icon={<BiLogoJavascript size={50} color="#F7DF1E" />}
            name="Javascript"
          />
          <Technology
            icon={<FaReact size={50} color="#61DAFB" />}
            name="React JS"
          />
          <Technology
            icon={<BiLogoTypescript size={50} color="#3178C6" />}
            name="Typescript"
          />
          <Technology
            icon={<RiNextjsFill size={50} color="#fff" />}
            name="Next JS"
          />
          <Technology
            icon={<RiTailwindCssFill size={50} color="#3EBFF8" />}
            name="Tailwind"
          />
          <Technology icon={<FaSass size={50} color="#CE6B9C" />} name="Sass" />
          <Technology
            icon={<FaGitAlt size={50} color="#F05539" />}
            name="Git"
          />
          <div className="hidden lg:block">
            <Technology
              icon={<IoLogoFirebase size={50} color="#FFAA1A" />}
              name="Firebase"
            />
          </div>
        </div>
      </section>

      <Projects objects={projects} />

      <section className="py-10 bg-[#0B0F1A]" id="contato">
        <h2 className="mb-2 text-center text-4xl font-bold text-[#6366F1]">
          Contato
        </h2>
        <p className="text-center text-[#F3F4F6]">Me mande uma mensagem</p>

        <div className="mt-10 w-full max-w-3xl mx-auto px-3">
          <FormContact />
        </div>
      </section>

      <footer className="bg-[#0F172A] border-t py-10">
        <div className="mx-auto">
          <div className="w-full flex items-center justify-center gap-1 text-sm text-white">
            <FaCopyright />
            {year}
            <p>Clewerton Rodrigues.</p>
          </div>
          <p className="text-center text-sm text-white">
            Todos os direitos reservados.
          </p>

          <div className="flex justify-center gap-5 mt-5">
            <div className="bg-[#6366F1] p-2 rounded-full hover:scale-110 transition-all duration-300 hover:bg-[#4F46E5] cursor-pointer">
              <FaLinkedin color="#fff" size={28} />
            </div>
            <div className="bg-[#6366F1] p-2 rounded-full hover:scale-110 transition-all duration-300 hover:bg-[#4F46E5] cursor-pointer">
              <FaGithub color="#fff" size={28} />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
