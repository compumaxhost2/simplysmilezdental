'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const microscopicRctSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#webpage",
      "url": "https://www.simplysmilezdental.in/services/microscopic-root-canal",
      "name": "Microscopic Root Canal Treatment in Hyderabad",
      "description": "Learn about microscopic root canal treatment in Hyderabad, including microscope-assisted RCT, treatment considerations, and retreatment options.",
      "inLanguage": "en-IN",
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#service"
      },
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental",
      "inLanguage": "en-IN"
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#service",
      "name": "Microscopic Root Canal Treatment",
      "serviceType": "Microscope-assisted endodontic treatment",
      "description": "Microscopic root canal treatment uses magnification to help a dentist examine internal tooth structures during endodontic procedures. Treatment suitability depends on the patient's clinical condition.",
      "url": "https://www.simplysmilezdental.in/services/microscopic-root-canal",
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "audience": {
        "@type": "PeopleAudience",
        "audienceType": "Patients seeking root canal treatment"
      },
      "mainEntityOfPage": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#webpage"
      }
    },
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental",
      "url": "https://www.simplysmilezdental.in/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.simplysmilezdental.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.simplysmilezdental.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Microscopic Root Canal Treatment",
          "item": "https://www.simplysmilezdental.in/services/microscopic-root-canal"
        }
      ]
    }
  ]
};

export default function MicroscopicRootCanalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez Dental";

    // Meta Helper function
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(attr);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Canonical link helper
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.simplysmilezdental.in/services/microscopic-root-canal";

    // Metadata
    setMeta("description", "Explore microscopic root canal treatment in Hyderabad at Simply Smilez Dental. Learn about microscope-assisted RCT, retreatment and treatment costs.");
    setMeta("keywords", "microscopic root canal treatment in Hyderabad, microscopic RCT in Hyderabad, microscope-assisted root canal treatment, dental microscope root canal, microscopic root canal retreatment, microscopic RCT cost in Hyderabad");
    setMeta("author", "Simply Smilez Dental");
    setMeta("robots", "index,follow");
    setMeta("theme-color", "#ffffff");
    setMeta("referrer", "strict-origin-when-cross-origin");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez Dental", true);
    setMeta("og:description", "Learn about microscopic root canal treatment in Hyderabad, including microscope-assisted RCT, retreatment options and cost considerations.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/microscopic-root-canal", true);
    setMeta("og:site_name", "Simply Smilez Dental", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/microscopic-root-canal.jpg", true);
    setMeta("og:image:alt", "Microscopic root canal treatment and dental microscope", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez Dental");
    setMeta("twitter:description", "Discover microscope-assisted root canal treatment in Hyderabad. Explore treatment benefits, retreatment and cost considerations.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/microscopic-root-canal.jpg");

    // Dynamic Schema script injection
    const scriptId = 'microscopic-rct-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(microscopicRctSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper laserrootpage">
      <div className="container py-5 text-left">
        <div className="row">
          <div className="col-lg-8 col-md-12 text-left">
            <div className="about-us text-left">
              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>
                Microscopic Root Canal Treatment in Hyderabad
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <p className="lead text-left">
                Experiencing persistent tooth pain or sensitivity? Microscopic root canal treatment uses a dental operating microscope to provide enhanced magnification and visibility during root canal procedures. This can help the dentist examine complex tooth structures and manage challenging cases with greater visual detail.
              </p>
              <p className="text-left">
                If you are considering microscopic root canal treatment in Hyderabad, Simply Smilez Dental can be your point of contact to enquire about an assessment and learn which treatment options may be appropriate for your tooth.
              </p>
              <p className="text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2 mt-2 mb-3">
                  Contact Simply Smilez Dental to enquire about a consultation
                </Link>
              </p>

              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                What Is Microscopic Root Canal Treatment?
              </h2>
              <p className="text-left">
                <Link to="/" style={{ color: "#0284c7", fontWeight: 600 }}>Microscopic root canal treatment</Link>, also known as microscope-assisted RCT, is a procedure that uses magnification to help the dentist examine the inside of a tooth during endodontic treatment.
              </p>
              <p className="text-left">
                The pulp is the soft tissue inside a tooth containing nerves and blood vessels. Deep decay, cracks, trauma, or other damage can cause inflammation or infection. When the pulp cannot heal adequately, root canal treatment may be recommended to remove the affected tissue, clean the root canals, and seal them.
              </p>
              <p className="text-left">
                A dental operating microscope improves visibility of small anatomical details. This can be particularly useful when the dentist needs to locate narrow or additional canals, examine complex root canal anatomy, or evaluate a previously treated tooth.
              </p>

              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Benefits of Microscope-Assisted Root Canal Treatment
              </h2>
              <p className="text-left">
                Microscopic RCT offers several potential advantages depending on the tooth and clinical situation.
              </p>
              <ul className="text-left pl-4">
                <li><strong>Enhanced visibility:</strong> Magnification helps the dentist examine the treatment area in greater detail.</li>
                <li><strong>Assessment of complex canals:</strong> Some teeth have narrow, curved, or additional canals that can be difficult to identify.</li>
                <li><strong>Support for complex treatment:</strong> A microscope may be useful when managing challenging root canal anatomy or evaluating persistent symptoms after earlier treatment.</li>
                <li><strong>More controlled treatment:</strong> Improved visibility can support careful treatment of the internal tooth structure.</li>
              </ul>
              <p className="text-left">
                Microscopic treatment does not guarantee success or eliminate every complication. Outcomes depend on factors such as the tooth&apos;s condition, infection, anatomy, restoration, and the overall treatment plan.
              </p>

              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Who May Need Microscopic RCT?
              </h2>
              <p className="text-left">
                Microscope-assisted endodontic treatment may be considered when a patient has:
              </p>
              <ul className="text-left pl-4">
                <li>Deep tooth decay affecting the pulp.</li>
                <li>Tooth pain or sensitivity that requires clinical evaluation.</li>
                <li>Suspected infection inside the tooth.</li>
                <li>Complex or unusually shaped root canals.</li>
                <li>Persistent symptoms after a previous root canal.</li>
                <li>A previously treated tooth that may need retreatment.</li>
              </ul>
              <p className="text-left">
                Not every root canal requires a dental microscope. A clinical examination and appropriate diagnostic imaging help the dentist determine whether this approach is suitable.
              </p>

              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                How Does Microscopic Root Canal Treatment Work?
              </h2>
              <p className="text-left">
                The procedure varies according to the tooth and the complexity of the case. Treatment generally involves the following stages.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">1. Examination and diagnosis</h3>
              <p className="text-left">
                The dentist evaluates your symptoms, examines the affected tooth, and may recommend diagnostic imaging to assess the roots and surrounding tissues.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">2. Treatment planning</h3>
              <p className="text-left">
                The dentist determines whether root canal treatment is appropriate and evaluates the complexity of the root canal system.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">3. Cleaning and shaping</h3>
              <p className="text-left">
                Under local anesthesia, the dentist accesses the inside of the tooth, removes affected pulp tissue, and cleans and shapes the root canals. Magnification can help improve visibility during relevant stages.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">4. Disinfection and sealing</h3>
              <p className="text-left">
                The cleaned canals are disinfected and filled with an appropriate root canal material to seal the internal space.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">5. Final restoration</h3>
              <p className="text-left">
                Depending on the remaining tooth structure, a filling or crown may be recommended to restore function and protect the treated tooth.
              </p>
              <p className="text-left">
                Some cases can be completed in one appointment, while others require multiple visits. Your dentist can explain the expected treatment schedule after assessment.
              </p>

              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Microscopic Root Canal Retreatment
              </h2>
              <p className="text-left">
                Sometimes, a tooth that has already undergone root canal treatment continues to cause discomfort or develops a new problem. Possible reasons include persistent infection, complex canal anatomy, or problems affecting the restoration.
              </p>
              <p className="text-left">
                Microscopic root canal retreatment involves reassessing the previously treated tooth and determining whether further endodontic treatment may help. Magnification can assist the dentist in examining the existing treatment and locating relevant canal structures.
              </p>
              <p className="text-left">
                Retreatment is not suitable for every tooth. The remaining tooth structure, the cause of the problem, and other treatment options must be evaluated before a recommendation is made.
              </p>

              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Microscopic RCT Cost in Hyderabad
              </h2>
              <p className="text-left">
                The cost of microscopic root canal treatment in Hyderabad depends on the clinical requirements of each case. Factors that may influence the estimate include:
              </p>
              <ul className="text-left pl-4">
                <li>The tooth being treated and its root canal anatomy.</li>
                <li>The complexity of the procedure.</li>
                <li>Whether the treatment is a first-time RCT or retreatment.</li>
                <li>Diagnostic requirements and the extent of damage.</li>
                <li>The type of final restoration needed.</li>
              </ul>
              <p className="text-left">
                An accurate estimate requires an assessment of the tooth and its treatment needs. Contact Simply Smilez Dental to enquire about consultation fees, treatment availability, and pricing.
              </p>

              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Choosing a Provider for Microscopic Root Canal Treatment
              </h2>
              <p className="text-left">
                When considering microscope-assisted RCT, ask the dental provider about the proposed diagnosis, the role of magnification in your case, the expected number of appointments, and the restoration required afterward.
              </p>
              <p className="text-left">
                Understanding these details helps you make an informed decision about treatment and the preservation of your natural tooth.
              </p>
              <p className="text-left">
                If you are looking for <Link to="/" style={{ color: "#0284c7", fontWeight: 600 }}>microscopic root canal treatment in Hyderabad</Link>, contact Simply Smilez Dental to discuss your symptoms, enquire about an appointment, and learn about the options available for your dental condition.
              </p>

              {/* Internal Links: Explore Other Dental Services */}
              <div className="mt-5 pt-4 border-top text-left">
                <h3 className="h4 font-weight-bold mb-3 text-left" style={{ color: "#0d3b66" }}>Explore Other Dental Services</h3>
                <p className="text-left mb-4">Simply Smilez Dental Clinic in Shaikpet, Hyderabad offers a comprehensive range of advanced dental treatments:</p>
                <div className="row">
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/crowns" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Dental Crowns &amp; Bridges</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Custom restorative crowns and caps to protect and strengthen your treated teeth.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/composite-fillings" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Composite Teeth Fillings</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Tooth-colored natural restorations for cavities, decay, and tooth rebuilding.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/dental-implants" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Dental Implants</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Permanent tooth replacement solution with natural-looking titanium implants.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/braces" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Braces &amp; Invisalign</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Orthodontic teeth alignment with clear aligners and modern braces.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/veneers" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Dental Veneers</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Custom cosmetic porcelain and composite veneers for an aesthetic smile makeover.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/laser-teeth-whitening" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Laser Teeth Whitening</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Professional in-clinic laser teeth bleaching for a radiant, brighter smile.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/laser-gum-surgery" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Laser Gum Surgery</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Minimally invasive laser periodontal treatment and gum reshaping.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/pediatric-dentistry" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Pediatric Dentistry</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Gentle dental care, checkups, and preventive treatments for children.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/wisdom-tooth-extraction" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Wisdom Tooth Extraction</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Painless surgical and non-surgical removal of impacted third molars.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* FAQs accordion matching design */}
              <ServiceFaq
                title="Frequently Asked Questions"
                faqs={[
                  {
                    question: "What is the difference between conventional RCT and microscopic RCT?",
                    answer: "Both procedures aim to clean, disinfect, and seal the root canal system. Microscopic RCT uses a dental operating microscope to improve visibility during treatment. This can be helpful in complex cases, but not every patient requires microscope-assisted treatment."
                  },
                  {
                    question: "Is microscopic root canal treatment painful?",
                    answer: "Local anesthesia is generally used to manage pain during root canal treatment. Some tenderness may occur afterward, depending on the condition of the tooth and surrounding tissues. Discuss pain management and any concerns with your dentist before the procedure."
                  },
                  {
                    question: "How long does microscopic RCT take?",
                    answer: "Treatment time depends on the tooth, canal anatomy, infection, and whether retreatment is needed. Some cases can be completed in one appointment, while others require multiple visits. Your dentist can provide a more specific estimate after examining the tooth."
                  },
                  {
                    question: "What is the cost of microscopic RCT in Hyderabad?",
                    answer: "The price depends on the tooth, procedural complexity, diagnostic needs, and final restoration. Retreatment may involve additional requirements. Contact Simply Smilez Dental for current pricing information and an estimate based on your clinical needs."
                  },
                  {
                    question: "Can a previously failed root canal be treated under a microscope?",
                    answer: "Some previously treated teeth may be suitable for retreatment. A microscope can help the dentist examine the root canal system, but success depends on the underlying problem and the condition of the tooth. An examination is necessary to determine the available options."
                  },
                  {
                    question: "How do I know if I need a root canal?",
                    answer: "Persistent toothache, prolonged sensitivity, pain when chewing, swelling, or tooth damage may require dental assessment. These symptoms do not automatically mean you need a root canal. A dentist must identify the cause before recommending treatment."
                  },
                  {
                    question: "How can I enquire about microscopic RCT at Simply Smilez Dental?",
                    answer: "Use the contact options available on the Simply Smilez Dental website to enquire about appointment availability, microscopic treatment options, and consultation costs. The clinic can confirm the services available and explain the next steps."
                  }
                ]}
              />

              {/* Ready to Discuss Box */}
              <div className="bg-light p-4 rounded text-left border mb-4 mt-4">
                <h3 className="h4 font-weight-bold text-left mb-3" style={{ color: "#0d3b66" }}>
                  Ready to Discuss Your Root Canal Treatment?
                </h3>
                <p className="text-left">
                  If you are experiencing tooth pain or considering dental treatment in Hyderabad, start with a professional clinical consultation rather than choosing a treatment based only on online information.
                </p>
                <p className="text-left">
                  Book a consultation at Simply Smilez Dental Clinic in Shaikpet to discuss your symptoms, examine your tooth with digital imaging, and receive expert care.
                </p>
                <div className="mt-3 text-left">
                  <p className="mb-1 text-left"><strong>Simply Smilez Dental Clinic</strong></p>
                  <p className="mb-1 text-left">
                    P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008
                  </p>
                  <p className="mb-1 text-left">
                    Opening hours: Monday&ndash;Saturday, 10:00 AM&ndash;8:30 PM; Sunday, 10:30 AM&ndash;1:00 PM.
                  </p>
                  <p className="mb-1 text-left">
                    Phone: <a href="tel:+919603338904">96033 38904</a> / <a href="tel:+917799376656">77993 76656</a>
                  </p>
                  <p className="mb-3 text-left">
                    Email: <a href="mailto:info.invisaligndental@gmail.com">info.invisaligndental@gmail.com</a>
                  </p>
                  <Link to="/contact" className="btn btn-primary px-4 py-2">Book Consultation</Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="col-lg-4 col-md-12 mt-4 mt-lg-0 text-left">
            <div className="sticky-top" style={{ top: 100 }}>
              <div className="card border-0 shadow-sm mb-4">
                <img
                  src="/images/microscopic-root-canal.jpg"
                  className="card-img-top rounded-top"
                  alt="Microscopic Root Canal Treatment in Hyderabad"
                />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">
                    Microscopic Root Canal Treatment
                  </h4>
                  <p className="card-text text-muted text-left">
                    Microscope-assisted endodontics to enhance visibility, evaluate complex root canals, and manage retreatment with precision.
                  </p>
                  <Link to="/contact" className="btn btn-primary btn-block">Enquire About Consultation</Link>
                </div>
              </div>

              <div className="bg-primary text-white p-4 rounded shadow-sm text-left">
                <h4 className="text-white font-weight-bold mb-3 text-left">Simply Smilez Dental Clinic</h4>
                <p className="mb-3 text-left">
                  <i className="icon-map-marker mr-2" />
                  <a href="https://www.google.com/maps/place/Simply+Smilez+Dental+Clinic+-Fully+Digital+Invisalign+Centre/@17.4109733,78.3924714,1046m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90c618ceaaab:0x5543d8d68ff843d2!8m2!3d17.4109682!4d78.3950463!16s%2Fg%2F11f525jy3x?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white">
                    P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet, Hyderabad, 500008
                  </a>
                </p>
                <p className="mb-3 text-left font-weight-bold" style={{ fontSize: "1.05rem" }}>
                  <a href="tel:+917799376656" className="text-white">77993 76656</a> / <a href="tel:+919603338904" className="text-white">96033 38904</a>
                </p>
                <p className="mb-0 text-left">
                  <i className="ion-ios-time mr-2" />
                  Mon &ndash; Sat: 10:00am &ndash; 8:30pm<br />
                  <span className="pl-4">Sun: 10:30am &ndash; 1:00pm</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
