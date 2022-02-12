import {useState} from "react";
import Link from "next/link";

const Header = (props) => {

  const [isOpen,setIsOpen] = useState(false);

  const closeAllModal = () => setIsOpen(false);

  
  return (
    <nav className="py-2 md:py-0">
   <div className="container">
          <div className="flex justify-between items-center">
            <div className="font-black text-white text-4xl">
               MBRAIN
            </div>



             <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-grey-200  space-y-2" onClick={() => setIsOpen(!isOpen)}>
                <div class="w-8 border-b-4 rounded border-slate-200"></div>
                <div class="w-8 border-b-4 rounded border-slate-200"></div>
                <div class="w-8 border-b-4 rounded border-slate-200"></div>
             </button>

            <ul className="hidden md:flex items-center w-fit text-sm font-bold">
              <li><a href="#" className="block px-4 py-6 hover:text-gray-300">Home</a></li>
              <li><a href="#" className="block px-4 py-6 hover:text-gray-300">About us</a></li>
              <li><a href="#services" className="block px-4 py-6 hover:text-gray-300">Services</a></li>
              <li><a href="#testimonial" className="block px-4 py-6 hover:text-gray-300">Testimonial</a></li>
              <li><a href="#faq" className="block px-4 py-6 hover:text-gray-300">FAQ's</a></li>
              <li><a href="#contact" className="block px-4 py-6 hover:text-gray-300">Contact us</a></li>
            </ul>



            <ul className={`text-sm font-bold  z-50 w-8/12 bg-white fixed text-black z-[100]   h-screen ${isOpen ? 'top-0 right-0' : 'top-0 -right-full'}`}>
              <li><a href="#" className="block px-4 py-3 hover:bg-purple-900 hover:text-white">Home</a></li>
              <li><a href="#" className="block px-4 py-3 hover:bg-purple-900 hover:text-white">About us</a></li>
              <li><a href="#services" className="block px-4 py-3 hover:bg-purple-900 hover:text-white">Services</a></li>
              <li><a href="#testimonial" className="block px-4 py-3 hover:bg-purple-900 hover:text-white">Testimonial</a></li>
              <li><a href="#faq" className="block px-4 py-3 hover:bg-purple-900 hover:text-white">FAQ's</a></li>
              <li><a href="#contact" className="block px-4 py-3 hover:bg-purple-900 hover:text-white">Contact us</a></li>
            </ul>

            <div className={`overlay opacity-50 bg-black z-40 fixed w-full left-0 top-0 h-full ${isOpen ? 'block' : 'hidden'}`} onClick={() => closeAllModal()}>
              
            </div>



          </div>

      </div>

      </nav>
  )
}

export default Header;