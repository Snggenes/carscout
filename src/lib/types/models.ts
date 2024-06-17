import { z } from "zod";

export const ListingFormSchema = z.object({
  brand: z.string({ required_error: "Brand is required" }),
  model: z.string({ required_error: "Model is required" }),
  licencePlate: z.string({ required_error: "Licence Plate is required" }),
  body: z.string({ required_error: "Body is required" }),
  seat: z.string({ required_error: "Seats is required" }),
  door: z.string({ required_error: "Doors is required" }),
  color: z.string({ required_error: "Color is required" }),
  metallic: z.boolean().default(false),
  upholstery: z.string({ required_error: "Upholstery is required" }),
  interior: z.string({ required_error: "Interior Color is required" }),
  condition: z.string({ required_error: "Condition is required" }),
  km: z.string({ required_error: "Mileage is required" }),
  year: z.string({ required_error: "Year is required" }),
  nonsmoke: z.boolean().default(false),
  vehicledamage: z.boolean().default(false),
  drive: z.string({ required_error: "Drive is required" }),
  transmission: z.string({ required_error: "Transmission is required" }),
  power: z.string({ required_error: "Power is required" }),
  gears: z.string({ required_error: "Gears is required" }),
  cilinders: z.string({ required_error: "Cilinders is required" }),
  cilindercapacity: z.string({
    required_error: "Cilinder capacity is required",
  }),
  emptyweight: z.string({ required_error: "Empty weight is required" }),
  fuel: z.string({ required_error: "Fuel is required" }),
  description: z.string().optional(),
  price: z.string({ required_error: "Price is required" }),
  postcode: z
    .string()
    .min(6, { message: "Postcode should have at least 6 characters" }),
  houseNumber: z
    .string()
    .min(1, { message: "House number should have at least 1 character" }),
  phone: z
    .string()
    .min(10, { message: "Phone number should have at least 10 characters" }),
});

export const LoginFormSchema = z.object({
  email: z.string({ required_error: "Email is required" }),
  password: z.string({ required_error: "Password is required" }),
});

export const RegisterFormSchema = z.object({
  username: z.string({ required_error: "Username is required" }),
  email: z.string({ required_error: "Email is required" }),
  password: z.string({ required_error: "Password is required" }),
});

export const SellFormSchema = z.object({
  licencePlate: z.string({ required_error: "Licence Plate is required" }),
  mileage: z.string({ required_error: "Mileage is required" }),
});

export const SearchSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  price: z.string().optional(),
  year: z.string().optional(),
});

export const SidebarFormSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  price: z.string().optional(),
  year: z.string().optional(),
  body: z.string().optional(),
  fuel: z.string().optional(),
  km: z.string().optional(),
  transmission: z.string().optional(),
  power: z.string().optional(),
  door: z.string().optional(),
  color: z.string().optional(),
});

export const AdvencedSearchSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  price: z.string().optional(),
  year: z.string().optional(),
  body: z.string().optional(),
  fuel: z.string().optional(),
});
