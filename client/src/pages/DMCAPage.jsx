import React from 'react'
import MainName from '../components/MainName'

function DMCAPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins] px-4 md:px-12 py-12 space-y-12">
            <MainName/>
          <section className="max-w-4xl mt-20 w-full">
    <h2 className="text-2xl font-semibold mb-4">DMCA Policy</h2>
    <p>
      Dammzoo respects intellectual property rights. If you believe content on this site infringes your copyright, send a proper DMCA takedown notice to:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Email:</strong> <a href="mailto:ankit1842kumar@gmail.com" className="text-blue-600 underline">ankit1842kumar@gmail.com</a></li>
      <li>Include your name, contact, content URL, proof of ownership, and a sworn statement under penalty of perjury.</li>
    </ul>
    <p className="mt-2">We'll act quickly — just be legit.</p>
  </section>

    </div>
  )
}

export default DMCAPage
