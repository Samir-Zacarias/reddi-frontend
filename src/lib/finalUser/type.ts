// Data types

export type UserHeaderData = {
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
