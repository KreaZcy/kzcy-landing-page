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
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              KreaZcy is building the future of microservices architecture. We believe in
              creating modular, scalable, and reusable components that can be easily composed
              to build complex applications. Our ecosystem of services and shared libraries
              enables teams to ship faster and more reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">🏗️ Microservices Architecture</h3>
              <p className="text-gray-300">
                Each service is independently deployable and scalable. Build with Go and React,
                following industry best practices for containerization and orchestration.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">📚 Shared Libraries</h3>
              <p className="text-gray-300">
                Reusable components for authentication, middleware, utilities, and UI.
                Stop reinventing the wheel — focus on your business logic.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">⚡ Developer Experience</h3>
              <p className="text-gray-300">
                Hot reload, type safety, and excellent tooling. Local development with Docker Compose,
                production-ready deployments with Helm charts.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">🔧 Production-Ready</h3>
              <p className="text-gray-300">
                Built with observability in mind. Metrics, tracing, logging, and monitoring
                out of the box. Deploy with confidence.
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
