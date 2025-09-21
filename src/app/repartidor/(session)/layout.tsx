import DeliveryHeader from "@/src/components/features/repartidor/header/DeliveryHeader";

export default function DeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DeliveryHeader />
      <main className="bg-[#ECEFF0] min-h-screen">{children}</main>
    </>
  );
}
