import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            KreaZcy
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition">About</Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Building the Future of
          <span className="block text-blue-400 mt-2">Microservices</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          KreaZcy is a comprehensive ecosystem of microservices, shared libraries, and tools
          for building scalable, production-ready applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">7</div>
            <div className="text-gray-300">Active Services</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">10</div>
            <div className="text-gray-300">Shared Libraries</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime SLA</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'InterakZcy', desc: 'WhatsApp chatbot platform with AI & n8n integration' },
            { name: 'RekogniZcy', desc: 'Authentication service with JWT & RBAC' },
            { name: 'AfiliaZcy', desc: 'Affiliate tracking and management' },
            { name: 'NotifikaZcy', desc: 'Multi-channel notifications (Email, WA, WebSocket)' },
            { name: 'ProgreZcy', desc: 'Progress tracking and queue management' },
            { name: 'EksploraZcy', desc: 'RSS feed aggregator with Kafka support' },
          ].map((service, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition">
              <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="text-blue-400 hover:text-blue-300 font-semibold">
            View All Services →
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">Subscribe to our newsletter for the latest updates and releases.</p>
          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2026 KreaZcy. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/KreaZcy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
