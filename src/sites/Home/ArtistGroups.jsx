import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

import Button from '../../components/Button';

import img3 from '../../assets/film-i-fotografia.png';
import img2 from '../../assets/literatura.webp';
import img4 from '../../assets/malarstwo.webp';
import img5 from '../../assets/muzyka.jpg';
import img1 from '../../assets/rekodzielo.jpg';
import img6 from '../../assets/sztuka-cyfrowa.png';

export default function ArtistGroups() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '0% 0px', once:true });
  const { handleNavigate } = useOutletContext();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.2], ['150%', '0%']);
  const rotate1 = useTransform(scrollYProgress, [0, 1], ['-12deg', '12deg']);
  const rotate2 = useTransform(scrollYProgress, [0, 1], ['13deg', '-13deg']);
  const rotate3 = useTransform(scrollYProgress, [0, 1], ['-14deg', '14deg']);
  const rotate4 = useTransform(scrollYProgress, [0, 1], ['10.5deg', '-10.5deg']);
  const rotate5 = useTransform(scrollYProgress, [0, 1], ['-12deg', '12deg']);
  const rotate6 = useTransform(scrollYProgress, [0, 1], ['11.5deg', '-11.5deg']);

  // Reusable clickable container
  const ClickableBox = ({ img, text, rotate, href }) => (
    <motion.div
      style={{ rotate }}
      onClick={() => handleNavigate(href)}
      className="cursor-pointer w-[60vw] sm:w-[45vw] lg:w-[28.5vw] xl:w-[20vw] flex justify-center items-end pb-[2vw] lg:pb-[1vw] aspect-square relative"
    >
      <img src={img} alt={text} loading='lazy' className="absolute object-cover left-0 top-0 w-full h-full" />
      <Button text={text} bg={true} href={href} />
    </motion.div>
  );

  return (
    <section className="pt-[35vw] lg:pt-[15vw]">
      <div ref={ref}>
        <h4 className="pl-[5vw] flex flex-col overflow-hidden 2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[15vw] leading-[0.75]">
          {['Nasze obszary', 'twórczości'].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={isInView ? { y: '0%' } : { y: '100%' }}
                transition={{ duration: 1, ease: [0.75, 0, 0.25, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h4>

        <div className="mt-[15vw] lg:mt-[7vw]">
          <div className="flex lg:flex-row lg:justify-start items-center flex-col gap-[15vw] sm:gap-[10vw] lg:gap-[1.5vw] pl-[5vw]">
            <ClickableBox img={img1} text="Rękodzieło" rotate={rotate1} href="/rekodzielo" />
            <ClickableBox img={img2} text="Literatura" rotate={rotate2} href="/literatura" />
            <ClickableBox img={img3} text="Film i fotografia" rotate={rotate3} href="/film-i-fotografia" />
          </div>

          <div className="flex lg:flex-row flex-col items-center lg:justify-start xl:justify-end gap-[15vw] sm:gap-[10vw] lg:gap-[1.5vw] lg:pl-[5vw] xl:pl-[0] xl:pr-[5vw] mt-[15vw] sm:mt-[10vw] xl:mt-[6vw]">
            <ClickableBox img={img4} text="Malarstwo" rotate={rotate4} href="/malarstwo" />
            <ClickableBox img={img5} text="Muzyka" rotate={rotate5} href="/muzyka" />
            <ClickableBox img={img6} text="Sztuka cyfrowa" rotate={rotate6} href="/sztuka-cyfrowa" />
          </div>
        </div>
      </div>
    </section>
  );
}
