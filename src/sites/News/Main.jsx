import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

export default function Main(){
  
  const ref = useRef();
  const isInView = useInView(ref, { margin: '0%', once: true });

    return(
        <main ref={ref}>
            <div className="flex flex-col items-center">

              <h1 className="2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[14vw] leading-[0.75] text-center flex flex-col items-center justify-center relative z-30  2xl:pt-[150px] sm:pt-[100px] lg:pt-[150px] pt-[100px]">
                {['Nowości ze', 'świata sztuki'].map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span
                      initial={{ y: '150%' }}
                      animate={isInView ? { y: '0%' } : { y: '150%' }}
                      transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: i * 0.1 }}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  </div>
                ))}
              </h1>

              <motion.p
                className="relative z-20 2xl:text-[1.5vw] lg:text-[2vw] text-[3.3vw] sm:text-[2.5vw] font-satoshi leading-[1.1] tracking-[-1%] w-[90vw] sm:w-[76vw] lg:w-[62vw] 2xl:w-[46vw] text-[#C3C3C3] xl:mt-[1.2vw] lg:mt-[1.5vw] xl:mb-[2vw] lg:mb-[2.5vw] mt-[2.5vw] mb-[5vw] text-center"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: 0.2 }}
              >
                W tej sekcji możesz dowiedzieć się o wszelkich konkursach które będą miały miejsce w najbliższym czasie.
              </motion.p>

            </div>
        </main>
    )
}