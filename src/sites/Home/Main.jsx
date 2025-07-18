import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring
} from "framer-motion";



import img1 from '../../assets/adam-mickiewicz.jpg';
import img2 from '../../assets/bitwa-pod-grunwaldem.jpg';
import img3 from '../../assets/babie-lato.jpg';
import img4 from '../../assets/bociany.png';
import img5 from '../../assets/wernyhora.jpg';
import img6 from '../../assets/konstytucja.jpg';
import img7 from '../../assets/stanczyk.jpg';
import img8 from '../../assets/zydowka-z-pomaranczami.jpg';
import img9 from '../../assets/smierc-radziwily.jpg';

import Button from "../../components/Button";

export default function Main() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const height = useTransform(scrollYProgress, [0, 0.8], ["0dvh", "25dvh"]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 40, damping: 10 });
    const smoothY = useSpring(mouseY, { stiffness: 40, damping: 10 });

    // Parallax shift range (pixels)
    const shiftRange = 50;
    const x = useTransform(smoothX, [-1, 1], ["12vw", "-12vw"]);
    const y = useTransform(smoothY, [-1, 1], ["12dvh", "-12dvh"]);

    return (
        <main>
            <div className='h-[200dvh]' ref={ref}>
                <div className='sticky top-0'>
                    <div
                        className="relative"
                        onMouseMove={(e) => {
                            const bounds = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - bounds.left;
                            const y = e.clientY - bounds.top;
                            const centerX = bounds.width / 2;
                            const centerY = bounds.height / 2;

                            mouseX.set((x - centerX) / centerX);
                            mouseY.set((y - centerY) / centerY);
                        }}
                    >
                        {/* Tło pod nagłówkiem */}
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[0] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[25dvh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[50dvh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[75dvh] left-0 z-30" />

                        <div className="h-[100dvh] top-0 flex flex-col items-center justify-center relative lg:gap-[2vw] gap-[4vw] overflow-hidden z-20">
                            
                            {/* Siatka zdjęć */}
                            <motion.div
                                style={{ x, y }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[124vw] h-[124dvh] flex flex-wrap object-cover gap-[2vw] auto-motion"
                            >
                                <img src={img1} alt="" className="object-cover w-[40vw] h-[40dvh] opacity-[0.4]" />
                                <img src={img2} alt="" className="object-cover w-[40vw] h-[40dvh] opacity-[0.4]" />
                                <img src={img3} alt="" className="object-cover w-[40vw] h-[40dvh] opacity-[0.4]" />
                                <img src={img4} alt="" className="object-cover w-[40vw] h-[40dvh] opacity-[0.4]" />
                                <img src={img5} alt="" className="object-cover w-[40vw] h-[40dvh] opacity-[0.4]" />
                                <img src={img6} alt="" className="object-cover w-[40vw] h-[40dvh] opacity-[0.4]" />
                                <img src={img7} alt="" className="object-cover w-[40vw] h-[40dvh] opacity-[0.4]" />
                                <img src={img8} alt="" className="object-cover w-[40vw] h-[40dvh] opacity-[0.4]" />
                                <img src={img9} alt="" className="object-cover w-[40vw] h-[40dvh] opacity-[0.4]" />
                            </motion.div>

                            {/* Nagłówek i przycisk */}
                            <h1 className="2xl:text-[9vw] lg:text-[11vw] sm:text-[13vw] text-[20vw] leading-[0.75] text-center flex flex-col items-center justify-center relative z-30">
                                <span>Limanowskie</span>
                                <span>Towarzystwo</span>
                                <span>Artystyczne</span>
                            </h1>
                            <Button text="Dowiedz się więcej" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
