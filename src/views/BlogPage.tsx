'use client';

import React, { useEffect } from 'react';
import Link from '../components/Link';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Dental Health Blog | Simply Smilez Dental Clinic Hyderabad';
  }, []);

  const blogPosts = [
    {
      title: "Invisalign Aligners for Kids in Hyderabad: Benefits, Right Age, and Expert Care by Dr. Susheel Kumar",
      slug: "invisalign-aligners-for-kids-in-hyderabad",
      excerpt: "Wondering whether your child needs braces or clear aligners? Learn about Invisalign First, the ideal age to start, benefits, treatment costs, and expert orthodontic care.",

      readTime: "6 min read",
      author: "Dr. Susheel Kumar",
      image: "/images/invisalign-aligners-for-kids-hyderabad.jpg",
      date: "Latest Guide"
    }
  ];

  return (
    <div className="page-wrapper blogpage">
      {/* Hero / Header Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #0b2545 0%, #134e7c 100%)', color: '#fff' }}>
        <div className="container text-center py-4">
          {/* Breadcrumbs */}
          <div className="mb-3 text-center" style={{ fontSize: '14px', color: '#cbd5e1' }}>
            <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none' }}>
              <i className="fa-solid fa-house mr-1"></i> Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span style={{ color: '#f8fafc', fontWeight: 600 }}>Blog</span>
          </div>

          <h1 className="font-weight-bold mb-3" style={{ fontSize: '36px', color: '#ffffff' }}>
            Dental Health Blog &amp; Insights
          </h1>
          <p className="mx-auto text-light" style={{ maxWidth: '650px', fontSize: '17px', opacity: 0.9 }}>
            Expert dental advice, orthodontic treatment guides, and oral hygiene tips curated by our specialists at Simply Smilez Dental Clinic, Hyderabad.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="bg-light py-5 min-vh-100">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mb-4">
                <div
                  className="card h-100 border-0 shadow-sm transition-all"
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{ position: 'relative', height: '220px', overflow: 'hidden', display: 'block' }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-100 h-100 blog-card-img"
                      style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                  </Link>

                  <div className="card-body p-4 d-flex flex-column text-left">
                    <div className="d-flex align-items-center text-muted mb-2" style={{ fontSize: '13px' }}>
                      <span className="mr-3">
                        <i className="fa-solid fa-user-doctor mr-1 text-primary" style={{ marginRight: '4px' }}></i> {post.author}
                      </span>
                      <span>
                        <i className="fa-regular fa-clock mr-1 text-primary" style={{ marginRight: '4px' }}></i> {post.readTime}
                      </span>
                    </div>

                    <h5 className="font-weight-bold mb-3" style={{ fontSize: '18px', color: '#0b2545', lineHeight: 1.4 }}>
                      <Link
                        to={`/blog/${post.slug}`}
                        style={{ color: '#0b2545', textDecoration: 'none' }}
                      >
                        {post.title}
                      </Link>
                    </h5>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-muted flex-grow-1"
                      style={{ fontSize: '14.5px', lineHeight: 1.6, textDecoration: 'none', display: 'block' }}
                    >
                      {post.excerpt}
                    </Link>
                    <div className="mt-3 pt-3 border-top">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="btn btn-outline-primary btn-sm font-weight-bold w-100 py-2"
                        style={{ borderRadius: '25px', fontSize: '14px' }}
                      >
                        Read Full Article <i className="fa-solid fa-arrow-right ml-1" style={{ marginLeft: '6px' }}></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}