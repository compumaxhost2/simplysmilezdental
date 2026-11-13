'use client';

import React, { useEffect, useState } from 'react';
import Link from '../../components/Link';

export default function PediatricDentistsInvisalignHyderabadBlogPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const faqs = [
    {
      id: 1,
      question: "Where can I find pediatric dentists who offer Invisalign treatment in Hyderabad?",
      answer: "Parents looking for Invisalign treatment for children in Hyderabad can consider Simply Smilez Dental Clinic in Shaikpet. The clinic offers Invisalign First for eligible children and has an orthodontist who provides Invisalign treatment. Parents can schedule a consultation to discuss their child's dental development, treatment suitability, and available orthodontic options."
    },
    {
      id: 2,
      question: "What is the right age for Invisalign First?",
      answer: "Invisalign First is designed for eligible growing children, generally between 6 and 10 years old. However, the appropriate starting point depends on dental development, tooth eruption, and orthodontic needs. An early orthodontic evaluation helps determine whether treatment should begin immediately or whether monitoring is sufficient."
    },
    {
      id: 3,
      question: "Is Invisalign better than traditional braces for children?",
      answer: "Both treatments have advantages. Invisalign First offers removable, transparent aligners, while traditional braces remain fixed to the teeth. Invisalign may be convenient for children who can follow wearing instructions consistently. However, braces may be more appropriate for certain orthodontic conditions. The orthodontist can recommend the most suitable option."
    },
    {
      id: 4,
      question: "How long does Invisalign First treatment take?",
      answer: "Treatment duration varies according to the child's orthodontic condition, treatment goals, and consistency in wearing aligners. Some children may complete their initial treatment phase sooner than others. Regular dental appointments help monitor progress and determine whether additional treatment or monitoring is necessary."
    },
    {
      id: 5,
      question: "Can children eat normally with Invisalign First?",
      answer: "Yes. Children can remove Invisalign First aligners before eating, allowing them to enjoy their usual meals without worrying about damaging brackets or wires. They should brush their teeth before putting the aligners back in and follow their orthodontist's cleaning instructions to maintain good oral hygiene."
    },
    {
      id: 6,
      question: "Is Invisalign First suitable for crowded teeth?",
      answer: "Invisalign First may help address certain cases of dental crowding and spacing in growing children. However, suitability depends on the severity of crowding, available dental space, and jaw development. An orthodontic examination is necessary to determine whether clear aligners or another treatment would provide better results."
    },
    {
      id: 7,
      question: "How much does Invisalign First cost in Hyderabad?",
      answer: "The price depends on treatment complexity, the number of aligners, diagnostic requirements, and follow-up care. Since every child's dental condition is different, clinics generally provide an accurate estimate after an initial examination. Parents should request a detailed breakdown of all treatment-related expenses before proceeding."
    }
  ];

  return (
    <div className="page-wrapper blog-detail-page">
      {/* Breadcrumb Header */}
      <section className="bg-light py-3 border-bottom">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 bg-transparent p-0" style={{ fontSize: '14px' }}>
              <li className="breadcrumb-item">
                <Link to="/" style={{ color: '#0284c7', textDecoration: 'none' }}>
                  <i className="fa-solid fa-house mr-1"></i> Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blog" style={{ color: '#0284c7', textDecoration: 'none' }}>
                  Blog
                </Link>
              </li>
              <li className="breadcrumb-item active text-truncate" aria-current="page" style={{ maxWidth: '320px', color: '#475569' }}>
                Pediatric Dentists Invisalign Treatment
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container py-5 text-left">
        <div className="row">
          {/* Main Article Body */}
          <div className="col-lg-8 col-md-12 text-left">
            <article className="blog-article text-left">
              <span className="badge badge-primary px-3 py-2 mb-3" style={{ backgroundColor: '#e0f2fe', color: '#0284c7', fontSize: '13px', fontWeight: 600 }}>
                Pediatric Dentistry &amp; Invisalign First
              </span>

              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: '#0b2545', lineHeight: 1.3 }}>
                Where Can I Find Pediatric Dentists Who Offer Invisalign Treatment?
              </h1>

              {/* Author & Meta Bar */}
              <div className="d-flex flex-wrap align-items-center text-muted mb-4 pb-3 border-bottom" style={{ fontSize: '14px', gap: '16px' }}>
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-user-doctor text-primary mr-2" style={{ marginRight: '6px' }}></i>
                  <span>By <strong><Link to="/doctor/dr-susheel-kumar" style={{ color: '#0b2545', textDecoration: 'none' }}>Dr. Susheel Kumar (MDS)</Link></strong> &amp; <strong><Link to="/doctor/dr-ankush-kumar" style={{ color: '#0b2545', textDecoration: 'none' }}>Dr. Ankush Kumar (MDS)</Link></strong></span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-clock text-primary mr-2" style={{ marginRight: '6px' }}></i>
                  <span>6 min read</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-hospital text-primary mr-2" style={{ marginRight: '6px' }}></i>
                  <span>Simply Smilez Dental Clinic, Shaikpet</span>
                </div>
              </div>

              {/* Featured Blog Image */}
              <div className="mb-4 text-center rounded-lg overflow-hidden shadow-sm" style={{ borderRadius: '16px' }}>
                <img
                  src="/images/pediatric-dentists-invisalign-treatment-hyderabad.webp"
                  alt="Invisalign First clear aligner treatment for children at Simply Smilez Dental in Hyderabad"
                  className="img-fluid w-100"
                  style={{ maxHeight: '440px', objectFit: 'cover' }}
                />
              </div>

              {/* Introduction */}
              <div className="lead mb-4 text-left" style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.8' }}>
                <p>
                  Finding the right orthodontic treatment for your child can feel overwhelming, especially when you want something comfortable, effective, and less noticeable than traditional braces. If you are wondering where to find pediatric dentists who offer Invisalign treatment in Hyderabad, start by looking for dental practices experienced in treating children and providing early orthodontic care.
                </p>
                <p>
                  <Link to="/" style={{ color: '#0284c7', fontWeight: 600 }}>Simply Smilez Dental</Link> offers Invisalign First for Kids, a clear aligner solution designed for growing children. Parents can explore the treatment and consultation details through the{' '}
                  <Link to="/services/invisalign-first-kids-hyderabad" style={{ color: '#0284c7', fontWeight: 600 }}>
                    Invisalign First service page
                  </Link>.
                </p>
                <p>
                  Here&apos;s what parents should know before choosing Invisalign treatment for their children.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="p-4 mb-4 rounded-lg text-left" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <h5 className="font-weight-bold mb-3" style={{ color: '#0b2545', fontSize: '17px' }}>
                  <i className="fa-solid fa-list-ul mr-2" style={{ color: '#0284c7', marginRight: '8px' }}></i> Table of Contents
                </h5>
                <ul className="mb-0 pl-3" style={{ listStyleType: 'disc', lineHeight: '1.9' }}>
                  <li><a href="#what-is-invisalign-first" style={{ color: '#0284c7', textDecoration: 'none' }}>1. What Is Invisalign First for Kids?</a></li>
                  <li><a href="#how-invisalign-works" style={{ color: '#0284c7', textDecoration: 'none' }}>2. How Does Invisalign Treatment Work for Children?</a></li>
                  <li><a href="#benefits" style={{ color: '#0284c7', textDecoration: 'none' }}>3. Benefits of Invisalign for Children</a></li>
                  <li><a href="#suitable-candidate" style={{ color: '#0284c7', textDecoration: 'none' }}>4. Who Is a Suitable Candidate for Invisalign First?</a></li>
                  <li><a href="#common-challenges" style={{ color: '#0284c7', textDecoration: 'none' }}>5. Common Challenges Parents Should Know</a></li>
                  <li><a href="#cost" style={{ color: '#0284c7', textDecoration: 'none' }}>6. How Much Does Invisalign First Cost in Hyderabad?</a></li>
                  <li><a href="#why-experienced-professional" style={{ color: '#0284c7', textDecoration: 'none' }}>7. Why Does Choosing an Experienced Dental Professional Matter?</a></li>
                  <li><a href="#faqs" style={{ color: '#0284c7', textDecoration: 'none' }}>8. Frequently Asked Questions About Invisalign for Kids</a></li>
                  <li><a href="#why-simply-smilez" style={{ color: '#0284c7', textDecoration: 'none' }}>9. Why Choose Simply Smilez Dental for Invisalign First in Hyderabad?</a></li>
                  <li><a href="#conclusion" style={{ color: '#0284c7', textDecoration: 'none' }}>10. Conclusion</a></li>
                </ul>
              </div>

              {/* Section 1 */}
              <section id="what-is-invisalign-first" className="mb-5">
                <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>
                  1. What Is Invisalign First for Kids?
                </h2>
                
                {/* Callout Box */}
                <div className="p-3 mb-4 rounded" style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0284c7' }}>
                  <p className="mb-0" style={{ color: '#0369a1', fontSize: '15px', lineHeight: '1.7' }}>
                    <strong>Overview:</strong> Invisalign First is a clear aligner treatment designed for children with developing teeth, particularly those in the mixed-dentition stage, when baby teeth and permanent teeth are both present.
                  </p>
                </div>

                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Unlike traditional braces, Invisalign First uses a series of custom-made, transparent plastic aligners to guide selected tooth movements and address certain developing orthodontic concerns.
                </p>

                <p className="text-left mb-2 font-weight-bold" style={{ color: '#0b2545' }}>
                  It may help manage:
                </p>
                <ul className="pl-4 mb-3" style={{ lineHeight: '1.85', color: '#334155' }}>
                  <li>Crowded or crooked teeth.</li>
                  <li>Gaps between teeth.</li>
                  <li>Certain bite alignment problems.</li>
                  <li>Selected dental arch development concerns.</li>
                </ul>

                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Not every child needs early orthodontic treatment. A qualified orthodontist must evaluate the child&apos;s teeth, jaw development, and overall dental condition before recommending Invisalign First.
                </p>
              </section>

              {/* Section 2 */}
              <section id="how-invisalign-works" className="mb-5">
                <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>
                  2. How Does Invisalign Treatment Work for Children?
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  The Invisalign First process involves several stages, with treatment customized to the child&apos;s dental development:
                </p>

                <div className="pl-0 my-3">
                  <div className="p-3 mb-3 rounded border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                    <h5 className="font-weight-bold mb-1" style={{ color: '#0284c7', fontSize: '16px' }}>
                      1. Initial consultation
                    </h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                      The dentist or orthodontist examines the child&apos;s teeth and discusses the parent&apos;s concerns.
                    </p>
                  </div>

                  <div className="p-3 mb-3 rounded border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                    <h5 className="font-weight-bold mb-1" style={{ color: '#0284c7', fontSize: '16px' }}>
                      2. Digital assessment
                    </h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                      Dental scans, photographs, and other diagnostic records may be taken when necessary for accurate 3D planning.
                    </p>
                  </div>

                  <div className="p-3 mb-3 rounded border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                    <h5 className="font-weight-bold mb-1" style={{ color: '#0284c7', fontSize: '16px' }}>
                      3. Customized treatment planning
                    </h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                      A digital treatment plan is developed to address the child&apos;s specific orthodontic concerns systematically.
                    </p>
                  </div>

                  <div className="p-3 mb-3 rounded border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                    <h5 className="font-weight-bold mb-1" style={{ color: '#0284c7', fontSize: '16px' }}>
                      4. Aligner fitting
                    </h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                      Custom-made clear aligners are provided with instructions for wearing and maintaining them comfortably.
                    </p>
                  </div>

                  <div className="p-3 mb-3 rounded border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                    <h5 className="font-weight-bold mb-1" style={{ color: '#0284c7', fontSize: '16px' }}>
                      5. Regular monitoring
                    </h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                      Follow-up appointments help the orthodontist track progress and make adjustments when required.
                    </p>
                  </div>
                </div>

                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Children must wear their aligners consistently according to their orthodontist&apos;s instructions. Parents should also supervise younger children to ensure the aligners are cleaned properly and stored safely.
                </p>
              </section>

              {/* Section 3 */}
              <section id="benefits" className="mb-5">
                <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>
                  3. Benefits of Invisalign for Children
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Many parents consider Invisalign First because it offers an alternative to conventional fixed braces. Some important benefits include:
                </p>

                <div className="pl-0">
                  <div className="d-flex align-items-start mb-3">
                    <div className="mr-3" style={{ color: '#0284c7', fontSize: '18px', marginRight: '12px', marginTop: '2px' }}>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                      <strong style={{ color: '#0b2545' }}>Nearly invisible appearance:</strong> Transparent aligners are less noticeable, which can help children feel more comfortable about their smiles.
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="mr-3" style={{ color: '#0284c7', fontSize: '18px', marginRight: '12px', marginTop: '2px' }}>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                      <strong style={{ color: '#0b2545' }}>Removable design:</strong> Children can remove aligners while eating, brushing, and flossing.
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="mr-3" style={{ color: '#0284c7', fontSize: '18px', marginRight: '12px', marginTop: '2px' }}>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                      <strong style={{ color: '#0b2545' }}>Better cleaning access:</strong> Since the aligners are removable, children can maintain their regular brushing and flossing routines without bracket traps.
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="mr-3" style={{ color: '#0284c7', fontSize: '18px', marginRight: '12px', marginTop: '2px' }}>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                      <strong style={{ color: '#0b2545' }}>No metal brackets or wires:</strong> The smooth aligners avoid many of the common irritations associated with traditional braces.
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="mr-3" style={{ color: '#0284c7', fontSize: '18px', marginRight: '12px', marginTop: '2px' }}>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                      <strong style={{ color: '#0b2545' }}>Customized treatment:</strong> Each treatment plan is designed around the child&apos;s individual dental development.
                    </div>
                  </div>
                </div>

                <div className="p-3 mt-3 rounded" style={{ backgroundColor: '#fffbeb', borderLeft: '4px solid #f59e0b' }}>
                  <p className="mb-0" style={{ color: '#92400e', fontSize: '14.5px', lineHeight: '1.6' }}>
                    <strong>Note:</strong> However, removable aligners require responsibility. Children who frequently forget to wear them may not achieve the expected treatment progress.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="suitable-candidate" className="mb-5">
                <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>
                  4. Who Is a Suitable Candidate for Invisalign First?
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  <Link to="/services/invisalign-first-kids-hyderabad" style={{ color: '#0284c7', fontWeight: 600 }}>
                    Invisalign First
                  </Link>{' '}
                  is generally designed for eligible children around 6–10 years old, although suitability depends more on dental development than age alone.
                </p>

                <p className="text-left mb-2 font-weight-bold" style={{ color: '#0b2545' }}>
                  Your child may benefit from an orthodontic evaluation if you notice:
                </p>
                <ul className="pl-4 mb-3" style={{ lineHeight: '1.85', color: '#334155' }}>
                  <li>Overlapping or crowded teeth.</li>
                  <li>Unusual gaps between teeth.</li>
                  <li>Difficulty biting or chewing.</li>
                  <li>Upper and lower teeth that do not meet properly.</li>
                  <li>Concerns about how permanent teeth are emerging.</li>
                </ul>

                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  The American Association of Orthodontists recommends that children have their first orthodontic check-up no later than age seven. This does not mean every child needs braces or aligners at that age. Some children simply need monitoring as they grow.
                </p>
              </section>

              {/* Section 5 */}
              <section id="common-challenges" className="mb-5">
                <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>
                  5. Common Challenges Parents Should Know
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Although Invisalign First offers several advantages, parents should understand its limitations before choosing treatment:
                </p>

                <ul className="pl-4 mb-3" style={{ lineHeight: '1.85', color: '#334155' }}>
                  <li><strong>Consistent wear:</strong> Children must follow the prescribed daily wear schedule (typically 20–22 hours daily).</li>
                  <li><strong>Misplacing aligners:</strong> Removable aligners can be lost if children do not store them properly in their protective case.</li>
                  <li><strong>Cleaning requirements:</strong> Aligners need regular cleaning to maintain hygiene and prevent plaque buildup.</li>
                  <li><strong>Treatment suitability:</strong> Some complex orthodontic problems may require traditional braces or other appliances.</li>
                  <li><strong>Regular appointments:</strong> Professional monitoring is essential to evaluate progress and guide jaw development.</li>
                </ul>

                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Discussing these concerns during the initial consultation helps parents make an informed decision.
                </p>
              </section>

              {/* Section 6 */}
              <section id="cost" className="mb-5">
                <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>
                  6. How Much Does Invisalign First Cost in Hyderabad?
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  The cost of Invisalign First in Hyderabad varies depending on the child&apos;s orthodontic condition, treatment complexity, and duration.
                </p>

                <div className="p-4 rounded-lg my-3" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <h5 className="font-weight-bold mb-3" style={{ color: '#0b2545' }}>
                    <i className="fa-solid fa-file-invoice-dollar mr-2 text-primary" style={{ marginRight: '8px' }}></i> Factors that influence the overall cost include:
                  </h5>
                  <ul className="mb-0 pl-4" style={{ lineHeight: '1.85', color: '#334155' }}>
                    <li>Number of aligners required.</li>
                    <li>Complexity of tooth alignment and bite correction.</li>
                    <li>Diagnostic scans and treatment planning.</li>
                    <li>Additional orthodontic appliances, if needed.</li>
                    <li>Follow-up appointments and retention requirements.</li>
                  </ul>
                </div>

                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Rather than choosing a clinic based only on the lowest quoted price, ask for a complete treatment estimate. Confirm whether aligners, reviews, retainers, and additional procedures are included.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  For an accurate estimate, parents can arrange an orthodontic consultation with Simply Smilez Dental in Shaikpet, Hyderabad.
                </p>
              </section>

              {/* Section 7 */}
              <section id="why-experienced-professional" className="mb-5">
                <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>
                  7. Why Does Choosing an Experienced Dental Professional Matter?
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Children&apos;s teeth and jaws are continuously developing. Therefore, orthodontic treatment requires careful evaluation and appropriate timing.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  An experienced orthodontist can identify developing alignment problems, assess whether early treatment is necessary, and recommend the most suitable solution.
                </p>

                <p className="text-left mb-2 font-weight-bold" style={{ color: '#0b2545' }}>
                  When choosing a clinic, look for:
                </p>
                <ul className="pl-4 mb-3" style={{ lineHeight: '1.85', color: '#334155' }}>
                  <li>Experience in treating children and growing smiles.</li>
                  <li>Appropriate orthodontic qualifications.</li>
                  <li>Invisalign provider credentials.</li>
                  <li>Clear explanations of treatment options.</li>
                  <li>Regular progress monitoring.</li>
                  <li>Transparent pricing and follow-up arrangements.</li>
                </ul>

                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Remember, Invisalign is not automatically the best option for every child. The right treatment is the one that addresses the child&apos;s specific dental needs safely and effectively.
                </p>
              </section>

              {/* Section 8: FAQs Accordion */}
              <section id="faqs" className="mb-5">
                <h2 className="h4 font-weight-bold mb-4 text-left" style={{ color: '#0b2545' }}>
                  8. Frequently Asked Questions About Invisalign for Kids
                </h2>

                <div className="accordion" id="pediatricInvisalignAccordion">
                  {faqs.map((item) => {
                    const isOpen = openFaqId === item.id;
                    return (
                      <div
                        key={item.id}
                        className="card mb-3 border"
                        style={{
                          borderRadius: '10px',
                          overflow: 'hidden',
                          borderColor: isOpen ? '#0284c7' : '#e2e8f0'
                        }}
                      >
                        <div className="card-header p-0 bg-white border-0" id={`heading-${item.id}`}>
                          <button
                            type="button"
                            className="btn btn-link text-left w-100 p-3 d-flex justify-content-between align-items-center"
                            style={{
                              textDecoration: 'none',
                              color: isOpen ? '#0284c7' : '#0b2545',
                              fontWeight: 600,
                              fontSize: '15px'
                            }}
                            onClick={() => toggleFaq(item.id)}
                            aria-expanded={isOpen}
                          >
                            <span className="d-flex align-items-start pr-2">
                              <i className="fa-solid fa-circle-question mr-2 mt-1" style={{ color: '#0284c7', marginRight: '10px', flexShrink: 0 }}></i>
                              <span>{item.question}</span>
                            </span>
                            <i
                              className="fa-solid fa-chevron-down text-muted"
                              style={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.25s ease',
                                flexShrink: 0,
                                marginLeft: '12px'
                              }}
                            ></i>
                          </button>
                        </div>
                        {isOpen && (
                          <div className="card-body text-muted px-4 py-3 border-top" style={{ fontSize: '14.5px', lineHeight: 1.7, backgroundColor: '#fbfcfd' }}>
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section 9 */}
              <section id="why-simply-smilez" className="mb-5">
                <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>
                  9. Why Choose Simply Smilez Dental for Invisalign First in Hyderabad?
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  If you are searching for pediatric dentists who offer Invisalign treatment in Hyderabad, Simply Smilez Dental is worth considering.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Located in Shaikpet, Simply Smilez Dental provides pediatric dental care and orthodontic services, including Invisalign First for eligible children.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  The clinical team includes{' '}
                  <Link to="/doctor/dr-susheel-kumar" style={{ color: '#0284c7', fontWeight: 600 }}>
                    Dr. Susheel Kumar
                  </Link>, MDS Pediatric Dentist, and{' '}
                  <Link to="/doctor/dr-ankush-kumar" style={{ color: '#0284c7', fontWeight: 600 }}>
                    Dr. Ankush Kumar
                  </Link>, MDS Orthodontist and Certified Invisalign Provider.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Parents can discuss their child&apos;s developing teeth, alignment concerns, and treatment possibilities with the dental team. The clinic emphasizes individualized treatment planning and professional guidance to help families understand their options.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Whether your child has crowded teeth, spacing concerns, or developing bite problems, you can enquire about an Invisalign First consultation.
                </p>

                <div className="mt-3">
                  <Link to="/services/invisalign-first-kids-hyderabad" className="btn btn-primary font-weight-bold px-4 py-2" style={{ borderRadius: '25px', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', border: 'none' }}>
                    Book a consultation: Simply Smilez Dental – Invisalign First for Kids <i className="fa-solid fa-arrow-right ml-1" style={{ marginLeft: '6px' }}></i>
                  </Link>
                </div>
              </section>

              {/* Section 10 */}
              <section id="conclusion" className="p-4 mb-4 rounded-lg text-left" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px' }}>
                <h3 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>10. Conclusion</h3>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Finding the right pediatric dentist or orthodontist for your child&apos;s Invisalign treatment starts with understanding their individual dental needs. Invisalign First offers a discreet and removable orthodontic option for eligible growing children, but professional evaluation is essential before starting treatment.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  If you are looking for pediatric dentists who offer Invisalign treatment in Hyderabad,{' '}
                  <Link to="/" style={{ color: '#0284c7', fontWeight: 600 }}>
                    Simply Smilez Dental in Shaikpet
                  </Link>{' '}
                  provides Invisalign First consultations for children.
                </p>
                <p className="text-left mb-0" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Schedule a consultation to understand your child&apos;s orthodontic needs and explore the right treatment options for a healthier, more confident smile.
                </p>
              </section>

              {/* Clinic Contact CTA Box */}
              <div className="bg-light p-4 rounded text-left border my-4" style={{ borderRadius: '14px' }}>
                <h3 className="h4 font-weight-bold text-left mb-3" style={{ color: '#0d3b66' }}>
                  Schedule Your Child&apos;s Invisalign Consultation
                </h3>
                <p className="text-left mb-3 text-muted">
                  Book an early orthodontic assessment at Simply Smilez Dental Clinic in Shaikpet with Dr. Susheel Kumar (MDS Pediatric Dentist) and Dr. Ankush Kumar (MDS Orthodontist).
                </p>
                <div className="text-left">
                  <p className="mb-1 text-left"><strong>Simply Smilez Dental Clinic</strong></p>
                  <p className="mb-1 text-left text-muted">P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008</p>
                  <p className="mb-1 text-left">Opening hours: Monday&ndash;Saturday, 10:00 AM&ndash;8:30 PM; Sunday, 10:30 AM&ndash;1:00 PM.</p>
                  <p className="mb-1 text-left">Phone: <a href="tel:+917799376656" style={{ color: '#0284c7', fontWeight: 600 }}>+91 77993 76656</a> / <a href="tel:+919603338904" style={{ color: '#0284c7', fontWeight: 600 }}>+91 96033 38904</a></p>
                  <p className="mb-3 text-left">Email: <a href="mailto:info.invisaligndental@gmail.com" style={{ color: '#0284c7' }}>info.invisaligndental@gmail.com</a></p>
                  <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
                    <Link to="/contact" className="btn btn-primary px-4 py-2 font-weight-bold" style={{ borderRadius: '25px', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', border: 'none' }}>
                      Book Consultation
                    </Link>
                    <a
                      href="https://wa.me/917799376656?text=Hi,%20I%20would%20like%20to%20enquire%20about%20Invisalign%20First%20for%20my%20child%20at%20Simply%20Smilez%20Dental."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success px-4 py-2 font-weight-bold"
                      style={{ borderRadius: '25px' }}
                    >
                      <i className="fa-brands fa-whatsapp mr-1" style={{ marginRight: '6px' }}></i> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4 col-md-12 mt-4 mt-lg-0 text-left">
            <div className="sticky-top" style={{ top: 100 }}>
              {/* Doctor 1 Card - Dr. Susheel */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img src="/images/susheel2.webp" className="card-img-top" alt="Dr. Susheel Kumar Pediatric Dentist Hyderabad" />
                <div className="card-body text-left p-4">
                  <span className="badge badge-primary px-2 py-1 mb-2" style={{ backgroundColor: '#e0f2fe', color: '#0284c7', fontSize: '12px' }}>
                    Pediatric Dentist
                  </span>
                  <h4 className="card-title font-weight-bold mb-1 text-left" style={{ color: '#0b2545' }}>Dr. Susheel Kumar</h4>
                  <p className="card-text text-muted mb-3 text-left" style={{ fontSize: '14px' }}>
                    BDS, MDS in Pediatric &amp; Preventive Dentistry. Expert in child dental development, gentle preventive care, and early alignment monitoring.
                  </p>
                  <Link to="/doctor/dr-susheel-kumar" className="btn btn-outline-primary btn-block font-weight-bold" style={{ borderRadius: '25px', fontSize: '14px' }}>
                    View Profile
                  </Link>
                </div>
              </div>

              {/* Doctor 2 Card - Dr. Ankush */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img src="/images/ankush.webp" className="card-img-top" alt="Dr. Ankush Kumar MDS Orthodontist Hyderabad" />
                <div className="card-body text-left p-4">
                  <span className="badge badge-primary px-2 py-1 mb-2" style={{ backgroundColor: '#e0f2fe', color: '#0284c7', fontSize: '12px' }}>
                    Orthodontist &amp; Invisalign Specialist
                  </span>
                  <h4 className="card-title font-weight-bold mb-1 text-left" style={{ color: '#0b2545' }}>Dr. Ankush Kumar</h4>
                  <p className="card-text text-muted mb-3 text-left" style={{ fontSize: '14px' }}>
                    BDS, MDS Orthodontics &amp; Dentofacial Orthopedics. Certified Invisalign Provider specializing in clear aligner treatment for children and adults.
                  </p>
                  <Link to="/doctor/dr-ankush-kumar" className="btn btn-outline-primary btn-block font-weight-bold" style={{ borderRadius: '25px', fontSize: '14px' }}>
                    View Profile
                  </Link>
                </div>
              </div>

              {/* Service Card */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img src="/images/pediatric-dentists-invisalign-treatment-hyderabad.webp" className="card-img-top" alt="Invisalign First for Kids in Hyderabad" />
                <div className="card-body text-left p-4">
                  <h5 className="card-title font-weight-bold mb-2 text-left" style={{ color: '#0b2545' }}>Invisalign First for Kids</h5>
                  <p className="card-text text-muted text-left" style={{ fontSize: '14px' }}>
                    Designed specifically for growing arches, mixed dentition, and expanding smiles comfortably without wires.
                  </p>
                  <Link to="/services/invisalign-first-kids-hyderabad" className="btn btn-primary btn-block font-weight-bold" style={{ borderRadius: '25px', fontSize: '14px', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', border: 'none' }}>
                    Explore Invisalign First
                  </Link>
                </div>
              </div>

              {/* Clinic Info Box */}
              <div className="p-4 rounded shadow-sm text-left text-white" style={{ background: 'linear-gradient(135deg, #0b2545 0%, #134e7c 100%)', borderRadius: '16px' }}>
                <h5 className="text-white font-weight-bold mb-3 text-left">Simply Smilez Dental Clinic</h5>
                <p className="mb-3 text-left" style={{ fontSize: '14px', color: '#cbd5e1' }}>
                  <i className="fa-solid fa-location-dot mr-2 text-warning" style={{ marginRight: '8px' }}></i>
                  <a href="https://maps.app.goo.gl/wvkijcKcuaGCoHTq9" target="_blank" rel="noopener noreferrer" className="text-white" style={{ textDecoration: 'none' }}>
                    P.V. Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet, Hyderabad, 500008
                  </a>
                </p>
                <p className="mb-3 text-left font-weight-bold" style={{ fontSize: '1.05rem' }}>
                  <i className="fa-solid fa-phone mr-2 text-warning" style={{ marginRight: '8px' }}></i>
                  <a href="tel:+917799376656" className="text-white">+91 77993 76656</a> / <a href="tel:+919603338904" className="text-white">+91 96033 38904</a>
                </p>
                <p className="mb-3 text-left" style={{ fontSize: '13.5px', color: '#cbd5e1' }}>
                  <i className="fa-regular fa-clock mr-2 text-warning" style={{ marginRight: '8px' }}></i>
                  Mon &ndash; Sat: 10:00am &ndash; 8:30pm<br />
                  <span style={{ paddingLeft: '22px' }}>Sun: 10:30am &ndash; 1:00pm</span>
                </p>
                <Link to="/contact" className="btn btn-warning btn-block font-weight-bold text-dark" style={{ borderRadius: '25px', fontSize: '14px' }}>
                  Book Appointment Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

