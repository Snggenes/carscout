export type User = {
  username: string;
  email: string;
  _id: string;
};

type address = {
  city: string;
  street: string;
  house_number: string;
  postcode: string;
  province: string;
  latitude: number;
  longitude: number;
};

export type TCar = {
  _id: string;
  brand: string;
  licencePlate: string;
  model: string;
  price: number;
  year: number;
  km: number;
  power: number;
  color: string;
  seat: number;
  door: number;
  body: string;
  transmission: string;
  fuel: string;
  image: [string];
  description?: string;
  owner: string;
  createdAt: Date;
  address: address;
};
