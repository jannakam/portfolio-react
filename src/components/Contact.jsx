import React, { useState } from 'react'
import { Button, Input, Textarea } from '@nextui-org/react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-8">Contact</h1>
      
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to new opportunities and collaborations.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Feel free to reach out using the form below or email me directly at{' '}
            <a href="mailto:your.email@example.com" className="text-[#B76D68] hover:underline">
              your.email@example.com
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              type="text"
              label="Name"
              placeholder="Your name"
              value={formData.name}
              onValueChange={(value) => handleInputChange('name', value)}
              classNames={{
                base: "w-full",
                input: "text-gray-800 dark:text-white",
                inputWrapper: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600",
                label: "text-gray-600 dark:text-gray-300"
              }}
              required
            />
            
            <Input
              type="email"
              label="Email"
              placeholder="your.email@example.com"
              value={formData.email}
              onValueChange={(value) => handleInputChange('email', value)}
              classNames={{
                base: "w-full",
                input: "text-gray-800 dark:text-white",
                inputWrapper: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600",
                label: "text-gray-600 dark:text-gray-300"
              }}
              required
            />
          </div>

          <Textarea
            label="Message"
            placeholder="Tell me about your project or just say hello!"
            value={formData.message}
            onValueChange={(value) => handleInputChange('message', value)}
            minRows={4}
            classNames={{
              base: "w-full",
              input: "text-gray-800 dark:text-white",
              inputWrapper: "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600",
              label: "text-gray-600 dark:text-gray-300"
            }}
            required
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="bg-[#B76D68] hover:bg-[#A55B56] text-white font-semibold px-8 py-3 transition-colors duration-200"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact