export default function PaginButtons() {
  return (
    <>
      <span className="text-sm text-gray-700">Página</span>
      <button className="px-3 py-1 border rounded-md text-sm">1</button>
      <div className="flex gap-1">
        <button className="p-2 border rounded-md">&lt;</button>
        <button className="p-2 border rounded-md">&gt;</button>
      </div>
    </>
  );
}
