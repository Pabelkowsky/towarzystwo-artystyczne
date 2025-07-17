import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import img1 from '../../assets/adam-mickiewicz.jpg';
import img2 from '../../assets/bitwa-pod-grunwaldem.jpg';
import img3 from '../../assets/babie-lato.jpg';
import img4 from '../../assets/bociany.png';
import img5 from '../../assets/wernyhora.jpg';
import img6 from '../../assets/konstytucja.jpg';
import img7 from '../../assets/stanczyk.jpg';

import Button from "../../components/Button";

export default function Main() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0dvh", "25dvh"]);

    return (
        <main>
            <div className='h-[200dvh]' ref={ref}>
                <div className='sticky top-0'>
                    <div className="relative">
                        {/* Cztery czarne bloki rosnące ze scrolla */}
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[0] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[25dvh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[50dvh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[75dvh] left-0 z-30" />

                        {/* Główna zawartość */}
                        <div className="h-[100dvh] top-0 flex flex-col items-center justify-center relative lg:gap-[2vw] gap-[4vw] overflow-hidden z-20">

                            <img src={img7} alt="" className='absolute left-[27vw] sm:left-[20vw] top-[-7dvh] sm:top-[-9dvh] w-[45vw] sm:w-[21vw] h-[30dvh] object-cover sm:skew-x-[-11deg] skew-y-[-5deg]' />
                            <img src={img3} alt="" className='sm:block hidden absolute left-[50vw] top-[-12dvh] sm:top-[-18dvh] w-[28vw] h-[38dvh] object-cover skew-x-[7deg] skew-y-[9deg]' />
                            <img src={img1} alt="" className='absolute right-[-15vw] sm:right-[-4vw] top-[18dvh] w-[30vw] sm:w-[17vw] h-[40dvh] object-cover skew-x-[13deg] skew-y-[-2deg]' />
                            <img src={img5} alt="" className='absolute right-[-2vw] sm:right-[-6vw] bottom-[-8dvh] w-[20vw] h-[40dvh] object-cover skew-x-[-10deg] skew-y-[10deg]' />
                            <img src={img6} alt="" className='absolute left-[27vw] sm:left-[32vw] bottom-[-10dvh] sm:bottom-[-17dvh] w-[45vw] h-[30dvh] object-cover sm:skew-x-[14deg] skew-x-[3deg] skew-y-[0]' />
                            <img src={img2} alt="" className='absolute left-[-15vw] sm:left-[-10vw] bottom-[-2dvh] w-[34vw] h-[27dvh] object-cover skew-x-[10deg] skew-y-[8deg]' />
                            <img src={img4} alt="" className='absolute left-[-25vw] sm:left-[-20vw] top-[20dvh] sm:top-[23dvh] w-[35vw] sm:h-[40dvh] h-[45dvh] object-cover skew-x-[-8deg] skew-y-[10deg]' />

                            <h1 className="2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[16vw] leading-[0.75] text-center">
                                <p>Limanowskie</p>
                                <p>Towarzystwo</p>
                                <p>Artystyczne</p>
                            </h1>
                            <Button text="Dowiedz się więcej" />

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
