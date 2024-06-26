import { NavigateFunction } from "react-router-dom";
import { SearchSchema } from "./types/models";
import { TCar, User } from "./types/types";
import { z } from "zod";
import { FieldValues } from "react-hook-form";

export async function getLastAddedCars(user: User | null) {
  const response = await fetch(`/api/cars/lastAdded`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  const notOwnedCars = data.data.filter((car: TCar) => car.owner !== user?._id);
  const firstFour = notOwnedCars.slice(0, 4);
  return firstFour;
}

export async function mainPageSearch(
  data: z.infer<typeof SearchSchema>,
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  navigate: NavigateFunction
) {
  let params = {};
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      params = { ...params, [key]: value };
    }
  });

  let queryString: string;
  queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  if (!user?.username) {
    return navigate(`/list?${queryString}`);
  }

  const res = await fetch(`/api/auth/last-search?${queryString}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const resData = await res.json();

  if (resData.error) {
    return resData.error(resData.error);
  }
  setUser(null);
  navigate(`/list?${queryString}`);
}

export async function handleViewClick(
  hasClicked: boolean,
  setHasClicked: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction,
  car: TCar,
  clickedCars: any
) {
  if (hasClicked) {
    return navigate(`/listing/${car._id}`);
  }
  const newClickedCars = [...clickedCars, car._id];
  localStorage.setItem("clickedCars", JSON.stringify(newClickedCars));
  setHasClicked(true);
  const response = await fetch(`/api/cars/counter`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: car._id }),
    credentials: "include",
  });
  const data = await response.json();
  console.log(data);
  navigate(`/listing/${car._id}`);
}

export const getFavorites = async () => {
  const response = await fetch(`/api/auth/favorites`, {
    credentials: "include",
  });
  return response.json();
};

export async function handleHeartClick(
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  car: TCar,
  toast: any
) {
  const response = await fetch(`/api/auth/favorites`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ id: car._id }),
  });
  const data = await response.json();
  setUser(data.data);
  if (data.error) {
    toast.error(data.error);
  }
  if (data.message) {
    toast.info(data.message);
  }
}

export async function getCarsList(queryString: string) {
  const response = await fetch(`/api/cars?${queryString}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function getSingleListing(id: string) {
  const response = await fetch(`/api/cars?id=${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function postListing(
  data: FieldValues,
  image: string[],
  toast: any
) {
  if (image.length === 0) {
    return toast.error("Please fill in all the fields");
  }
  const res = await fetch(`/api/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ ...data, image }),
  });
  const newCar = await res.json();
  if (newCar.error) {
    return toast.error(newCar.error);
  }
  toast.success(newCar.message);
}

export async function handleNotifications(
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  toast: any,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
) {
  setIsDisabled(true);
  const response = await fetch("/api/auth/notification", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  const data = await response.json();
  if (data.error) {
    console.log(data.error);
  }
  setUser(data.safeUser);
  setIsDisabled(false);
  toast.info("Notification settings updated.");
}

export async function handleDeleteAccount(
  navigate: NavigateFunction,
  toast: any,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
) {
  const response = await fetch("/api/auth/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  const data = await response.json();
  if (data.error) {
    return toast.error(data.error);
  }
  toast.info(data.message);
  setUser(null);
  navigate("/");
}

export async function checkLicencePlate(licencePlate: string, toast: any) {
  const response = await fetch(
    `/api/licenceplatecheck?licencePlate=${licencePlate}`
  );
  if (!response.ok) {
    return toast.error("Licence plate not found");
  }
  const data = await response.json();
  return data;
}
