import { Check } from "lucide-react"

const features = [
  "Advanced Machine Learning Algorithms",
  "Real-time Data Processing",
  "Scalable Cloud Infrastructure",
  "Custom AI Model Development",
  "24/7 Support and Monitoring",
  "Seamless Integration Capabilities",
]

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gray-50 snap-start scroll-mt-16 min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Nuvirra?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine cutting-edge technology with deep industry expertise to deliver AI solutions that drive real
              business results.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-nuvirra-accent rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-first">
            <img
              src="/AI%20in%20Healthcare_%20No,%20the%20Robots%20Are%20Not%20Taking%20Over.jpeg"
              alt="AI in Healthcare"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
