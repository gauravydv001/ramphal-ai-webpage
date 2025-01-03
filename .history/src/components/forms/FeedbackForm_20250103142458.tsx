import { useState } from 'react';

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    type: 'Bug Report',
    account: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'feedback',
          data: formData
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setFormData({ type: 'Bug Report', account: '', message: '' });
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">@it_just_one Testing Feedback</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2">Type</label>
            <select 
              className="w-full p-2 border rounded bg-gray-800"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            >
              <option>Bug Report</option>
              <option>Feature Request</option>
              <option>Complaint</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Instagram Account</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded bg-gray-800" 
              placeholder="@youraccount"
              value={formData.account}
              onChange={(e) => setFormData({...formData, account: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea 
              className="w-full p-2 border rounded bg-gray-800" 
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
};