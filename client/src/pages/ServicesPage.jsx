import React from 'react'
import MainName from '../components/MainName'

function ServicesPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins] px-4 md:px-12 py-12 space-y-12">
            <MainName/>
             <section className="max-w-4xl mt-20 w-full">
    <h2 className="text-2xl font-semibold mb-4">Services</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>💬 Chat with unique AI characters that feel human</li>
      <li>🧠 Deep convos, funny banter, emotional support — whatever you need</li>
      <li>🎭 Personalities with memory — they remember your chats</li>
      <li>🔒 Save your history (when signed in)</li>
      <li>🎙️ Coming soon: voice chat, custom characters & more</li>
    </ul>
    <p className="mt-2">Dammzoo is always growing. This is just the beginning.</p>
  </section>

    </div>
  )
}

export default ServicesPage
