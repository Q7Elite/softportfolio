import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importing the WhatsApp icon

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mleqqggl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div id="contact" className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <p className="heading__mini">Get in touch</p>
          <h1 className="heading__primary">
            Let's make your <span>Brand</span> brilliant
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            Feel free to contact me anytime of the day. I will be ready to serve
            you.
          </p>
          <a
            href="tel:+254722367989"
            className="block mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold"
          >
            +254 722367989
          </a>
          {/* WhatsApp Icon Link */}
          <a
            href="https://wa.me/254722367989" // Add your WhatsApp number here
            className="mt-[1rem] text-[30px] text-green-500 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" /> Chat with me on WhatsApp
          </a>
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="py-[0.7rem] mb-[1.5rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="py-[0.7rem] mb-[1.5rem] rounded-md w-full outline-none text-white bg-gray-800 px-4"
            ></textarea>
            <button
              type="submit"
              className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4"
            >
              Send me email
            </button>
          </form>
          {status && <p className="text-white mt-2">{status}</p>}
        </div>
      </div>
      {/* Google Map Embed */}
      <div className="w-[80%] mx-auto mt-[2rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.1760537988!2d36.805918880227345!3d-1.2667016000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1748eaae0f83%3A0x6c9078a33a5f7b68!2sWestlands%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1626214187387!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
