import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      name: 'InterakZcy',
      port: '1729',
      description: 'WhatsApp chatbot platform with AI & n8n automation',
      features: ['Multi-platform WhatsApp support', 'AI-powered responses', 'n8n workflow integration', 'Dashboard management'],
      icon: '💬',
    },
    {
      name: 'RekogniZcy',
      port: '6970',
      description: 'Authentication & authorization service',
      features: ['JWT RS256 tokens', 'Role-based access control', 'Multi-tenant support', 'IP whitelisting'],
      icon: '🔐',
    },
    {
      name: 'AfiliaZcy',
      port: '8081',
      description: 'Affiliate tracking and commission management',
      features: ['Multi-code support', 'Usage tracking', 'Commission calculation', 'Disbursement management'],
      icon: '📊',
    },
    {
      name: 'NotifikaZcy',
      port: '—',
      description: 'Multi-channel notification service',
      features: ['Email notifications', 'WhatsApp messages', 'WebSocket real-time', 'Kafka event streaming'],
      icon: '📢',
    },
    {
      name: 'ProgreZcy',
      port: '—',
      description: 'Progress tracking and queue management',
      features: ['Real-time updates', 'WebSocket streaming', 'SQLite persistence', 'Queue management'],
      icon: '📈',
    },
    {
      name: 'EksploraZcy',
      port: '5300',
      description: 'RSS feed aggregator with Kafka integration',
      features: ['Feed subscription', 'Article fetching', 'Kafka publishing', 'MongoDB storage'],
      icon: '📰',
    },
    {
      name: 'AlokaZcy',
      port: '—',
      description: 'Venue and space management',
      features: ['Booking management', 'Calendar integration', 'Pricing rules', 'Analytics'],
      icon: '🏢',
    },
  ]

  const libraries = [
    { name: 'kzcy-config', desc: 'Configuration management with env detection' },
    { name: 'kzcy-middleware', desc: 'HTTP middleware (CORS, rate limit, auth, IP whitelist)' },
    { name: 'kzcy-utils', desc: 'Common utilities (string, crypto, validation, IDs)' },
    { name: 'kzcy-test', desc: 'Testing toolkit (mocks, fixtures, assertions)' },
    { name: 'kzcy-dashboard', desc: 'Go backend + React component library' },
    { name: 'kzcy-core', desc: 'DDD foundation (domain, events, transport)' },
    { name: 'kzcy-core-bff', desc: 'Backend-for-Frontend framework' },
    { name: 'kzcy-core-read', desc: 'Materialized views / CQRS read models' },
    { name: 'kzcy-core-orchestrator', desc: 'Saga orchestration via Temporal' },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">KreaZcy</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition">About</Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-xl text-gray-300 mb-12">Production-ready microservices for every use case</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="text-sm text-gray-400 mb-4">Port: {service.port}</div>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-gray-300 text-sm">
                    <span className="text-blue-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Libraries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Shared Libraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {libraries.map((lib, i) => (
              <div key={i} className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition">
                <code className="text-blue-400 font-semibold">{lib.name}</code>
                <p className="text-gray-300 text-sm mt-2">{lib.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="bg-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Architecture</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              All services follow a consistent architecture pattern:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">Go Backend</strong> — High-performance APIs with Gin framework</li>
              <li><strong className="text-white">React Frontend</strong> — Modern UI with Vite + TypeScript</li>
              <li><strong className="text-white">MongoDB/PostgreSQL</strong> — Flexible data persistence</li>
              <li><strong className="text-white">Docker</strong> — Containerized deployment</li>
              <li><strong className="text-white">Workspace</strong> — Go workspace for unified module resolution</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
