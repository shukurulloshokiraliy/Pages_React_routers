import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Clone = () => {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-white">
        <section className="px-6 py-20 max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 relative">
            {/* Decorative squares */}
            <div className="absolute top-0 left-0 w-5 h-5 bg-[#FFD3AF] rounded"></div>
            <div className="absolute top-0 right-0 flex gap-1.5">
            
            </div>

            <div className="pt-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
              <p className="text-sm text-gray-500">Last Updated on 27th January 2021</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-gray-50 rounded-2xl p-12">
            {/* Main Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Idea Into Reality with Ether a Leading Digital Agency
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to 
                get the right word. To crack the code for the UX copies, we at Zeda Design wanted to build a Figma plugin 
                for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies 
                categorized and segregated with a voice and tone and then ranging from plain, casual to playful. The 
                plugin has been featured on Medium, Product Hunt and Prototypr.io.
              </p>

              <p>
                Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to 
                get the right word. To crack the code for the UX copies, we at Zeda Design wanted to build a Figma plugin 
                for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies 
                messages.
              </p>

              <p>
                Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to 
                get the right word. To crack the code for the UX copies, we at Zeda Design wanted to build a Figma plugin 
                for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies 
                messages.
              </p>

              <p>
                Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to 
                get the right word. To crack the code for the UX copies, we at Zeda Design wanted to build a Figma plugin 
                for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies 
                categorized and segregated with a voice and tone, verbalism ranging from plain, casual to playful. The 
                intention is to build this Figma plugin is generate from our Medium blog post. Designing voice and tone for 
                error messages.
              </p>

              {/* Subheading */}
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                We disclose your information in the following manner:
              </h3>

              <p>
                Banana partners, suppliers and sub-contractors ("Affiliates") Affiliates may use this information to help 
                provide, understand, and improve our services and Affiliate's own services (or the performance of any 
                services we enter into.
              </p>

              <p>
                Financial Institutions and Auditors: In order to complete third party financial, technical and legal audits of 
                our operations or to the to operate our business, we may need to share your information with financial 
                institutions, auditors, and their professional advisors.
              </p>

              <p>
                Advertisers and Advertising Networks: To provide you with select and see a relevant advertisements to 
                you and others, we work closely in users (with such advertisers and advertising networks). We let our affiliates, 
                your Personal Information or Sensitive Personal Information to our advertisers, but we may provide them 
                with aggregate information about our users (for example, we may inform them that 500 given number of 
                participants in a specified age group who clicked on their advertisement on any given day). We may also 
                use such aggregate information to help advertisers reach the kind of audience they want to target.
              </p>
            </div>
          </div>

          {/* Bottom Decorative Bars */}
          <div className="flex gap-[-20px] mt-8">
            <div className="w-20 h-2 bg-blue-600 rounded"></div>
            <div className="w-16 h-2 bg-orange-400 rounded"></div>
            <div className="w-12 h-2 bg-orange-500 rounded"></div>
          </div>
        </section>
      </main>
      <div className="Lets_make">
        
      </div>
      <Footer/>
    </>
  )
}

export default Clone