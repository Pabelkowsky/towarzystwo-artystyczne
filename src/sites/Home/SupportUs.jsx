import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScroll, useTransform, motion as motionDiv } from 'framer-motion';

import PageButton from '../../components/PageButton';

import img1 from '../../assets/support1.png'
import img2 from '../../assets/support2.png'
import img3 from '../../assets/support3.png'

export default function SupportUs() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '0%', once: false });

  return (
    <section className='mt-[15vw]' id='support-us'>
      <div ref={ref} className='flex flex-col justify-center items-center relative'>

        <div className="absolute w-full h-full flex">
          <div className='w-[100%] h-full'><img src={img1} alt="" className='w-full h-full object-cover rounded-[12vw] sm:rounded-[7vw] brightness-[0.2]' /></div>
          <div className='w-[100%] h-full'><img src={img2} alt="" className='w-full h-full object-cover rounded-[12vw] sm:rounded-[7vw] brightness-[0.2]' /></div>
          <div className='w-[100%] h-full'><img src={img3} alt="" className='w-full h-full object-cover rounded-[12vw] sm:rounded-[7vw] brightness-[0.2]' /></div>
        </div>

        <div className='text-center flex flex-col items-center justify-center py-[30vw] sm:py-[20vw] lg:py-[15vw]'>

          {/* NAGŁÓWEK */}
          <h5 className="relative z-20 flex flex-col overflow-hidden 2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[12vw] leading-[0.76]">
            {['Chcesz nas wesprzeć?'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  initial={{ y: '150%' }}
                  animate={isInView ? { y: '0%' } : { y: '150%' }}
                  transition={{ duration: 1, ease: [0.75, 0, 0.25, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h5>

          {/* TEKST */}
          <motion.p
            className="relative z-20 2xl:text-[1.1vw] lg:text-[1.5vw] text-[3.2vw] sm:text-[2vw] font-satoshi leading-[1.1] tracking-[-1%] w-[85vw] sm:w-[75vw] lg:w-[60vw] 2xl:w-[40vw] text-[#C3C3C3] xl:mt-[1.5vw] lg:mt-[2vw] mt-[2.5vw]"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: 0.1 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </motion.p>

          {/* NUMER KONTA */}
          <motion.p
            className='relative z-20 2xl:text-[4.5vw] lg:text-[6vw] sm:text-[7vw] text-[8vw] leading-[0.76] xl:mb-[2vw] lg:mb-[2.5vw] mt-[5vw] sm:mt-[2.5vw] lg:mt-[2vw] mb-[5vw]'
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: 0.2 }}
          >
            12 3456 7890 1234 5678 9012 3456
          </motion.p>

          {/* PRZYCISK */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: 0.3 }}
          >
            <PageButton text="Napisz do nas" targetId='contact'/>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
