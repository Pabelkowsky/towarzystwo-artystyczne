import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../../components/Button';

import img3 from '../../assets/film-i-fotografia.png'
import img2 from '../../assets/literatura.webp'
import img4 from '../../assets/malarstwo.webp'
import img5 from '../../assets/muzyka.jpg'
import img1 from '../../assets/rekodzielo.jpg'
import img6 from '../../assets/sztuka-cyfrowa.png'


export default function ArtistGroups() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.2], ['150%', '0%']);

  // Rotacje od 0 do końcowej wartości
  const rotate1 = useTransform(scrollYProgress, [0, 1], ['-12deg', '12deg']);
  const rotate2 = useTransform(scrollYProgress, [0, 1], ['13deg', '-13deg']);
  const rotate3 = useTransform(scrollYProgress, [0, 1], ['-14deg', '14deg']);
  const rotate4 = useTransform(scrollYProgress, [0, 1], ['10.5deg', '-10.5deg']);
  const rotate5 = useTransform(scrollYProgress, [0, 1], ['-12deg', '12deg']);
  const rotate6 = useTransform(scrollYProgress, [0, 1], ['11.5deg', '-11.5deg']);

  return (
    <section className='pt-[35vw] lg:pt-[15vw]'>
      <div ref={ref}>

        <h4 className="pl-[5vw] flex flex-col overflow-hidden 2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[15vw] leading-[0.75]">
          {['Nasze dziedziny', 'artystyczne'].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span style={{ y: headingY }} className="block">
                {line}
              </motion.span>
            </div>
          ))}
        </h4>

        <div className='mt-[15vw] lg:mt-[7vw]'>
          <div className="flex lg:flex-row lg:justify-start items-center flex-col gap-[15vw] sm:gap-[10vw] lg:gap-[1.5vw] pl-[5vw]">

            <motion.div style={{ rotate: rotate1 }} className="left-[-10vw] sm:left-[-20vw] lg:left-[0] w-[60vw] sm:w-[45vw] lg:w-[28.5vw] xl:w-[20vw] flex justify-center items-end pb-[2vw] lg:pb-[1vw] aspect-square relative">
              <img src={img1} alt="" className='absolute object-cover left-0 top-0 w-full h-full' />
              <Button text='Rękodzieło' bg={true}></Button>
            </motion.div>

            <motion.div style={{ rotate: rotate2 }} className="left-[7vw] sm:left-[15vw] lg:left-[0] w-[60vw] sm:w-[45vw] lg:w-[28.5vw] xl:w-[20vw] flex justify-center items-end pb-[2vw] lg:pb-[1vw] aspect-square relative">
              <img src={img2} alt="" className='absolute object-cover left-0 top-0 w-full h-full' />
              <Button text='Literatura' bg={true}></Button>
            </motion.div>

            <motion.div style={{ rotate: rotate3 }} className="left-[-5vw] sm:left-[-10vw] lg:left-[0] w-[60vw] sm:w-[45vw] lg:w-[28.5vw] xl:w-[20vw] flex justify-center items-end pb-[2vw] lg:pb-[1vw] aspect-square relative">
              <img src={img3} alt="" className='absolute object-cover left-0 top-0 w-full h-full' />
              <Button text='Film i fotografia' bg={true}></Button>
            </motion.div>

          </div>

          <div className="flex lg:flex-row flex-col items-center lg:justify-start xl:justify-end gap-[15vw] sm:gap-[10vw] lg:gap-[1.5vw] lg:pl-[5vw] xl:pl-[0] xl:pr-[5vw] mt-[15vw] sm:mt-[10vw] xl:mt-[6vw]">

            <motion.div style={{ rotate: rotate4 }} className="left-[5vw] sm:left-[10vw] lg:left-[0] w-[60vw] sm:w-[45vw] lg:w-[28.5vw] xl:w-[20vw] flex justify-center items-end pb-[2vw] lg:pb-[1vw] aspect-square relative">
              <img src={img4} alt="" className='absolute object-cover left-0 top-0 w-full h-full' />
              <Button text='Malarstwo' bg={true}></Button>
            </motion.div>

            <motion.div style={{ rotate: rotate5 }} className="left-[-3vw] sm:left-[-20vw] lg:left-[0] w-[60vw] sm:w-[45vw] lg:w-[28.5vw] xl:w-[20vw] flex justify-center items-end pb-[2vw] lg:pb-[1vw] aspect-square relative">
              <img src={img5} alt="" className='absolute object-cover left-0 top-0 w-full h-full' />
              <Button text='Muzyka' bg={true}></Button>
            </motion.div>

            <motion.div style={{ rotate: rotate6 }} className="left-[3vw] sm:left-[5vw] lg:left-[0] w-[60vw] sm:w-[45vw] lg:w-[28.5vw] xl:w-[20vw] flex justify-center items-end pb-[2vw] lg:pb-[1vw] aspect-square relative">
              <img src={img6} alt="" className='absolute object-cover left-0 top-0 w-full h-full' />
              <Button text='Sztuka cyfrowa' bg={true}></Button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
