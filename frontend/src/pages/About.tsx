import { Link } from 'react-router-dom'

export default function About() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About KreaZcy</h1>

        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Origin Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              KreaZcy started as internal tooling. We kept building the same authentication middleware,
              retry logic, and config loading across different projects. Eventually, we extracted
              these patterns into shared libraries. Then we built services around them.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Nothing here is theoretical. Every service runs in production. Every library solves
              a problem we actually encountered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">🏗️ Go Workspace</h3>
              <p className="text-gray-300">
                All libraries share one go.work file. Services use replace directives for standalone builds.
                No monorepo setup required.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">📚 10 Shared Libraries</h3>
              <p className="text-gray-300">
                Auth, middleware, config, utils, testing, dashboard UI. Each library is its own Git repo
                with its own versioning. Use what you need.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">⚡ Local Docker Stack</h3>
              <p className="text-gray-300">
                Mongo, Postgres, Redis, Kafka, Jaeger, Grafana, Prometheus. One docker-compose up and
                you have the full infra running locally.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">🔧 Production Battle-Tested</h3>
              <p className="text-gray-300">
                Services run behind nginx with TLS. Metrics export to Prometheus. Traces go to Jaeger.
                We use this stuff every day.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Go', 'React', 'MongoDB', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'Kubernetes'].map((tech) => (
                <div key={tech} className="bg-slate-700 rounded-lg p-4 text-center">
                  <span className="text-blue-400 font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
