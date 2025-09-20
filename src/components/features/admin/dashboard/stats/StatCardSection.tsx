import StatCard from "@/src/components/features/admin/dashboard/stats/StatCard";
import StatCarIcon from "@/src/components/icons/StatCarIcon";
import StatDollarIcon from "@/src/components/icons/StatDollarIcon";
import StatDeliveryIcon from "@/src/components/icons/StatDeliveryIcon";
import StatPartnersIcon from "@/src/components/icons/StatPartnersIcon";
import StatUsersIcon from "@/src/components/icons/StatUsersIcon";

import { StatData } from "@/src/lib/admin/type"; // O donde sea que hayas definido el tipo

type StatCardSectionProps = {
  stats: StatData[]; // Acepta un array de objetos con la información de cada tarjeta
};

const icons = [
  <StatCarIcon />,
  <StatDollarIcon />,
  <StatDeliveryIcon />,
  <StatPartnersIcon />,
  <StatUsersIcon />,
];

export default function StatCardSection({ stats }: StatCardSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mb-4">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.title} // Es importante usar una key única. Si los títulos no se repiten, es una buena opción.
          title={stat.title}
          value={stat.value}
        >
          {icons[index]}
        </StatCard>
      ))}
    </div>
  );
}
