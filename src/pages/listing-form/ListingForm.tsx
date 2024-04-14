import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ListingForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let abc = {};

  useEffect(() => {
    const licencePlate = searchParams.get("licencePlate");
    const mileage = searchParams.get("mileage");
    if (!licencePlate || !mileage) {
      navigate("/sell");
    }
  }, []);

  return (
    <div className="w-full bg-[#f4f4f4] flex justify-center">
      <div className="max-w-[1200px] flex-1 flex flex-col md:flex-row md:gap-8">
        <div className="bg-white hidden md:flex md:flex-none md:w-[360px]">
          abc
        </div>
        <form className="bg-white flex-1">
          <select name="abc" id="abc" onChange={()=>{
            abc = {
                ...abc,
                abc: "abc"
                }
                console.log(abc);
                
          }}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </form>
      </div>
    </div>
  );
}
