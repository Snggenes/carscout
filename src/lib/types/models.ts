import { z } from "zod";

export const ListingFormSchema = z.object({
  brand: z.string({ required_error: "Brand is required" }),
  licencePlate: z.string({ required_error: "Licence Plate is required" }),
  color: z.string({ required_error: "Color is required" }),
  door: z.string({ required_error: "Doors is required" }),
  model: z.string({ required_error: "Model is required" }),
  body: z.string({ required_error: "Body is required" }),
  seat: z.string({ required_error: "Seats is required" }),
  km: z.string({ required_error: "Mileage is required" }),
  upholstery: z.string({ required_error: "Upholstery is required" }),
  condition: z.string({ required_error: "Condition is required" }),
  year: z.string({ required_error: "Year is required" }),
  fuel: z.string({ required_error: "Fuel is required" }),
  price: z.string({ required_error: "Price is required" }),
  phone: z
    .string()
    .min(10, { message: "Phone number should have at least 10 characters" }),
  postcode: z
    .string()
    .min(6, { message: "Postcode should have at least 6 characters" }),
  houseNumber: z
    .string()
    .min(1, { message: "House number should have at least 1 character" }),
  description: z.string().optional(),
  transmission: z.string({ required_error: "Transmission is required" }),
  power: z.string({ required_error: "Power is required" }),
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
  brand: z.string({ required_error: "Brand is required" }),
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

