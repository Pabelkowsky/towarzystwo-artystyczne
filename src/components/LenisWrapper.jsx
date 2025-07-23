// components/LenisWrapper.jsx
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to top on page load
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy(); // ZABIJA starą instancję
    };
  }, []);

  return <>{children}</>;
}
