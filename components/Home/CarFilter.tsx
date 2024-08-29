import React, { useEffect, useState } from "react";

const CarFilter = ({ carslist, setBrand, orderCarList }: any) => {
  const [brandList, setBrandList] = useState<string[]>([]);
  const BrandSet = new Set<string>();

  useEffect(() => {
    if (carslist) {
      filterCarList();
    }
  }, [carslist]);

  const filterCarList = () => {
    carslist.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className="flex gap-5 ml-10">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => orderCarList(Number(e.target.value))}
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>

        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            Brand
          </option>
          {brandList.map((brand: string, index: number) => (
            <option key={index}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarFilter;
