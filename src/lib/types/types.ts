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
  condition: string;
  fuel: string;
  image: [string];
  description?: string;
  owner: string;
  createdAt: Date;
  address: Taddress;
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
}
