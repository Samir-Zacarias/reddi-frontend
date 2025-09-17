interface FormInputProps {
  id: string;
  labelMessage: string;
  placeholder: string;
  myOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  icon?: React.ReactNode;
}

export default function FormInput({
  id,
  placeholder,
  labelMessage,
  icon,
  value,
  myOnChange,
}: FormInputProps) {
  return (
    <>
      <label htmlFor={id} className="font-semibold mb-2 block">
        {labelMessage}
      </label>
      <div className="bg-white w-full border border-mainBorder p-4 rounded-xl flex">
        {icon}
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          className="w-full pl-2 focus:outline-none"
          value={value}
          onChange={myOnChange}
          required
        />
      </div>
    </>
  );
}
