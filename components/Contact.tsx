'use client';

import React, { FormEvent, useState } from 'react';
import 'animate.css';

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "792fdabe-42fb-43c5-a7d9-ab94ed97a182");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto mt-10 space-y-8">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 space-y-4 animate__animated animate__fadeIn animate__delay-1s">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Send us a message
        </h3>
        <p className="text-gray-600 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
          Feel free to reach out through the contact form or find our contact 
          information below. Your feedback, questions, and suggestions are important to us.
        </p>
        <ul className="space-y-3 text-gray-800 animate__animated animate__fadeIn animate__delay-3s">
          <li className="flex items-center space-x-3">
            <span className="text-blue-600 font-medium">Email:</span>
            <span>RentCar@gmail.com</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-600 font-medium">Phone:</span>
            <span>+92 123-456-789</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-600 font-medium">Address:</span>
            <span>Dummy Address</span>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 animate__animated animate__fadeIn animate__delay-4s">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor='name' className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id='name'
              name='name'
              placeholder='Enter Your Name'
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor='phone' className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id='phone'
              name='phone'
              placeholder='Enter Your Phone Number'
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor='message' className="block text-sm font-medium text-gray-700">Write Your Message</label>
            <textarea
              id='message'
              name="message"
              rows={6}
              placeholder='Enter Your Message'
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            ></textarea>
          </div>

          <button
            type='submit'
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
        <span className="block mt-4 text-center text-gray-800">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
