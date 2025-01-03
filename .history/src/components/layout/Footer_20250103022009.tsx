export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Ramphal AI</h3>
          <p className="text-gray-400">Automating meme management and social media presence with AI</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><button className="text-gray-400 hover:text-white">Features</button></li>
            <li><button className="text-gray-400 hover:text-white">FAQ</button></li>
            <li><button className="text-gray-400 hover:text-white">Contact</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><button className="text-gray-400 hover:text-white">Privacy Policy</button></li>
            <li><button className="text-gray-400 hover:text-white">Terms of Service</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://instagram.com/itjustone" className="text-gray-400 hover:text-white">
              @itjustone
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);