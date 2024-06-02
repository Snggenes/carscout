export const sidebarDefaultValues = (searchParams: URLSearchParams) => ({
  brand: searchParams.get("brand") || "",
  model: searchParams.get("model") || "",
  price: searchParams.get("price") || "",
  year: searchParams.get("year") || "",
  body: searchParams.get("body") || "",
  fuel: searchParams.get("fuel") || "",
  km: searchParams.get("km") || "",
  transmission: searchParams.get("transmission") || "",
  power: searchParams.get("power") || "",
  door: searchParams.get("door") || "",
  color: searchParams.get("color") || "",
});

export const listingFormDefaultValues = {
  phone: "",
  postcode: "",
  houseNumber: "",
  description: "No description.",
};

export const loginDefaultValues = {
  email: "",
  password: "",
};

export const registerDefaultValues = {
  username: "",
  email: "",
  password: "",
};

export const sellDefaultValues = {
  licencePlate: "",
  mileage: "",
};
