import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ListingForm() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const licencePlate = searchParams.get("licencePlate");
        const mileage = searchParams.get("mileage");
        if (!licencePlate || !mileage) {
            navigate("/sell");
        }
    }, []);

    return (
        <div>
        <h1>Listing Form {searchParams.get("licencePlate")}</h1>
        <h1>{searchParams.get("mileage")}</h1>
        </div>
    );
}