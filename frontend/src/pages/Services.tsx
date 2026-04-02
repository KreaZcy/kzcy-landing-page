import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      name: 'InterakZcy',
      port: '1729',
      description: 'WhatsApp platform handling 10K+ messages daily. Integrates with n8n for workflow automation.',
      features: ['Multi-platform WhatsApp', 'AI-powered responses', 'n8n workflow integration', 'React dashboard'],
      icon: '💬',
    },
    {
      name: 'RekogniZcy',
      port: '6970',
      description: 'JWT auth service with RS256 tokens and automatic refresh rotation.',
      features: ['JWT RS256', 'RBAC', 'Multi-tenant', 'IP whitelisting'],
      icon: '🔐',
    },
    {
      name: 'AfiliaZcy',
      port: '8081',
      description: 'Track affiliate codes and calculate commissions automatically.',
      features: ['Multi-code support', 'Usage tracking', 'Commission calculation'],
      icon: '📊',
    },
    {
      name: 'NotifikaZcy',
      port: '—',
      description: 'Send notifications via Email, WhatsApp, or WebSocket. All events publish to Kafka.',
      features: ['Email', 'WhatsApp', 'WebSocket real-time', 'Kafka streaming'],
      icon: '📢',
    },
    {
      name: 'ProgreZcy',
      port: '—',
      description: 'Track progress of long-running jobs with real-time WebSocket updates.',
      features: ['Real-time updates', 'WebSocket streaming', 'SQLite persistence', 'Queue management'],
      icon: '📈',
    },
    {
      name: 'EksploraZcy',
      port: '5300',
      description: 'RSS aggregator that fetches feeds and publishes articles to Kafka.',
      features: ['Feed subscription', 'Article fetching', 'Kafka publishing'],
      icon: '📰',
    },
    {
      name: 'AlokaZcy',
      port: '—',
      description: 'Venue booking system with pricing rules engine and BI analytics dashboards.',
      features: ['Booking management', 'Calendar integration', 'Pricing rules', 'Analytics dashboard'],
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h1>
        <p className="text-xl text-gray-300 mb-12">Everything here runs in production. Nothing is a demo.</p>

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
          <h2 className="text-3xl font-bold text-white mb-4">Shared Libraries</h2>
          <p className="text-gray-400 mb-8">Each library is its own Git repo. Use them independently or together.</p>
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
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Go workspaces let us keep libraries in separate repos while developing them together:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">Go Backend</strong> — Gin framework, MongoDB/Postgres, Docker containerized</li>
              <li><strong className="text-white">React Frontend</strong> — Vite + TypeScript, shared component libraries</li>
              <li><strong className="text-white">Local Dev</strong> — docker-compose up spins up Mongo, Postgres, Redis, Kafka, Jaeger, Grafana</li>
              <li><strong className="text-white">Workspace</strong> — One go.work file at the root. Services use replace directives.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
