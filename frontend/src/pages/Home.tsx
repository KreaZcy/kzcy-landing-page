import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px]"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-600 rounded-full blur-[120px]"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Navigation */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrollY > 50
            ? 'bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-bold tracking-tight">
            KreaZcy
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 relative py-32"
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div
            className={`mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6">
              Building the Future of
              <span className="block text-blue-400 mt-2">Microservices</span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            KreaZcy is a comprehensive ecosystem of microservices, shared libraries, and tools
            for building scalable, production-ready applications.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
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

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">7</div>
            <div className="text-gray-300">Services</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">10</div>
            <div className="text-gray-300">Libraries</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">Go</div>
            <div className="text-gray-300">Backend</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">React</div>
            <div className="text-gray-300">Frontend</div>
          </div>
        </div>
      </section>

      {/* Visual Architecture */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-12">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Workspace box */}
              <rect x="20" y="20" width="360" height="260" rx="8" stroke="#333" strokeWidth="2" fill="none"/>
              <text x="40" y="50" fill="#666" fontSize="14" fontFamily="monospace">go.work</text>

              {/* Libraries section */}
              <rect x="40" y="70" width="140" height="180" rx="4" stroke="#444" strokeWidth="1" fill="#111"/>
              <text x="60" y="95" fill="#888" fontSize="12" fontFamily="monospace">libs/</text>

              {/* Library boxes */}
              <rect x="55" y="110" width="110" height="24" rx="3" fill="#1a1a1a"/>
              <text x="65" y="127" fill="#666" fontSize="10" fontFamily="monospace">kzcy-config</text>

              <rect x="55" y="140" width="110" height="24" rx="3" fill="#1a1a1a"/>
              <text x="65" y="157" fill="#666" fontSize="10" fontFamily="monospace">kzcy-middleware</text>

              <rect x="55" y="170" width="110" height="24" rx="3" fill="#1a1a1a"/>
              <text x="65" y="187" fill="#666" fontSize="10" fontFamily="monospace">kzcy-core</text>

              <rect x="55" y="200" width="110" height="24" rx="3" fill="#1a1a1a"/>
              <text x="65" y="217" fill="#666" fontSize="10" fontFamily="monospace">... (7 more)</text>

              {/* Services section */}
              <rect x="220" y="70" width="140" height="180" rx="4" stroke="#444" strokeWidth="1" fill="#111"/>
              <text x="240" y="95" fill="#888" fontSize="12" fontFamily="monospace">services/</text>

              {/* Service boxes */}
              <rect x="235" y="110" width="110" height="24" rx="3" fill="#1a1a1a"/>
              <text x="245" y="127" fill="#666" fontSize="10" fontFamily="monospace">InterakZcy</text>

              <rect x="235" y="140" width="110" height="24" rx="3" fill="#1a1a1a"/>
              <text x="245" y="157" fill="#666" fontSize="10" fontFamily="monospace">RekogniZcy</text>

              <rect x="235" y="170" width="110" height="24" rx="3" fill="#1a1a1a"/>
              <text x="245" y="187" fill="#666" fontSize="10" fontFamily="monospace">NotifikaZcy</text>

              <rect x="235" y="200" width="110" height="24" rx="3" fill="#1a1a1a"/>
              <text x="245" y="217" fill="#666" fontSize="10" fontFamily="monospace">... (4 more)</text>

              {/* Connection lines */}
              <path d="M 150 122 L 235 122" stroke="#333" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M 150 152 L 235 152" stroke="#333" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M 150 182 L 235 182" stroke="#333" strokeWidth="1" strokeDasharray="4 4"/>
            </svg>
          </div>
          <p className="text-center text-gray-500 text-sm">Shared libraries power all services via replace directives</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl mb-3">💬</div>
              <div className="text-white font-medium">InterakZcy</div>
              <div className="text-gray-500 text-sm mt-1">:1729</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔐</div>
              <div className="text-white font-medium">RekogniZcy</div>
              <div className="text-gray-500 text-sm mt-1">:6970</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📨</div>
              <div className="text-white font-medium">NotifikaZcy</div>
              <div className="text-gray-500 text-sm mt-1">Kafka</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <div className="text-white font-medium">ProgreZcy</div>
              <div className="text-gray-500 text-sm mt-1">WebSocket</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔍</div>
              <div className="text-white font-medium">EksploraZcy</div>
              <div className="text-gray-500 text-sm mt-1">:5300</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏢</div>
              <div className="text-white font-medium">AlokaZcy</div>
              <div className="text-gray-500 text-sm mt-1">BI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <div className="text-white font-medium">AfiliaZcy</div>
              <div className="text-gray-500 text-sm mt-1">:8081</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📚</div>
              <div className="text-white font-medium">10 Libraries</div>
              <div className="text-gray-500 text-sm mt-1">Shared</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              Explore all services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Borrow what works
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Use the libraries. Fork the services. Ignore what doesn't fit your stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="https://github.com/KreaZcy"
              target="_blank"
              className="px-8 py-3 bg-white text-black font-medium rounded-full hover:scale-105 transition-all"
            >
              View on GitHub
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © 2026 KreaZcy. Building the future of microservices.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="https://github.com/KreaZcy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
