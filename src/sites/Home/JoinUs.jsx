import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../../components/Button';

import img1 from '../../assets/glitch-portret.png';
import img2 from '../../assets/retro-tunel.png';
import img3 from '../../assets/nowoczesna-rzezba.png';
import img4 from '../../assets/rzezba2.png';
import img5 from '../../assets/surrealistyczny-portret.png';
import img6 from '../../assets/projekt-sztuki-cyfrowej.png';

export default function JoinUs() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const headingY = useTransform(scrollYProgress, [0.4, 0.9], ['150%', '0%']);
  const fadeIn = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const elementY = useTransform(scrollYProgress, [0.6, 0.9], ['100%', '0%']);

  const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getValue = (map) => {
    if (screenWidth >= 1536) return map['2xl'] || map.lg || map.base;
    if (screenWidth >= 1024) return map.lg || map.base;
    return map.base;
  };

  const images = [
    {
      src: img1,
      alt: 'Glitch portret',
      xEnd: { base: '-40vw', lg: '-40vw', '2xl': '-35vw' },
      yEnd: { base: '-30vh', lg: '-20vh', '2xl': '-20vh' },
      className: '2xl:w-[15vw] lg:w-[12vw] h-[18vh] lg:h-[20vh]',
    },
    {
      src: img2,
      alt: 'Tunel',
      xEnd: { base: '5vw', lg: '-3vw' },
      yEnd: { base: '-37vh', lg: '-38vh' },
      className: 'w-[38vw] lg:w-[15vw] h-[15vh]',
    },
    {
      src: img3,
      alt: 'Nowoczesna rzeźba',
      xEnd: { base: '0vw', lg: '-4vw' },
      yEnd: { base: '37vh', lg: '37vh' },
      className: 'w-[35vw] lg:w-[15vw] h-[15vh]',
    },
    {
      src: img4,
      alt: 'Nowoczesna rzeźba 2',
      xEnd: { base: '-40vw', lg: '-35vw' },
      yEnd: { base: '30vh', lg: '20vh' },
      className: 'w-[25vw] lg:w-[10vw] h-[20vh] lg:h-[25vh]',
    },
    {
      src: img5,
      alt: 'Surrealistyczny portret',
      xEnd: { base: '45vw', lg: '35vw' },
      yEnd: { base: '-28vh', lg: '-25vh' },
      className: 'w-[20vw] lg:w-[10vw] h-[15vh] lg:h-[25vh]',
    },
    {
      src: img6,
      alt: 'Sztuka cyfrowa',
      xEnd: { base: '40vw', lg: '30vw' },
      yEnd: { base: '32vh', lg: '30vh' },
      className: 'w-[25vw] lg:w-[12vw] h-[20vh] lg:h-[28vh]',
    },
  ];

  return (
    <section className="pt-[30vw] sm:pt-[20vw] lg:pt-[15vw]">
      <div ref={ref} className="h-[250vh] relative text-center">
        <div className="sticky h-[100vh] top-0">
          <div className="relative h-[100vh] w-full flex justify-center items-center flex-col overflow-hidden">
            <h5 className="relative z-20 flex flex-col overflow-hidden 2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[15vw] leading-[0.76]">
              {['Zostań częścią', 'naszej społeczności'].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span style={{ y: headingY, opacity: fadeIn }} className="block">
                    {line}
                  </motion.span>
                </div>
              ))}
            </h5>

            {/* ANIMOWANY TEKST */}
            <motion.p
              style={{ y: elementY, opacity: fadeIn }}
              className="relative z-20 2xl:text-[1.1vw] lg:text-[1.5vw] text-[3.2vw] sm:text-[2vw] font-satoshi leading-[1.1] tracking-[-1%] w-[85vw] sm:w-[75vw] lg:w-[60vw] 2xl:w-[40vw] text-[#C3C3C3] xl:mt-[1vw] lg:mt-[1.5vw] xl:mb-[2vw] lg:mb-[2.5vw] mt-[4vw] mb-[5vw]"
            >
             Zostań częścią naszej kreatywnej społeczności i dziel się pomysłami, inspiracjami oraz doświadczeniem z innymi pasjonatami.
            </motion.p>

            {/* ANIMOWANY BUTTON */}
            <motion.div style={{ y: elementY, opacity: fadeIn }} className="z-20">
              <Button text="Dołącz do nas" href='/dolacz-do-nas'/>
            </motion.div>

            {/* OBRAZY */}
            {images.map((img, i) => {
              const x = useTransform(scrollYProgress, [0, 1], ['0vw', getValue(img.xEnd)]);
              const y = useTransform(scrollYProgress, [0, 1], ['0vh', getValue(img.yEnd)]);
              const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

              return (
                <motion.img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  style={{ x, y, opacity }}
                  className={`absolute z-10 object-cover ${img.className}`}
                  loading='lazy'
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
