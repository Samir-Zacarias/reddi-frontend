import GuestFooter from "@/src/components/features/layout/GuestFooter";

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="mt-[4.5rem] md:flex-row-reverse grow">{children}</main>
      <GuestFooter />
    </>
  );
}
