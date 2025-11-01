import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About_img1 from '../assets/images/About_img1.svg'
import About_img2 from '../assets/images/About_img2.svg'
import About_img3 from '../assets/images/About_img3.svg'
const Company = () => {
  return (
    <>
    <Header/>
    <main>
        <div className="About_Cards bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                The company leads entire webdesign process from concept to delivery.
              </h2>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Era Of Technology.</h3>
              <p className="text-gray-500 leading-relaxed">
                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic 
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </div>
          </div>
      
          {/* 3 Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={About_img1} alt="About 1" className="w-full h-[350px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={About_img2} alt="About 2" className="w-full h-[350px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={About_img3} alt="About 3" className="w-full h-[350px] object-cover" />
            </div>
          </div>
      
          {/* Stats Section */}
        
      
          {/* Read More Link */}
          <div className="text-right mt-10">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read about us →
            </a>
          </div>
        </div>
            </div>
    </main>
    <Footer></Footer>
  </>
  )
}

export default Company
