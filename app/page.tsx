import myImg from "@/assets/new-img.jpeg";

import Image from "next/image";
import imgProjeto from "@/assets/preview.png";
import imgProjeto2 from "@/assets/imgFormulario.png";
import imgPortfolio from "@/assets/img-portfolio3.png";

import { FormContact } from "@/components/formContact";
import { Project } from "@/components/project";
import { Technology } from "@/components/technology";

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
import {
  FcGraduationCap,
  FcReadingEbook,
  FcElectroDevices,
} from "react-icons/fc";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

import "aos/dist/aos.css";
import { TitleAnimated } from "@/components/animationTitle";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <section
        className="min-h-[calc(100vh-80px)] w-full bg-[#0B0F1A] flex justify-center items-center relative"
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

          <div className="w-full max-w-md h-75 hidden lg:block relative">
            <Image
              src={imgPortfolio}
              alt="Imagem ilustrativa de desenvolvimento web"
              priority={true}
              fill={true}
              className="drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              data-aos="fade-left"
            />
          </div>
        </div>

        <div className="absolute bottom-45 right-60 size-0 lg:size-60 opacity-20 rounded-full blur-3xl bg-radial-[at_25%_25%] from-white to-[#6366F1] to-75% animate-[ping_2s_ease-in-out_infinite]"></div>
      </section>
      <section className="pb-10 relative bg-[#12182A]" id="sobre">
        <h2
          className="pt-10 text-center hidden lg:block text-4xl font-bold text-[#6366F1]"
          data-aos="fade-up"
        >
          Sobre
        </h2>

        <div className="w-full max-w-7xl flex flex-col-reverse xl:flex-row justify-between items-center mx-auto px-3  pt-10">
          <div className="w-full lg:max-w-2xl" data-aos="fade-up-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 mt-2 md:mt-0 text-center xl:text-start text-white">
              Clewerton Rodrigues
            </h2>
            <p className="text-center text-[#D1D5DB] leading-relaxed xl:text-start text-lg">
              Atualmente curso o 4º semestre de Análise e Desenvolvimento de
              Sistemas e complemento minha formação com o curso FullStack Pro,
              buscando aprender na prática as tecnologias e boas práticas
              exigidas pelo mercado.
            </p>

            <p className="text-center text-[#D1D5DB] leading-relaxed xl:text-start text-lg mt-3">
              Desenvolvo projetos pessoais com foco em aplicar e consolidar meus
              conhecimentos, criando aplicações que refletem minha evolução como
              desenvolvedor.
            </p>

            <p className="text-center text-[#D1D5DB] leading-relaxed xl:text-start text-lg mt-3">
              Estou em busca da minha primeira oportunidade na área, onde eu
              possa contribuir com o time, aprender, aprimorar minhas
              hablilidades e crescer profissionalmente.
            </p>

            <div className="mt-10">
              <div className="flex gap-5 items-center bg-[#0F172A] px-3 py-1.5 rounded-md transition-all hover:border-[#6366F1] hover:shadow-lg hover:shadow-[#6366F1]/20 border border-[#1F2937]">
                <FcGraduationCap size={30} />
                <div>
                  <strong className="text-white">Faculdade</strong>
                  <p className="mt-1 text-[#9CA3AF]">
                    - 4° semestre - Analise e Desenvolvimento de sistemas |
                    Estácio
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center bg-[#0F172A] px-3 py-1.5 rounded-md transition-all hover:border-[#6366F1] hover:shadow-lg hover:shadow-[#6366F1]/20 border border-[#1F2937] mt-3">
                <FcReadingEbook size={30} />
                <div>
                  <strong className="text-white">Curso</strong>
                  <p className="mt-1 text-[#9CA3AF]">
                    - FullStack Pro - Em andamento | Sujeito Programador
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center bg-[#0F172A] px-3 py-1.5 rounded-md transition-all hover:border-[#6366F1] hover:shadow-lg hover:shadow-[#6366F1]/20 border border-[#1F2937] mt-3">
                <FcElectroDevices size={30} />
                <div>
                  <strong className="text-white">Desenvolvendo</strong>
                  <p className="mt-1 text-[#9CA3AF]">- Projetos pessoais</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-52 h-52 md:w-2xs md:h-72 border-4 border-[#6366F1] rounded-full relative shadow-[0_0_40px_rgba(99,102,241,0.4)]"
            data-aos="fade-up-left"
          >
            <Image
              src={myImg}
              alt="Imagem do desenvolvedor"
              priority={true}
              fill={true}
              className="rounded-full p-1 object-cover"
            />
          </div>
        </div>
      </section>
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
          <Technology 
            icon={<FaCss size={50} color="#6B399C" />} 
            name="CSS"
          />
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
          <Technology 
            icon={<FaSass size={50} color="#CE6B9C" />} 
            name="Sass" 
          />
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
      <section className="py-10 bg-[#12182A]" id="projetos">
        <h2
          className="mb-2 text-center text-4xl font-bold text-[#6366F1]"
          data-aos="fade-up"
        >
          Projetos
        </h2>

        <div className="w-full max-w-7xl mt-10 mx-auto grid md:grid-cols-2 gap-6 md:gap-4 px-3">
          <Project
            imgUrl={imgProjeto}
            title="Devtasks"
            descripton="Aplicação CRUD de tarefas com foco em performance, tipagem forte com TypeScript e UI moderna com Tailwind."
            languagens={["HTML", "CSS", "Javascript"]}
            linkAcess="https://devtasks-pearl.vercel.app"
            linkRepo="https://github.com/ClewertonRodrigues/devtasks"
          />
          <Project
            imgUrl={imgProjeto2}
            title="Formulário"
            descripton="Aplicação CRUD de tarefas com foco em performance, tipagem forte com TypeScript e UI moderna com Tailwind."
            languagens={["HTML", "CSS", "Javascript"]}
            linkAcess="https://clewertonrodrigues.github.io/login-cadastro"
            linkRepo="https://github.com/ClewertonRodrigues/login-cadastro"
          />
        </div>
      </section>

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
