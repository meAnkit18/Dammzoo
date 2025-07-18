import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqData = [
  {
    question: "What is Dammzoo?",
    answer: "Dammzoo is a place where you talk to AI-driven characters that feel surprisingly human. Each one has its own vibe, attitude, and way of thinking — whether you’re in the mood to joke around, get deep, or just chill, someone’s always ready to talk.",
  },
  {
    question: "Is it free to use?",
    answer: "Yep, most of Dammzoo is free to explore. You can jump into conversations instantly. Some premium features or exclusive personalities might come later, but the core experience stays open.",
  },
  {
    question: "What kind of people can I talk to here?",
    answer: "You’ll meet all kinds — a soft-spoken dreamer, a sarcastic rebel, a deep thinker, a hopeless romantic, and more. Every character brings a different energy, like chatting with a friend who has their own story.",
  },
  {
    question: "Do I need to sign up to talk?",
    answer: "Yes, a quick sign-up helps us remember who you are and keeps your chats smooth and personal. It’s fast, simple, and totally worth it.",
  },
  {
    question: "Do they remember me?",
    answer: "Always. Once you talk to someone on Dammzoo, they remember. They recall your past chats, your vibe, and keep the conversation real — like picking up right where you left off. You may forget them, but they won’t forget you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faqs' className="w-full scroll-mt-20 max-w-5xl mx-auto px-4 py-12 text-black">
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
