import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6 text-center animate-fade-in">
        About Us
      </h1>
      <p className="text-lg leading-relaxed mb-6 animate-slide-in-left">
        Welcome to our company! We are dedicated to providing the best services to our customers.
        Our mission is to deliver high-quality products and exceptional customer service.
        We believe in innovation, integrity, and commitment to excellence.
      </p>
      <p className="text-lg leading-relaxed animate-slide-in-right">
        Founded in [Year], we have grown from a small startup to a leading company in our industry.
        Our team consists of passionate professionals who are always ready to go the extra mile to meet our customers' needs.
      </p>

      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg animate-slide-in-left">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg">Innovation: We continuously seek new ways to improve and grow.</li>
          <li className="text-lg">Integrity: We maintain the highest ethical standards in all our actions.</li>
          <li className="text-lg">Commitment: We are dedicated to achieving our goals and exceeding customer expectations.</li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-1/2 animate-slide-in-left">
          <h3 className="text-xl font-semibold mb-4">Our History</h3>
          <p className="text-lg leading-relaxed">
            Since our founding in 2010, we have achieved significant milestones and continuously evolved to meet the needs of our customers. Our journey is a testament to our dedication and perseverance.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-1/2 animate-slide-in-right">
          <h3 className="text-xl font-semibold mb-4">Our Team</h3>
          <p className="text-lg leading-relaxed">
            Our team is comprised of skilled professionals who bring diverse experiences and expertise to the table. We work collaboratively to achieve our goals and provide exceptional service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
