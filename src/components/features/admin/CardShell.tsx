export default function CardShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 font-roboto">
        {title}
      </h3>
      {children}
    </div>
  );
}
