import { CheckCircle } from 'lucide-react';

export const Features = () => (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Auto Posting',
              description: 'Schedule and automate your meme posts for optimal engagement'
            },
            {
              title: 'Smart Replies',
              description: 'AI-powered comment management and automated responses'
            },
            {
              title: 'Analytics',
              description: 'Track performance and growth with detailed insights'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );