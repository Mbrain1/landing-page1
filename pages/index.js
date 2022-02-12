import {useEffect, useState,useRef} from "react";
import Footer from "/components/Footer";
import Header from "/components/Header";
import Faq from "/components/Faq";
import Testimonial from "/components/Testimonial";
import Contact from "/components/Contact";




const Dashboard = () => {
 

  return (
      <>
      <div className="relative overflow-hidden">
   
 <section className="bg-gradient-to-r from-purple-900 to-purple-400 text-white" >

        <Header />

         <div className="container min-h-[70vh]  py-12 ">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
                   <div className="h-full  flex flex-col items-center justify-center order-2 md:order-1 space-y-4">
                     <h1 className="text-[max(32px,4.2vw)]  leading-tight font-black">Beautiful Vibrant & Modern Design</h1>
                     <p className="text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                      <div className="flex items-center justify-start w-full">
                           <button className="relative rounded-full bg-white hover:bg-black hover:text-white text-black font-bold py-4 px-12 mx-2 ">
                             Get Started
                          </button>          
                     </div>

                   </div>


                    <div className="flex items-center justify-center order-1 md:order-2 md:p-6 lg:p-12">
                      <img src="/images/illu-3.png" className="" />                      
                   </div>

                

              </div>


         </div>
    </section>






    <section className="py-20 bg-gray-100" id="services">
         <div className="container space-y-12">

              <header>
                <span className="font-bold text-purple-900">OUR SERVICES</span>
                <h2 className="text-[32px] font-bold">We Provide Best Services</h2>
              </header>

              <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  <div className="rounded-lg shadow-lg  relative bg-white group hover:bg-testimonial">
                      <div className="relative p-8 top-0 group-hover:-top-5 group-hover:text-white">
                        <img src="/images/icons/shape-7.png" className="absolute -top-6 -right-6 w-20" />
                        <header className="text-sm">STEP-01</header>
                        <h3 className="text-[22px] font-black mt-8 mb-4  group-hover:blue-1">Responsive Design</h3>

                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                  </div>


                   <div className="rounded-lg shadow-lg  relative bg-white group hover:bg-testimonial">
                      <div className="relative p-8 top-0 group-hover:-top-5 group-hover:text-white">
                        <img src="/images/icons/shape-1.png" className="absolute -top-6 -right-6 w-20" />
                        <header className="text-sm">STEP-02</header>
                        <h3 className="text-[22px] font-black mt-8 mb-4 group-hover:blue-1">Clean Design</h3>

                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                  </div>


                   <div className="rounded-lg shadow-lg  relative bg-white group hover:bg-testimonial">
                      <div className="relative p-8 top-0 group-hover:-top-5 group-hover:text-white">
                        <img src="/images/icons/shape-5.png" className="absolute -top-6 -right-6 w-20" />
                        <header className="text-sm">STEP-03</header>
                        <h3 className="text-[22px] font-black mt-8 mb-4 group-hover:blue-1">Quick Support</h3>

                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                  </div>


              </main>
         </div>
    </section>




    <Testimonial />

    <Faq />

    <Contact />
   
    <Footer />
  </div>
  </>
  )
};





export default Dashboard;
