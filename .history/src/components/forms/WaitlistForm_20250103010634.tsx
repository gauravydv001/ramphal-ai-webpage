import { Dialog } from '@headlessui/react';
import { useState } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const WaitlistModal = ({ isOpen, setIsOpen }: WaitlistModalProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Added to waitlist!');
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white dark:bg-gray-800 p-6">
          <Dialog.Title className="text-xl font-bold mb-4">Join Waitlist</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Join Now
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};