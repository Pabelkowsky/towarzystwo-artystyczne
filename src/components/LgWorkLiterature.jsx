import { useState } from 'react';
import img from '../assets/dziedziny/literatura4.png';

export default function LgWorkLiterature({ title1, author1, text1, title2, author2, text2 }) {
    const [isOpen, setIsOpen] = useState(null);
    const [isVisible, setIsVisible] = useState(null);

    const openModal = (id) => {
        setIsOpen(id);
        setTimeout(() => setIsVisible(id), 10);
    };

    const closeModal = () => {
        setIsVisible(null);
        setTimeout(() => setIsOpen(null), 300);
    };

    return (
        <>
            <div className="flex px-[10vw] justify-between gap-[5vw]">
                {/* Pierwszy blok */}
                <div
                    onClick={() => openModal('modal1')}
                    className="cursor-pointer group flex flex-col relative w-[30vw]"
                >
                    <div className="relative w-full h-auto">
                        <img
                            src={img}
                            alt="Obraz literatury"
                             loading='lazy'
                            className="w-full h-[25vw] object-cover transition duration-300 brightness-[0.5] group-hover:brightness-[0.4]"
                        />
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <div className="flex items-center gap-[1vw] pointer-events-auto">
                                <div className="w-[4vw] aspect-square rounded-full border-white/50 border-2 flex justify-center items-center relative overflow-hidden">
                                    <svg
                                        className="w-[50%] translate-x-[-10vw] absolute transition-transform duration-300 ease-[cubic-bezier(0.75,0,0.25,1)] group-hover:translate-x-0"
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
                                    <svg
                                        className="w-[50%] absolute transition-transform duration-300 ease-[cubic-bezier(0.75,0,0.25,1)] group-hover:translate-x-[5vw]"
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
                                <p className="text-[4vw] select-none text-white">Zobacz</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-[5vw] leading-[0.75] mt-[1vw]">{title1}</p>
                    <p className="text-[3vw] leading-[0.75] text-[var(--text-secondary)] mt-[0.8vw]">{author1}</p>
                </div>

                {/* Drugi blok */}
                <div
                    onClick={() => openModal('modal2')}
                    className="cursor-pointer group flex flex-col relative w-[30vw] mt-[15vw]"
                >
                    <div className="relative w-full h-auto">
                        <img
                            src={img}
                            alt="Obraz literatury"
                             loading='lazy'
                            className="w-full h-[25vw] object-cover transition duration-300 brightness-[0.5] group-hover:brightness-[0.4]"
                        />
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <div className="flex items-center gap-[1vw] pointer-events-auto">
                                <div className="w-[4vw] aspect-square rounded-full border-white/50 border-2 flex justify-center items-center relative overflow-hidden">
                                    <svg
                                        className="w-[50%] translate-x-[-10vw] absolute transition-transform duration-300 ease-[cubic-bezier(0.75,0,0.25,1)] group-hover:translate-x-0"
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
                                    <svg
                                        className="w-[50%] absolute transition-transform duration-300 ease-[cubic-bezier(0.75,0,0.25,1)] group-hover:translate-x-[5vw]"
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
                                <p className="text-[4vw] select-none text-white">Zobacz</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-[5vw] leading-[0.75] mt-[1vw]">{title2}</p>
                    <p className="text-[3vw] leading-[0.75] text-[var(--text-secondary)] mt-[0.8vw]">{author2}</p>
                </div>
            </div>

            {/* Modal 1 */}
            {isOpen === 'modal1' && (
                <div
                    className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300 ${
                        isVisible === 'modal1' ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={closeModal}
                >
                    <div
                        className="bg-black/90 text-white max-w-[90vw] max-h-[80vh] px-[5vw] py-[3vw] overflow-y-auto text-[1.5vw] leading-snug relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-[1.5vw] cursor-pointer"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <h2 className="text-[5vw] mb-4">{title1}</h2>
                        <p className="whitespace-pre-wrap text-[3vw] leading-[1]">{text1}</p>
                    </div>
                </div>
            )}

            {/* Modal 2 */}
            {isOpen === 'modal2' && (
                <div
                    className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300 ${
                        isVisible === 'modal2' ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={closeModal}
                >
                    <div
                        className="bg-black/90 text-white max-w-[90vw] max-h-[80vh] px-[5vw] py-[3vw] overflow-y-auto text-[1.5vw] leading-snug relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-[1.5vw] cursor-pointer"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <h2 className="text-[5vw] mb-4">{title2}</h2>
                        <p className="whitespace-pre-wrap text-[3vw] leading-[1]">{text2}</p>
                    </div>
                </div>
            )}
        </>
    );
}
