import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer_log from '../assets/images/footer_logo.svg'
import icon1 from '../assets/images/icon1.svg'
import icon2 from '../assets/images/icon2.svg'
import icon3 from '../assets/images/icon3.svg'
import icon4 from '../assets/images/icon4.svg'

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <footer className="bg-[#FFF4E6] py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
   
          <div className="flex items-center gap-3">
            <img 
              src={Footer_log} 
              alt="Finsweet Logo" 
              className="h-8 cursor-pointer"
              onClick={handleLogoClick}
            />
            <span className="text-sm text-gray-600">©2021 Finsweet</span>
          </div>

   
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <img src={icon1} alt="Facebook" className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="Twitter"
            >
              <img src={icon2} alt="Twitter" className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <img src={icon3} alt="Instagram" className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <img src={icon4} alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer