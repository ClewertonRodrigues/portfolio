"use client";

import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export function InputContact({
  type,
  placeholder,
  name,
  register,
  error,
  rules,
}: InputProps) {
  return (
    <>
      <input
        className="h-11 bg-[#0B0F1A] text-white rounded-md px-3 outline-0 focus:border-[#6366F1] border-2 border-[#1F2937] placeholder:text-[#D1D5DB]"
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
      />

      {error && <p className="text-sm mt-1 text-red-400">{error}</p>}
    </>
  );
}
