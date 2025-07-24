import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import img1 from '../assets/rekodzielo.jpg';
import img2 from '../assets/rekodzielo.jpg';
import img3 from '../assets/rekodzielo.jpg';

export default function WorksMain() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '0%', once: true });

  // Dodane: scroll-based motion
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scrollTranslate = useTransform(scrollYProgress, [0, 1], ['0vw', '10vw']);

  return (
    <section>
      <div ref={ref} className="px-[5vw] 2xl:pt-[200px] sm:pt-[180px] lg:pt-[200px] pt-[150px]">
        {/* DESKTOP layout */}
        <div className="hidden lg:flex relative h-[35vw] justify-between ">
          {/* ...left image... */}
          <div className="w-[17vw] 2xl:w-[15%] items-end flex relative overflow-hidden">
            <img src={img1} alt="" className="relative z-10 w-full h-[15vw] object-cover brightness-[0.4]" />
            <motion.div
              initial={{ height: '100%' }}
              animate={isInView ? { height: 0 } : { height: '100%' }}
              transition={{ duration: 1.7, ease: [0.75, 0, 0.25, 1] }}
              className="absolute w-[102%] h-[102%] left-[-1%] top-[-1%] bg-[#101010] z-20"
            />
          </div>

          {/* Środkowy heading */}
          <div className="absolute w-[27%] h-[100%] left-[50%] translate-x-[-50%] flex z-20">
            <div className="relative w-full h-full flex justify-center items-start">
              <img src={img2} alt="" className="object-cover brightness-[0.4] absolute w-full h-full" />
              <motion.div
                initial={{ height: '100%' }}
                animate={isInView ? { height: 0 } : { height: '100%' }}
                transition={{ duration: 1.7, ease: [0.75, 0, 0.25, 1] }}
                className="absolute w-[102%] h-[102%] left-[-1%] top-[-1%] bg-[#101010] z-30"
              />
              <motion.h1
                style={{ translateY: scrollTranslate }}
                className="relative z-40 mix-blend-difference translate-y-[-4vw] leading-[0.75] text-center flex flex-col items-center justify-center"
              >
                {['Sztuka','cyfrowa'].map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span
                      initial={{ y: '150%' }}
                      animate={isInView ? { y: '0%' } : { y: '150%' }}
                      transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: i * 0.1 }}
                      className="block lg:text-[12vw] sm:text-[13vw] text-[20vw]"
                    >
                      {line}
                    </motion.span>
                  </div>
                ))}
              </motion.h1>
            </div>
          </div>

          {/* ...right image + text... */}
          <div className="w-[17vw] 2xl:w-[15%] flex flex-col justify-between relative">
            <div className="relative w-full overflow-hidden">
              <img src={img3} alt="" className="relative z-10 w-full h-[15vw] object-cover brightness-[0.4] self-start" />
              <motion.div
                initial={{ height: '100%' }}
                animate={isInView ? { height: 0 } : { height: '100%' }}
                transition={{ duration: 1.7, ease: [0.75, 0, 0.25, 1] }}
                className="absolute w-[102%] h-[102%] left-[-1%] top-[-1%] bg-[#101010] z-20"
              />
            </div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: 0.2 }}
              className="2xl:text-[1.1vw] lg:text-[1.3vw] text-[3.3vw] sm:text-[2.5vw] font-satoshi leading-[1.1] tracking-[-1%] text-[#C3C3C3] text-end"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </motion.p>
          </div>
        </div>

        {/* MOBILE layout */}
        <div className="flex lg:hidden flex-col relative sm:items-end w-[60vw] sm:pl-[0] pl-[5vw]">
          <div className="relative w-[70vw] sm:w-[45vw] h-[100vw] sm:h-[55vw] flex">
            <img src={img2} alt="" className="w-full h-full object-cover absolute brightness-[0.4]" />
            <motion.div
              initial={{ height: '100%' }}
              animate={isInView ? { height: 0 } : { height: '100%' }}
              transition={{ duration: 1.7, ease: [0.75, 0, 0.25, 1] }}
              className="absolute w-[102%] h-[102%] left-[-1%] top-[-1%] bg-[#101010] z-20"
            />
            <motion.h1
              style={{ translateY: scrollTranslate }}
              className="absolute right-[-10vw] sm:right-0 z-30 mix-blend-difference translate-y-[-8vw] sm:translate-y-[-4vw] sm:translate-x-[33%] leading-[0.75] text-end flex flex-col items-end justify-center"
            >
              {['Sztuka','cyfrowa'].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    initial={{ y: '150%' }}
                    animate={isInView ? { y: '0%' } : { y: '150%' }}
                    transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: i * 0.1 }}
                    className="block lg:text-[12vw] sm:text-[16vw] text-[20vw]"
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </motion.h1>
          </div>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: 0.2 }}
            className="2xl:text-[1.1vw] lg:text-[1.3vw] text-[3.3vw] sm:text-[3.1vw] font-satoshi leading-[1.1] tracking-[-1%] text-[#C3C3C3] w-[70vw] sm:w-[45vw] mt-[5vw] sm:mt-[3vw]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          </motion.p>
        </div>
      </div>
    </section>
  );
}
