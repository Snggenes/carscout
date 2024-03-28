import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import { Navbar } from "../../components/navbar/Navbar";
import { useUser } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export default function Register() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username) {
      navigate("/");
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const postData = await response.json();
    console.log(postData);
    reset();
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 border flex flex-col gap-2 w-[424px]"
        >
          <Input
            {...register("username", { required: "Username is required" })}
            type="text"
            placeholder="Username"
          />
          {errors.username && <p>{`${errors.username.message}`}</p>}
          <Input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email"
          />
          {errors.email && <p>{`${errors.email.message}`}</p>}
          <Input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{`${errors.password.message}`}</p>}
          <Input
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p>{`${errors.confirmPassword.message}`}</p>
          )}
          <Button variant="ghost" disabled={isSubmitting}>
            Register
          </Button>
        </form>
      </div>
    </>
  );
}
