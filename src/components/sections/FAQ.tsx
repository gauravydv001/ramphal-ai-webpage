export const FAQ = () => {
  const faqs = [
    {
      q: "When will Ramphal AI launch?",
      a: "We're currently in testing phase with @it_just_one and plan to launch soon!"
    },
    {
      q: "How does auto-posting work?",
      a: "Our AI analyzes optimal posting times and automatically schedules your content."
    },
    {
      q: "Is it safe to use?",
      a: "Yes! We follow all Instagram guidelines and best practices."
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <h3 className="font-bold mb-2">{faq.q}</h3>
            <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};