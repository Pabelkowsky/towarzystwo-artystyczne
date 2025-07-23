import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import MiniButton from '../../components/MiniButton';

import img1 from '../../assets/contact1.png';
import img2 from '../../assets/contact2.png';

export default function Contact() {
  const sectionRef = useRef();
  const headingRef = useRef();

  const isInView = useInView(headingRef, { margin: '0%', once: false });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const overlayWidth = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);

  const headingVariants = {
    hidden: { y: '100%' },
    visible: { y: '0%' },
  };

  return (
    <section
      ref={sectionRef}
      className="pt-[20vw] sm:pt-[10vw]"
      id='contact'
    >
      <div className="relative flex pr-[5vw] pl-[5vw] lg:justify-start justify-center">
        <div className="flex flex-col items-center lg:items-start lg:text-start text-center" ref={headingRef}>
          {/* Nagłówek */}
          <h5 className="relative z-20 flex flex-col overflow-hidden 2xl:text-[7.5vw] lg:text-[9vw] sm:text-[12vw] text-[12vw] leading-[0.76]">
            {['Czekamy na twoją', 'wiadomość'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  variants={headingVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ duration: 1, ease: [0.75, 0, 0.25, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h5>

          {/* Paragraf */}
          <div className="relative z-20 2xl:text-[1.1vw] lg:text-[1.5vw] text-[3.2vw] sm:text-[2vw] font-satoshi leading-[1.1] tracking-[-1%] w-[85vw] sm:w-[75vw] lg:w-[40vw] 2xl:w-[32vw] text-[#C3C3C3] xl:mt-[1vw] lg:mt-[2vw] mt-[2.5vw]">
            <div className="overflow-hidden">
              <motion.span
                variants={headingVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: 0.1 }}
                className="block"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </motion.span>
            </div>
          </div>

          {/* BUTTONY – każda sekcja oddzielnie, z marginesem top */}
          <div className="flex sm:flex-row flex-row justify-center mt-[6vw] sm:mt-[4vw] gap-[2vw] sm:gap-[1vw]">
            <MiniButton bg={true} text="inna.nazwa@email.com" />
            <MiniButton bg={true} text="790-558-571" />
          </div>

          <div className="flex sm:flex-row flex-row justify-center mt-[6vw] sm:mt-[1vw] gap-[2vw] sm:gap-[1vw]">
            <MiniButton bg={true} text="pawelg@email.com" />
            <MiniButton bg={true} text="123-456-789" />
          </div>

          <div className="flex sm:flex-row flex-row justify-center mt-[6vw] sm:mt-[1vw] gap-[2vw] sm:gap-[1vw]">
            <MiniButton bg={true} text="kontakt@firma.pl" />
            <MiniButton bg={true} text="987-654-321" />
          </div>

          <div className='lg:hidden block mt-[10vw]'>
            <img src={img2} alt="" className='w-[70vw] h-[45vw] object-cover rounded-[5vw]' />
        </div>
        </div>
        

        {/* Obrazki z overlayami */}
        <div className="absolute w-[20vw] h-[30vw] bottom-0 right-[5vw] hidden lg:block overflow-hidden">
          <img src={img2} alt="" className="w-full h-full object-cover" />
          <motion.div
            style={{ width: overlayWidth }}
            className="absolute top-0 left-0 h-full bg-[#101010] z-10"
          />
        </div>

        <div className="absolute w-[16vw] h-[18vw] bottom-0 right-[28vw] hidden lg:block overflow-hidden">
          <img src={img1} alt="" className="w-full h-full object-cover" />
          <motion.div
            style={{ width: overlayWidth }}
            className="absolute top-0 left-0 h-full bg-[#101010] z-10"
          />
        </div>
      </div>
    </section>
  );
}
