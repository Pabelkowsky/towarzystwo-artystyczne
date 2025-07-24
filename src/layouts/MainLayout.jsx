// layouts/MainLayout.jsx
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TransitionOverlay from '../components/TransitionOverlay';

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [transitioningTo, setTransitioningTo] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleNavigate = (path) => {
    setTransitioningTo(path);
    setShowOverlay(true);
  };

  useEffect(() => {
    if (transitioningTo) {
      const timer = setTimeout(() => {
        navigate(transitioningTo);
        setTransitioningTo(null);
      }, 1150);
      return () => clearTimeout(timer);
    }
  }, [transitioningTo]);

  return (
    <>
      <TransitionOverlay active={showOverlay} setActive={setShowOverlay} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
        >
          {/* context-free way to provide navigation handler to all children */}
          <Outlet context={{ handleNavigate }} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
