import DeliveryHeader from "@/src/components/features/repartidor/header/DeliveryHeader";
import { createClient } from "@/src/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side guard: only repartidor can access
  const supabase = await createClient();
  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData.session;
  const user = session?.user;
  const am = (user?.app_metadata as any) || {};
  const um = (user?.user_metadata as any) || {};
  const role: string | null =
    am.user_role || am.role || um.user_role || um.role || null;

  const toHome = (r?: string | null) =>
    r === "admin"
      ? "/admin/dashboard"
      : r === "aliado"
      ? "/aliado/dashboard"
      : r === "repartidor"
      ? "/repartidor/home"
      : "/user/home";

  if (!session) {
    redirect(`/login?next=${encodeURIComponent("/repartidor/home")}`);
  }
  if (role !== "repartidor") {
    redirect(toHome(role));
  }

  return (
    <>
      <DeliveryHeader />
      <main className="bg-[#ECEFF0] min-h-screen">{children}</main>
    </>
  );
}
