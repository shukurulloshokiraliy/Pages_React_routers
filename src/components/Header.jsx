import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-[#232536] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
    
          <div onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <span className="text-xl font-bold">{'{Finsweet'}</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-[#FFD3AF] font-semibold border-b-2 border-[#FFD3AF] pb-1" 
                  : "text-white hover:text-[#FFD3AF] transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/service" 
              className={({ isActive }) => 
                isActive 
                  ? "text-[#FFD3AF] font-semibold border-b-2 border-[#FFD3AF] pb-1" 
                  : "text-white hover:text-[#FFD3AF] transition-colors"
              }
            >
              Service
            </NavLink>
            <NavLink 
              to="/company" 
              className={({ isActive }) => 
                isActive 
                  ? "text-[#FFD3AF] font-semibold border-b-2 border-[#FFD3AF] pb-1" 
                  : "text-white hover:text-[#FFD3AF] transition-colors"
              }
            >
              Company
            </NavLink>
            <NavLink 
              to="/career" 
              className={({ isActive }) => 
                isActive 
                  ? "text-[#FFD3AF] font-semibold border-b-2 border-[#FFD3AF] pb-1" 
                  : "text-white hover:text-[#FFD3AF] transition-colors"
              }
            >
              Career
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                isActive 
                  ? "text-[#FFD3AF] font-semibold border-b-2 border-[#FFD3AF] pb-1" 
                  : "text-white hover:text-[#FFD3AF] transition-colors"
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact-us" 
              className={({ isActive }) => 
                isActive 
                  ? "text-[#FFD3AF] font-semibold border-b-2 border-[#FFD3AF] pb-1" 
                  : "text-white hover:text-[#FFD3AF] transition-colors"
              }
            >
              Contact us
            </NavLink>
            <NavLink 
              to="/clone" 
              className={({ isActive }) => 
                isActive 
                  ? "text-[#FFD3AF] font-bold flex items-center" 
                  : "text-[#FFD3AF] hover:text-gray-300 transition-colors flex items-center"
              }
            >
              Clone project
              <span className="ml-2">→</span>
            </NavLink>
          </nav>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;