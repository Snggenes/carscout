import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";

import { carData } from "../../../lib/data";

export function Search() {
  return (
    <div className="hidden  bg-white gap-3 md:grid grid-cols-2 md:grid-cols-3 p-6 w-[600px] lg:w-[860px] xl:w-[1200px]">
      <Select>
        <SelectTrigger>
          <SelectValue>Search for a car</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {carData.map((car) => {
            return (
              <SelectItem value={car.brand} key={car.brand}>
                {car.brand}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue>Search for a car</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {carData.map((car) => {
            return (
              <SelectItem value={car.brand} key={car.brand}>
                {car.brand}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue>Search for a car</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {carData.map((car) => {
            return (
              <SelectItem value={car.brand} key={car.brand}>
                {car.brand}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue>Search for a car</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {carData.map((car) => {
            return (
              <SelectItem value={car.brand} key={car.brand}>
                {car.brand}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue>Search for a car</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {carData.map((car) => {
            return (
              <SelectItem value={car.brand} key={car.brand}>
                {car.brand}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Button variant="secondary">Search</Button>
    </div>
  );
}
