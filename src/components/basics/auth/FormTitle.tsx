interface titleProps {
  title: string;
  className?: string;
}

export default function FormTitle({ title, className }: titleProps) {
  return (
    <h1
      className={`text-3xl mb-1 md:text-2xl md:mb-4 ${className} text-center`}
    >
      {title}
    </h1>
  );
}
