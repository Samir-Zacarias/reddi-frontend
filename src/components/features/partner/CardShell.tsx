export default function CardShell({ children }: { children: React.ReactNode }) {
  return <div className="bg-white py-6 rounded-2xl shadow-sm">{children}</div>;
}
