import {useEffect, useState,useRef} from "react";

const faqs = [
{question:"Lorem ipsum dolor sit amet",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."},
{question:"consectetur adipiscing elit",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."},
{question:"sed do eiusmod tempor incididunt ut",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."},
{question:"labore et dolore magna aliqua",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."},
{question:"Lorem ipsum dolor sit amet",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie."}];

const Faq = () => {

  const [selected,setSelected] = useState(0);

  const toggle = (i) => selected == i ? setSelected(null) : setSelected(i);



  return (
     <section className="py-12 relative overflow-hidden" id="faq" >
         <div className="container space-y-10 relative">

           <header className="md:w-2/4 mx-auto text-center space-y-3">
                <span className="font-bold text-purple-900">FAQ's</span>
                <h1 className="text-4xl font-bold">Frequently Questions</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="flex flex-col items-center justify-center p-5 ">
                        <img src="/svgs/faq.svg" />   
                   </div>


                    <div className="">

                      <div className="md:py-12  overflow-hidden">
                        {faqs.map( (item,index) => 
                          <div className={`${selected === index && 'shadow-lg'}`} key={index}>
                              <div className={`flex justify-between items-center cursor-pointer p-3 text-lg ${selected === index ? 'bg-gradient-to-r from-purple-900 to-purple-400 text-white' :  'shadow'}`} onClick={() => toggle(index)}>
                                <h2 className="font-semibold">{item.question}?</h2>
                                <span>{selected === index ? '—' : '+'}</span>
                              </div>
                              <div className={`${selected === index ? 'bg-white py-3' : null} overflow-hidden  px-3  ${selected === index ? 'h-auto' : 'h-0'}`}>{item.answer}</div>
                          </div>
                          )}
                      </div>
                                
                   </div>
              </div>

         </div>

         <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-100 rounded-full z-10"></div>
         <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-100 rounded-full z-10"></div>
    </section>
  )
};





export default Faq;
