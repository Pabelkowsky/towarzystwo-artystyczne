import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo1 from '/logo.png'


export default function Sponsors(){


    const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // animuje przez całą długość sekcji
  });

  const headingY = useTransform(scrollYProgress, [0, 0.5], ['150%', '0%']);


    return(
        <section className='pt-[30vw] lg:pt-[15vw]'>
            <div ref={ref} className='flex flex-col items-center text-center'>
                <h3 className="flex flex-col overflow-hidden 2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[15vw] leading-[0.75]">
                {['Marki, które', 'nas wspierają'].map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span style={{ y: headingY }} className="block">
                      {line}
                    </motion.span>
                  </div>
                ))}
              </h3>

<div className="flex mt-[10vw] lg:mt-[6vw] overflow-x-hidden whitespace-nowrap overflow-hidden gap-[6vw] w-[80vw] relative">

    <div className="absolute top-0 left-0 h-full w-[20vw] gradient1 z-20"></div>
    <div className="absolute top-0 right-0 h-full w-[20vw] gradient2 z-20"></div>

  <div className='slider flex flex-shrink-0 overflow-hidden gap-[6vw]'>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
  </div>
  <div className='slider flex flex-shrink-0 overflow-hidden gap-[6vw]'>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
    <img src={logo1} alt="" className='h-[8vw] sm:h-[6vw] lg:h-[3.5vw]'/>
  </div>
</div>



                

                
            </div>
        </section>
    )
}