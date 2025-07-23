import { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring
} from "framer-motion";

import Lenis from 'lenis';

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
import PageButton from "../../components/PageButton";

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

    const x = useTransform(smoothX, [-1, 1], ["12vw", "-12vw"]);
    const y = useTransform(smoothY, [-1, 1], ["12dvh", "-12dvh"]);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [containerRect, setContainerRect] = useState(null);

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setContainerRect(ref.current.getBoundingClientRect());
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseMove = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        mouseX.set((x - centerX) / centerX);
        mouseY.set((y - centerY) / centerY);
        setMouse({ x: e.clientX, y: e.clientY });

        if (!containerRect) {
            setContainerRect(bounds);
        }
    };

    const getRotation = (imgX, imgY) => {
        const maxRotation = 4; // maksymalna rotacja w stopniach

        const dx = mouse.x - imgX;
        const dy = mouse.y - imgY;

        const rotateY = Math.max(Math.min(dx / 100, maxRotation), -maxRotation);
        const rotateX = Math.max(Math.min(-dy / 100, maxRotation), -maxRotation);

        return { rotateX, rotateY };
    };



    const scrollToAbout = (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      const lenis = new Lenis();
      lenis.scrollTo(target);
    }
  };

    return (
        <main id="main">
            <div className='h-[200dvh]' ref={ref}>
                <div className='sticky top-0'>
                    <div
                        className="relative"
                        onMouseMove={handleMouseMove}
                    >
                        {/* Tło pod nagłówkiem */}
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[0] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[25dvh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[50dvh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[75dvh] left-0 z-30" />

                        <div className="h-[100dvh] top-0 flex flex-col items-center justify-center relative lg:gap-[2vw] gap-[4vw] overflow-hidden z-20">
                            
                            {/* Siatka zdjęć z dynamiczną rotacją */}
                            <motion.div
                                style={{ x, y }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[124vw] h-[124dvh] flex flex-wrap gap-[2vw] perspective-[1000px] auto-motion"
                            >
                                {images.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-[40vw] h-[40dvh] relative"
                                        style={{
                                            transformStyle: "preserve-3d"
                                        }}
                                    >
                                        <motion.img
                                            src={img}
                                            alt=""
                                            className="object-cover w-full h-full brightness-[0.4]"
                                            animate={() => {
                                                if (!containerRect) return {};
                                                const imgX = containerRect.left + (index % 3) * (containerRect.width / 3) + (containerRect.width / 6);
                                                const imgY = containerRect.top + Math.floor(index / 3) * (containerRect.height / 3) + (containerRect.height / 6);
                                                const { rotateX, rotateY } = getRotation(imgX, imgY);
                                                return { rotateX, rotateY };
                                            }}
                                            transition={{ type: "spring", stiffness: 60, damping: 12 }}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Nagłówek i przycisk */}
                            <h1 className="2xl:text-[9vw] lg:text-[11vw] sm:text-[13vw] text-[20vw] leading-[0.75] text-center flex flex-col items-center justify-center relative z-30">
                                <span>Limanowskie</span>
                                <span>Towarzystwo</span>
                                <span>Artystyczne</span>
                            </h1>
                            <PageButton text="Dowiedz się więcej" targetId="about" />

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
