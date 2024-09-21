// components/About.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import madsolutionCertificate from '../images/لقطة الشاشة 2024-09-17 081221.png';
import thankYouCard1 from '../images/لقطة ال11111406.png';
import thankYouCard2 from '../images/لقطة الشاشة 2024-1111111111111111-17 081513.png';
import thankYouCard3 from '../images/Karam jabr.png';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="about" className="min-h-screen bg-[#1b1c1d] text-gray-300 py-10 mt-20 rtl">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* مقدمة القسم */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            نبذة عني
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            أنا مطور ويب متخصص في تصميم وتطوير واجهات المستخدم. أعمل على خلق تجارب ويب فريدة وجذابة من خلال الابتكار والاهتمام بالتفاصيل.
          </motion.p>
        </motion.section>

        {/* قسم المهارات والخبرة بتنسيق زمني */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625]">
            المهارات والخبرة
          </h3>
          <div className="timeline-container mx-auto">
            <div className="timeline-item text-center">
              <div className="timeline-content mx-auto">
                <h4>2023 - حتى الآن</h4>
                <p>HTML، CSS، JavaScript، React، tailwind CSS. خبرة في</p>
              </div>
            </div>
            {/* أضف المزيد من العناصر الزمنية هنا */}
          </div>
        </motion.section>

        {/* قسم القيم والأهداف */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625]">
            القيم والأهداف
          </h3>
          <p className="max-w-2xl mx-auto">
            هدفي هو تقديم حلول ويب عالية الجودة وخلق تجارب مستخدم فريدة. أؤمن بالابتكار والاهتمام بالتفاصيل في كل مشروع أعمل عليه، وأطمح لتحقيق تغيير إيجابي من خلال تطوير الويب.
          </p>
        </motion.section>

        {/* قسم الشهادات مع معرض تفاعلي */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625]">
            الشهادات والتدريب
          </h3>
          <div className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            {/* صورة شهادة Madsolution */}
            <div className="gallery-item relative overflow-hidden rounded-lg border-4 border-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] shadow-lg transition-transform transform hover:scale-105 mx-auto">
              <img
                src={madsolutionCertificate}
                alt="Madsolution Certificate"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(madsolutionCertificate)}
              />
            </div>
            {/* بطاقات الشكر */}
            <div className="gallery-item relative overflow-hidden rounded-lg border-4 border-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] shadow-lg transition-transform transform hover:scale-105 mx-auto">
              <img
                src={thankYouCard1}
                alt="Thank You Card 1"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(thankYouCard1)}
              />
            </div>
            <div className="gallery-item relative overflow-hidden rounded-lg border-4 border-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] shadow-lg transition-transform transform hover:scale-105 mx-auto">
              <img
                src={thankYouCard2}
                alt="Thank You Card 2"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(thankYouCard2)}
              />
            </div>
            <div className="gallery-item relative overflow-hidden rounded-lg border-4 border-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] shadow-lg transition-transform transform hover:scale-105 mx-auto">
              <img
                src={thankYouCard3}
                alt="Thank You Card 3"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(thankYouCard3)}
              />
            </div>
          </div>
        </motion.section>
      </div>

      {/* نافذة العرض المنبثقة */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-screen object-contain" />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full p-2"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
