import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../../components/Button';

import img1 from '../../assets/support1.png'
import img2 from '../../assets/support2.png'
import img3 from '../../assets/support3.png'


export default function SupportUs(){
    

    return(
        <section className='pt-[15vw]'>
            <div className='flex flex-col justify-center items-center relative'>
                
              <div className="absolute w-full h-full flex">
                <div className='w-[100%] h-full'><img src={img1} alt="" className='w-full h-full object-cover rounded-[12vw] sm:rounded-[7vw] brightness-[0.2]'/></div>
                <div className='w-[100%] h-full'><img src={img2} alt="" className='w-full h-full object-cover rounded-[12vw] sm:rounded-[7vw] brightness-[0.2]'/></div>
                <div className='w-[100%] h-full'><img src={img3} alt="" className='w-full h-full object-cover rounded-[12vw] sm:rounded-[7vw] brightness-[0.2]'/></div>
              </div>

              <div className='text-center flex flex-col items-center justify-center py-[30vw] sm:py-[20vw] lg:py-[15vw]'>
                          <h5 className="relative z-20 flex flex-col overflow-hidden 2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[12vw] leading-[0.76]">
                            {['Chcesz nas wesprzeć?'].map((line, i) => (
                              <div key={i} className="overflow-hidden">
                                <motion.span>
                                  {line}
                                </motion.span>
                              </div>
                            ))}
                          </h5>
              
                          {/* ANIMOWANY TEKST */}
                          <motion.p
                            className="relative z-20 2xl:text-[1.1vw] lg:text-[1.5vw] text-[3.2vw] sm:text-[2vw] font-satoshi leading-[1.1] tracking-[-1%] w-[85vw] sm:w-[75vw] lg:w-[60vw] 2xl:w-[40vw] text-[#C3C3C3] xl:mt-[1.5vw] lg:mt-[2vw] mt-[2.5vw]"
                          >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                          </motion.p>


                          <p className='relative z-20 2xl:text-[4.5vw] lg:text-[6vw] sm:text-[7vw] text-[8vw] leading-[0.76] xl:mb-[2vw] lg:mb-[2.5vw] mt-[5vw] sm:mt-[2.5vw] lg:mt-[2vw] mb-[5vw]'>12 3456 7890 1234 5678 9012 3456</p>
              
                          {/* ANIMOWANY BUTTON */}
                          <motion.div>
                            <Button text="Napisz do nas" />
                          </motion.div>
              </div>
            
            </div>
        </section>
    )
}