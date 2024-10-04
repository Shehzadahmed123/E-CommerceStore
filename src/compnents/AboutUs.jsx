import React from 'react';

const AboutUs = () => {
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24 bg-slate-100 pt-36">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-500">
          Welcome to E-Store! Your one-stop shop for everything you need, from fashion to tech.
        </p>
      </div>

      {/* Story Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            At E-Store, we started with a simple idea: to bring a seamless online shopping
            experience to customers worldwide. Our journey began in 2021, and since then,
            we’ve worked tirelessly to curate the best products and services for our customers.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Our team is passionate about providing a diverse range of products from top brands,
            ensuring quality, value, and satisfaction in every purchase. Whether it’s electronics,
            fashion, home goods, or beauty products, E-Store is committed to making shopping fun and easy.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/64/16/11/1000_F_364161100_kyFpptUbO5sVtDfEBhBCsAMKOV9x2MRc.jpg" // Replace with your own image URL
            alt="About E-Store"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 mb-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to be the world’s most customer-centric company, creating a place
            where people can find and discover anything they might want to buy online. We aim
            to provide the highest quality products at competitive prices with the best possible
            shopping experience.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            E-Store exists to serve and inspire our customers by offering the best selection
            of products, unbeatable prices, and fast delivery. We strive to exceed expectations
            with every order and every interaction.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/81/21/03/1000_F_281210331_DUn5TlK0N3Wq9aVMQmU3Ytmx3KhFFT0I.jpg"
            alt="Our Mission"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">
              We prioritize the needs of our customers and work to exceed their expectations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              We offer only the highest quality products, ensuring value for your money.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We continuously strive to improve and innovate in all aspects of our business.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We believe in conducting our business with transparency and honesty.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Diversity & Inclusion</h3>
            <p className="text-gray-600">
              We embrace diversity and foster an inclusive environment for all.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We are committed to sustainable business practices for a better tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://as2.ftcdn.net/v2/jpg/09/21/49/25/1000_F_921492560_Mc4Di5qJHPsfnJkuX8IVyhq0MKNcOzsp.webp" 
              alt="Team Member"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://as2.ftcdn.net/v2/jpg/09/65/74/21/1000_F_965742167_IujGESFUoUARMM51Fj3Ce6iskAMfo6ba.jpg" 
              alt="Team Member"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-500">COO</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://as2.ftcdn.net/v2/jpg/04/31/64/75/1000_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg" 
              alt="Team Member"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Robert Brown</h3>
            <p className="text-gray-500">CTO</p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://as2.ftcdn.net/v2/jpg/04/31/64/75/1000_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg" 
              alt="Team Member"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Emily Davis</h3>
            <p className="text-gray-500">Chief Marketing Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
