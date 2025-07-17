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

import Button from "../../components/Button";

export default function Main() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0dvh", "25dvh"]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 40, damping: 10 });
    const smoothY = useSpring(mouseY, { stiffness: 40, damping: 10 });

    const parallax = (rangeX = 10, rangeY = 10) => ({
        x: useTransform(smoothX, [-1, 1], [-rangeX, rangeX]),
        y: useTransform(smoothY, [-1, 1], [-rangeY, rangeY]),
    });

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
                        {/* Bloki tła */}
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[0] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[25dvh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[50dvh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[75dvh] left-0 z-30" />

                        <div className="h-[100dvh] top-0 flex flex-col items-center justify-center relative lg:gap-[2vw] gap-[4vw] overflow-hidden z-20">

                            <motion.img
                                src={img7}
                                alt=""
                                className='absolute left-[27vw] sm:left-[20vw] top-[40dvh] sm:top-[-9dvh] w-[45vw] sm:w-[21vw] h-[30dvh] object-cover z-10'
                                style={parallax(30, 20)}
                            />
                            <motion.img
                                src={img3}
                                alt=""
                                className='sm:block hidden absolute left-[50vw] top-[-12dvh] sm:top-[-18dvh] w-[28vw] h-[38dvh] object-cover z-10'
                                style={parallax(25, 20)}
                            />
                            <motion.img
                                src={img1}
                                alt=""
                                className='absolute right-[-17vw] sm:right-[-4vw] top-[18dvh] w-[30vw] sm:w-[17vw] h-[40dvh] object-cover z-10'
                                style={parallax(28, 20)}
                            />
                            <motion.img
                                src={img5}
                                alt=""
                                className='absolute right-[-12vw] sm:right-[-16vw] bottom-[-8dvh] w-[30vw] h-[40dvh] object-cover z-10'
                                style={parallax(22, 20)}
                            />
                            <motion.img
                                src={img6}
                                alt=""
                                className='absolute left-[27vw] sm:left-[32vw] bottom-[-12dvh] sm:bottom-[-17dvh] w-[45vw] h-[30dvh] object-cover z-10'
                                style={parallax(26, 18)}
                            />
                            <motion.img
                                src={img2}
                                alt=""
                                className='absolute left-[-15vw] sm:left-[-10vw] bottom-[-2dvh] w-[34vw] h-[27dvh] object-cover z-10'
                                style={parallax(24, 20)}
                            />
                            <motion.img
                                src={img4}
                                alt=""
                                className='absolute left-[-25vw] sm:left-[-20vw] top-[20dvh] sm:top-[23dvh] w-[35vw] sm:h-[40dvh] h-[45dvh] object-cover z-10'
                                style={parallax(28, 22)}
                            />

                            <h1 className="2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[16vw] leading-[0.75] text-center flex flex-col items-center justify-center relative z-30">
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
