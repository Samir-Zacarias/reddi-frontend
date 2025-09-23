// components/features/dashboard/NotificationItem.tsx
import { type FC } from "react";
import type {
  Notification,
  NotificationType,
} from "@/src/lib/partner/dashboard/type";
import ErrorPartnerIcon from "@/src/components/icons/ErrorIcon";
import InfoPartnerIcon from "@/src/components/icons/InfoPartnerIcon";
import SuccessPartnerIcon from "@/src/components/icons/SuccessPartnerIcon";

// Iconos (puedes hacerlos componentes más complejos si quieres)
const ErrorIcon = () => <ErrorPartnerIcon />;
const InfoIcon = () => <InfoPartnerIcon />;
const SuccessIcon = () => <SuccessPartnerIcon />;

// Mapa para los iconos y sus estilos
const notificationMap: Record<
  NotificationType,
  { icon: React.ReactNode; classes: string }
> = {
  error: { icon: <ErrorIcon />, classes: "bg-[#FEE2E2] text-red-600" },
  info: { icon: <InfoIcon />, classes: "bg-[#E5E7EB] text-blue-600" },
  success: { icon: <SuccessIcon />, classes: "bg-[#DCFCE7] text-green-600" },
};

const NotificationItem: FC<{ notification: Notification }> = ({
  notification,
}) => {
  const { icon, classes } = notificationMap[notification.type];

  return (
    <div className="flex gap-4 py-4 border-b border-[#E5E7EB] last:border-b-0 px-4">
      <div
        className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${classes}`}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{notification.title}</h4>
        <p className="text-sm text-gray-600">{notification.description}</p>
        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
