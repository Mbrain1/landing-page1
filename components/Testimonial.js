import {useEffect, useState,useRef} from "react";
import Bubbles from "./Bubbles";
const faqs = [
{question:"Lorem ipsum dolor sit amet",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."},
{question:"consectetur adipiscing elit",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."},
{question:"sed do eiusmod tempor incididunt ut",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."},
{question:"labore et dolore magna aliqua",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."},
{question:"Lorem ipsum dolor sit amet",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."}];

const Testimonial = () => {

  const [selected,setSelected] = useState(0);

  const toggle = (i) => selected == i ? setSelected(null) : setSelected(i);



  return (
     <section className="py-12 bg-purple-900 text-white relative bg-testimonial bg-no-repeat bg-cover overflow-hidden"  id="testimonial">
          <Bubbles />
         <div className="container space-y-10">

           <header className="md:w-2/4 mx-auto text-center space-y-3">
                <span className="font-bold">OUR TESTIMONIALS</span>
                <h1 className="text-4xl font-black">Our Client's Say</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           </header>


           <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 group relative">
                   <div className="flex flex-col items-center justify-center order-2 md:order-1 md:border-r-2 relative border-white ">

                    
                      
                             <img src="/images/client/client-1.png" className="overflow-hidden relative z-50 w-32 h-32 rounded-full flex justify-center items-center ring ring-white ring-offset-4 ring-offset-purple-900" />
                        
                             <div className="hidden md:block w-1/2 border-t-2 bg-white absolute border-white right-0 z-10"></div>
                             <div className="hidden md:block rounded-full h-4 w-4 bg-white absolute -right-2 z-10 group-hover:-right-4"></div>
                             <div className="hidden md:block rounded-full h-5 w-5 border-2 border-white absolute -right-4 z-10 group-hover:-right-2"></div>

                   </div>


                    <div className="order-2 md:order-1 space-y-3 p-8 text-center md:text-left">

                        
                                   <h2 className="font-semibold text-lg">Lorem ipsum dolor sit amet</h2>
                                    <div className={`content`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie.</div>
                          
                                
                   </div>


                   <div className="block md:hidden h-full border-l-2 bg-white absolute border-white left-0 z-10"></div>
                   <div className="block md:hidden rounded-full h-4 w-4 bg-white absolute -left-2 top-2/4 z-10 group-hover:-left-1"></div>
                   <div className="block md:hidden rounded-full h-5 w-5 border-2 border-white absolute -left-1 top-2/4 z-10 group-hover:-left-2"></div>


              </div>





              <div className="grid grid-cols-1 md:grid-cols-2 group relative">
                   <div className="flex flex-col items-center justify-center order-1 md:order-2  relative ">

                    
                         <img src="/images/client/client-2.png" className="overflow-hidden relative z-50 w-32 h-32 rounded-full  flex justify-center items-center ring ring-white ring-offset-4 ring-offset-purple-900" />
                            
                             <div className="hidden md:block w-1/2 border-t-2 bg-white absolute border-white left-0 z-10"></div>
                             <div className="hidden md:block rounded-full h-4 w-4 bg-white absolute -left-2 z-10 group-hover:-left-4"></div>
                             <div className="hidden md:block rounded-full h-5 w-5 border-2 border-white absolute -left-4 z-10 group-hover:-left-2"></div>

                   </div>


                    <div className="order-2 md:order-1 space-y-3 p-8 text-center md:text-right md:text-left  md:border-r-2  border-white ">

                        
                                   <h2 className="font-semibold text-lg">Lorem ipsum dolor sit amet</h2>
                                    <div className={`content`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie.</div>
                          
                                
                   </div>


                   <div className="block md:hidden h-full border-l-2 bg-white absolute border-white left-0 z-10"></div>
                   <div className="block md:hidden rounded-full h-4 w-4 bg-white absolute -left-2 top-2/4 z-10 group-hover:-left-1"></div>
                   <div className="block md:hidden rounded-full h-5 w-5 border-2 border-white absolute -left-1 top-2/4 z-10 group-hover:-left-2"></div>


              </div>



              <div className="grid grid-cols-1 md:grid-cols-2 group relative">
                   <div className="flex flex-col items-center justify-center order-2 md:order-1 md:border-r-2 relative border-white ">

                    
                      
                             <img src="/images/client/client-3.png" className="overflow-hidden relative z-50 w-32 h-32 rounded-full flex justify-center items-center ring ring-white ring-offset-4 ring-offset-purple-900" />
                        
                             <div className="hidden md:block w-1/2 border-t-2 bg-white absolute border-white right-0 z-10"></div>
                             <div className="hidden md:block rounded-full h-4 w-4 bg-white absolute -right-2 z-10 group-hover:-right-4"></div>
                             <div className="hidden md:block rounded-full h-5 w-5 border-2 border-white absolute -right-4 z-10 group-hover:-right-2"></div>

                   </div>


                    <div className="order-2 md:order-1 space-y-3 p-8 text-center md:text-left">

                        
                                   <h2 className="font-semibold text-lg">Lorem ipsum dolor sit amet</h2>
                                    <div className={`content`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie.</div>
                          
                                
                   </div>

                   <div className="block md:hidden h-full border-l-2 bg-white absolute border-white left-0 z-10"></div>
                   <div className="block md:hidden rounded-full h-4 w-4 bg-white absolute -left-2 top-2/4 z-10 group-hover:-left-1"></div>
                   <div className="block md:hidden rounded-full h-5 w-5 border-2 border-white absolute -left-1 top-2/4 z-10 group-hover:-left-2"></div>

              </div>
          </div>


            
         </div>
    </section>
  )
};





export default Testimonial;
