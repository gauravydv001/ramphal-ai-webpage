export const ContactForm = () => (
    <div className="pt-24 pb-16 ">
      <div className=" mx-auto px-4 bg-gray-800 max-w-5xl rounded-lg shadow pt-24 pb-10">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6 ">
            <div>
              <label className="block  mb-2">Name</label>
              <input type="text" className="w-full p-3 border rounded-lg bg-gray-800" />
            </div>
            <div>
              <label className="block  mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg bg-gray-800" />
            </div>
            <div>
              <label className="block  mb-2">Message</label>
              <textarea className="w-full p-3 border rounded-lg bg-gray-800" rows={4}></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );