import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqData = [
  {
    question: "What is PrebuiltUI?",
    answer: "PrebuiltUI provides modern, reusable UI components built with Tailwind CSS to speed up your development workflow.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes! PrebuiltUI offers free components. However, premium components may be available in future.",
  },
  {
    question: "Can I use it in commercial projects?",
    answer: "Absolutely. You're free to use it in both personal and commercial projects.",
  },
  {
    question: "Do I need to install anything?",
    answer: "No installation is needed. Just copy and paste the code into your Tailwind project.",
  },
  {
    question: "Is it mobile responsive?",
    answer: "Yes, all components are designed with responsive layouts using Tailwind's utility classes.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 text-black">
      <h2 className="text-2xl md:text-2xl text-center font-medium max-w-1xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-white/10 bg-white/5 backdrop-blur p-4 rounded-xl transition duration-300 hover:scale-[1.01]"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full text-left font-medium text-lg transition-all duration-300"
            >
              <span>{faq.question}</span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl font-bold"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-2 text-black/80">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
