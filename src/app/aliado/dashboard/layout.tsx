import PartnerAside, {
  NavLink,
} from "@/src/components/basics/dashboard/DashboardAside";
import PartnerHeader from "@/src/components/basics/dashboard/DashboardHeader";

const actualURL = "/aliado/dashboard";

const navigationLinks: NavLink[] = [
  {
    name: "Dashboard",
    href: `${actualURL}`,
  },
  {
    name: "Inventario",
    href: `${actualURL}/productos`,
    subLinks: [
      { name: "Productos", href: `${actualURL}/productos` },
      { name: "Menú", href: `${actualURL}/menu` },
    ],
  },
  {
    name: "Usuarios",
    href: "#",

    subLinks: [
      { name: "Clientes", href: `${actualURL}/clientes` },
      { name: "Aliados", href: `${actualURL}/aliados` },
      { name: "Repartidores", href: `${actualURL}/repartidores` },
    ],
  },
  {
    name: "Banner",
    href: `${actualURL}/banner`,
  },
  {
    name: "Finanzas",
    href: `${actualURL}/finanzas`,
  },
];

export default function PartnerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PartnerAside navigationLinks={navigationLinks} />
      <PartnerHeader />
      <main className="md:ml-[14rem] mt-[86px] bg-[#F0F2F5B8]">{children}</main>
    </>
  );
}
