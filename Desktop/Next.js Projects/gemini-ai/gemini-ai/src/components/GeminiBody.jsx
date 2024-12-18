
"use client";
import React, { useContext } from 'react'
import { CircleUserRound, Compass, Lightbulb,Youtube,Code,Upload } from 'lucide-react'
import { Context } from '@/Context/ContextProvider'
const GeminiBody = () => {

  const {    
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput} = useContext(Context)
    
  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
       <div  className="flex items-center justify-between p-5 text-xl text-gray-400">
         <p>Gemini✨</p>
         <CircleUserRound size={25} className="text-softTextColor" />
       </div>

       <div className="max-w-[900px] m-auto">

        {!displayResult ? 
             <>  
      
                   

              <div className="p-5 my-12 text-5xl font-medium">
               
              <p>
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-400 relative -top-[3rem]">
                  Hello, Coder
                </span>
               </p>
              <p className=' relative -top-[3rem]'>How Can I Help You Today?</p>
              </div>
              <div className="grid grid-cols-4 gap-5 p-5 sm:flex-cols-1">
                   <div  className="relative h-48 p-4 cursor-pointer bg-bgSecondaryColor rounded-xl -top-[6rem]
                    hover:bg-[#072E33] 
                   
                    hover:text-gray-300">
                   <p>Suggest beautiful places to see on an upcoming road trip</p>
                   <Compass
                   size={35}
                   className="absolute p-1 rounded-full bottom-2 right-2 bg-bgPrimaryColor text-softTextColor"
                   />

                   
                   </div>

                   <div className="relative h-48 p-4 cursor-pointer bg-bgSecondaryColor rounded-xl -top-[6rem] hover:bg-[#072E33] 
                   
                   hover:text-gray-300">
                <p>What’s the reaction to and impact of autonomous vehicles</p>
                <Lightbulb
                  size={35}
                  className="absolute p-1 rounded-full bottom-2 right-2 bg-bgPrimaryColor text-softTextColor"
                />
              </div>
              <div className="relative h-48 p-4 cursor-pointer bg-bgSecondaryColor rounded-xl -top-[6rem] hover:bg-[#072E33] 
                   
                   hover:text-gray-300">
              <p>Come up with a recipe for an upcoming event</p>
              <Youtube
                  size={35}
                  className="absolute p-1 rounded-full bottom-2 right-2 bg-bgPrimaryColor text-softTextColor"
                />
              </div>
              <div className="relative h-48 p-4 cursor-pointer bg-bgSecondaryColor rounded-xl -top-[6rem] hover:bg-[#072E33] 
                   
                   hover:text-gray-300">
              <p>Evaluate and rank common camera categories</p>
              <Code
                  size={35}
                  className="absolute p-1 rounded-full bottom-2 right-2 bg-bgPrimaryColor text-softTextColor"
                />
              </div>

                   
              </div>
              </>: 
              
               ( <div className="result">
                     <h3 className=' relative left-[3rem] top-[2.5rem] font-semibold font-mono text-gray-700'>You</h3>
                    <div className='flex items-center gap-5 my-10'>
                     
                    <CircleUserRound size={30} className="text-softTextColor" />
                    <p className='font-semibold text-gray-500 '> {recentPrompts}</p>
                    </div>

                    <div className="flex items-start gap-5">
                          <img src="/gemini.png" alt=""  height={50} width={50} className=' relative -top-[1rem]'    />
                          <p
                           className="font-normal text-gray-400 text-md loading-6"
                           dangerouslySetInnerHTML={{ __html: result }}
                          ></p>
                    </div>
                
                </div>)}

                <div className="absolute bottom-0 w-full max-w-[900px] px-5 m-auto">
                  
                   <form action={submit}>

                        <div  className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-[12px] relative required: top-[0.5rem]">
                             
                             <input
                             onChange={(e) => setInput(e.target.value)}
                             value={input}
                             type='text'
                             className="flex-1 p-2 text-gray-400 bg-transparent border-none outline-none text-md"
                             placeholder="Message Gemini..."
                             />

                           <div className='p-2 rounded bg-black/15 '>
                            <Upload
                            type='submit'
                            size={20}
                            className='font-bold cursor-pointer text-white/45 '/>
                           </div>
                        </div>
                   </form>

                   <p className="p-3 text-sm text-center text-gray-400">
                    Gemini may display inaccurate info, including about people, so
                    double-check its responses. Your privacy and Gemini Apps
                  </p>
                </div>
       </div>
      
    </div>
  )
}

export default GeminiBody
