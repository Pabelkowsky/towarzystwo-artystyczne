import img1 from '../../assets/rekodzielo.jpg';
import img2 from '../../assets/literatura.webp';
import img3 from '../../assets/film-i-fotografia.png';
import img4 from '../../assets/malarstwo.webp';
import img5 from '../../assets/muzyka.jpg';
import img6 from '../../assets/sztuka-cyfrowa.png';
import DownloadButton from "../../components/DownloadButton";


export default function Main(){


    return(
        <main className=" 2xl:pt-[250px] sm:pt-[200px] lg:pt-[200px] pt-[120px] flex flex-col text-center relative items-center pb-[30vw] sm:pb-[27vw] lg:pb-[15vw] xl:pb-[15vw] overflow-hidden">
            
            <img src={img1} alt="" className="absolute w-[28vw] sm:w-[17vw] lg:w-[15vw] translate-x-[-48vw] translate-y-[-10vw] sm:translate-x-[-43vw] sm:translate-y-[-3vw] lg:translate-x-[-39vw] 2xl:translate-x-[-35vw] lg:translate-y-[-3vw] 2xl:translate-y-[-3vw]" />
            <img src={img2} alt="" className="absolute w-[22vw] sm:w-[14vw] lg:w-[12vw] translate-x-[-45vw] translate-y-[42vw] sm:translate-x-[-35vw] sm:translate-y-[34vw] lg:translate-x-[-38vw] 2xl:translate-x-[-32vw] lg:translate-y-[24vw] 2xl:translate-y-[20vw]" />
            <img src={img3} alt="" className="absolute w-[22vw] sm:w-[16vw] lg:w-[11vw] translate-x-[40vw] translate-y-[45vw] sm:translate-x-[-3vw] sm:translate-y-[50vw] lg:translate-x-[-2vw] 2xl:translate-x-[] lg:translate-y-[35vw] 2xl:translate-y-[27vw]" />
            <img src={img4} alt="" className="absolute w-[22vw] sm:w-[16vw] lg:w-[14vw] translate-x-[45vw] translate-y-[-12vw] sm:translate-x-[44vw] sm:translate-y-[-5vw] lg:translate-x-[40vw] 2xl:translate-x-[36vw] lg:translate-y-[-1vw] 2xl:translate-y-[-4vw]" />
            <img src={img5} alt="" className="absolute w-[26vw] sm:w-[17vw] lg:w-[15vw] translate-x-[] translate-y-[60vw] sm:translate-x-[36vw] sm:translate-y-[35vw] lg:translate-x-[32vw] 2xl:translate-x-[28vw] lg:translate-y-[26vw] 2xl:translate-y-[22vw]" />



            
            <h1 className="2xl:text-[8vw] lg:text-[10vw] sm:text-[12vw] text-[14vw] leading-[0.75] text-center flex flex-col items-center justify-center relative z-30">
                            <span>Zostań częścią</span>
                            <span>naszej społeczności</span>
            </h1>
            <p
              className="relative z-20 2xl:text-[1.5vw] lg:text-[2vw] text-[3.3vw] sm:text-[2.5vw] font-satoshi leading-[1.1] tracking-[-1%] w-[90vw] sm:w-[76vw] lg:w-[62vw] 2xl:w-[46vw] text-[#C3C3C3] xl:mt-[1.2vw] lg:mt-[1.5vw] xl:mb-[2vw] lg:mb-[2.5vw] mt-[2.5vw] mb-[5vw]"
            >
              Aby dołączyć do naszego stowarzyszenia, pobierz pliki znajdujące się poniżej. Znajdziesz tam wszystkie niezbędne informacje oraz formularze do wypełnienia.
            </p>

            <DownloadButton text='Pobierz pliki' file="/Instrukcja LTA.rar"/>
        </main>
    )
}