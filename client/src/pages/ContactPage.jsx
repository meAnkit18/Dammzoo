import React from 'react'
import MainName from '../components/MainName'

function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins] px-4 md:px-12 py-12 space-y-12">
            <MainName/>
  
          <section className="max-w-4xl mt-20 w-full">
    <h2 className="text-2xl font-semibold mb-4">Contact</h2>
    <p>Got questions, feedback, or collab ideas? Let’s talk.</p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Email:</strong> <a href="mailto:ankit1842kumar@gmail.com" className="text-blue-600 underline">ankit1842kumar@gmail.com</a></li>
      <li><strong>X (Twitter):</strong> <a href="https://x.com/meAnkit18" target="_blank" className="text-blue-600 underline">@meAnkit18</a></li>
      <li><strong>GitHub (Bug Reports):</strong> <a href="https://github.com/meAnkit18/uropposite" target="_blank" className="text-blue-600 underline">uropposite</a></li>
    </ul>
  </section>
    </div>
  )
}

export default ContactPage
