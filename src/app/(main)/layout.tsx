import GuestHeader from "@/src/components/features/main/GuestHeader";
//import SearchBar from "@/src/components/features/main/SearchBar";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GuestHeader />
      {children}
    </>
  );
}
