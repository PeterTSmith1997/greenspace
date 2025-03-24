import React from 'react'
import './App.css'

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-96 text-white flex items-center justify-center" style={{ backgroundImage: 'url(src/assets/485896341_122162071940327815_577358676250575738_n.jpg)' }}>
        <div className="text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold">Protect Walbottle Greenspace</h1>
          <p className="mt-4 text-lg">Help us preserve our natural beauty from industrial solar developments.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center">Preserving Our Natural Landscape</h2>
        <p className="mt-6 text-xl text-center max-w-2xl mx-auto">
          Walbottle Greenspace is a stunning natural area used for agriculture, walking, and local recreation. It's home to diverse wildlife and historical sites, serving as a vibrant, semi-rural sanctuary. Proposed industrial solar developments threaten to replace this beautiful space with fields of glass, undermining its environmental and cultural value.
        </p>
      </section>

      {/* Community Protection Section */}
      <section id="community-protection" className="py-12 px-6 bg-green-100">
        <h2 className="text-3xl font-bold text-center">Why We Must Protect This Area</h2>
        <ul className="mt-6 text-xl text-center max-w-3xl mx-auto space-y-4">
          <li>Maintain the rich biodiversity including deer, foxes, and various bird species.</li>
          <li>Ensure the preservation of historic sites and local nature reserves.</li>
          <li>Support local farmers and agricultural activities that sustain the community.</li>
          <li>Preserve safe spaces for recreation like walking, cycling, and horseback riding.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Walbottle Greenspace. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://facebook.com" className="text-white mx-4">Facebook</a>
            <a href="https://instagram.com" className="text-white mx-4">Instagram</a>
            <a href="https://twitter.com" className="text-white mx-4">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
