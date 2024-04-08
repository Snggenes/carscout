export type User = {
    username: string;
    email: string;
    password: string;
    _id: string;
}

type address = {
    city: string;
      street: string
      house_number: string
      postcode: string
      province: string
      latitude: number
      longitude: number
}

export type TCar = {
    _id: string;
    brand: string;
    model: string;
    price: string;
    year: string;
    km: string;
    body: string;
    transmission: string;
    fuel: string;
    image: [string];
    description?: string;
    owner: string;
    power: string;
    address: address;
    createdAt: Date;
}