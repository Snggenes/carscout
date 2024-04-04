import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function List() {
  const { brand } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleclick() {
    setSearchParams({ model: "model", price: "price", year: "year" });
  }

  return (
    <div>
      <h1>{brand}</h1>
      <p>{searchParams.get("model")}</p>
      <p>{searchParams.get("price")}</p>
      <p>{searchParams.get("year")}</p>
      <button onClick={handleclick}>abc</button>
    </div>
  );
}
