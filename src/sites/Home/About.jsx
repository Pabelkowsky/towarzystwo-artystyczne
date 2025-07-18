import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import img1 from '../../assets/szal-uniesien.jpg';
import img2 from '../../assets/smierc-ellenai.jpg';
import Button from '../../components/Button';

export default function About() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // animuje przez całą długość sekcji
  });

  const overlayWidth = useTransform(scrollYProgress, [0, 0.4], ['100%', '0%']);
  const headingY = useTransform(scrollYProgress, [0, 0.4], ['100%', '0%']);

  return (
    <section ref={ref}>
      <div>
        {/* Duże ekrany */}
        <div className="hidden lg:flex relative pl-[9vw] 2xl:pl-[20vw] gap-[6vw]">
          <div className="flex flex-col text-right lg:text-left overflow-hidden 2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[18vw] leading-[0.75]">
            {['Dwa zdania', 'o nas'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span style={{ y: headingY }} className="block w-full">
                  {line}
                </motion.span>
              </div>
            ))}
          </div>
          <div className="relative 2xl:w-[35vw] w-[40vw] 2xl:h-[20vw] h-[24vw] overflow-hidden">
            <img
              src={img1}
              alt="Szał uniesień"
              className="w-full h-full object-cover translate-y-[-1vw]"
            />
            <motion.div
              style={{ width: overlayWidth }}
              className="absolute top-0 left-0 h-full bg-[#101010] z-10"
            />
          </div>
        </div>

        <div className="hidden lg:flex relative pl-[9vw] 2xl:pl-[10vw]">
          <div className="relative w-[35vw] h-[26vw] 2xl:h-[23vw] overflow-hidden">
            <img
              src={img2}
              alt="Śmierć Ellenai"
              className="w-full h-full object-cover translate-y-[-3vw]"
            />
            <motion.div
              style={{ width: overlayWidth }}
              className="absolute top-0 left-0 h-full bg-[#101010] z-10"
            />
          </div>
          <div className="ml-[5vw] 2xl:ml-[8.2vw] flex flex-col gap-[2vw] 2xl:gap-[2vw] self-end translate-y-[-3vw]">
            <p className="2xl:text-[1.1vw] text-[1.5vw] font-satoshi leading-[1.1] tracking-[-1%] w-[40vw] 2xl:w-[30vw] text-[#C3C3C3]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button text="Dołącz do nas" />
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="flex flex-col gap-[5vw] lg:hidden">
          <div className="flex justify-center gap-[5vw]">
            <div className="relative w-[25vw] h-[77vw] sm:h-[43.5vw] overflow-hidden">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-cover"
              />
              <motion.div
                style={{ width: overlayWidth }}
                className="absolute top-0 left-0 h-full bg-[#101010] z-10"
              />
            </div>
            <div className="flex flex-col w-[60vw] gap-[6vw] sm:gap-[1vw]">
              <div className="flex flex-col overflow-hidden 2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[15vw] leading-[0.75]">
                {['Dwa zdania', 'o nas'].map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span style={{ y: headingY }} className="block">
                      {line}
                    </motion.span>
                  </div>
                ))}
              </div>
              <p className="text-[3.5vw] sm:text-[2vw] font-satoshi leading-[1.1] tracking-[-1%] text-[#C3C3C3]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="sm:mt-[4vw]">
                <Button text="Dołącz do nas" />
              </div>
            </div>
          </div>

          <div className="relative flex justify-center w-full overflow-hidden">
            <img
              src={img2}
              alt=""
              className="w-[90vw] h-[40vw] object-cover"
            />
            <motion.div
              style={{ width: overlayWidth }}
              className="absolute top-0 left-0 h-full bg-[#101010] z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
