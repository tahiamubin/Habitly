export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4">
          Help <span style={{ color: "#7283ff" }}>Center</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Find answers to common questions and get support
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <HelpCard 
            title="Getting Started"
            description="Learn how to create habits and track your progress"
            link="/help/getting-started"
          />
          <HelpCard 
            title="Frequently Asked Questions"
            description="Answers to the most common questions"
            link="/help/faq"
          />
          <HelpCard 
            title="Troubleshooting"
            description="Fix common issues and errors"
            link="/help/troubleshooting"
          />
          <HelpCard 
            title="Contact Support"
            description="Get in touch with our support team"
            link="/contact"
          />
        </div>

        <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-100 text-center">
          <p className="text-gray-600">
            Still need help?{" "}
            <a href="/contact" className="font-medium hover:underline" style={{ color: "#7283ff" }}>
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function HelpCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <a href={link} className="block p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#7283ff]/30 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
}