import React from "react";

type TextAreaInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>; // Permite pasar cualquier otra prop nativa de textarea

export default function TextAreaInput({
  id,
  label,
  value,
  onChange,
  name,
  placeholder,
  rows = 4, // Un valor por defecto razonable
  className,
  ...rest
}: TextAreaInputProps) {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1 font-roboto"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name || id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={
          className ||
          "block w-full border border-[#D9DCE3] rounded-xl placeholder-gray-400 sm:text-sm p-3 font-roboto"
        }
        {...rest}
      />
    </>
  );
}
