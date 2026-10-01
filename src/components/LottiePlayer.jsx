import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottiePlayer({ path, className = '', loop = true, autoplay = true }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay: autoplay && !motion.matches,
      path,
    });
    const updateMotion = () => {
      if (motion.matches) anim.goToAndStop(0, true);
      else if (autoplay) anim.play();
    };
    motion.addEventListener('change', updateMotion);
    return () => {
      motion.removeEventListener('change', updateMotion);
      anim.destroy();
    };
  }, [path, loop, autoplay]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
