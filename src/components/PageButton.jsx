export default function PageButton({ text = "Dowiedz się więcej", targetId = "", offset = -100, bg = false }) {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (target) {
      const yOffset = offset;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const style = {
    backgroundColor: bg ? "#101010" : "transparent",
  };

  return (
    <button
      onClick={handleClick}
      className="group flex cursor-pointer justify-center items-center rounded-full border-[2px] sm:border-[3px] border-solid border-white overflow-hidden relative z-30 w-fit h-fit"
    >
      <a
        style={{ ...style }}
        className="xl:text-[2vw] lg:text-[3.5vw] sm:text-[4.5vw] text-[6.5vw] xl:px-[2vw] lg:px-[3vw] sm:px-[4vw] px-[6vw] xl:py-[0.5vw] lg:py-[1vw] sm:py-[1.5vw] py-[2.2vw] leading-1 flex justify-center items-center gap-[1vw] transition-colors duration-600 ease-[cubic-bezier(0.75, 0, 0.25, 1)] group-hover:text-black"
      >
        <p className="relative z-20 transition-transform duration-600 ease-[cubic-bezier(0.75, 0, 0.25, 1)] group-hover:translate-x-[1.5vw]">
          {text}
        </p>
        <div className="h-[7vw] sm:h-[5vw] lg:h-[3.5vw] xl:h-[2.5vw] aspect-square bg-white rounded-full lg:translate-x-[1.5vw] xl:translate-x-[1vw] sm:translate-x-[2vw] translate-x-[2.5vw] transition-transform duration-600 ease-[cubic-bezier(0.75, 0, 0.25, 1)] group-hover:scale-2000 relative z-10"></div>
      </a>
    </button>
  );
}
