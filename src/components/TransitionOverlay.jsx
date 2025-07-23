// components/TransitionOverlay.jsx
import { motion, AnimatePresence } from 'framer-motion';

export default function TransitionOverlay({ active, setActive }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.75, 0, 0.25, 1] }}
          onAnimationComplete={() => setActive(false)}
          className="fixed top-0 left-0 w-full h-full bg-[#050505] z-[9999]"
        />
      )}
    </AnimatePresence>
  );
}
