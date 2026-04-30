import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 240;
const FRAME_PATH = (index) => `/eye-frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

const EyeScrollBackground = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // 1. Robust Preloading with Progress Tracking
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = [];
      let loadedCount = 0;

      const loadSingleImage = (i) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = FRAME_PATH(i);
          img.onload = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
            resolve(img);
          };
          img.onerror = () => {
            loadedCount++;
            resolve(null);
          };
        });
      };

      const promises = [];
      for (let i = 1; i <= FRAME_COUNT; i++) {
        promises.push(loadSingleImage(i));
      }

      const results = await Promise.all(promises);
      const validImages = results.filter(img => img !== null);
      
      setImages(validImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // 2. High-Fidelity Drawing Logic
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');

    const drawFrame = (index) => {
      const img = images[index];
      if (!img) return;

      // Ensure internal resolution is perfect
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      let dWidth, dHeight, dx, dy;

      if (canvasRatio > imgRatio) {
        dWidth = canvas.width;
        dHeight = canvas.width / imgRatio;
        dx = 0;
        dy = (canvas.height - dHeight) / 2;
      } else {
        dHeight = canvas.height;
        dWidth = canvas.height * imgRatio;
        dx = (canvas.width - dWidth) / 2;
        dy = 0;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, dx, dy, dWidth, dHeight);
    };

    const handleScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop || window.scrollY;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      
      // Calculate scroll fraction (0 to 1)
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      
      // Map to frame index (ensure it doesn't exceed array bounds)
      const frameIndex = Math.min(
        images.length - 1,
        Math.floor(scrollFraction * images.length)
      );

      requestAnimationFrame(() => drawFrame(frameIndex));
    };

    // Force draw first frame
    requestAnimationFrame(() => drawFrame(0));

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => drawFrame(0));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => drawFrame(0));
    };
  }, [isLoaded, images]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: '#0a0a0a', // Dark slate fallback
        pointerEvents: 'none'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in'
        }}
      />
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          backgroundColor: '#000000',
          zIndex: 100
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>VIMALA VISION</div>
          <div style={{ width: '200px', height: '2px', backgroundColor: '#333' }}>
            <div style={{ 
              width: `${progress}%`, 
              height: '100%', 
              backgroundColor: '#00a3ff',
              transition: 'width 0.1s ease-out'
            }} />
          </div>
          <div style={{ marginTop: '1rem', color: '#666', fontSize: '0.8rem' }}>LOADING {progress}%</div>
        </div>
      )}
    </div>
  );
};

export default EyeScrollBackground;
