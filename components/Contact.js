const Contact = () => {

  return (
     <section className="py-12 relative overflow-hidden bg-gray-50" id="contact" >
         <div className="container space-y-10 relative z-50">

           <header className="md:w-2/4 mx-auto text-center space-y-3">
                <span className="font-bold text-purple-900">NEED HELP</span>
                <h1 className="text-4xl font-bold">Quick Contact</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


                   <div className="col-span-1">
                        <div className="flex flex-col items-center justify-center  p-6 md:p-10 h-full w-full bg-contact text-white space-y-5">
                             <h1 className="text-4xl font-bold">Do You Have Any Questions?</h1>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>  
                   </div>


                      <form className="grid md:grid-cols-2 col-span-2 gap-5 py-5">

                         <div className="form-group w-full md:col-span-2">
                              <h1 className="text-2xl font-bold">Please Fill Up The Form To Get In Touch With Us</h1>
                         </div>

                         <div className="form-group w-full md:col-span-2">
                              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                         </div>


                         <div className="form-group w-full">
                              <input className="p-3 w-full placeholder-gray-800 rounded text-sm font-bold ring-2 ring-gray-200 focus:outline-0 focus:ring-purple-900" placeholder="Your Name"/>
                         </div>

                         <div className="form-group w-full">
                              <input className="p-3 w-full placeholder-gray-800 rounded text-sm font-bold ring-2 ring-gray-200 focus:outline-0 focus:ring-purple-900" placeholder="Your Email Address"/>
                         </div>

                         <div className="form-group w-full">
                              <input className="p-3 w-full placeholder-gray-800 rounded text-sm font-bold ring-2 ring-gray-200 focus:outline-0 focus:ring-purple-900" placeholder="Your Subject"/>
                         </div>

                         <div className="form-group w-full">
                              <input className="p-3 w-full placeholder-gray-800 rounded text-sm font-bold ring-2 ring-gray-200 focus:outline-0 focus:ring-purple-900" placeholder="Your Phone number"/>
                         </div>


                         <div className="form-group w-full md:col-span-2">
                              <textarea className="p-3 w-full placeholder-gray-800 rounded text-sm font-bold ring-2 ring-gray-200 focus:outline-0 focus:ring-purple-900" placeholder="Write Message" rows="4"></textarea>
                         </div>


                         <div className="form-group w-full md:col-span-2">
                           <button className="bg-primary rounded-full   font-bold py-3 px-12">
                             Send Message
                          </button>          
                     </div>



                        
                      </form>
              </div>

         </div>

    </section>
  )
};





export default Contact;
