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

import PageButton from "../../components/PageButton";

export default function Main() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const height = useTransform(scrollYProgress, [0, 0.8], ["0vh", "25vh"]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 40, damping: 10 });
    const smoothY = useSpring(mouseY, { stiffness: 40, damping: 10 });

    const x = useTransform(smoothX, [-1, 1], ["12vw", "-12vw"]);
    const y = useTransform(smoothY, [-1, 1], ["12vh", "-24vh"]);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [containerRect, setContainerRect] = useState(null);
    const [rotations, setRotations] = useState([]);

    const images = [
       { src: img1, alt: "adam-mickiewicz" },
       { src: img2, alt: "bitwa-pod-grunwaldem" },
       { src: img3, alt: "babie-lato" },
       { src: img4, alt: "bociany" },
       { src: img5, alt: "wernyhora" },
       { src: img6, alt: "konstytucja" },
       { src: img7, alt: "stanczyk" },
       { src: img8, alt: "zydowka-z-pomaranczami" },
       { src: img9, alt: "smierc-radziwily" }
    ]

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

    // Ruch myszy z throttlingiem (50ms)
    useEffect(() => {
        let animationFrameId = null;
        let lastCallTime = 0;

        const throttledMouseMove = (e) => {
            const now = performance.now();
            if (now - lastCallTime < 50) return;

            lastCallTime = now;
            animationFrameId = requestAnimationFrame(() => {
                const bounds = ref.current?.getBoundingClientRect();
                if (!bounds) return;

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
            });
        };

        const container = ref.current;
        if (container) {
            container.addEventListener("mousemove", throttledMouseMove);
        }

        return () => {
            if (container) container.removeEventListener("mousemove", throttledMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [containerRect]);

    const getRotation = (imgX, imgY) => {
        const maxRotation = 4;
        const dx = mouse.x - imgX;
        const dy = mouse.y - imgY;
        const rotateY = Math.max(Math.min(dx / 100, maxRotation), -maxRotation);
        const rotateX = Math.max(Math.min(-dy / 100, maxRotation), -maxRotation);
        return { rotateX, rotateY };
    };

    useEffect(() => {
        if (!containerRect) return;

        const newRotations = images.map((_, index) => {
            const imgX = containerRect.left + (index % 3) * (containerRect.width / 3) + (containerRect.width / 6);
            const imgY = containerRect.top + Math.floor(index / 3) * (containerRect.height / 3) + (containerRect.height / 6);
            return getRotation(imgX, imgY);
        });

        setRotations(newRotations);
    }, [mouse, containerRect]);

   

    return (
        <main id="main">
            <div className='h-[200vh]' ref={ref}>
                <div className='sticky top-0'>
                    <div className="relative">
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[0] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[25vh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[50vh] left-0 z-30" />
                        <motion.div style={{ height }} className="absolute w-full bg-[#101010] top-[75vh] left-0 z-30" />

                        <div className="h-[100vh] top-0 flex flex-col items-center justify-center relative lg:gap-[2vw] gap-[4vw] overflow-hidden z-20">
                            <motion.div
                                style={{ x, y }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[124vw] h-[124vh] flex flex-wrap gap-[2vw] perspective-[1000px] auto-motion"
                            >
                                {images.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-[40vw] h-[40vh] relative"
                                        style={{
                                            transformStyle: "preserve-3d",
                                            willChange: "transform"
                                        }}
                                        animate={rotations[index] ? {
                                            rotateX: rotations[index].rotateX,
                                            rotateY: rotations[index].rotateY
                                        } : {}}
                                        transition={{ type: "spring", stiffness: 60, damping: 12 }}
                                    >
                                        <motion.img
                                            src={img.src}
                                            alt={img.alt}
                                            className="object-cover w-full h-full brightness-[0.4]"
                                        />
                                    </motion.div>
                                ))}

                            </motion.div>

                            <h1 className="mix-blend-difference 2xl:text-[9vw] lg:text-[11vw] sm:text-[13vw] text-[20vw] leading-[0.75] text-center flex flex-col items-center justify-center relative z-30">
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
