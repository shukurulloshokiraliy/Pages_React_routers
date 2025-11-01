import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero_img from '../assets/images/Hero_img.svg'
import Hero_Icon1 from '../assets/images/Hero_icon1.svg'
import Hero_Icon2 from '../assets/images/Hero_icon2.svg'
import Hero_Icon3 from '../assets/images/Hero_icon3.svg'
import Hero_Icon4 from '../assets/images/Hero_icon4.svg'
import Hero_Icon5 from '../assets/images/Hero_icon5.svg'
import About_img1 from '../assets/images/About_img1.svg'
import About_img2 from '../assets/images/About_img2.svg'
import About_img3 from '../assets/images/About_img3.svg'
import box_icon1 from '../assets/images/box_icon1.svg'
import box_icon2 from '../assets/images/box_icon2.svg'
import box_icon3 from '../assets/images/box_icon3.svg'
// import build_icon1 from '../assets/images/build_icon1.svg'
// import build_icon2 from '../assets/images/build_icon2.svg'
// import build_icon3 from '../assets/images/build_icon3.svg'
const Home = () => {
  return (
    <>
      <Header/>
      <div className="min-h-screen" style={{ backgroundColor: '#232536' }}>
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Transform Your Idea Into Reality with Finsweet
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
                Request Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="relative flex justify-center items-start">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500" style={{ width: '563px', height: '632px' }}>
                <img 
                  src={Hero_img}
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          <div className="mt-32">
            <div className="flex items-start gap-8 mb-6">
              <div>
                <p className="text-gray-500 text-sm mb-2">Our Clients</p>
                <p className="text-white text-base font-semibold">We've Worked with</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-16 flex-wrap">
              <div className="hover:opacity-100 transition opacity-60" style={{ width: '187px', height: '106px' }}>
                <img src={Hero_Icon1} alt="Client 1" className="w-full h-full object-contain" />
              </div>
              <div className="hover:opacity-100 transition opacity-60" style={{ width: '187px', height: '106px' }}>
                <img src={Hero_Icon2} alt="Client 2" className="w-full h-full object-contain" />
              </div>
              <div className="hover:opacity-100 transition opacity-60" style={{ width: '187px', height: '106px' }}>
                <img src={Hero_Icon3} alt="Client 3" className="w-full h-full object-contain" />
              </div>
              <div className="hover:opacity-100 transition opacity-60" style={{ width: '187px', height: '106px' }}>
                <img src={Hero_Icon4} alt="Client 4" className="w-full h-full object-contain" />
              </div>
              <div className="hover:opacity-100 transition opacity-60" style={{ width: '187px', height: '106px' }}>
                <img src={Hero_Icon5} alt="Client 5" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="About_Cards bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">
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

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <h3 className="text-4xl font-bold text-gray-900 mb-2">1560+</h3>
        <p className="text-gray-500 font-medium">Project Delivered</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-gray-900 mb-2">100+</h3>
        <p className="text-gray-500 font-medium">Professional</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-gray-900 mb-2">950+</h3>
        <p className="text-gray-500 font-medium">Happy Client</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-gray-900 mb-2">10 yrs</h3>
        <p className="text-gray-500 font-medium">Experience</p>
      </div>
    </div>

    <div className="text-right mt-10">
      <a href="#" className="text-blue-600 font-semibold hover:underline">
        Read about us →
      </a>
    </div>
  </div>
      </div>
      <div className="Our_box bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">OUR EXPERTISE</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                We want to get local identification in every corner of the world in this era of global citizenship
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center">
                    <img src={box_icon1} alt="On Time Delivery" className="w-12 h-12  rounded-lg " />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">On Time Delivery</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Through True Rich Attended does no end it his mother since real had half every him.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="">
                    <img src={box_icon2} alt="Best Quality" className="w-12 h-12  rounded-lg flex items-center justify-center" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Best Quality</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Through True Rich Attended does no end it his mother since real had half every him.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="">
                    <img src={box_icon3} alt="Support Assist" className="w-12 h-12  rounded-lg flex items-center justify-center" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Support Assist</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Through True Rich Attended does no end it his mother since real had half every him.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <Footer/>
    </>
  )
}


export default Home