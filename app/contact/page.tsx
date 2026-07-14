export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4">
          Contact <span style={{ color: "#7283ff" }}>Us</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
          <div className="space-y-6">
            <ContactMethod
              icon="📧"
              title="Email"
              description="For general inquiries and support"
              contact="support@habitly.com"
            />
            <ContactMethod
              icon="🐦"
              title="Twitter"
              description="Follow us for updates and tips"
              contact="@habitly"
            />
            <ContactMethod
              icon="💬"
              title="Feedback"
              description="Share your suggestions and ideas"
              contact="feedback@habitly.com"
            />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Response Time
            </h3>
            <p className="text-gray-600 text-sm">
              We aim to respond to all inquiries within 24-48 hours during
              business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactMethod({
  icon,
  title,
  description,
  contact,
}: {
  icon: string;
  title: string;
  description: string;
  contact: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-sm font-medium" style={{ color: "#7283ff" }}>
          {contact}
        </p>
      </div>
    </div>
  );
}
