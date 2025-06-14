import React from 'react'

function Contact() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-8">Contact</h1>
      <div className="max-w-3xl text-center">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          I'm always open to new opportunities and collaborations.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Feel free to reach out to me at <a href="mailto:your.email@example.com" className="text-[#B76D68] hover:underline">your.email@example.com</a>
        </p>
      </div>
    </div>
  )
}

export default Contact