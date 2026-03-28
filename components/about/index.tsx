import Image from "next/image";

import myImg from "@/assets/new-img.jpeg";

import {
  FcGraduationCap,
  FcReadingEbook,
  FcDeployment,
} from "react-icons/fc";

import { InfoProps } from "@/utils/sobre.type";

interface SobreProps {
  name: string;
  bio: string;
  imgUrl: string;
  infos: InfoProps[];
}

export async function About({ name, bio, imgUrl, infos }: SobreProps) {
  return (
    <section className="pb-10 relative bg-[#12182A]" id="sobre">
      <h2
        className="pt-10 text-center hidden lg:block text-4xl font-bold text-[#6366F1]"
        data-aos="fade-up"
      >
        Sobre
      </h2>

      <div className="w-full max-w-7xl flex flex-col-reverse xl:flex-row justify-between items-center mx-auto px-3 pt-10">
        <div className="w-full lg:max-w-2xl" data-aos="fade-up-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 mt-2 md:mt-0 text-center xl:text-start text-white">
            {name}
          </h2>

          <div className="text-center xl:text-start text-[#D1D5DB] text-lg space-y-2">
            {bio.split("\n").map((paragraph, index) => (
              <p className="leading-relaxed" key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {infos.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-center bg-[#0F172A] px-3 py-2 rounded-md transition-all hover:border-[#6366F1] hover:shadow-lg hover:shadow-[#6366F1]/20 border border-[#1F2937]"
              >
                {item.icon === "faculdade" && (
                  <FcGraduationCap size={30} />
                )}
                {item.icon === "curso" && (
                  <FcReadingEbook size={30} />
                )}
                {item.icon === "desenvolvimento" && (
                  <FcDeployment size={30} />
                )}
                <div>
                  <strong className="text-white">{item.title}</strong>
                  <p className="mt-1 text-[#9CA3AF]">- {item.description}</p>
                </div>
              </div>
            )
          )}
          </div>
        </div>

        <div
          className="w-52 h-52 md:w-2xs md:h-72 border-4 border-[#6366F1] rounded-full relative shadow-[0_0_40px_rgba(99,102,241,0.4)]"
          data-aos="fade-up-left"
        >
          <Image
            src={imgUrl}
            alt="Imagem do desenvolvedor"
            priority={true}
            fill={true}
            className="rounded-full p-1 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
