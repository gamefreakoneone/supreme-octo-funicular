import { useEffect, useState } from 'react';
import { NeuroNoise } from '@paper-design/shaders-react';

export default function ShaderBackground() {
  const [size, setSize] = useState({ width: 1280, height: 720 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: Math.max(window.innerWidth, 320),
        height: Math.max(window.innerHeight, 320),
      });
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateSize();
    updateMotionPreference();
    window.addEventListener('resize', updateSize, { passive: true });
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => {
      window.removeEventListener('resize', updateSize);
      mediaQuery.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  return (
    <div className="shader-background" aria-hidden="true">
      <NeuroNoise
        width={size.width}
        height={size.height}
        colorFront="#ffffff"
        colorMid="#4794ff"
        colorBack="#000000"
        brightness={0.05}
        contrast={0.3}
        speed={prefersReducedMotion ? 0 : 1}
        scale={1}
        rotation={0}
      />
      <div className="shader-background__veil" />
      <div className="shader-background__grain" />
    </div>
  );
}
