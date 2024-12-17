import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { zoomInVariants, slideUpVariants } from "../Utils/Motion";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

function Home_innerfive() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs
    .sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )

      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Email sending failed: ", error.text);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <body className="bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <section className="bg-red-600 text-white text-center py-20">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="text-4xl font-bold"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="mt-2 text-xl"
        >
          We'd love to hear from you!
        </motion.p>
      </section>

      {/* Form Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <motion.h2
          className="text-3xl font-semibold text-center text-red-600 mb-8"
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
        >
          Get in Touch
        </motion.h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label
              htmlFor="message"
              className="text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message"
              required
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.section>

      {/* Footer Section */}
      <footer className="bg-red-600 text-white text-center py-6">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className=" justify-center mt-2">
          <p>Phone: 08033099170</p>
          <p className="">email: akanhils@gmail.com</p>
        </div>
      </footer>

      {/* Toast Notification Container */}
      <ToastContainer />
    </body>
  );
}

export default Home_innerfive;
