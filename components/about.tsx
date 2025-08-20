export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-teal-50 to-purple-50 snap-start scroll-mt-16 min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-nuvirra-primary mb-6">About Us</h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-nuvirra-primary/10">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded by a team of AI experts and business strategists, we are dedicated to making artificial
              intelligence accessible and practical for businesses of all sizes. We believe that AI should enhance human
              capabilities, not replace them.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to bridge the gap between cutting-edge AI technology and real-world business applications,
              helping organizations unlock their full potential through intelligent automation.
            </p>
            <div className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-nuvirra-primary to-nuvirra-accent text-white font-bold rounded-full">
              YOUR VISION, AUTOMATED!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
