"use client";

import { useState } from "react";
import OtpInput from "@/src/components/features/user/OtpInput";
import BasicButton from "@/src/components/basics/BasicButton";
import FormTitle from "@/src/components/features/user/FormTitle";

export default function Step2({
  onSubmit,
}: {
  onSubmit: (code: string) => void;
}) {
  const [code, setCode] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de validación
    onSubmit(code);
  };

  return (
    <>
      <FormTitle title="Crea una cuenta" className="hidden md:block" />
      <FormTitle title="Introducir código de validación" />
      <form className="w-full font-roboto md:w-[60%]" onSubmit={handleSubmit}>
        <OtpInput
          value={code}
          myOnChange={setCode}
          labelMessage="Por favor ingresa el código que se envió al número de celular NÚMERO para poder terminar el registro"
        />
        <BasicButton
          type="submit"
          className="h-14 w-full bg-primary text-white mt-4 hover:bg-black disabled:bg-primary"
          disabled={code.length < 5}
        >
          Validar código
        </BasicButton>
      </form>
    </>
  );
}
