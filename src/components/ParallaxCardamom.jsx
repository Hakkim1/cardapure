import React, { useEffect, useRef } from 'react';
import cardamom3d from '../assets/images/cardamom_3d.png';

export default function ParallaxCardamom() {
  const containerRef = useRef(null);
  const podsRefs = useRef([]);

  // Curated artistic composition:
  // - Zero pods behind the headline text (left area is clean & legible)
  // - Lush, multi-layered depth cascade across the right side
  const podConfigs = [
    // --- RIGHT SIDE FOCAL & MIDGROUND (Crisp & elegant) ---
    {
      id: 'right-hero-focal',
      flipped: false,
      style: {
        top: '38%',
        right: '16%',
        width: '240px',
        height: '240px',
        zIndex: 16,
        filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.55))',
        opacity: 0.98
      },
      speed: 0.28,
      rotSpeed: 0.05,
      baseRotation: -28
    },
    {
      id: 'right-mid-lower',
      flipped: true,
      style: {
        top: '64%',
        right: '26%',
        width: '170px',
        height: '170px',
        zIndex: 15,
        filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.5))',
        opacity: 0.95
      },
      speed: 0.35,
      rotSpeed: -0.07,
      baseRotation: 65
    },

    // --- RIGHT SIDE FOREGROUND BOKEH (Cinematic camera depth) ---
    {
      id: 'right-foreground-bokeh',
      flipped: false,
      style: {
        top: '20%',
        right: '-4%',
        width: '350px',
        height: '350px',
        zIndex: 25,
        filter: 'blur(7.5px) drop-shadow(0 30px 45px rgba(0,0,0,0.7))',
        opacity: 0.88
      },
      speed: -0.75,
      rotSpeed: 0.09,
      baseRotation: 35
    },
    {
      id: 'right-lower-bokeh',
      flipped: true,
      style: {
        top: '76%',
        right: '4%',
        width: '260px',
        height: '260px',
        zIndex: 24,
        filter: 'blur(5px) drop-shadow(0 25px 35px rgba(0,0,0,0.6))',
        opacity: 0.82
      },
      speed: -0.5,
      rotSpeed: -0.06,
      baseRotation: -50
    },

    // --- RIGHT & CENTER BACKGROUND / DISTANCE (Misty hill depth) ---
    {
      id: 'right-upper-depth',
      flipped: true,
      style: {
        top: '10%',
        right: '28%',
        width: '120px',
        height: '120px',
        zIndex: 4,
        filter: 'blur(2px) drop-shadow(0 8px 15px rgba(0,0,0,0.4))',
        opacity: 0.65
      },
      speed: 0.12,
      rotSpeed: -0.03,
      baseRotation: -80
    },
    {
      id: 'center-depth-mist',
      flipped: false,
      style: {
        top: '48%',
        right: '42%',
        width: '95px',
        height: '95px',
        zIndex: 3,
        filter: 'blur(2.5px) drop-shadow(0 6px 12px rgba(0,0,0,0.35))',
        opacity: 0.55
      },
      speed: 0.08,
      rotSpeed: 0.04,
      baseRotation: 15
    },
    {
      id: 'top-center-drift',
      flipped: true,
      style: {
        top: '4%',
        left: '46%',
        width: '105px',
        height: '105px',
        zIndex: 3,
        filter: 'blur(3px) drop-shadow(0 8px 14px rgba(0,0,0,0.35))',
        opacity: 0.5
      },
      speed: 0.15,
      rotSpeed: -0.02,
      baseRotation: 40
    },

    // --- PERIMETER / CORNER ACCENTS (Far away from text area) ---
    {
      id: 'top-left-corner-bokeh',
      flipped: false,
      style: {
        top: '-6%',
        left: '-4%',
        width: '320px',
        height: '320px',
        zIndex: 25,
        filter: 'blur(8px) drop-shadow(0 30px 40px rgba(0,0,0,0.65))',
        opacity: 0.8
      },
      speed: -0.7,
      rotSpeed: 0.08,
      baseRotation: 20
    },
    {
      id: 'bottom-left-corner',
      flipped: true,
      style: {
        top: '84%',
        left: '5%',
        width: '180px',
        height: '180px',
        zIndex: 15,
        filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.5))',
        opacity: 0.92
      },
      speed: 0.22,
      rotSpeed: -0.05,
      baseRotation: 120
    }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          podsRefs.current.forEach((podEl, index) => {
            if (!podEl) return;
            const config = podConfigs[index];
            
            // Performant transform using 3D translations to trigger hardware acceleration
            const yTranslate = scrollY * config.speed;
            const rotation = config.baseRotation + (scrollY * config.rotSpeed);
            const scaleX = config.flipped ? -1 : 1;
            
            podEl.style.transform = `translate3d(0, ${yTranslate}px, 0) rotate(${rotation}deg) scaleX(${scaleX})`;
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial run to layout
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-cardamom-container" ref={containerRef}>
      {podConfigs.map((config, index) => (
        <div
          key={config.id}
          ref={(el) => (podsRefs.current[index] = el)}
          className="parallax-pod"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            transition: 'transform 0.1s cubic-bezier(0.1, 0.8, 0.2, 1)',
            willChange: 'transform',
            ...config.style
          }}
        >
          <img 
            src={cardamom3d} 
            alt="Floating Cardamom Pod" 
            className="pod-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          />
        </div>
      ))}

      <style>{`
        .parallax-cardamom-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 12;
          pointer-events: none;
          overflow: hidden;
        }

        .parallax-pod {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pod-img {
          display: block;
        }
      `}</style>
    </div>
  );
}
