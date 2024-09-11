"use client";
import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-[#D2DCFF] to-white py-24 px-5">
      <div className="container mx-auto max-w-2xl bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition duration-200 hover:scale-105"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition duration-200 hover:scale-105"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition duration-200 hover:scale-105"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-6 py-3 w-full md:w-auto rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:bg-indigo-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
