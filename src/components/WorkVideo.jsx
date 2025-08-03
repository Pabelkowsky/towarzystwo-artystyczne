export default function WorkVideo({ videoSrc, title, author, left, right }) {
    const alignmentStyle = {};

    // Obsługa right
    if (right) {
        alignmentStyle.marginLeft = 'auto';
        alignmentStyle.marginRight = right;
    }

    // Obsługa left
    if (left) {
        alignmentStyle.marginRight = 'auto';
        alignmentStyle.marginLeft = left;
    }

    return (
        <div
            className="py-[20vw] lg:py-[15vw] flex flex-col relative w-[70vw] sm:w-[50vw] lg:w-[35vw]"
            style={alignmentStyle}
        >
            <div>
                <video
                    src={videoSrc}
                    className="w-[70vw] sm:w-[50vw] lg:w-[35vw] brightness-[1] pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
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
