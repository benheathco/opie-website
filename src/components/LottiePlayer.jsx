import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottiePlayer({ path, className = '', loop = true, autoplay = true }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      path,
    });
    return () => anim.destroy();
  }, [path, loop, autoplay]);

  return <div ref={containerRef} className={className} />;
}
