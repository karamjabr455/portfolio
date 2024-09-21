import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'; // للتأثيرات
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // لاستخدام الخريطة

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-[#1b1c1d] py-12 px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] mb-12">
        تواصل معي
      </h2>

      {/* قسم الأيقونات */}
      <motion.div
        className="flex justify-center space-x-8 mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // يجعل التأثير يتكرر عند التمرير
      >
        <a href="mailto:abua33012@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-4xl text-white hover:text-[#d2ac47] transition-transform transform hover:scale-110" />
        </a>
        <a href="tel:+963996369002" target="_blank" rel="noopener noreferrer">
          <FaPhone className="text-4xl text-white hover:text-[#d2ac47] transition-transform transform hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/karam-jabr-622674301/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl text-white hover:text-[#d2ac47] transition-transform transform hover:scale-110" />
        </a>
        <a href="https://github.com/karamjabr455" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl text-white hover:text-[#d2ac47] transition-transform transform hover:scale-110" />
        </a>
      </motion.div>

      {/* نموذج التواصل */}
      <motion.div
        className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }} // يجعل التأثير يتكرر عند التمرير
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-400">الاسم الكامل</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#d2ac47]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">البريد الإلكتروني</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#d2ac47]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">الرسالة</label>
            <textarea
              required
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#d2ac47]"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] text-gray-900 font-bold rounded-full transition-transform transform hover:scale-105"
          >
            إرسال
          </button>
        </form>
      </motion.div>

      {/* قسم الخريطة */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }} // يجعل التأثير يتكرر عند التمرير
      >
        <h3 className="text-2xl text-white text-center mb-6">موقعنا</h3>
        <div className="h-96">
          <MapContainer center={[34.8021, 38.9968]} zoom={13} scrollWheelZoom={false} className="h-full rounded-lg">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[34.8021, 38.9968]}>
              <Popup>نحن هنا</Popup>
            </Marker>
          </MapContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
