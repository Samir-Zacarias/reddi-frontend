import CardShell from "../../CardShell";
import DangerIcon from "@/src/components/icons/DangerIcon";
import WarningIcon from "@/src/components/icons/WarningIcon";
import InfoIcon from "@/src/components/icons/InfoIcon";

const alerts = [
  {
    type: "danger",
    title: "Pedido retrasado",
    id: "#1245 - 15 min de retraso",
  },
  {
    type: "warning",
    title: "Repartidor inactivo",
    id: "Juan P - Sin actividad 20 min",
  },
  {
    type: "info",
    title: "Nuevo aliado registrado",
    id: 'Restaurante "La Cocina"',
  },
];

const alertStyles = {
  danger: { bg: "bg-red-50", text: "text-red-700", icon: <DangerIcon /> },
  warning: {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    icon: <WarningIcon />,
  },
  info: { bg: "bg-blue-50", text: "text-blue-700", icon: <InfoIcon /> },
};

export default function RealTimeAlerts() {
  return (
    <CardShell title="Alertas en Tiempo Real">
      <div className="space-y-4">
        {alerts.map((alert, index) => {
          const styles = alertStyles[alert.type as keyof typeof alertStyles];
          return (
            <div
              key={index}
              className={`flex items-start space-x-4 p-4 rounded-lg ${styles.bg}`}
            >
              <span>{styles.icon}</span>
              <div>
                <p className={`font-semibold text-sm ${styles.text}`}>
                  {alert.title}
                </p>
                <p className="text-xs text-gray-500">{alert.id}</p>
              </div>
            </div>
          );
        })}
      </div>
    </CardShell>
  );
}
