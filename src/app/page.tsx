'use client';
import { useState } from 'react';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { WaitlistModal } from '@/components/forms/WaitlistForm';
import { FAQ } from '@/components/sections/FAQ';
import { Features } from '@/components/sections/Features';
import { Footer } from '@/components/layout/Footer';
import { FeedbackForm } from '@/components/forms/FeedbackForm';
import { ContactForm } from '@/components/forms/ContactForm';


export default function Page() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <nav className="bg-white dark:bg-gray-800 shadow-lg p-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">Ramphal AI</span>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      <WaitlistModal isOpen={isWaitlistOpen} setIsOpen={setIsWaitlistOpen} />

      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">AI-Powered social media Management</h1>
          <p className="text-xl mb-8">Managing @it_just_one Instagram account</p>
          <button 
            onClick={() => setIsWaitlistOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Join Waitlist
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <Features />
          <FAQ />
          <FeedbackForm />
          <ContactForm />
        </div>
        
      </div>

      <Footer />
    </div>
  );
}