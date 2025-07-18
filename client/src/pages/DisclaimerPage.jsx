import React from 'react'
import MainName from '../components/MainName'

function DisclaimerPage() {
  return (
       <div
       className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins] px-4 md:px-12 py-12 space-y-12">
      <MainName/>
      
      <section className="max-w-4xl mt-20 w-full">
        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          Dammzoo is a fictional chat platform designed purely for entertainment purposes.
          All conversations on this site take place with artificial personalities powered by AI.
          These are not real humans — they are programmed characters meant to simulate different personalities, moods, and styles of speaking.
        </p>

        <p className="mb-4">
          While we aim for an engaging and fun experience, the responses generated can sometimes be unexpected,
          inappropriate, inaccurate, or emotionally charged. Please do not treat any statements made by these characters as factual, medical, legal, or life advice.
        </p>

        <p className="mb-4">
          We encourage users to enjoy Dammzoo responsibly. If you feel uncomfortable during a conversation, please stop the interaction immediately and let us know.
        </p>

        <p className="mb-4">
          By using Dammzoo, you acknowledge that:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>All interactions are with fictional, AI-generated personalities.</li>
          <li>No response should be taken seriously or personally.</li>
          <li>This platform is not a substitute for professional help or advice.</li>
          <li>You use this site at your own discretion and for fun only.</li>
        </ul>

        <p>
          If you encounter harmful content, report it to us at <a href="mailto:ankit1842kumar@gmail.com" className="text-blue-600 underline">ankit1842kumar@gmail.com</a>.
        </p>

        <p className="mt-6 italic text-gray-600">– Ankit Kumar, Founder & CEO of Dammzoo</p>
      </section>
    </div>
  )
}

export default DisclaimerPage
