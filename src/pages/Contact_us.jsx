import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fasebook from '../assets/images/fasebook.svg'
import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'

const Contact_us = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Header/>
      <main className="min-h-screen bg-white">
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Form */}
            <div>
              {/* Decorative square */}
              <div className="w-6 h-6 bg-[#FFD3AF] rounded mb-8"></div>

              <p className="uppercase tracking-widest text-xs text-gray-600 font-semibold mb-4">CONTACT US</p>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Have a Question ?<br />
                Let's Get in Touch with us 👋
              </h1>

              <p className="text-gray-600 text-sm mb-12">
                Fill up the Form and our team will get back to within 24 hrs
              </p>

              {/* Contact Form */}
              <div className="space-y-8">
                {/* Name Input */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Paresh Srichandan"
                    className="w-full border-b-2 border-gray-200 py-3 px-0 focus:border-blue-600 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Paresh@pixeto.com"
                    className="w-full border-b-2 border-gray-200 py-3 px-0 focus:border-blue-600 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="For web design work Enquire"
                    className="w-full border-b-2 border-gray-200 py-3 px-0 focus:border-blue-600 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your Message"
                    rows="4"
                    className="w-full border-b-2 border-gray-200 py-3 px-0 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="relative inline-block">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-400 rounded"></div>
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="relative">
              {/* Decorative squares top right */}
              
             

              {/* Info Card */}
              <div className="bg-blue-600 rounded-2xl p-12 text-white relative mt-8">
                {/* Orange accent on left */}
                <div className="absolute left-0 top-1/3 w-6 h-24 bg-orange-500 rounded-r-lg"></div>

                {/* Location */}
                <div className="mb-10">
                  <p className="text-blue-200 text-sm mb-3">Location</p>
                  <p className="text-lg font-semibold">
                    DLF Cybercity, Bhubaneswar,<br />
                    India, 652050
                  </p>
                </div>

                {/* Working Hours */}
                <div className="mb-10">
                  <p className="text-blue-200 text-sm mb-3">Working Hour</p>
                  <p className="text-lg font-bold mb-1">Monday To Friday</p>
                  <p className="text-lg font-semibold mb-1">9:00 AM to 8:00 PM</p>
                  <p className="text-blue-300 text-sm">Our Support Team is available 24Hrs</p>
                </div>

                {/* Contact */}
                <div className="mb-12">
                  <p className="text-blue-200 text-sm mb-3">Contact Us</p>
                  <p className="text-2xl font-bold mb-2">020 7993 2905</p>
                  <p className="text-blue-300">Hello@ether.com</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <img src={fasebook} alt="Facebook" className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <img src={twitter} alt="Twitter" className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <img src={instagram} alt="Instagram" className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Contact_us