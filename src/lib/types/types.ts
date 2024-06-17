export type User = {
  username: string;
  email: string;
  _id: string;
  cars: string[];
  favorites: string[];
  lastSearch: string;
  lastSearchTime: Date;
  notification: boolean;
};

export type Taddress = {
  city: string;
  street: string;
  house_number: string;
  postcode: string;
  province: string;
  latitude: number;
  longitude: number;
  error?: string;
};

export type TCar = {
  _id: string;
  brand: string;
  model: string;
  licencePlate: string;
  body: string;
  seat: number;
  door: number;
  color: string;
  metallic: boolean;
  upholstery: string;
  interior: string;
  condition: string;
  km: number;
  year: number;
  nonsmoke: boolean;
  vehicledamage: boolean;
  drive: string;
  transmission: string;
  power: number;
  gears: number;
  cilinders: number;
  cilindercapacity: number;
  emptyweight: number;
  fuel: string;
  description?: string;
  price: number;
  phone: string;
  address: Taddress;
  image: [string];
  owner: string;
  createdAt: Date;
  clickCounter: number;
};

export type TCarCheck = {
  type_carrosserie_europese_omschrijving: string;
  kenteken: string;
  merk: string;
  handelsbenaming: string;
  inrichting: string;
  aantal_zitplaatsen: string;
  eerste_kleur: string;
  cilinderinhoud: string;
  datum_eerste_toelating: string;
  aantal_deuren: string;
  brandstof_omschrijving: string;
  nettomaximumvermogen: string;
  aantal_cilinders: string;
  massa_ledig_voertuig: string;
};
