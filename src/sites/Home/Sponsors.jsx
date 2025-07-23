import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import logo1 from '/logo.png';
import PageButton from '../../components/PageButton'

export default function Sponsors() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '0% 0px' });

  const headingVariants = {
    hidden: { y: '100%', opacity: 1 },
    visible: { y: '0%', opacity: 1 },
  };

  return (
    <section className="pt-[30vw] lg:pt-[15vw]">
      <div ref={ref} className="flex flex-col items-center text-center">
        <h3 className="flex flex-col overflow-hidden 2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[15vw] leading-[0.75]">
          {['Marki, które', 'nas wspierają'].map((line, i) => (
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
        </h3>

        <div className="flex my-[12vw] lg:my-[6vw] overflow-x-hidden whitespace-nowrap overflow-hidden gap-[6vw] w-[80vw] relative">
          <div className="absolute top-0 left-0 h-full w-[20vw] gradient1 z-20"></div>
          <div className="absolute top-0 right-0 h-full w-[20vw] gradient2 z-20"></div>

          <div className="slider flex flex-shrink-0 overflow-hidden gap-[6vw]">
            {Array(9).fill(0).map((_, i) => (
              <img key={i} src={logo1} alt="" className="h-[10vw] sm:h-[6vw] lg:h-[5vw]" />
            ))}
          </div>

          <div className="slider flex flex-shrink-0 overflow-hidden gap-[6vw]">
            {Array(9).fill(0).map((_, i) => (
              <img key={i} src={logo1} alt="" className="h-[10vw] sm:h-[6vw] lg:h-[5vw]" />
            ))}
          </div>
        </div>

        <PageButton text='Wesprzyj nas' targetId='support-us'/>
        
      </div>
    </section>
  );
}
