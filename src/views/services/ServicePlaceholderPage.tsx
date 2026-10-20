'use client';

import React from 'react';
import Link from '@/src/components/Link';

interface ServicePlaceholderPageProps {
  title: string;
  category?: string;
  breadcrumbTitle: string;
  routePath: string;
}

export default function ServicePlaceholderPage({
  title,
  category = "Invisalign",
  breadcrumbTitle,
  routePath
}: ServicePlaceholderPageProps) {
  return (
    <div className="page-wrapper service-placeholder-page">
      {/* Hero / Header Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #094765 0%, #06374e 55%, #032537 100%)',
          color: '#ffffff',
          padding: '60px 0 40px',
        }}
      >
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb bg-transparent p-0 m-0" style={{ fontSize: '14px' }}>
              <li className="breadcrumb-item">
                <Link to="/" style={{ color: '#38bdf8' }}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/all-services" style={{ color: '#38bdf8' }}>Services</Link>
              </li>
              <li className="breadcrumb-item">
                <span style={{ color: '#94a3b8' }}>{category}</span>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                {breadcrumbTitle}
              </li>
            </ol>
          </nav>

          <h1 className="h2 font-weight-bold mb-2" style={{ color: '#ffffff' }}>
            {title}
          </h1>
          <hr style={{ width: 60, marginLeft: 0, borderTop: '3px solid #00b7ff' }} />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container py-5 text-left">
        <div className="row">
          <div className="col-lg-8 col-md-12 text-left">
            <div className="about-us text-left">
              <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>
                {title}
              </h2>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <p className="lead text-left" style={{ color: '#475569' }}>
                Welcome to Simply Smilez Dental. This service page is currently being prepared with detailed treatment information, FAQs, and clinical insights.
              </p>

              <div className="alert alert-light border mt-4 p-4 rounded" style={{ background: '#f8fafc', borderColor: '#e2e8f0' }}>
                <h5 className="font-weight-bold mb-2" style={{ color: '#094765' }}>
                  <i className="fa-solid fa-circle-info mr-2" style={{ color: '#0284c7' }}></i> Consultation &amp; Inquiries
                </h5>
                <p className="mb-3 text-muted">
                  For consultations regarding {title.toLowerCase()} in Hyderabad, schedule an appointment with our specialist dental team.
                </p>
                <Link to="/contact" className="btn btn-primary px-4 py-2">
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Right Sidebar info card */}
          <div className="col-lg-4 col-md-12 text-left mt-4 mt-lg-0">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body text-left p-4">
                <h4 className="card-title font-weight-bold mb-2 text-left" style={{ color: '#094765' }}>
                  {title}
                </h4>
                <p className="card-text text-muted text-left mb-3">
                  Digital orthodontic care and clear aligner consultations at Simply Smilez Dental Clinic, Hyderabad.
                </p>
                <Link to="/contact" className="btn btn-primary btn-block">
                  Enquire About Consultation
                </Link>
              </div>
            </div>

            <div className="bg-primary text-white p-4 rounded shadow-sm text-left">
              <h4 className="text-white font-weight-bold mb-3 text-left">Simply Smilez Dental Clinic</h4>
              <p className="mb-3 text-left">
                <i className="fa-solid fa-location-dot mr-2" />
                <a
                  href="https://www.google.com/maps/place/Simply+Smilez+Dental+Clinic+-Fully+Digital+Invisalign+Centre/@17.4109733,78.3924714,1046m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90c618ceaaab:0x5543d8d68ff843d2!8m2!3d17.4109682!4d78.3950463!16s%2Fg%2F11f525jy3x?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet, Hyderabad, 500008
                </a>
              </p>
              <p className="mb-3 text-left font-weight-bold" style={{ fontSize: "1.05rem" }}>
                <a href="tel:+917799376656" className="text-white">77993 76656</a> / <a href="tel:+919603338904" className="text-white">96033 38904</a>
              </p>
              <p className="mb-0 text-left">
                <i className="fa-regular fa-clock mr-2" />
                Mon &ndash; Sat: 10:00am &ndash; 8:30pm<br />
                <span className="pl-4">Sun: 10:30am &ndash; 1:00pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
