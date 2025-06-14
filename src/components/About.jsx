import React from 'react'

function About() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-8">About Me</h1>
      <div className="max-w-3xl text-center">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          I'm a passionate software developer with expertise in full-stack development, UI/UX design, and application development.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          My journey in technology has equipped me with a diverse skill set and a deep understanding of modern development practices.
        </p>
      </div>
    </div>
  )
}

export default About