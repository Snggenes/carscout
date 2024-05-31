import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../../components/ui/form";
import { SellFormSchema } from "../../lib/types/models";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { FormInput } from "@/components/form-elements";
import { useUser } from "../../contexts/userContext";
import { useEffect } from "react";

export default function Sell() {
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user?.username) {
      toast.error("You need to be logged in to access this page");
      navigate("/login", {
        state: {
          from: location.pathname,
        },
      });
    }
  }, []);

  const onSubmit = async (data: FieldValues) => {
    navigate(
      `/listing-form?licencePlate=${data.licencePlate}&mileage=${data.mileage}`
    );
    form.reset();
  };

  const form = useForm<z.infer<typeof SellFormSchema>>({
    resolver: zodResolver(SellFormSchema),
    defaultValues: {
      licencePlate: "",
      mileage: "",
    },
  });

  return (
    <div className="h-screen pt-16 flex flex-col items-center">
      <div className="h-full md:h-3/4 max-w-[1200px] w-full flex flex-col items-center justify-center md:bg-[url('https://www.autoscout24.nl/private-seller-unified-flow/assets/images/bg-desktop.webp')] bg-cover bg-center bg-no-repeat">
        <Card className="mb-4 xl:mb-12 h-full w-full md:h-2/3 md:w-1/2 xl:w-1/3">
          <CardHeader className="mb-8">
            <CardTitle>Enter your data</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-4 flex flex-col gap-2 xl:h-[300px]"
            >
              <Form {...form}>
                <FormInput
                  control={form.control}
                  registerName="licencePlate"
                  registerString="Licence Plate"
                />
                <FormInput
                  control={form.control}
                  registerName="mileage"
                  registerString="Mileage"
                />
              </Form>

              <Button
                variant="ghost"
                disabled={form.formState.isSubmitting}
                className="mt-4"
              >
                Next
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
