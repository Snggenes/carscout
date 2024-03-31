import { useParams } from "react-router-dom";

export default function List() {
    const { brand, model, price, year } = useParams();
    return (
        <div>
            <h1>{brand}</h1>
            <h1>{model}</h1>
            <h1>{price}</h1>
            <h1>{year}</h1>
        </div>
    );
}