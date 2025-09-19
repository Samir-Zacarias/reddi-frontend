// Data types

export type HeaderData = {
  userName: string;
  address: AddressData[];
  notificationCount: number;
  carCount: number;
};

export type AddressData = {
  id: number;
  address: string;
  label: string;
};
