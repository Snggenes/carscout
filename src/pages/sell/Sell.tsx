import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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


  useEffect(() => {
    if (!user?.username) {
      toast.error("You need to be logged in to access this page");
      navigate("/login");
    }
  }, []);

  const onSubmit = async (data: FieldValues) => {
    toast(JSON.stringify(data));
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
    <div className="h-[560px] xl:h-[680px] flex flex-col items-center justify-between gap-2 md:gap-8 lg:gap-14 bg-[url('/main.webp')] bg-cover bg-no-repeat bg-center">
      <div></div>
      <Card className="mb-4 xl:mb-12">
        <CardHeader className="mb-8">
          <CardTitle>Enter your data</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 flex flex-col gap-2 w-[424px]"
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

            <Button variant="ghost" disabled={form.formState.isSubmitting} className="mt-4">
              Next
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
