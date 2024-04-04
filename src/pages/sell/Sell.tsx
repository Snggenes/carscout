import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
  
  export default function Sell() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
      } = useForm();

      const onSubmit = async (data: FieldValues) => {
        toast(JSON.stringify(data));
        navigate(`/listing-form?licencePlate=${data.licencePlate}&mileage=${data.mileage}`);
        reset();
      };
  
    return (
        <div className="flex flex-col items-center gap-2 md:gap-8 lg:gap-14">
        <Card>
          <CardHeader>
            <CardTitle>Sell your car for free</CardTitle>
            <CardDescription>Sell quickly and easily</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 flex flex-col gap-2 w-[424px]"
            >
              <Input
                {...register("licencePlate", { required: "Licence plate is required" })}
                type="text"
                placeholder="Licence Plate"
              />
              {errors.licencePlate && <p>{`${errors.licencePlate.message}`}</p>}
              <Input
                {...register("mileage", { required: "Mileage is required" })}
                type="text"
                placeholder="Mileage"
              />
              {errors.mileage && <p>{`${errors.mileage.message}`}</p>}
              
              <Button variant="ghost" disabled={isSubmitting} className="mt-4">
                Next
              </Button>
            </form>
          </CardContent>
          
        </Card>
      </div>
    );
  }
  