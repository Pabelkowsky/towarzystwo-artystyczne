import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import img1 from '../../assets/rekodzielo.jpg';
import img2 from '../../assets/literatura.webp';
import img3 from '../../assets/film-i-fotografia.png';
import img4 from '../../assets/malarstwo.webp';
import img5 from '../../assets/muzyka.jpg';
import img6 from '../../assets/sztuka-cyfrowa.png';
import DownloadButton from "../../components/DownloadButton";

function OverlayedImage({ src, className }) {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '0%', once: true });

  return (
    <div ref={ref} className={`absolute overflow-hidden ${className}`}>
      <img src={src} alt="" className="w-full h-full object-cover" />
      <motion.div
        initial={{ height: '100%' }}
        animate={isInView ? { height: 0 } : { height: '100%' }}
        transition={{ duration: 1.7, ease: [0.75, 0, 0.25, 1] }}
        className="absolute w-[102%] h-[102%] left-[-1%] top-[-1%] bg-[#101010] z-10"
      />
    </div>
  );
}

export default function Main() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '0%', once: false });

  return (
    <main
      ref={ref}
      className="sm:gap-0 gap-[1vw] 2xl:pt-[250px] sm:pt-[200px] lg:pt-[200px] pt-[220px] flex flex-col text-center relative items-center pb-[35vw] sm:pb-[27vw] lg:pb-[15vw] xl:pb-[15vw] overflow-hidden"
    >
      {/* Obrazki z overlayem */}
      <OverlayedImage src={img1} className="w-[28vw] sm:w-[17vw] lg:w-[15vw] translate-x-[-48vw] translate-y-[-29vw] sm:translate-x-[-43vw] sm:translate-y-[-3vw] lg:translate-x-[-39vw] 2xl:translate-x-[-35vw] lg:translate-y-[-3vw] 2xl:translate-y-[-3vw]" />
      <OverlayedImage src={img2} className="w-[22vw] sm:w-[14vw] lg:w-[12vw] translate-x-[-45vw] translate-y-[54vw] sm:translate-x-[-35vw] sm:translate-y-[34vw] lg:translate-x-[-38vw] 2xl:translate-x-[-32vw] lg:translate-y-[24vw] 2xl:translate-y-[20vw]" />
      <OverlayedImage src={img3} className="w-[22vw] sm:w-[16vw] lg:w-[11vw] translate-x-[40vw] translate-y-[55vw] sm:translate-x-[-3vw] sm:translate-y-[50vw] lg:translate-x-[-2vw] lg:translate-y-[35vw] 2xl:translate-y-[27vw]" />
      <OverlayedImage src={img4} className="w-[25vw] sm:w-[16vw] lg:w-[14vw] translate-x-[0] translate-y-[-33vw] sm:translate-x-[44vw] sm:translate-y-[-5vw] lg:translate-x-[40vw] 2xl:translate-x-[36vw] lg:translate-y-[-1vw] 2xl:translate-y-[-4vw]" />
      <OverlayedImage src={img5} className="w-[26vw] sm:w-[17vw] lg:w-[15vw] translate-y-[70vw] sm:translate-x-[36vw] sm:translate-y-[35vw] lg:translate-x-[32vw] 2xl:translate-x-[28vw] lg:translate-y-[26vw] 2xl:translate-y-[22vw]" />
      <OverlayedImage src={img6} className="block sm:hidden w-[16vw] translate-x-[46vw] translate-y-[-29vw]" />

      {/* Nagłówek */}
      <h1 className="2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[14vw] leading-[0.75] text-center flex flex-col items-center justify-center relative z-30">
        {['Zostań częścią', 'naszej społeczności'].map((line, i) => (
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

      {/* Tekst */}
      <motion.p
        className="relative z-20 2xl:text-[1.5vw] lg:text-[2vw] text-[3.3vw] sm:text-[2.5vw] font-satoshi leading-[1.1] tracking-[-1%] w-[90vw] sm:w-[76vw] lg:w-[62vw] 2xl:w-[46vw] text-[#C3C3C3] xl:mt-[1.2vw] lg:mt-[1.5vw] xl:mb-[2vw] lg:mb-[2.5vw] mt-[2.5vw] mb-[5vw]"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: 0.2 }}
      >
        Aby dołączyć do naszego stowarzyszenia, pobierz pliki znajdujące się poniżej. Znajdziesz tam wszystkie niezbędne informacje oraz formularze do wypełnienia.
      </motion.p>

      {/* Przycisk */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: [0.75, 0, 0.25, 1], delay: 0.3 }}
      >
        <DownloadButton text="Pobierz pliki" file="/Instrukcja LTA.rar" />
      </motion.div>
    </main>
  );
}
