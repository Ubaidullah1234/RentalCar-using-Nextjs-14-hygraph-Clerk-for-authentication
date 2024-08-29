import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { getLocation } from "@/services";

const CarsList = ({ carsList }: any) => {
  const [formValue, setFormValue] = useState({
    location: '',
    pickupDate: '',
    dropOffDate: '',
    pickupTime: '',
    dropOffTime: '',
    contactNumber: '',
  });
  const [storeLocation, setStoreLocation] = useState<any>([]);
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const list = carsList || [];

  const openModal = (car: any) => {
    setSelectedCar(car);
    const modal = document.getElementById('my_modal_4');
    if (modal) {
      (modal as any).showModal();
    }
  };

  useEffect(() => {
    getStoreLocation_();
  }, []);

  const getStoreLocation_ = async () => {
    const resp: any = await getLocation();
    console.log(resp);
    setStoreLocation(resp?.storesLocations);
  }

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form from reloading the page
    console.log(formValue);

    // Refresh the page after form submission
    window.location.reload();
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.length > 0 ? (
        list.map((car: any, index: number) => (
          <motion.div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(car)}
          >
            <Image
              src={car.image?.url}
              alt={car.name}
              width={400}
              height={250}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{car.name}</h2>
              <h2 className="text-2xl font-bold mb-3">
                <span className="text-xl font-light">${car.price}</span>
                <span className="text-sm font-light"> /day</span>
              </h2>
              <div className="flex-col justify-between items-center mb-4">
                <div className="flex items-center text-gray-600">
                  <PiSteeringWheelFill className="text-2xl mr-2" />
                  <span className="text-sm font-light">{car.carType}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-5">
                  <FaGasPump className="text-2xl mr-2" />
                  <span className="text-sm font-light">{car.carAvg} MPG</span>
                </div>
              </div>
            </div>
            <motion.button
              className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Rent Now
            </motion.button>
          </motion.div>
        ))
      ) : (
        <div className="col-span-1 text-center text-gray-500 py-4">No cars available</div>
      )}

      <AnimatePresence>
        {selectedCar && (
          <dialog id="my_modal_4" className="modal backdrop-blur-md">
            <motion.div
              className="modal-box w-11/12 max-w-5xl p-6 bg-white/80 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side: Car Information */}
                <div className="w-full lg:w-1/2">
                  <Image
                    src={selectedCar.image?.url}
                    alt={selectedCar.name}
                    width={500}
                    height={300}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                  <div className="mt-4">
                    <h2 className="text-2xl font-semibold">{selectedCar.name}</h2>
                    <p className="text-xl font-light mt-2">{selectedCar.carType}</p>
                    <p className="text-xl font-light mt-2">{selectedCar.carBrand}</p>
                    <p className="text-xl font-light mt-2">{selectedCar.carAvg} MPG</p>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-lg font-bold">Book Your Car</h3>
                  <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="relative">
                      <select
                        className="input input-bordered w-full rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                        defaultValue=""
                        name="location"
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select Pickup Location</option>
                        {storeLocation && storeLocation.map((loc: any, index: number) => (
                          <option key={index} value={loc?.address}>{loc?.address}</option>
                        ))}
                      </select>
                    </div>

                    <input
                      onChange={handleChange}
                      name="pickupDate"
                      type="date"
                      placeholder="Pickup Date"
                      className="input input-bordered w-full rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      onChange={handleChange}
                      name="dropOffDate"
                      type="date"
                      placeholder="Drop Date"
                      className="input input-bordered w-full rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      name="pickupTime"
                      onChange={handleChange}
                      type="time"
                      placeholder="Pick Time"
                      className="input input-bordered w-full rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      name="dropOffTime"
                      onChange={handleChange}
                      type="time"
                      placeholder="Drop Time"
                      className="input input-bordered w-full rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      name="contactNumber"
                      onChange={handleChange}
                      type="text"
                      placeholder="Contact Number"
                      className="input input-bordered w-full rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                    />
                    <motion.button
                      type="submit"
                      className="btn bg-gradient-to-r from-purple-600 to-blue-500 text-white w-full py-3 rounded-lg shadow-lg mt-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      Submit
                    </motion.button>
                  </form>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => (document.getElementById('my_modal_4') as any).close()}
              >
                &#x2715;
              </button>
            </motion.div>
          </dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarsList;
