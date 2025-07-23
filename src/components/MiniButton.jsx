export default function MiniButton({ text = "Kliknij", bg = false, href = "#" }) {
  const style = {
    backgroundColor: bg ? "#101010" : "transparent",
  };

  // automatyczne wykrycie emaila lub numeru
  const isEmail = text.includes("@");
  const isPhone = /^[\d\s\-+()]+$/.test(text);

  const computedHref = isEmail ? `mailto:${text}` : isPhone ? `tel:${text}` : href;

  return (
    <button className="group flex justify-center items-center rounded-full border-[2px] sm:border-[3px] border-solid border-white overflow-hidden relative z-30 w-fit h-fit">
      <a
        style={{ ...style }}
        href={computedHref}
        className="xl:text-[1.8vw] lg:text-[2.3vw] sm:text-[3vw] text-[4.5vw] xl:px-[2vw] lg:px-[2vw] sm:px-[3vw] px-[6vw] xl:py-[0.5vw] lg:py-[0.5vw] sm:py-[0.8vw] py-[2.2vw] leading-1 flex justify-center items-center gap-[1vw] transition-colors duration-600 ease-[cubic-bezier(0.75, 0, 0.25, 1)] group-hover:text-black"
      >
        <p className="relative z-20 transition-transform duration-600 ease-[cubic-bezier(0.75, 0, 0.25, 1)] group-hover:translate-x-[1.5vw]">
          {text}
        </p>
        <div className="h-[5vw] sm:h-[4vw] lg:h-[3vw] xl:h-[2.5vw] aspect-square bg-white rounded-full lg:translate-x-[1.5vw] xl:translate-x-[1vw] sm:translate-x-[2vw] translate-x-[2.5vw] transition-transform duration-600 ease-[cubic-bezier(0.75, 0, 0.25, 1)] group-hover:scale-2000 relative z-10"></div>
      </a>
    </button>
  );
}
