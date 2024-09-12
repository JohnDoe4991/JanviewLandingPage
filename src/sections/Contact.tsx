"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Success message component
const SuccessMessage = () => (
  <div className="p-6 bg-green-100 text-green-800 rounded-lg shadow-lg transform transition-all duration-300 scale-105">
    <h3 className="text-2xl font-bold mb-2 text-center">Email Sent!</h3>
    <p className="text-center">Thank you for reaching out. We will get back to you soon!</p>
  </div>
);

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to send the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#D2DCFF] to-white py-24 px-5">
      <div className="container mx-auto max-w-2xl bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>


        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#D4DDFF]"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#D4DDFF]"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#D4DDFF]"
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
        )}
      </div>
    </section>
  );
};
