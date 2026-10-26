'use client';

import React, { useEffect } from 'react';
import Link from '../components/Link';
import Testimonial, { GOOGLE_REVIEWS_URL } from '../components/Testimonial';

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper testimonialspage">

      {/* Hero Header */}
      <section className="doctor-hero-section py-4" style={{ background: '#f0f9ff' }}>
        <div className="container">
          <div className="breadcrumb-custom">
            <Link to="/"><i className="fa-solid fa-house" /> Home</Link>
            <span>&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Patient Reviews &amp; Testimonials</span>
          </div>
        </div>
      </section>

      {/* Embedded Google Reviews Component */}
      <Testimonial />
    </div>
  );
}
