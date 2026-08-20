import { Link } from 'react-router-dom'
import { FlaskConical } from 'lucide-react'
export default function Terms() {
  return (
    <div className="min-h-screen bg-background px-6 py-20 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-10 hover:opacity-80 transition">
        <FlaskConical className="h-5 w-5" /> SMJ Pharma
      </Link>
      <h1 className="font-display font-bold text-4xl text-ink mb-6">Terms of Use</h1>
      <p className="text-muted leading-relaxed mb-4">This website is provided by SMJ Pharma for informational purposes only. Product information is not intended as medical advice.</p>
      <p className="text-muted leading-relaxed mb-4">All content is copyright © 2024 SMJ Pharma. Unauthorised reproduction is prohibited.</p>
      <p className="text-muted leading-relaxed">For enquiries, contact <a href="mailto:smjpharma@gmail.com" className="text-primary">smjpharma@gmail.com</a>.</p>
    </div>
  )
}
