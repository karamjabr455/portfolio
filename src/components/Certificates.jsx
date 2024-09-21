// Certificates.js
import React, { useState } from 'react';
import madsolutionLogo from '../images/تصميم بدون عنوان.png'; // استيراد شعار مادسلوشن
import trainingCertificate from '../images/لقطة الشاشة 2024-09-17 081221.png'; // استيراد صورة شهادة التدريب
import thankYouCard1 from '../images/لقطة ال11111406.png'; // استيراد صورة بطاقة الشكر الأولى
import thankYouCard2 from '../images/لقطة الشاشة 2024-1111111111111111-17 081513.png'; // استيراد صورة بطاقة الشكر الثانية
import thankYouCard3 from '../images/Karam jabr.png'; // استيراد صورة بطاقة الشكر الثالثة

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null); // للتحكم في عرض الصورة

  const trainings = [
    {
      title: 'Madsolution Training Program',
      date: 'July 2024',
      description: 'Completed a comprehensive training program with Madsolution, covering advanced web development.',
      logo: madsolutionLogo,
      certificate: trainingCertificate
    }
  ];

  const thankYouCards = [
    {
      image: thankYouCard1,
      description: 'Thank you card 1 - Appreciation for the hard work and dedication.'
    },
    {
      image: thankYouCard2,
      description: 'Thank you card 2 - Recognition for excellence in the training program.'
    },
    {
      image: thankYouCard3,
      description: 'Thank you card 3 - Special thanks for outstanding performance.'
    }
  ];

  return (
    <section id="certificates" className="bg-[#1b1c1d] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] animate-gradient">
          Training & Achievements
        </h2>
        
        {/* تدريبات */}
        <div className="mb-12">
          {trainings.map((training, index) => (
            <div key={index} className="bg-[#1b1c1d] p-6 rounded-lg shadow-lg mb-8">
              <div className="flex items-center mb-4">
                <img src={training.logo} alt="Madsolution Logo" className="w-16 h-16 mr-4" />
                <h3 className="text-xl font-semibold">{training.title}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">{training.date}</p>
              <p className="text-base mb-4">{training.description}</p>
              <div className="w-full overflow-hidden rounded-lg flex justify-center">
                <img 
                  src={training.certificate} 
                  alt="Training Certificate" 
                  className="w-3/4 h-auto max-w-xs border-4 border-[#f7ef8a] rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer" 
                  onClick={() => setSelectedImage(training.certificate)} // لفتح الصورة عند النقر
                />
              </div>
            </div>
          ))}
        </div>

        {/* بطاقات الشكر */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">Thank You Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thankYouCards.map((card, index) => (
              <div key={index} className="w-full overflow-hidden rounded-lg">
                <img 
                  src={card.image} 
                  alt={`Thank You Card ${index + 1}`} 
                  className="w-full h-auto border-4 border-[#f7ef8a] rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer" 
                  onClick={() => setSelectedImage(card.image)} // لفتح الصورة عند النقر
                />
                <p className="text-center mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* نافذة عرض الصورة */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // لإغلاق الصورة عند النقر
        >
          <div className="relative max-w-3xl mx-auto">
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg" />
            <button 
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2"
              onClick={() => setSelectedImage(null)} // لإغلاق الصورة عند النقر على الزر
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
