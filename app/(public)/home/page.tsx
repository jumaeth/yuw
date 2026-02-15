export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-svh px-4">
      <h1 className="text-5xl font-bold">Your Ultimate Workspace</h1>
      <p className="text-xl mt-4 max-w-2xl">
        Providing professional IT services for small and medium-sized businesses in Switzerland.
      </p>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service cards */}
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">IT Consulting</h3>
            <p className="opacity-80">Strategic IT guidance for your business</p>
          </div>
          {/* More service cards... */}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg opacity-80 mb-4">
            We&#39;re dedicated to providing top-tier IT solutions...
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg opacity-80 mb-8">
          Ready to transform your business?
        </p>
        <a
          href="/contact"
          className="inline-block py-3.5 px-8 rounded-xl transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}