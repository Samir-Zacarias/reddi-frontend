import React from "react";

type SelectInputProps<T> = {
  id: string;
  label: string;
  options: T[]; // Un array de cualquier tipo de objeto
  getOptionValue: (option: T) => string | number; // Función para obtener el valor del <option>
  getOptionLabel: (option: T) => string; // Función para obtener el texto visible del <option>
  value: string; // El valor seleccionado actualmente (controlado por el padre)
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Función que se ejecuta al cambiar
  placeholder?: string;
  className?: string;
  name?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function SelectInput<T>({
  id,
  label,
  options,
  getOptionValue,
  getOptionLabel,
  value,
  onChange,
  placeholder = "Seleccione",
  className = "",
  name,
  ...rest // 3. Recoge todos los demás atributos
}: SelectInputProps<T>) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1 font-roboto"
      >
        {label}
      </label>
      <select
        id={id}
        name={name || id}
        value={value}
        onChange={onChange}
        className="block w-full rounded-xl border border-[#D9DCE3] sm:text-sm p-2 font-roboto"
        {...rest} // 4. Aplica los atributos extra al <select>
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => {
          const optionValue = getOptionValue(option);
          const optionLabel = getOptionLabel(option);
          return (
            <option key={String(optionValue)} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}
