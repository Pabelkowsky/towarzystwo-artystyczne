import { useRef, useState } from 'react';
import img from '../assets/dziedziny/muzyka3.jpg';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function WorkMusic({ title, author, left, right, text, audioSrc }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlating] = useState(false);

    const alignmentStyle = {};

    if (right) {
        alignmentStyle.marginLeft = 'auto';
        alignmentStyle.marginRight = right;
    }

    if (left) {
        alignmentStyle.marginRight = 'auto';
        alignmentStyle.marginLeft = left;
    }

    const handleAudioToggle = () => {
        if (!audioRef.current) return;

        if (audioRef.current.paused) {
            audioRef.current.volume = 0.5; // 🔈 ustaw głośność na 50%
            audioRef.current.play();
            setIsPlating(true);
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlating(false);
        }
    };

    return (
        <div
            className="my-[40vw] lg:my-[30vw] flex flex-col relative w-[70vw] sm:w-[50vw] lg:w-[35vw] cursor-pointer group"
            style={alignmentStyle}
            onClick={handleAudioToggle}
        >
            <div
                className="relative w-full h-auto flex items-center justify-center"
            >
                <img
                    src={img}
                    alt="Obraz muzyczny"
                     loading='lazy'
                    className="w-[70vw] h-[54vw] sm:w-[50vw] sm:h-[38vw] lg:w-[35vw] lg:h-[25vw] object-cover transition duration-300 brightness-[0.6] group-hover:brightness-[0.5]"
                />
                <div className="absolute flex gap-[2.5vw] sm:gap-[1.5vw] lg:gap-[1vw] items-center group">
                    <div className="w-[10vw] sm:w-[6vw] lg:w-[4vw] aspect-square rounded-full border-white/50 border-[2px] flex justify-center items-center relative overflow-hidden">
                      {/* Wjeżdżająca strzałka */}
                      <svg
                        className="w-[50%] translate-x-[-15vw] absolute transition-transform duration-300 ease-[cubic-bezier(0.75,0,0.25,1)] group-hover:translate-x-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                          fill="#ffffff"
                        />
                      </svg>

                      {/* Wyjeżdżająca strzałka */}
                      <svg
                        className="w-[50%] absolute transition-transform duration-300 ease-[cubic-bezier(0.75,0,0.25,1)] group-hover:translate-x-[15vw]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                          fill="#ffffff"
                        />
                      </svg>
                    </div>
                    <div className="overflow-hidden relative translate-y-[0.2vw]">
                      <motion.p
                        animate={{ y: isPlaying ? "-100%" : "0%" }}
                        transition={{ duration: 0.3, ease: [0.75, 0, 0.25, 1] }}
                        className="text-[10vw] sm:text-[6.5vw] lg:text-[4vw]"
                      >
                        Przesłuchaj
                      </motion.p>
                      <motion.p
                        animate={{ y: isPlaying ? "0%" : "100%" }}
                        transition={{ duration: 0.3, ease: [0.75, 0, 0.25, 1] }}
                        className="text-[10vw] sm:text-[6.5vw] lg:text-[4vw] absolute top-0 left-0"
                      >
                        Zatrzymaj
                      </motion.p>
                    </div>

                </div>

                <audio ref={audioRef} src={audioSrc} preload="auto" />
            </div>
            <p className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.75] mt-[3.5vw] sm:mt-[2vw] lg:mt-[1vw]">
                {title}
            </p>
            <p className="text-[8vw] sm:text-[5vw] lg:text-[3vw] leading-[0.75] text-[var(--text-secondary)] mt-[2.5vw] sm:mt-[1.5vw] lg:mt-[0.8vw]">
                {author}
            </p>
        </div>
    );
}
