import ErrorIcon from "@/src/components/icons/ErrorIcon";
import CheckBoxIcon from "@/src/components/icons/CheckBoxIcon";

const variants = {
  success: {
    container: "bg-success",
    text: "text-success",
    icon: <CheckBoxIcon fill="white" className="h-[15px] w-[15px]" />,
  },
  error: {
    container: "bg-error",
    text: "text-error",
    icon: <ErrorIcon fill="white" className="h-[15px] w-[15px]" />,
  },
};

export default function InputNotice({
  variant,
  msg,
}: {
  variant?: "success" | "error";
  msg?: string;
}) {
  if (!variant) return null;

  return (
    <div className={`flex items-center gap-2 cursor-default mt-1`}>
      <div
        className={`flex items-center justify-center w-[15px] h-[15px] rounded-full p-1 ${
          variant && variants[variant].container
        }`}
      >
        {variant && variants[variant].icon}
      </div>
      <span
        className={`text-sm font-medium ${variant && variants[variant].text}`}
      >
        {variant && (variant === "success" ? "Dato válido" : msg)}
      </span>
    </div>
  );
}
