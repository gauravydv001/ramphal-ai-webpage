export const FeedbackForm = () => (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">@it_just_one Testing Feedback</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2  ">Type</label>
            <select className="w-full p-2 border rounded  bg-gray-800 ">
              <option>Bug Report</option>
              <option>Feature Request</option>
              <option>Complaint</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Instagram Account</label>
            <input type="text" className="w-full p-2 border rounded bg-gray-800" placeholder="@youraccount"  />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 border rounded bg-gray-800" rows={4} />
          </div>
          <button 
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
            onClick={(e) => {
              e.preventDefault();
              alert('Feedback submitted!');
            }}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );