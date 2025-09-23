import CardShell from "@/src/components/features/partner/CardShell";
import NotificationItem from "./NotificationItem";
import type { Notification } from "@/src/lib/partner/dashboard/type";

export default function Notifications({
  notifications,
}: {
  notifications: Notification[];
}) {
  return (
    <CardShell>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 font-roboto px-6">
        Notificaciones
      </h3>
      <div className="flex flex-col">
        {/* Lista de Notificaciones */}
        <div className="overflow-y-auto h-72 border-t border-b border-[#E5E7EB]">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
        {/* Footer Link */}

        <a
          href="#"
          className="text-sm text-primary hover:text-emerald-700 mt-4 px-6"
        >
          Ver todas las notificaciones {">"}
        </a>
      </div>
    </CardShell>
  );
}
