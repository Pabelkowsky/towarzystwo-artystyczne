


export default function LgWorkShowCase({img1, img2, title1, title2, author1, author2}){


    return(
        <div className="flex px-[10vw] justify-between">
            <div className="flex flex-col relative w-[70vw] sm:w-[50vw] lg:w-[30vw] ">
                <div>
                    <img src={img1} loading='lazy' alt="Obraz dzieła" className="w-[70vw] sm:w-[50vw] lg:w-[30vw] brightness-[1] pointer-events-none" />
                </div>
                <p className="text-[10vw] sm:text-[8vw] lg:text-[5vw] leading-[0.75] mt-[3.5vw] sm:mt-[2vw] lg:mt-[1vw]">
                    {title1}
                </p>
                <p className="text-[8vw] sm:text-[5vw] lg:text-[3vw] leading-[0.75] text-[var(--text-secondary)] mt-[2.5vw] sm:mt-[1.5vw] lg:mt-[0.8vw]">
                    {author1}
                </p>
            </div>
            <div className="flex flex-col relative w-[70vw] sm:w-[50vw] lg:w-[30vw] my-[10vw]">
                <div>
                    <img src={img2} loading='lazy' alt="Obraz dzieła" className="w-[70vw] sm:w-[50vw] lg:w-[30vw] brightness-[1] pointer-events-none" />
                </div>
                <p className="text-[10vw] sm:text-[8vw] lg:text-[5vw] leading-[0.75] mt-[3.5vw] sm:mt-[2vw] lg:mt-[1vw]">
                    {title2}
                </p>
                <p className="text-[8vw] sm:text-[5vw] lg:text-[3vw] leading-[0.75] text-[var(--text-secondary)] mt-[2.5vw] sm:mt-[1.5vw] lg:mt-[0.8vw]">
                    {author2}
                </p>
            </div>
        </div>
    )
}