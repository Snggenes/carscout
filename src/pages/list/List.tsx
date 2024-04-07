import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";

export default function List() {
  const { brand } = useParams();
  const [searchParams] = useSearchParams();

  const onSuccess = (data: any) => {
    console.log(data);
  };

  const { performFetch } = useFetch("cars", onSuccess);

  useEffect(() => {
    performFetch();
  }, []);

  return (
    <div>
      <h1>{brand}</h1>
      <p>{searchParams.get("model")}</p>
      <p>{searchParams.get("price")}</p>
      <p>{searchParams.get("year")}</p>
      <button>abc</button>
    </div>
  );
}
