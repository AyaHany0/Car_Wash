import React from 'react'
import logo from "../../assets/images/Logo.png";

export default function Footer() {
  return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

          <div className="z-3 relative w-[8rem] py-7">
            <img className="w-full" src={logo} alt="Logo"/>
          </div>


          <div>
            <h3 className="font-bold mb-4">PAGE</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy and Cookie Policy</li>
              <li>Search Terms</li>
              <li>Orders and Returns</li>
              <li>Advanced Search</li>
              <li>Contact Us</li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold mb-4">CAR</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy and Cookie Policy</li>
              <li>Search Terms</li>
              <li>Orders and Returns</li>
              <li>Advanced Search</li>
              <li>Contact Us</li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2 text-gray-400 mb-4">
              <li>Privacy and Cookie Policy</li>
              <li>Search Terms</li>
              <li>Orders and Returns</li>
              <li>Advanced Search</li>
              <li>Contact Us</li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}
