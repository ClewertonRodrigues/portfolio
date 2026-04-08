"use client";

import { InputContact } from "../inputContact";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().min(1, "O Campo nome é obrigatório"),
  email: z.string().email("O Campo email é obrigatório"),
  message: z.string().min(1, "Preencha o campo com a sua mensagem"),
});

type FormData = z.infer<typeof schema>;

export function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function sendEmail(data: FormData) {
    const templateParams = {
      name: data.name,
      message: data.message,
      email: data.email,
    };

    await emailjs
      .send(
        "service_9ffbifq",
        "template_3x0manj",
        templateParams,
        "XBhxwWOvnXcdFKsHb",
      )
      .then(() => {
        alert("EMAIL ENVIADO COM SUCESSO");
        reset();
      })
      .catch((err) => {
        console.log("Erro" + err);
      });
  }

  return (
    <form
      className="bg-[#0F172A] rounded-lg p-5 shadow-xl"
      id="contato"
      onSubmit={handleSubmit(sendEmail)}
    >
      <div
        className="flex flex-col mb-4"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <label className="mb-1 text-white">Nome</label>
        <InputContact
          type="text"
          name="name"
          placeholder="Digite seu nome..."
          register={register}
          error={errors.name?.message}
        />
      </div>
      <div
        className="flex flex-col mb-4"
        data-aos="fade-up"
        data-aos-delay={120}
      >
        <label className="mb-1 text-white">Email</label>
        <InputContact
          type="email"
          name="email"
          placeholder="Digite seu email..."
          register={register}
          error={errors.email?.message}
        />
      </div>
      <div
        className="flex flex-col mb-4"
        data-aos="fade-up"
        data-aos-delay={140}
      >
        <label className="mb-1 text-white">Sua mensagem</label>
        <textarea
          id="message"
          placeholder="Digite sua mensagem..."
          className="bg-[#0B0F1A] text-white px-3 py-1.5 h-40 rounded-md resize-none outline-0 border-2 border-[#1F2937] focus:border-[#6366F1] placeholder:text-[#D1D5DB]"
          {...register("message")}
        ></textarea>
        {errors.message?.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message?.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#6366F1] w-full h-11 rounded-md font-bold text-white cursor-pointer hover:bg-[#4F46E5] duration-300 transition-colors"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
