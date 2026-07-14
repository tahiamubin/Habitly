export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-2">
          Terms of <span style={{ color: "#7283ff" }}>Service</span>
        </h1>
        <p className="text-sm text-gray-400 mb-8">Last Updated: July 15, 2026</p>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-6">
          <Section title="1. Acceptance of Terms">
            <p>By using Habitly, you agree to these Terms of Service. If you don't agree, please don't use our platform.</p>
          </Section>

          <Section title="2. Account Registration">
            <ul className="list-disc pl-6 space-y-1">
              <li>You must be 13 years or older to use Habitly</li>
              <li>You are responsible for maintaining your account security</li>
              <li>You agree to provide accurate information</li>
            </ul>
          </Section>

          <Section title="3. User Content">
            <p>You retain all rights to your habit data. We do not claim ownership of any content you create.</p>
          </Section>

          <Section title="4. Prohibited Activities">
            <ul className="list-disc pl-6 space-y-1">
              <li>Misusing or abusing the platform</li>
              <li>Attempting to access other users' data</li>
              <li>Using the platform for illegal activities</li>
            </ul>
          </Section>

          <Section title="5. Data Privacy">
            <p>Your data is stored locally in your browser. We do not collect or store your data on external servers.</p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>Habitly is provided "as is" without warranties of any kind. We are not responsible for any outcomes from using our platform.</p>
          </Section>

          <Section title="7. Changes to Terms">
            <p>We may update these terms from time to time. Continued use of Habitly constitutes acceptance of updated terms.</p>
          </Section>

          <Section title="8. Contact">
            <p>For questions about these terms, contact us at:</p>
            <p className="font-medium" style={{ color: "#7283ff" }}>support@habitly.com</p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-black mb-2">{title}</h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}