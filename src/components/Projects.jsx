import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // لاستيراد الأنيميشن
import projectImage1 from '../images/Minimalist Website Launch Computer Mockup Instagram Post.png'; // استبدل بصور مشاريعك
import projectImage2 from '../images/Red Grey Modern Minimalist Photo Collage New Collection Instagram Post.png'; // استبدل بصور مشاريعك
import projectImage3 from '../images/Learn More.png'; // استبدل بصور مشاريعك
import projectImage4 from '../images/Beige Minimalist Website Building Product Mockup Instagram Post.png'; // استبدل بصور مشاريعك

const projects = [
  {
    id: 1,
    title: 'online-store',
    description: 'متجر الكتروني لبيع الزهور تم إنشاؤه باستخدام موقع React و tailwind متعدد اللغات بالإضافة إلى نقل المنتجات إلى السلة وتحديث أسعارها واحتساب السعر الإجمالي للمنتجات في السلة مع تكاليف الشحن ويتضمن الموقع إضافة طريقة دفع: فيزا أو ماستركارد',
    technologies: ['React', 'Tailwind CSS', 'API'],
    image: projectImage1,
    demoLink: 'https://karamjabr455.github.io/online-store/#/signup',
  },
  {
    id: 2,
    title: 'restaurantKaram',
    description: 'يقدم مطعم كرم تجربة طعام ممتعة مع قائمة تتضمن خيارات التصفية. احجز طاولة باستخدام نموذج الحجز الخاص بنا، والذي يعرض أوقات الفتح والإغلاق في الوقت الفعلي ويوفر بطاقة حجز PDF قابلة للتنزيل. استكشف خلاط المكونات الخاص بنا للحصول على اقتراحات الوصفات بناءً على مكوناتك..',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'API'],
    image: projectImage2,
    demoLink: 'https://karamjabr455.github.io/restaurantKaram/',
  },
  {
    id: 3,
    title: 'Karam-Plaza',
    description: 'متجر لبيع الملابس المتنوعة مع امكانية الفلتر ونقل الى السلة وحذف لمنتجات والتعديل عليها',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: projectImage3,
    demoLink: 'https://karamjabr455.github.io/Karam-Plaza/',
  },
  {
    id: 4,
    title: 'Dream trips',
    description: 'موقع حجوزات سياحية هو موقع تصميمي ويحتوي على سلايدر وهو ايضا موقع متجاوب مع جيمع الشاشات',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: projectImage4,
    demoLink: 'https://karamjabr455.github.io/Dream-trips/',
  },
  // أضف المزيد من المشاريع هنا...
];

// Hook لاكتشاف متى يكون العنصر في الشاشة
const useInView = (options) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

const Projects = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1, // نسبة ظهور العنصر على الشاشة لتشغيل الأنيميشن
  });

  return (
    <div id="projects" className="min-h-screen bg-[#1b1c1d] py-12 px-12">
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] mb-12">
        المشاريع
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.1 }} // تأثير عند التمرير
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 my-2">{project.description}</p>
              <div className="text-gray-500 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] text-gray-900 font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
              >
                عرض المشروع
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
