"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import CarFilter from "@/components/Home/CarFilter";
import { getCarlist as fetchCarlist } from "@/services";
import CarsList from "@/components/Home/CarsList";

const Page = () => {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);

  useEffect(() => {
    fetchCarList(); // Fetch the car list on component mount
  }, []);

  const fetchCarList = async () => {
    try {
      const result: any = await fetchCarlist(); // Fetch data from the API
      setCarsList(result?.carLists || []); // Ensure carsList is always an array
      setCarsOrgList(result?.carLists || []);
    } catch (error) {
      console.error("Failed to fetch car list:", error);
    }
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter(
      (item: any) => item.carBrand == brand
    );
    setCarsList(filterList);
  };

  const orderCarList = (order: number) => {
    const sortData = [...carsOrgList].sort((a, b) =>
      order === -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortData);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <Search />
      <CarFilter
        carslist={carsOrgList}
        orderCarList={(value: number) => orderCarList(value)}
        setBrand={(value: string) => filterCarList(value)}
      />
      <CarsList carsList={carsList} /> {/* Pass the correct prop name */}
    </div>
  );
};

export default Page;
