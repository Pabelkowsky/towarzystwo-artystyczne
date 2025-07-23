import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import logo from '/logo.png';

export default function Navbar() {
  const { handleNavigate } = useOutletContext(); // <-- pobieramy handleNavigate
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.5;
      setScrolled(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const itemVariants = {
    hidden: { filter: 'blur(10px)', y: -30, opacity: 0 },
    visible: i => ({
      filter: 'blur(0px)',
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5, type: 'spring' },
    }),
    exit: i => ({
      filter: 'blur(10px)',
      y: -30,
      opacity: 0,
      transition: { delay: (9 - i) * 0.05, duration: 0.3 },
    }),
  };

  // Mapowanie etykiet na ścieżki
  const navItems = [
    { label: 'Strona główna', path: '/' },
    { label: 'Nowości', path: '/nowosci' },
    { label: 'Jak dołączyć', path: '/jak-dolaczyc' },
    { label: 'Rękodzieło', path: '/rekodzielo' },
    { label: 'Literatura', path: '/literatura' },
    { label: 'Film i fotografia', path: '/film-i-fotografia' },
    { label: 'Malarstwo', path: '/malarstwo' },
    { label: 'Muzyka', path: '/muzyka' },
    { label: 'Sztuka cyfrowa', path: '/sztuka-cyfrowa' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 pointer-events-none transition-colors duration-300 ${
        scrolled ? 'lg:bg-[#10101000] bg-[#101010]' : 'bg-transparent'
      }`}
    >
      {/* Overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.2 } }}
            className="fixed bg-[#181818] z-10 pointer-events-auto overflow-y-auto w-[100%] lg:w-[30vw] h-full right-0"
          >
            <div className="flex flex-col h-full justify-between items-start lg:items-end pt-[120px] pb-[40px] sm:pt-[150px] px-[5vw]">
              {navItems.map(({ label, path }, index) => (
                <motion.div
                  key={index}
                  className="flex gap-[1vw]"
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => {
                    handleNavigate(path);
                    setMenuOpen(false); // zamknij menu po kliknięciu
                  }}
                >
                  <p className="leading-[0.9] text-[4vw] sm:text-[2.2vw] lg:text-[1.5vw]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <span className="link-underline leading-[0.8] text-[12vw] sm:text-[6vw] lg:text-[3.7vw] cursor-pointer">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Górny pasek z logo i przyciskiem menu */}
      <div className="w-full flex justify-between items-center px-[5vw] py-[15px] lg:py-[20px] relative z-20 pointer-events-auto">
        <div onClick={() => handleNavigate('/')} className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-[25px] lg:h-[50px]" />
        </div>

        <button
          className="overflow-hidden rounded-full group cursor-pointer"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <div className="pr-[5px] lg:pr-[10px] pl-[15px] py-[3px] lg:pl-[20px] lg:py-[8px] flex items-center justify-center font-satoshi gap-[20px] bg-[#F9F9F9] rounded-full cursor-pointer">
            <p className="font-satoshi text-[18px] lg:text-[30px] text-[#101010]">Menu</p>
            <div className="lg:w-[50px] w-[35px] h-[35px] lg:h-[50px] bg-[#24211F] rounded-full flex justify-center items-center relative">
              <div className="w-[15px] lg:w-[20px] h-[16px] flex flex-col justify-between z-20 relative transition-all duration-300 ease-in-out">
                {/* Hamburger lines */}
                <div
                  className={`absolute top-1/2 left-0 w-full h-[2px] lg:h-[2.5px] bg-[#f4f4f4] rounded-full transform transition-all duration-300 ease-in-out ${
                    menuOpen ? 'rotate-45 translate-y-[-1px]' : '-translate-y-[7px] rotate-0'
                  }`}
                />
                <div
                  className={`absolute top-1/2 left-0 w-full h-[2px] lg:h-[2.5px] bg-[#f4f4f4] rounded-full transition-all duration-300 ease-in-out ${
                    menuOpen ? 'opacity-0 translate-y-[-1px]' : 'opacity-100 translate-y-[-1px]'
                  }`}
                />
                <div
                  className={`absolute top-1/2 left-0 w-full h-[2px] lg:h-[2.5px] bg-[#f4f4f4] rounded-full transform transition-all duration-300 ease-in-out ${
                    menuOpen ? '-rotate-45 translate-y-[-1px]' : 'translate-y-[5px] rotate-0'
                  }`}
                />
              </div>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
}
