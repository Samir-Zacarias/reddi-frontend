import { ReactNode } from "react";
import type { LucideProps } from "lucide-react";

// Data types

export type HeaderData = {
  userName: string;
  address: string;
  notificationCount: number;
  carCount: number;
};

// Props types

export type AddressCardProps = {
  icon: ReactNode;
  address: string;
  label: string;
  onEdit: () => void;
};

export type AddressSliderProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type PromoCardProps = {
  title: string;
  subtitle: string;
  code: string;
  buttonText: string;
  imageUrl: string;
  bgColor: string;
  href: string;
};

export type NavItemProps = {
  href: string;
  label: string;
  icon: React.ComponentType<LucideProps>;
  isActive: boolean;
};
