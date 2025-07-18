import React from 'react'
import MainName from '../components/MainName'

function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] bg-cover bg-center text-gray-800 pb-16 text-sm font-[Poppins] px-4 md:px-12 py-12 space-y-12">
            <MainName/>
  {/* About */}
  <section className="max-w-4xl mt-20 w-full">
    <h2 className="text-2xl font-semibold mb-4">About Dammzoo</h2>
    <p>
      Welcome to <strong>Dammzoo</strong> — where conversations aren't just smart, they're *human*. We created Dammzoo so you can talk to unique AI-powered personalities that feel alive, weird, relatable, or just plain wild. Whether you're here to laugh, vent, think, or escape — someone's always listening at Dammzoo.
    </p>
    <p className="mt-2">Founded by <strong><a href="https://www.linkedin.com/in/meankit18/">Ankit Kumar</a></strong>, Dammzoo blends tech, emotion, and entertainment in a way chat has never felt before.</p>
  </section>

</div>

  )
}

export default AboutPage
