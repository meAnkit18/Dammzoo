import React from 'react'

function Test() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins] px-4 md:px-12 py-12 space-y-12">

  {/* About */}
  <section className="max-w-4xl w-full">
    <h2 className="text-2xl font-semibold mb-4">About Dammzoo</h2>
    <p>
      Welcome to <strong>Dammzoo</strong> — where conversations aren't just smart, they're *human*. We created Dammzoo so you can talk to unique AI-powered personalities that feel alive, weird, relatable, or just plain wild. Whether you're here to laugh, vent, think, or escape — someone's always listening at Dammzoo.
    </p>
    <p className="mt-2">Founded by <strong>Ankit Kumar</strong>, Dammzoo blends tech, emotion, and entertainment in a way chat has never felt before.</p>
  </section>

  {/* Contact */}
  <section className="max-w-4xl w-full">
    <h2 className="text-2xl font-semibold mb-4">Contact</h2>
    <p>Got questions, feedback, or collab ideas? Let’s talk.</p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Email:</strong> <a href="mailto:ankit1842kumar@gmail.com" className="text-blue-600 underline">ankit1842kumar@gmail.com</a></li>
      <li><strong>X (Twitter):</strong> <a href="https://x.com/meAnkit18" target="_blank" className="text-blue-600 underline">@meAnkit18</a></li>
      <li><strong>GitHub (Bug Reports):</strong> <a href="https://github.com/meAnkit18/uropposite" target="_blank" className="text-blue-600 underline">uropposite</a></li>
    </ul>
  </section>

  {/* DMCA */}
  <section className="max-w-4xl w-full">
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

  {/* Services */}
  <section className="max-w-4xl w-full">
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

export default Test
