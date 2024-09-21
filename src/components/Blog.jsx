// Blog.js
import React, { useState } from 'react';
import Modal from 'react-modal';

// Set app element for accessibility
Modal.setAppElement('#root');

const Blog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      title: 'Understanding React Hooks',
      date: 'August 25, 2023',
      description: 'A comprehensive guide on how to use React Hooks in functional components. Learn how to manage state and side effects without the need for class components.',
      content: 'React Hooks are a powerful feature introduced in React 16.8 that allow developers to use state and other React features without writing class components. They enable functional components to manage state and side effects, leading to more concise and readable code. In this article, we will explore what React Hooks are, how they work, and some common use cases. React Hooks are JavaScript functions that let you "hook into" React state and lifecycle features from functional components. Before Hooks, functional components were stateless and could only receive props. Hooks allow functional components to manage local component state, perform side effects, and more, without needing to use class components.',
    },
    {
      title: 'UI/UX Design Principles',
      date: 'September 10, 2023',
      description: 'A comprehensive overview of the fundamental principles of UI/UX design. Learn how to improve user experience and make designs more effective and appealing.',
      content: 'UI/UX design is crucial in creating applications and websites that are not only visually appealing but also user-friendly and efficient. Good design enhances user experience, making interactions seamless and intuitive. In this article, we will explore fundamental UI/UX design principles that can help you create effective and engaging user interfaces. User-Centric Design Focus on the User: Always design with the user in mind. Understand your target audience, their needs, and their pain points. Use personas and user journey maps to guide your design decisions. Usability Testing: Regularly test your designs with real users to gather feedback and make necessary adjustments. This helps ensure that the design meets user needs and expectations. Consistency Visual Consistency: Maintain a consistent visual language throughout your design. Use uniform colors, fonts, and spacing to create a cohesive look and feel.',
    },
    {
      title: 'How to Improve Website Performance',
      date: 'September 15, 2023',
      description: 'Strategies and techniques for improving the performance of your website, from optimizing load times to reducing file sizes and using performance analysis tools.',
      content: 'Website performance can be improved by implementing various strategies such as optimizing images, minimizing HTTP requests, and leveraging browser caching. Tools like Google PageSpeed Insights and GTmetrix can help analyze performance and provide recommendations for improvements. Ensuring that your website loads quickly and runs efficiently enhances user satisfaction and SEO.',
    },
    {
      title: 'Best Practices in Web Development',
      date: 'September 20, 2023',
      description: 'A collection of best practices in web development to ensure clean, maintainable code, including project organization, code reuse, and user experience.',
      content: 'Best practices in web development include following coding standards, using version control, and writing clean, modular code. Proper project organization and adherence to design patterns help maintain code quality and facilitate collaboration. Focusing on user experience ensures that applications are intuitive and easy to use.',
    }
  ];

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedArticle(null);
  };

  return (
    <section id="blog" className="bg-[#1b1c1d] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d2ac47] via-[#f7ef8a] to-[#ae8625] animate-gradient">
          Blog & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(article)}
            >
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{article.date}</p>
              <p className="text-base mb-4">{article.description}</p>
              <a 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent opening modal twice
                  openModal(article);
                }}
                className="text-[#d2ac47] underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying full article */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Article Modal"
        className="fixed inset-0 bg-gray-900 text-white p-6 rounded-lg max-w-3xl mx-auto my-8 overflow-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        {selectedArticle && (
          <>
            <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{selectedArticle.date}</p>
            <p className="text-base mb-4">{selectedArticle.content}</p>
            <button
              onClick={closeModal}
              className="bg-[#d2ac47] text-white py-2 px-4 rounded hover:bg-[#f7ef8a]"
            >
              Close
            </button>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Blog;
