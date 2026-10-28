'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from './Link';

interface Slide {
  bg: string;
  title: React.ReactNode;
  subheading: string;
}

const slides: Slide[] = [
  {
    bg: '/images/banner1.webp',
    title: (
      <>
        Dentistry,  <span>designed around you.</span>
      </>
    ),
    subheading: 'Comprehensive, painless dental care in Shaikpet / Manikonda, Hyderabad.'
  },
  {
    bg: '/images/banner2.webp',
    title: (
      <>
        A smile designed <br />for who you are.
      </>
    ),
    subheading: 'Specializing in Invisalign, microscopic root canal treatments, pediatric dentistry, and dental implants.'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (timer) return;
      timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 6000);
    };

    const cleanup = () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('pointerdown', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
    };

    const handleInteraction = () => {
      startTimer();
      cleanup();
    };

    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('pointerdown', handleInteraction, { passive: true });
    window.addEventListener('mousemove', handleInteraction, { passive: true });

    // Fallback: start auto-sliding after initial page load settles if no interaction occurs
    const idleTimeout = setTimeout(startTimer, 15000);

    return () => {
      if (timer) clearInterval(timer);
      clearTimeout(idleTimeout);
      cleanup();
    };
  }, []);

  return (
    <section className="home-slider" style={{ position: 'relative', overflow: 'hidden', minHeight: '550px' }} id="home">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="slider-item"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: current === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: current === index ? 1 : 0,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          <Image
            src={slide.bg}
            alt="Simply Smilez Dental Clinic Hero"
            fill
            priority={index === 0}
            sizes="100vw"
            quality={85}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 0
            }}
          />
          <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 1 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row no-gutters slider-text align-items-center justify-content-end">
              <div className="col-md-6 text">
                {index === 0 ? (
                  <h1 className="mb-4 text-white" style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.2 }}>
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="mb-4 text-white" style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.2 }}>
                    {slide.title}
                  </h2>
                )}
                <p className="subheading text-white" style={{ fontSize: '18px', fontWeight: 400 }}>
                  {slide.subheading}
                </p>
                <div className="hero-cta-group mt-4">
                  <Link
                    to="/contact"
                    className="hero-btn-appointment"
                  >
                    <i className="fa-regular fa-calendar-check"></i>
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          gap: '10px'
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
            style={{
              width: current === idx ? '28px' : '12px',
              height: '12px',
              borderRadius: '6px',
              background: current === idx ? '#00b7ff' : 'rgba(255,255,255,0.6)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
}
