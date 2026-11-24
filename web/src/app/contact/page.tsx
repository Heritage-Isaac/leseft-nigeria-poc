import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/features/contact/ContactForm'

export const metadata = {
  title: 'Contact RFP & Advisory | LeSeft Nigeria Limited',
  description: 'Submit an RFP or commercial inquiry to LeSeft Nigeria Limited.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar companyName="LeSeft Nigeria Limited" />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactForm />
      </main>
      <Footer companyName="LeSeft Nigeria Limited" />
    </div>
  )
}
