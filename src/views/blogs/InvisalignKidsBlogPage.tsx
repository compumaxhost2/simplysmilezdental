'use client';

import React, { useEffect, useState } from 'react';
import Link from '../../components/Link';

export default function InvisalignKidsBlogPage() {
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
      question: "Are Invisalign aligners suitable for all children?",
      answer: "No. Suitability depends on dental development, bite concerns, the complexity of the orthodontic problem, and the child's ability to wear the aligners consistently. Some children may benefit from Invisalign First, while others may need braces or another appliance. A professional assessment is necessary before choosing treatment."
    },
    {
      id: 2,
      question: "How many hours a day should children wear Invisalign aligners?",
      answer: "Children are generally instructed to wear their aligners for around 20–22 hours daily, according to their individual treatment plan. They remove them for meals and oral hygiene. Consistent wear and regular dental reviews help keep treatment progressing as intended."
    },
    {
      id: 3,
      question: "Are Invisalign aligners better than braces for kids?",
      answer: "Neither option is best for every child. Clear aligners are removable and discreet, while traditional braces may be more appropriate for certain complex tooth movements. A dental professional can explain the advantages and limitations of each option based on the child's needs."
    },
    {
      id: 4,
      question: "How much does Invisalign for kids cost in Hyderabad?",
      answer: "The cost depends on the complexity of treatment, the number of aligners required, treatment duration, and follow-up care. Parents should request an individualized estimate and check whether retainers, replacement aligners, and additional appointments are included."
    },
    {
      id: 5,
      question: "What is the best age for a child to see an orthodontist?",
      answer: "The American Association of Orthodontists recommends an initial orthodontic check-up by age seven. This allows developing concerns to be identified early. It does not mean every child needs treatment at that age."
    },
    {
      id: 6,
      question: "Can children eat while wearing Invisalign aligners?",
      answer: "Aligners are generally removed before meals. Children should follow their dental professional's instructions for drinking, cleaning their teeth, and reinserting the trays. Good hygiene helps reduce the risk of tooth decay during treatment."
    },
    {
      id: 7,
      question: "How do I arrange a consultation with Dr. Susheel Kumar?",
      answer: "Contact the clinic directly to confirm its location, appointment availability, and the orthodontic services offered. During the consultation, ask whether clear aligners are suitable for your child and what alternatives may be available."
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
              <li className="breadcrumb-item active text-truncate" aria-current="page" style={{ maxWidth: '300px', color: '#475569' }}>
                Invisalign Aligners for Kids
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
                Pediatric Orthodontics &amp; Clear Aligners
              </span>

              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: '#0b2545', lineHeight: 1.3 }}>
                Invisalign Aligners for Kids in Hyderabad: Benefits, Right Age, and Expert Care by Dr. Susheel Kumar
              </h1>

              {/* Author & Meta Bar */}
              <div className="d-flex flex-wrap align-items-center text-muted mb-4 pb-3 border-bottom" style={{ fontSize: '14px', gap: '16px' }}>
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-user-doctor text-primary mr-2" style={{ marginRight: '6px' }}></i>
                  <span>By <strong><Link to="/doctor/dr-susheel-kumar" style={{ color: '#0b2545', textDecoration: 'none' }}>Dr. Susheel Kumar</Link></strong></span>
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
                  src="/images/invisalign-aligners-for-kids-hyderabad.jpg"
                  alt="Invisalign clear aligners for children in Hyderabad"
                  className="img-fluid w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>

              {/* Introduction */}
              <div className="lead mb-4 text-left" style={{ color: '#334155', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <p>
                  Are you wondering whether your child needs braces but would prefer a less noticeable alternative?{' '}
                  <Link to="/services/braces" style={{ color: '#0284c7', fontWeight: 600 }}>
                    Invisalign aligners for kids in Hyderabad
                  </Link>{' '}
                  may be an option for children who need orthodontic treatment and can follow their dentist&apos;s instructions consistently. These transparent, removable trays gradually move teeth into planned positions while allowing children to eat and clean their teeth without working around fixed brackets.
                </p>
                <p>
                  However, clear aligners are not suitable for every child. Age, dental development, bite problems, and treatment goals all influence the right approach. Consulting{' '}
                  <Link to="/doctor/dr-susheel-kumar" style={{ color: '#0284c7', fontWeight: 600 }}>
                    Dr. Susheel Kumar
                  </Link>{' '}
                  can help parents explore appropriate orthodontic options for their child&apos;s developing smile.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="p-4 mb-4 rounded-lg text-left" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <h5 className="font-weight-bold mb-3" style={{ color: '#0b2545', fontSize: '17px' }}>
                  <i className="fa-solid fa-list-ul mr-2" style={{ color: '#0284c7', marginRight: '8px' }}></i> Table of Contents
                </h5>
                <ul className="mb-0 pl-3" style={{ listStyleType: 'disc', lineHeight: '1.9' }}>
                  <li><a href="#what-are-aligners" style={{ color: '#0284c7', textDecoration: 'none' }}>What are Invisalign aligners for kids?</a></li>
                  <li><a href="#how-treatment-works" style={{ color: '#0284c7', textDecoration: 'none' }}>How does Invisalign treatment work?</a></li>
                  <li><a href="#benefits" style={{ color: '#0284c7', textDecoration: 'none' }}>Benefits of clear aligners for children</a></li>
                  <li><a href="#right-age" style={{ color: '#0284c7', textDecoration: 'none' }}>What is the right age to start?</a></li>
                  <li><a href="#challenges-cost" style={{ color: '#0284c7', textDecoration: 'none' }}>Common challenges and cost considerations</a></li>
                  <li><a href="#why-professional-care" style={{ color: '#0284c7', textDecoration: 'none' }}>Why professional dental care matters</a></li>
                  <li><a href="#expert-care" style={{ color: '#0284c7', textDecoration: 'none' }}>Expert care by Dr. Susheel Kumar</a></li>
                  <li><a href="#faqs" style={{ color: '#0284c7', textDecoration: 'none' }}>Frequently asked questions</a></li>
                </ul>
              </div>

              {/* Section 1 */}
              <section id="what-are-aligners" className="mb-4">
                <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: '#0b2545' }}>
                  What Are Invisalign Aligners for Kids?
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Invisalign aligners are custom-made, transparent plastic trays designed to move teeth gradually. <strong>Invisalign First</strong> is a specific treatment system developed for certain children whose teeth and jaws are still developing.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  These aligners may help address concerns such as dental crowding, spacing, and selected arch-development problems. Unlike traditional braces, they can be removed for eating, brushing, and flossing.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  A dental examination is essential to determine whether a child&apos;s orthodontic needs can be treated effectively with clear aligners or whether braces or another appliance would be more appropriate.
                </p>
              </section>

              {/* Section 2 */}
              <section id="how-treatment-works" className="mb-4">
                <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: '#0b2545' }}>
                  How Does Invisalign Treatment Work?
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Kids&apos; Invisalign treatment follows a personalized process:
                </p>
                <div className="pl-3 mb-3 border-left" style={{ borderLeft: '3px solid #0284c7' }}>
                  <ul className="pl-3 mb-0" style={{ lineHeight: '1.85', color: '#334155' }}>
                    <li><strong>Initial assessment:</strong> The dentist examines the child&apos;s teeth, bite, and dental development.</li>
                    <li><strong>Treatment planning:</strong> Digital scans, photographs, or X-rays may be used when clinically appropriate.</li>
                    <li><strong>Customized aligners:</strong> A series of trays is created according to the treatment plan.</li>
                    <li><strong>Daily wear:</strong> The child wears the aligners for the prescribed number of hours, typically around 20–22 hours daily.</li>
                    <li><strong>Progress reviews:</strong> Regular appointments help the dental professional monitor tooth movement and make adjustments when needed.</li>
                    <li><strong>Retention:</strong> After active treatment, retainers may be recommended to help maintain the results.</li>
                  </ul>
                </div>
                <p className="text-left text-muted" style={{ fontStyle: 'italic', fontSize: '15px' }}>
                  Treatment duration varies depending on the complexity of the case, the child&apos;s growth, and how consistently the aligners are worn.
                </p>
              </section>

              {/* Section 3 */}
              <section id="benefits" className="mb-4">
                <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: '#0b2545' }}>
                  Benefits of Invisalign Aligners for Children
                </h2>

                <div className="mb-3">
                  <h3 className="h5 font-weight-bold text-dark text-left">1. A discreet appearance</h3>
                  <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                    Clear aligners are less noticeable than traditional metal braces. This can appeal to children who feel self-conscious about wearing visible orthodontic appliances at school or during social activities.
                  </p>
                </div>

                <div className="mb-3">
                  <h3 className="h5 font-weight-bold text-dark text-left">2. Convenient oral hygiene</h3>
                  <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                    Because aligners are removable, children can brush and floss their teeth without navigating around brackets and wires. Parents should still supervise daily oral hygiene to help prevent cavities and gum problems.
                  </p>
                </div>

                <div className="mb-3">
                  <h3 className="h5 font-weight-bold text-dark text-left">3. Fewer food restrictions</h3>
                  <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                    Children remove their aligners before eating, so they generally have fewer appliance-related food restrictions than children with fixed braces. They should follow their provider&apos;s instructions about drinking with aligners in place and clean their teeth before reinserting them.
                  </p>
                </div>

                <div className="mb-3">
                  <h3 className="h5 font-weight-bold text-dark text-left">4. No metal brackets or wires</h3>
                  <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                    Clear aligners do not use the conventional brackets and wires found in traditional braces. This can avoid some irritation associated with wires or brackets rubbing against the inside of the mouth.
                  </p>
                </div>

                <div className="mb-3">
                  <h3 className="h5 font-weight-bold text-dark text-left">5. Personalized treatment planning</h3>
                  <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                    The aligners are designed around an individual treatment plan. Regular monitoring helps the dental professional assess progress and determine whether the planned approach remains suitable.
                  </p>
                </div>

                <div className="alert alert-info text-left border-0 rounded-lg p-3" style={{ backgroundColor: '#f0f9ff', color: '#0369a1' }}>
                  <i className="fa-solid fa-circle-info mr-2" style={{ marginRight: '6px' }}></i>
                  These benefits do not mean Invisalign is always the best option. The appropriate treatment depends on each child&apos;s dental condition and ability to follow instructions.
                </div>
              </section>

              {/* Section 4 */}
              <section id="right-age" className="mb-4">
                <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: '#0b2545' }}>
                  What Is the Right Age for Invisalign for Kids?
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Invisalign First is designed for certain children, generally around <strong>6–10 years old</strong>, who may benefit from early orthodontic treatment. However, chronological age alone does not determine whether treatment should begin.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  The <strong>American Association of Orthodontists</strong> recommends an initial orthodontic check-up by <strong>age seven</strong>. At this stage, a professional can assess how permanent teeth are emerging and whether any bite or jaw-development concerns need attention.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  An early check-up does not automatically mean a child needs aligners or braces. Some children benefit from early intervention, while others may simply need periodic monitoring until the appropriate time for treatment.
                </p>
                <p className="text-left font-weight-bold" style={{ color: '#0b2545' }}>
                  Parents should consider an assessment if they notice crowded teeth, an uneven bite, significant spacing, or difficulty biting or chewing.
                </p>
              </section>

              {/* Section 5 */}
              <section id="challenges-cost" className="mb-4">
                <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: '#0b2545' }}>
                  Common Challenges and Cost Considerations
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Clear aligners require consistency. Children who frequently remove them, forget to put them back after meals, or lose their trays may experience delays in treatment. Parents can help by establishing a routine for wearing, cleaning, and storing aligners.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  The cost of Invisalign aligners for kids in Hyderabad varies according to treatment complexity, the number of aligners, the expected duration, and follow-up requirements. The type of appliance and any additional procedures can also affect the overall fee.
                </p>
                <div className="p-3 mb-3 bg-light rounded text-left border">
                  <p className="mb-0 text-muted" style={{ fontSize: '15px' }}>
                    <i className="fa-solid fa-hand-holding-dollar mr-2 text-primary" style={{ marginRight: '8px' }}></i>
                    Before beginning treatment, ask for a personalized estimate and clarify whether consultations, replacement aligners, refinements, and retainers are included.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="why-professional-care" className="mb-4">
                <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: '#0b2545' }}>
                  Why Professional Dental Care Matters
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Choosing orthodontic treatment based only on appearance or price can overlook important bite and jaw concerns. A qualified dental professional should assess the child&apos;s oral health, explain available treatment options, and monitor progress throughout the process.
                </p>
                <p className="text-left font-weight-bold mb-2" style={{ color: '#0b2545' }}>
                  Parents researching clear aligners for children should ask:
                </p>
                <ul className="pl-4 mb-3" style={{ lineHeight: '1.85', color: '#475569' }}>
                  <li>Is my child a suitable candidate for Invisalign First?</li>
                  <li>Could traditional braces or another appliance provide a better result?</li>
                  <li>How many hours each day must the aligners be worn?</li>
                  <li>How long is treatment likely to take?</li>
                  <li>What follow-up appointments and additional costs should we expect?</li>
                </ul>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  These questions help families make informed decisions based on clinical needs rather than marketing claims.
                </p>
              </section>

              {/* Section 7 */}
              <section id="expert-care" className="mb-4">
                <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: '#0b2545' }}>
                  Expert Care by Dr. Susheel Kumar in Hyderabad
                </h2>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Parents considering Invisalign treatment for children should begin with a professional assessment.{' '}
                  <Link to="/doctor/dr-susheel-kumar" style={{ color: '#0284c7', fontWeight: 600 }}>
                    Dr. Susheel Kumar
                  </Link>{' '}
                  can be consulted to discuss a child&apos;s tooth alignment, understand available orthodontic options, and explore whether clear aligners may be appropriate.
                </p>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  During a consultation, parents can ask about dental development, expected treatment duration, daily wear requirements, costs, and follow-up care. The aim is to understand the available choices and identify an approach suited to the child&apos;s needs.
                </p>
                <p className="text-left text-muted" style={{ fontSize: '14.5px', lineHeight: '1.7' }}>
                  Families researching orthodontic care around <strong>Shaikpet, Manikonda, Kondapur, Jubilee Hills, Gachibowli, Tolichowki, Raidurg, Puppalguda, Film Nagar, Banjara Hills, Mehdipatnam, and Narsingi</strong> can use these considerations when exploring care in Hyderabad. Confirm the clinic&apos;s location and available services directly before arranging an appointment.
                </p>
                <div className="p-3 my-3 rounded" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                  <p className="mb-0 text-success font-weight-bold">
                    Considering Invisalign aligners for your child? Contact Dr. Susheel Kumar to discuss your child&apos;s orthodontic needs and explore suitable treatment options.
                  </p>
                </div>
              </section>

              {/* Section 8: FAQs */}
              <section id="faqs" className="mt-5 mb-5">
                <h2 className="h4 font-weight-bold mb-4 text-left" style={{ color: '#0b2545' }}>
                  Frequently Asked Questions
                </h2>

                <div className="faq-accordion text-left">
                  {faqs.map((item) => {
                    const isOpen = openFaqId === item.id;
                    return (
                      <div key={item.id} className="card mb-3 border-0 shadow-sm rounded-3 overflow-hidden">
                        <div className="card-header bg-white p-0">
                          <button
                            className="btn btn-block text-left font-weight-bold p-3 text-dark d-flex justify-content-between align-items-center w-100 border-0 bg-transparent"
                            type="button"
                            onClick={() => toggleFaq(item.id)}
                            aria-expanded={isOpen}
                            style={{
                              fontSize: '15.5px',
                              color: '#0b2545',
                              textDecoration: 'none',
                              cursor: 'pointer'
                            }}
                          >
                            <span className="text-left pr-2 d-flex align-items-start">
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

              {/* Conclusion Box */}
              <section className="p-4 mb-4 rounded-lg text-left" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px' }}>
                <h3 className="h4 font-weight-bold mb-3 text-left" style={{ color: '#0b2545' }}>Conclusion</h3>
                <p className="text-left" style={{ lineHeight: '1.75', color: '#475569' }}>
                  Invisalign aligners can provide a discreet and removable orthodontic option for selected children. However, the right treatment depends on dental development, bite concerns, oral health, and the child&apos;s ability to follow daily instructions.
                </p>
                <p className="text-left mb-0" style={{ lineHeight: '1.75', color: '#475569' }}>
                  If you are exploring{' '}
                  <Link to="/" style={{ color: '#0284c7', fontWeight: 600 }}>
                    Invisalign aligners for kids in Hyderabad
                  </Link>, arrange a consultation with Dr. Susheel Kumar to discuss your child&apos;s needs and understand the available options. A personalized assessment is the best starting point for making an informed decision about your child&apos;s developing smile.
                </p>
              </section>

              {/* Clinic Contact CTA Box */}
              <div className="bg-light p-4 rounded text-left border my-4" style={{ borderRadius: '14px' }}>
                <h3 className="h4 font-weight-bold text-left mb-3" style={{ color: '#0d3b66' }}>
                  Ready to Discuss Your Child&apos;s Orthodontic Options?
                </h3>
                <p className="text-left mb-3 text-muted">
                  Book a consultation at Simply Smilez Dental Clinic in Shaikpet with Dr. Susheel Kumar to explore Invisalign First, braces, and personalized dental care.
                </p>
                <div className="text-left">
                  <p className="mb-1 text-left"><strong>Simply Smilez Dental Clinic</strong></p>
                  <p className="mb-1 text-left text-muted">P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008</p>
                  <p className="mb-1 text-left">Opening hours: Monday&ndash;Saturday, 10:00 AM&ndash;8:30 PM; Sunday, 10:30 AM&ndash;1:00 PM.</p>
                  <p className="mb-1 text-left">Phone: <a href="tel:+917799376656" style={{ color: '#0284c7', fontWeight: 600 }}>77993 76656</a> / <a href="tel:+919603338904" style={{ color: '#0284c7', fontWeight: 600 }}>96033 38904</a></p>
                  <p className="mb-3 text-left">Email: <a href="mailto:info.invisaligndental@gmail.com" style={{ color: '#0284c7' }}>info.invisaligndental@gmail.com</a></p>
                  <Link to="/contact" className="btn btn-primary px-4 py-2 font-weight-bold" style={{ borderRadius: '25px', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', border: 'none' }}>
                    Book Consultation
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4 col-md-12 mt-4 mt-lg-0 text-left">
            <div className="sticky-top" style={{ top: 100 }}>
              {/* Doctor Card */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img src="/images/susheel2.webp" className="card-img-top" alt="Dr. Susheel Kumar Orthodontist Hyderabad" />
                <div className="card-body text-left p-4">
                  <span className="badge badge-primary px-2 py-1 mb-2" style={{ backgroundColor: '#e0f2fe', color: '#0284c7', fontSize: '12px' }}>
                    Consulting Doctor
                  </span>
                  <h4 className="card-title font-weight-bold mb-1 text-left" style={{ color: '#0b2545' }}>Dr. Susheel Kumar</h4>
                  <p className="card-text text-muted mb-3 text-left" style={{ fontSize: '14px' }}>
                    Specialist in Orthodontics, Braces &amp; Invisalign treatment with advanced digital smile planning.
                  </p>
                  <Link to="/doctor/dr-susheel-kumar" className="btn btn-outline-primary btn-block font-weight-bold" style={{ borderRadius: '25px', fontSize: '14px' }}>
                    View Doctor Profile
                  </Link>
                </div>
              </div>

              {/* Service Card */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img src="/images/braces.webp" className="card-img-top" alt="Braces and Invisalign Aligners in Hyderabad" />
                <div className="card-body text-left p-4">
                  <h5 className="card-title font-weight-bold mb-2 text-left" style={{ color: '#0b2545' }}>Braces &amp; Invisalign</h5>
                  <p className="card-text text-muted text-left" style={{ fontSize: '14px' }}>
                    Discreet orthodontic solutions for kids, teens, and adults designed for comfortable alignment.
                  </p>
                  <Link to="/services/braces" className="btn btn-primary btn-block font-weight-bold" style={{ borderRadius: '25px', fontSize: '14px', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', border: 'none' }}>
                    Explore Braces &amp; Aligners
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
                  <a href="tel:+917799376656" className="text-white">77993 76656</a> / <a href="tel:+919603338904" className="text-white">96033 38904</a>
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
