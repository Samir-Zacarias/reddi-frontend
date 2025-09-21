"use client";

import { useState } from "react";
import FormInput from "@/src/components/basics/auth/FormInput";
import PhoneIcon from "@/src/components/icons/PhoneIcon";
import BasicButton from "@/src/components/basics/BasicButton";
import FormTitle from "@/src/components/basics/auth/FormTitle";

export default function Step1({
  onSubmit,
}: {
  onSubmit: (phone: string) => void;
}) {
  const [phone, setPhone] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de validación
    onSubmit(phone);
  };

  return (
    <>
      <FormTitle title="Crea una cuenta" />
      <form className="w-full font-roboto md:w-[60%]" onSubmit={handleSubmit}>
        <FormInput
          placeholder="Ingresa la información"
          id="celular"
          icon={<PhoneIcon />}
          labelMessage="Ingresa tu número de celular"
          myOnChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <BasicButton
          type="submit"
          className="h-14 w-full bg-primary text-white hover:bg-black mt-4"
        >
          Código de validación
        </BasicButton>
      </form>
    </>
  );
}
