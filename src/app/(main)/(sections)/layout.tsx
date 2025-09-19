export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="mt-[4.5rem] flex flex-col items-center md:flex-row-reverse md:p-6 grow">
        {children}
      </main>
    </>
  );
}
