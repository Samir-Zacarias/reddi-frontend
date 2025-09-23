import React from "react";

type SearchInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  icon?: React.ReactNode;
};

export default function BasicInput({
  id,
  label,
  placeholder = "Buscar por palabras claves",
  value,
  onChange,
  className = "",
  name,
  icon,
}: SearchInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1 font-roboto"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <input
          type="text"
          id={id}
          name={name || id}
          value={value}
          onChange={onChange}
          className={`block w-full rounded-xl border-[#D9DCE3] border ${
            icon && "pl-10"
          } sm:text-sm p-2 font-roboto`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
