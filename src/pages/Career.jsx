import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Careers_img from '../assets/images/Creers_img.svg'


const Career = () => {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-white">
        <section className="px-6 py-20 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-6">
              <p className="uppercase tracking-widest text-xs text-gray-500">CAREER AT FINSWEET</p>
              
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl mx-auto">
              We hired people who are Always Passionate about what they do
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.
            </p>
          </div>

          {/* Careers Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <img 
                src={Careers_img} 
                alt="Careers at Finsweet" 
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
          </div>

          {/* See Our Open Positions Link */}
          <div className="text-center">
            <a 
              href="#positions" 
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors group"
            >
              See Our open positions
            </a>  
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Career;