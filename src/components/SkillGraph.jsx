import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// تفعيل العناصر اللازمة من Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillGraph = () => {
  // إعداد بيانات المخطط الشبكي
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    datasets: [
      {
        label: 'مستوى المهارة',
        data: [100, 80, 90, 75, 75], // القيم لكل مهارة
        backgroundColor: 'rgba(210, 172, 71, 0.2)',
        borderColor: '#d2ac47',
        borderWidth: 2,
        pointBackgroundColor: '#f7ef8a',
        pointBorderColor: '#ae8625',
        pointHoverBackgroundColor: '#ae8625',
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true, max: 100 }, // أقصى قيمة 100
    },
    elements: {
      line: { borderWidth: 3 },
    },
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl text-center text-gray-300 mb-4">مخطط المهارات</h2>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillGraph;
