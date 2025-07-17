export default function Button({ text = "Kliknij", paddingX = "2vw", paddingY = "0.7vw", href = "#" }) {
  const style = {
    padding: `${paddingY} ${paddingX}`,
  };

  return (
    <button className="group flex justify-center items-center rounded-full border-[1.5px] border-solid border-white overflow-hidden relative z-30">
      <a
        href={href}
        className="xl:text-[2vw] lg:text-[3.5vw] sm:text-[4.5vw] text-[6.5vw] xl:px-[2vw] lg:px-[3vw] sm:px-[4vw] px-[6vw] xl:py-[0.5vw] lg:py-[1vw] sm:py-[1.5vw] py-[2.2vw] leading-1 flex justify-center items-center gap-[1vw] transition-colors duration-400 ease-[cubic-bezier(0.36, 0, 0.66, -0.56)] group-hover:text-black"
      >
        <p className="relative z-20 transition-transform duration-400 ease-[cubic-bezier(0.36, 0, 0.66, -0.56)] group-hover:translate-x-[1.5vw]">
          {text}
        </p>
        <div className="h-[7vw] sm:h-[5vw] lg:h-[3.5vw] xl:h-[2.5vw] aspect-square bg-white rounded-full lg:translate-x-[1.5vw] xl:translate-x-[1vw] sm:translate-x-[2vw] translate-x-[2.5vw] transition-transform duration-400 ease-[cubic-bezier(0.36, 0, 0.66, -0.56)] group-hover:scale-2000 relative z-10"></div>
      </a>
    </button>
  );
}
