import {useState,useEffect} from "react";
import Link from "next/link";

const Footer = (props) => {

    const [scrollY,setScrollY] = useState({status:0,documentHeight:0,windowHeight:0});

    useEffect(() => {

        window.onscroll = () => {
            setScrollY({status: window.scrollY, documentHeight:  document.body.scrollHeight,windowHeight: window.innerHeight})
        }

    },[])


    const scrollToTop = () =>{
            window.scrollTo({
              top: 0, 
              behavior: 'smooth'
            });
  };


  return (
   <footer className="relative z-40 bg-gradient-to-r from-purple-900 to-purple-400 text-white ">

   <img src="images/world-map.png" className="absolute z-10 opacity-10 top-1/4 md:top-0 md:h-full md:inset-x-1/4 " />

   <button className="z-50 fixed right-10 bottom-10 h-12 w-12 flex  justify-center items-center rounded-full before:h-10 before:w-10 before:absolute before:bg-[#13131d]  before:rounded-full  before:bg-purple-900" onClick={() => scrollToTop()} style={{background:`conic-gradient(var(--color-primary-alta) ${(scrollY.status/(scrollY.documentHeight - scrollY.windowHeight) )*360}deg, var(--color-primary) ${(scrollY.status/(scrollY.documentHeight - scrollY.windowHeight) )*360}deg)`}}>
       <i className="fas fa-chevron-up absolute"></i>
   </button>

    <div className="container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 py-12 relative z-40">
      

              <div className="space-y-3">
                <div className="font-black text-white text-4xl">
                   MBRAIN
                </div>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>

             <div className="space-y-2">
                <h3 className="text-[24px] font-bold">Others</h3>
                <ul className="space-y-3 text-sm">
                    <li><Link href='#'><a>Protocol Explore</a></Link></li>
                    <li><Link href='#'><a>System Token</a></Link></li>
                    <li><Link href='#'><a>Otimize Time</a></Link></li>
                    <li><Link href='#'><a>Visual Checking</a></Link></li>
                    <li><Link href='#'><a>Fadeup System</a></Link></li>
                    <li><Link href='#'><a>Activity Log</a></Link></li>
                    <li><Link href='#'><a>System Auto Since</a></Link></li>
                </ul>
             </div>


             <div className="space-y-2">
                <h3 className="text-[24px] font-bold">Information</h3>
                <ul className="space-y-3 text-sm">
                    <li><Link href='#'><a>Market Explore</a></Link></li>
                    <li><Link href='#'><a>Ready Token</a></Link></li>
                    <li><Link href='#'><a>Main Option</a></Link></li>
                    <li><Link href='#'><a>Product Checking</a></Link></li>
                    <li><Link href='#'><a>Blog Grid</a></Link></li>
                    <li><Link href='#'><a>About Us</a></Link></li>
                    <li><Link href='#'><a>Fix Bug</a></Link></li>
                </ul>
             </div>


             <div className="space-y-3">
                <h3 className="text-[24px] font-bold">Newsletter</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex">
                    <input className="p-3 w-full placeholder-purple-300 rounded text-sm text-light" placeholder="Enter your email address.."/>
                    <button className="bg-purple-900 relative -left-2 rounded-r"><i className="fas fa-paper-plane px-5"></i></button>
                </div>
             </div>

        
     </div>

        <div className="border-t border-gray-400 py-5 ">
               <div className="container">
                 <div className="text-center text-sm font-light">© <a href="https://www.linkedin.com/in/mfonabasi-udobia-a84128217" target="_blank">MfonAbasi Udobia.</a> All rights reserved</div>

             </div>
        </div>
  </footer>
  )
}

export default Footer;