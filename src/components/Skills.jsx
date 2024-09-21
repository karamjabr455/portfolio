import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import SkillGraph from './SkillGraph';

const Skills = () => {
  const programmingLanguages = [
    { name: 'HTML', icon: <FaHtml5 className="text-red-500 text-4xl" />, level: 100 },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 80 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-4xl" />, level: 90 },
  ];

  const frameworks = [
    { name: 'React', icon: <FaReact className="text-blue-400 text-4xl" />, level: 75 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-4xl" />, level: 75 },
  ];

  return (
    <div className="min-h-screen bg-[#1b1c1d] text-white py-12 w-full mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625]">مهاراتي</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
        <div className="space-y-4 w-full md:w-1/2">
          {/* قسم لغات البرمجة */}
          <h3 className="text-3xl font-semibold mb-4">لغات البرمجة</h3>
          {programmingLanguages.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }} // البداية
              whileInView={{ opacity: 1, y: 0 }} // عند الظهور
              transition={{ duration: 0.5, delay: index * 0.1 }} // مدة التأثير
              viewport={{ once: false }} // يسمح بالتكرار عند التمرير
              className="flex items-center"
            >
              {skill.icon}
              <div className="ml-4 w-full">
                <h3 className="text-lg">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                  <div className="bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] h-4 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* قسم أطر العمل */}
          <h3 className="text-3xl font-semibold mb-4">أطر العمل</h3>
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, y: 20 }} // البداية
              whileInView={{ opacity: 1, y: 0 }} // عند الظهور
              transition={{ duration: 0.5, delay: index * 0.1 }} // مدة التأثير
              viewport={{ once: false }} // يسمح بالتكرار عند التمرير
              className="flex items-center"
            >
              {framework.icon}
              <div className="ml-4 w-full">
                <h3 className="text-lg">{framework.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                  <div className="bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] h-4 rounded-full" style={{ width: `${framework.level}%` }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* المخطط الشبكي */}
        <div className="w-full md:w-1/2">
          <SkillGraph />
        </div>
      </div>
    </div>
  );
};

export default Skills;
