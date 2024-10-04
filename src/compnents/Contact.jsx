import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server)
    console.log('Form data submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24 bg-slate-100 pt-36">
      {/* Contact Info */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-500">
          Have any questions? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Details and Form */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Contact Details */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md border space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600">Feel free to reach out via the form or through the contact details below.</p>
          <div className="space-y-2">
            <p className="font-semibold">Email:</p>
            <p>support@EStore.com</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Phone:</p>
            <p>+1 234 567 890</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Address:</p>
            <p>123 E-commerce St, Online City</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md py-2 border px-3"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md py-2 border px-3"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md py-2 border px-3"
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12 h-72 lg:h-96 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509093!2d144.9537353153169!3d-37.816279742021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b7b317a8ef0!2sEureka%20Tower!5e0!3m2!1sen!2sus!4v1626143487642!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
