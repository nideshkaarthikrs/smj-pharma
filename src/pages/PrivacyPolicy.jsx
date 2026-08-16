import { Link } from 'react-router-dom'
import { FlaskConical } from 'lucide-react'
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background px-6 py-20 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-10 hover:opacity-80 transition">
        <FlaskConical className="h-5 w-5" /> SMJ Pharma
      </Link>
      <h1 className="font-display font-bold text-4xl text-ink mb-6">Privacy Policy</h1>
      <p className="text-muted leading-relaxed mb-4">SMJ Pharma respects your privacy. Information submitted through this website is used solely to respond to your enquiries.</p>
      <p className="text-muted leading-relaxed mb-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
      <p className="text-muted leading-relaxed">For any privacy concerns, contact us at <a href="mailto:info@smjpharma.com" className="text-primary">info@smjpharma.com</a>.</p>
    </div>
  )
}
