import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Andrew_ava from '../assets/images/andrew_ava.svg'
import Mathew_ava from '../assets/images/mathew_ava.svg'
import Hussen_ava from '../assets/images/hussen_ava.svg'
import Blog_card_img from '../assets/images/blog_card_img.svg'

const Blog = () => {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-white">
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Main Blog Post */}
            <div>
              {/* Trending Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-orange-400 rounded"></div>
                <span className="uppercase tracking-widest text-xs text-gray-600 font-semibold">TRENDING</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Breaking the code How did we build our Figma plugin
              </h1>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.
              </p>

              {/* Read More Link */}
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group mb-8">
                Read More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-8">
                <img src={Andrew_ava} alt="Andrew Jonson" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Andrew Jonson</p>
                </div>
                <span className="text-gray-400">•</span>
                <p className="text-sm text-gray-500">Posted on 27th January 2021</p>
              </div>

              {/* Main Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={Blog_card_img} alt="Office Space" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Right Side - Small Cards */}
            <div className="rounded-2xl p-10 relative" style={{ backgroundColor: '#FFE6D2', width: '515px', height: '738px' }}>
              {/* Decorative squares top right */}
              <div className="absolute top-6 right-6 flex gap-1.5">
                <div className="w-3 h-3 bg-orange-400 rounded"></div>
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
              </div>
              <div className="absolute top-10 right-6">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
              </div>

              {/* Card 1 */}
              <div className="mb-10 pb-10 border-b border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">
                  Great design expectations prejudice in digital products in Next Year
                </h3>
                <div className="flex items-center gap-3">
                  <img src={Andrew_ava} alt="Andrew Jonson" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Andrew Jonson</p>
                    <p className="text-xs text-gray-500">Jan 19, 2021</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="mb-10 pb-10 border-b border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">
                  Great design expectations prejudice in digital products in Next Year
                </h3>
                <div className="flex items-center gap-3">
                  <img src={Mathew_ava} alt="Mathew Jasele" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Mathew Jasele</p>
                    <p className="text-xs text-gray-500">Jan 19, 2021</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">
                  Great design expectations prejudice in digital products in Next Year
                </h3>
                <div className="flex items-center gap-3">
                  <img src={Hussen_ava} alt="Huissen Abokas" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Huissen Abokas</p>
                    <p className="text-xs text-gray-500">Jan 19, 2021</p>
                  </div>
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

export default Blog