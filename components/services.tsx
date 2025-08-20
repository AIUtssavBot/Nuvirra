import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Zap, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error.",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and applications.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced AI-powered analytics.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 snap-start scroll-mt-16 min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI automation solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-nuvirra-primary bg-white"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-nuvirra-primary to-nuvirra-accent rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-nuvirra-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
