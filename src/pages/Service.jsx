import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import card_icon1 from '../assets/images/card_icon1.svg'
import card_icon2 from '../assets/images/card_icon2.svg'
import card_icon3 from '../assets/images/card_icon3.svg'
import card_icon4 from '../assets/images/card_icon4.svg'
import card_icon5 from '../assets/images/card_icon5.svg'
import card_icon6 from '../assets/images/card_icon6.svg'

const Service = () => {
  const services = [
    { name: 'Technical support', hasArrow: false },
    { name: 'Development', hasArrow: true },
    { name: 'AWS/Azure', hasArrow: false },
    { name: 'Consulting', hasArrow: false },
    { name: 'Information Technology', hasArrow: false }
  ]

  return (
    <>
      <Header/>
      <main className="min-h-screen" style={{ backgroundColor: '#F4DFC8' }}>
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="uppercase tracking-widest text-sm text-gray-600 mb-4">OUR SERVICES</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                We Build Software Solutionthat Solve Clients Business Challenges
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2 mt-8">
                Request A Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="  p-6  hover:shadow-md transition-all duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  {service.hasArrow && (
                    <svg 
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Our Process Section */}
      <div className="Our_Cards bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16 flex justify-between items-start">
            <div className="max-w-2xl">
              <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">OUR PROCESS</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                The process we are working With Our client Worldwide
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
              </p>
            </div>
            <div className="text-4xl">📦</div>
          </div>

          {/* Process Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Discover */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={card_icon1} alt="Discover" className="w-7 h-7" />
                </div>
                <span className="text-gray-200 text-4xl font-bold leading-none">01</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
              </p>
              <div className="flex gap-1">
                <div className="h-1 w-14 bg-orange-500 rounded"></div>
                <div className="h-1 flex-1 bg-blue-600 rounded"></div>
              </div>
            </div>

            {/* Card 2 - Designing */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={card_icon2} alt="Designing" className="w-7 h-7" />
                </div>
                <span className="text-gray-200 text-4xl font-bold leading-none">02</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Designing</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
              </p>
              <div className="flex gap-1">
                <div className="h-1 w-14 bg-orange-500 rounded"></div>
                <div className="h-1 flex-1 bg-blue-600 rounded"></div>
              </div>
            </div>

            {/* Card 3 - Development */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={card_icon3} alt="Development" className="w-7 h-7" />
                </div>
                <span className="text-gray-200 text-4xl font-bold leading-none">03</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
              </p>
              <div className="flex gap-1">
                <div className="h-1 w-14 bg-orange-500 rounded"></div>
                <div className="h-1 flex-1 bg-blue-600 rounded"></div>
              </div>
            </div>

            {/* Card 4 - Testing */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={card_icon4} alt="Testing" className="w-7 h-7" />
                </div>
                <span className="text-gray-200 text-4xl font-bold leading-none">04</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
              </p>
              <div className="flex gap-1">
                <div className="h-1 w-14 bg-orange-500 rounded"></div>
                <div className="h-1 flex-1 bg-blue-600 rounded"></div>
              </div>
            </div>

            {/* Card 5 - Deployment */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={card_icon5} alt="Deployment" className="w-7 h-7" />
                </div>
                <span className="text-gray-200 text-4xl font-bold leading-none">05</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
              </p>
              <div className="flex gap-1">
                <div className="h-1 w-14 bg-orange-500 rounded"></div>
                <div className="h-1 flex-1 bg-blue-600 rounded"></div>
              </div>
            </div>

            {/* Card 6 - Maintenance */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={card_icon6} alt="Maintenance" className="w-7 h-7" />
                </div>
                <span className="text-gray-200 text-4xl font-bold leading-none">06</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Maintenance</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
              </p>
              <div className="flex gap-1">
                <div className="h-1 w-14 bg-orange-500 rounded"></div>
                <div className="h-1 flex-1 bg-blue-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default Service