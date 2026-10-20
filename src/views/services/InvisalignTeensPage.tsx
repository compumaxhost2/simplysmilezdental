'use client';

import React, { useEffect, useState } from 'react';
import Link from '../../components/Link';

const invisalignTeenSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental",
      "url": "https://www.simplysmilezdental.in/",
      "telephone": [
        "+91 77993 76656",
        "+91 96033 38904"
      ],
      "email": "info.invisaligndental@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad#webpage",
      "url": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad",
      "name": "Invisalign for Teens in Hyderabad",
      "description": "Learn about Invisalign for teens in Hyderabad, including clear aligners, eligibility, treatment duration, and cost at Simply Smilez Dental.",
      "inLanguage": "en-IN",
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad#service",
      "name": "Invisalign for Teens in Hyderabad",
      "serviceType": "Clear aligner orthodontic treatment for teenagers",
      "description": "Clear aligner treatment may help suitable teenagers address teeth crowding, gaps, and selected bite alignment concerns. Treatment suitability depends on an individual dental assessment.",
      "url": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "audience": {
        "@type": "PeopleAudience",
        "suggestedMinAge": 13,
        "suggestedMaxAge": 19,
        "audienceType": "Teenagers and their parents or guardians"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad#breadcrumb",
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
          "item": "https://www.simplysmilezdental.in/all-services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Invisalign for Teens in Hyderabad",
          "item": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad#faq",
      "url": "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Invisalign suitable for teenagers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisalign can be suitable for some teenagers, depending on their dental development, tooth alignment, bite, and ability to follow the wear instructions. A dental assessment is needed to determine whether clear aligners are appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "What dental problems can Invisalign for teens correct?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on the case, clear aligners may help address crowded teeth, gaps, and certain bite alignment problems. Suitability depends on the complexity of the tooth movements and an individual orthodontic assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Invisalign for teens cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of Invisalign for teenagers in Hyderabad depends on the complexity of the case, treatment plan, expected duration, and items included in the quotation. Contact Simply Smilez Dental for an assessment and a case-specific estimate."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Invisalign treatment take for teenagers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment duration varies according to the alignment problem, planned tooth movements, and consistency of aligner wear. A clinician can estimate the likely timeline after examining the teenager."
          }
        },
        {
          "@type": "Question",
          "name": "Is Invisalign better than metal braces for teenagers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is best for every teenager. Invisalign offers removable, transparent trays, while traditional braces may be preferable for certain complex tooth movements. The appropriate treatment depends on clinical suitability and the teenager's needs."
          }
        },
        {
          "@type": "Question",
          "name": "Can teenagers remove Invisalign aligners at school?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, clear aligners are removable, but teenagers should follow the treating clinician's wear instructions. They should store aligners safely and maintain the prescribed daily wear time."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my teenager loses an aligner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact the treating clinic for advice rather than automatically switching to another aligner. The appropriate next step depends on the treatment stage and the fit of the remaining aligners."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I enquire about Invisalign for teens in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Simply Smilez Dental Clinic at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad, Telangana 500008, to enquire about an Invisalign consultation for your teenager."
          }
        }
      ]
    }
  ]
};

const teenFaqs = [
  {
    id: 1,
    question: "Is Invisalign suitable for teenagers?",
    answer: "Invisalign can be suitable for some teenagers, depending on their dental development, tooth alignment, bite, and ability to follow the wear instructions. An orthodontic assessment is needed to determine whether clear aligners can address the specific problem or whether traditional braces would be a better option."
  },
  {
    id: 2,
    question: "What dental problems can Invisalign for teens correct?",
    answer: "Depending on the case, clear aligners may help address crowded teeth, gaps, and certain bite-alignment problems. The type and complexity of tooth movement determine whether aligners are appropriate. Some cases need additional orthodontic techniques or conventional braces, so suitability should be assessed individually."
  },
  {
    id: 3,
    question: "How much does Invisalign for teens cost in Hyderabad?",
    answer: "The price depends on the complexity of the case, treatment plan, expected duration, and what is included in the quotation. Contact Simply Smilez Dental for an assessment and a case-specific estimate. Ask whether aligners, review visits, refinements if required, and retainers are included."
  },
  {
    id: 4,
    question: "How long does Invisalign treatment take for teenagers?",
    answer: "Treatment duration varies with the alignment problem, planned tooth movements, and consistency of wear. Your clinician can estimate the likely timeline after examining your teenager. Following the prescribed wear schedule and attending review appointments helps the clinician monitor progress."
  },
  {
    id: 5,
    question: "Is Invisalign better than metal braces for teenagers?",
    answer: "Neither treatment is best for every teenager. Invisalign offers removable, transparent trays, while traditional braces remain fixed and may be preferable for certain complex tooth movements. The right choice depends on clinical suitability, lifestyle, oral hygiene, and the teenager’s ability to follow instructions."
  },
  {
    id: 6,
    question: "Can teenagers remove Invisalign aligners at school?",
    answer: "Yes, clear aligners are removable, but they should only be removed according to the treating clinician’s instructions. Teenagers need to store them safely, clean their teeth before reinserting them when possible, and maintain the prescribed daily wear time. Frequent or prolonged removal can interfere with treatment progress."
  },
  {
    id: 7,
    question: "What happens if my teenager loses an aligner?",
    answer: "Contact the treating clinic for advice rather than automatically moving to the next aligner or returning to an earlier one. The appropriate next step depends on the treatment stage and fit of the remaining aligners. Keeping the previous aligner, if available, may be helpful until the clinician advises you."
  },
  {
    id: 8,
    question: "Where can I enquire about Invisalign for teens in Hyderabad?",
    answer: "You can contact Simply Smilez Dental Clinic at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad. Call +91 77993 76656 or +91 96033 38904 to enquire about an appointment and discuss suitable orthodontic options for your teenager."
  }
];

export default function InvisalignTeensPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    const scriptId = 'invisalign-teens-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(invisalignTeenSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper invisalignpage">
      <div className="container py-5 text-left">
        <div className="row">
          {/* Main Left Content Column */}
          <div className="col-lg-8 col-md-12 text-left">
            <div className="about-us text-left">
              {/* Primary Page Heading */}
              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>
                Invisalign for Teens in Hyderabad | Clear Aligners for Teenagers at Simply Smilez Dental
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <p className="lead text-left">
                Looking for a discreet way to straighten your teenager’s teeth? <Link to="/services/braces" style={{ color: "#0284c7", fontWeight: 600 }}>Invisalign for teens</Link> in Hyderabad offers a clear-aligner option for suitable teenagers who want to improve tooth alignment without conventional metal braces.
              </p>

              <p className="text-left">
                Simply Smilez Dental Clinic in Shaikpet, Hyderabad, provides Invisalign treatment for teenagers and adults. Clear aligners are removable, transparent trays designed to move teeth gradually according to an individualized treatment plan.
              </p>

              <p className="text-left">
                Every teenager’s teeth, bite, and stage of dental development are different. A dental assessment can help determine whether Invisalign is appropriate or whether traditional braces or another orthodontic option would be more suitable.
              </p>

              <p className="text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2 mt-2 mb-3">
                  Book an Invisalign Consultation for Your Teenager
                </Link>
              </p>

              <p className="text-left">
                Contact <Link to="/about" style={{ color: "#0284c7", fontWeight: 600 }}>Simply Smilez Dental</Link> to enquire about treatment suitability and appointment availability.
              </p>

              {/* What Is Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                What Is Invisalign for Teens?
              </h2>
              <p className="text-left">
                <Link to="/" style={{ color: "#0284c7", fontWeight: 600 }}>Invisalign for teens</Link> is an orthodontic treatment that uses a series of custom-made, transparent aligners to gradually move teeth into planned positions. The aligners fit over the teeth and can be removed for eating, drinking anything other than water, brushing, and flossing.
              </p>
              <p className="text-left">
                Teenagers may consider clear aligners to address certain alignment concerns, including crowded teeth, gaps, and selected bite problems. However, not every orthodontic case can be treated with aligners alone.
              </p>
              <p className="text-left">
                An orthodontic assessment helps evaluate tooth position, bite alignment, oral health, and the teenager’s ability to wear and care for the aligners consistently.
              </p>

              {/* How Treatment Works */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                How Does Invisalign Treatment Work for Teenagers?
              </h2>
              <p className="text-left">
                Teen Invisalign treatment generally involves the following stages. The exact process depends on the teenager’s individual needs and the treating clinician’s recommendations.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">1. Orthodontic Consultation</h3>
              <p className="text-left">
                The dentist or orthodontist examines the teenager’s teeth, gums, bite, and orthodontic concerns. The consultation helps determine whether clear aligners are a suitable option.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">2. Treatment Planning</h3>
              <p className="text-left">
                If Invisalign is appropriate, the clinician plans the intended tooth movements and determines the aligner treatment approach. Dental records or digital scans may be taken when clinically indicated.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">3. Custom Aligners</h3>
              <p className="text-left">
                A series of aligners is prepared according to the approved treatment plan. Each aligner is designed to apply controlled pressure to specific teeth.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">4. Wearing the Aligners</h3>
              <p className="text-left">
                The teenager wears the aligners according to the clinician’s instructions and changes to the next set as directed. Consistent wear is essential for treatment to progress as planned.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">5. Follow-Up Appointments</h3>
              <p className="text-left">
                Progress is reviewed during follow-up visits. The clinician checks tooth movement, aligner fit, oral health, and whether adjustments to the treatment plan are needed.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">6. Retention After Treatment</h3>
              <p className="text-left">
                Once active orthodontic treatment is complete, retainers are generally needed to help maintain the new tooth positions. The clinician will advise on the appropriate retention plan.
              </p>

              {/* Benefits Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Benefits of Clear Aligners for Teenagers
              </h2>
              <p className="text-left">
                For teenagers who are suitable candidates, Invisalign can offer several practical benefits:
              </p>
              <ul className="text-left pl-4" style={{ lineHeight: '1.8' }}>
                <li><strong>Clear appearance:</strong> Transparent aligners are generally less noticeable than conventional metal braces.</li>
                <li><strong>Removable design:</strong> Aligners can be removed for meals, brushing, and flossing as instructed.</li>
                <li><strong>Convenient oral hygiene:</strong> Removing the trays allows normal brushing and flossing without working around fixed brackets and wires.</li>
                <li><strong>No fixed brackets or wires:</strong> Clear aligners avoid the brackets and wires used in traditional braces, although temporary pressure or discomfort can still occur.</li>
                <li><strong>Everyday convenience:</strong> Removable aligners may fit into school, social, and extracurricular routines when worn consistently.</li>
                <li><strong>Individualized treatment planning:</strong> Treatment is planned around the teenager’s orthodontic needs.</li>
              </ul>
              <p className="text-left text-muted small">
                <em>Results and suitability vary by case. Clear aligners still require commitment, careful cleaning, and professional monitoring.</em>
              </p>

              {/* Suitability Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Is Invisalign Suitable for My Teenager?
              </h2>
              <p className="text-left">
                Invisalign may be worth discussing if your teenager has alignment concerns that can be managed with an appropriate clear-aligner plan. Eligibility depends on the teeth, bite, dental development, and the movements required.
              </p>
              <p className="text-left mb-2">An assessment may be useful if your teenager has:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>Crowded or overlapping teeth.</li>
                <li>Spaces or gaps between teeth.</li>
                <li>Certain bite-alignment concerns.</li>
                <li>Teeth that have shifted after previous orthodontic treatment.</li>
                <li>A preference for a less noticeable alternative to metal braces.</li>
              </ul>
              <p className="text-left">
                Teenagers also need to be responsible enough to wear their aligners as instructed, keep them clean, and attend follow-up appointments. For adults or younger children in the family, we also offer <Link to="/services/invisalign-hyderabad" style={{ color: "#0284c7" }}>Invisalign for Adults</Link> and <Link to="/services/invisalign-first-kids-hyderabad" style={{ color: "#0284c7" }}>Invisalign First for Kids</Link>.
              </p>
              <div className="alert alert-info border-0 p-3 mb-4" style={{ background: '#f0f9ff', color: '#0369a1' }}>
                <p className="mb-0 text-left">
                  <strong>Important:</strong> Severe or complex bite problems, certain tooth movements, or other dental conditions may make traditional braces or a different treatment approach more appropriate. A clinician should assess each case before recommending treatment.
                </p>
              </div>

              {/* Comparison Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign for Teens vs. Traditional Braces
              </h2>
              <p className="text-left">
                Both clear aligners and traditional braces can help correct tooth alignment. The right choice depends on clinical requirements, lifestyle, and the teenager’s ability to follow treatment instructions.
              </p>

              {/* Responsive Comparison Table */}
              <div className="table-responsive my-4">
                <table className="table table-bordered table-striped" style={{ borderColor: '#e2e8f0' }}>
                  <thead style={{ background: '#094765', color: '#ffffff' }}>
                    <tr>
                      <th scope="col" style={{ width: '22%' }}>Feature</th>
                      <th scope="col" style={{ width: '39%' }}>Invisalign Clear Aligners</th>
                      <th scope="col" style={{ width: '39%' }}>Traditional Braces</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Appearance</strong></td>
                      <td>Transparent trays that are generally less noticeable</td>
                      <td>Metal or ceramic brackets attached to teeth</td>
                    </tr>
                    <tr>
                      <td><strong>Removability</strong></td>
                      <td>Removable for meals and oral hygiene</td>
                      <td>Fixed throughout active treatment</td>
                    </tr>
                    <tr>
                      <td><strong>Daily responsibility</strong></td>
                      <td>Requires consistent wear and careful storage</td>
                      <td>Requires cleaning around brackets and wires</td>
                    </tr>
                    <tr>
                      <td><strong>Food choices</strong></td>
                      <td>Aligners are removed before eating</td>
                      <td>Certain hard or sticky foods may need to be avoided</td>
                    </tr>
                    <tr>
                      <td><strong>Complex tooth movements</strong></td>
                      <td>Suitability depends on the case</td>
                      <td>May be preferable for some complex movements</td>
                    </tr>
                    <tr>
                      <td><strong>Oral hygiene</strong></td>
                      <td>Trays are removed for brushing and flossing</td>
                      <td>Extra care is needed around brackets and wires</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-left">
                Neither option is automatically better for every teenager. An orthodontic assessment can help compare the expected benefits, limitations, treatment duration, and cost of each option.
              </p>

              {/* Cost Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                How Much Does Invisalign for Teens Cost in Hyderabad?
              </h2>
              <p className="text-left">
                The cost of Invisalign for teenagers in Hyderabad depends on the individual treatment plan. There is no single price that applies to every patient.
              </p>
              <p className="text-left mb-2">Factors that may affect the total cost include:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>The complexity of tooth alignment and bite correction.</li>
                <li>The amount of tooth movement required.</li>
                <li>The expected treatment duration.</li>
                <li>The type and scope of aligner treatment recommended.</li>
                <li>The review appointments and additional treatment steps included in the plan.</li>
                <li>Retainers and any other items included in the final quotation.</li>
              </ul>
              <p className="text-left">
                For an accurate estimate, request a consultation and a written breakdown of the proposed treatment cost. Confirm whether the quotation includes records, aligners, follow-up visits, refinements if required, and retainers.
              </p>
              <p className="text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2 mt-1 mb-3">
                  Enquire About Invisalign Cost for Teens
                </Link>
              </p>

              {/* Duration Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                How Long Does Teen Invisalign Treatment Take?
              </h2>
              <p className="text-left">
                The duration of Invisalign treatment for teenagers varies according to the complexity of the case, the amount of movement required, and how consistently the aligners are worn.
              </p>
              <p className="text-left">
                Some cases require less time than others, while more involved tooth or bite movements may take longer. Missed wear time, poorly fitting aligners, or changes to the treatment plan can also affect progress.
              </p>
              <p className="text-left">
                Your clinician can provide an estimated treatment timeline after examining your teenager and planning the required tooth movements. Regular reviews help monitor progress and identify whether the plan needs adjustment.
              </p>

              {/* Tips for Teenagers */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Tips for Teenagers Wearing Clear Aligners
              </h2>
              <p className="text-left">
                Successful treatment depends on following the clinician’s instructions and building consistent daily habits:
              </p>
              <ul className="text-left pl-4" style={{ lineHeight: '1.8' }}>
                <li>Wear the aligners for the number of hours recommended by the treating clinician.</li>
                <li>Remove them before eating and before drinking anything other than water, unless your clinician gives different instructions.</li>
                <li>Brush and floss before putting the aligners back in whenever possible.</li>
                <li>Clean the trays according to the manufacturer&apos;s instructions.</li>
                <li>Store the aligners in their protective case when they are not being worn.</li>
                <li>Avoid wrapping aligners in tissues or leaving them loose in a school bag.</li>
                <li>Attend scheduled review appointments.</li>
                <li>Contact the clinic if an aligner is lost, damaged, or no longer fits properly.</li>
              </ul>
              <p className="text-left">
                Parents or guardians can help teenagers develop a consistent routine, especially during the early stages of treatment.
              </p>

              {/* Why Consider Simply Smilez */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Why Consider Simply Smilez Dental for Teen Invisalign?
              </h2>
              <p className="text-left">
                Simply Smilez Dental Clinic in Shaikpet, Hyderabad, provides dental care for teenagers and adults, including Invisalign and traditional orthodontic options.
              </p>
              <p className="text-left">
                Choosing an orthodontic provider involves more than comparing aligner prices. Parents should understand who will oversee treatment, how progress will be monitored, what the estimated timeline is, and what is included in the quotation. Our experienced team includes <Link to="/doctor/dr-ankush-kumar" style={{ color: "#0284c7", fontWeight: 600 }}>Dr. Ankush Kumar</Link>, MDS Orthodontist and Certified Invisalign Provider.
              </p>
              <p className="text-left">
                During your enquiry, ask about your teenager’s eligibility, available treatment options, follow-up schedule, expected costs, and retention after treatment. These details help you make an informed decision based on your teenager’s needs.
              </p>

              {/* Consultation Details */}
              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign Consultation for Teens in Hyderabad
              </h3>
              <p className="text-left">
                If your teenager is concerned about crowded teeth, gaps, or bite alignment, a professional assessment is a useful first step. The clinician can examine the teeth, discuss your concerns, and explain whether Invisalign, traditional braces, or another approach may be appropriate.
              </p>

              {/* Areas Served List */}
              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Areas We Serve in Hyderabad
              </h3>
              <p className="text-left">
                Families visit Simply Smilez Dental Clinic for teenage orthodontic care from across Hyderabad, including:
              </p>
              <ul className="text-left pl-4 mb-4">
                <li>Shaikpet</li>
                <li>O.U. Colony &amp; Dwaraka Nagar Colony</li>
                <li>Manikonda</li>
                <li>Tolichowki</li>
                <li>Puppalaguda</li>
                <li>Film Nagar</li>
                <li>Jubilee Hills</li>
                <li>Banjara Hills</li>
                <li>Mehdipatnam</li>
                <li>Langar Houz</li>
                <li>Gachibowli</li>
                <li>Narsingi</li>
                <li>Nearby Hyderabad areas</li>
              </ul>

              {/* Explore Other Dental Services (Matching All Service Pages) */}
              <div className="mt-5 pt-4 border-top text-left">
                <h3 className="h4 font-weight-bold mb-3 text-left" style={{ color: "#0d3b66" }}>
                  Explore Other Dental Services
                </h3>
                <p className="text-left mb-4">
                  Simply Smilez Dental Clinic in Shaikpet, Hyderabad offers a full range of comprehensive dental treatments:
                </p>
                <div className="row">
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/braces" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Braces &amp; Orthodontics</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Traditional metal, ceramic braces, and clear aligners for all ages.</p>
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
                    <Link to="/services/microscopic-root-canal" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Microscopic Root Canal Treatment</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Advanced microscope-guided endodontics for precise tooth preservation.</p>
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
                    <Link to="/services/crowns" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Dental Crowns &amp; Bridges</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Custom restorative crowns and caps to protect and strengthen your teeth.</p>
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

              {/* FAQs Accordion Section Matching Existing Pages */}
              <div className="service-faq-container mt-5 mb-4">
                <h3 className="h4 font-weight-bold mb-4 text-left" style={{ color: "#0d3b66" }}>
                  Frequently Asked Questions About Invisalign for Teens
                </h3>
                <div className="accordion faq-service-accordion">
                  {teenFaqs.map((faq) => {
                    const isOpen = openFaqId === faq.id;
                    return (
                      <div key={faq.id} className="card mb-3 border-0 shadow-sm rounded-3 overflow-hidden faq-item-card">
                        <div className="card-header bg-white p-0">
                          <button
                            className="btn btn-block text-left font-weight-bold p-3 text-dark d-flex justify-content-between align-items-center w-100 border-0 bg-transparent"
                            type="button"
                            onClick={() => toggleFaq(faq.id)}
                            aria-expanded={isOpen}
                            style={{
                              fontSize: '16px',
                              color: '#0b2545',
                              textDecoration: 'none',
                              cursor: 'pointer'
                            }}
                          >
                            <span className="text-left pr-2 d-flex align-items-start">
                              <i
                                className="fa-solid fa-circle-question mr-2 mt-1"
                                style={{ color: '#0284c7', marginRight: '10px', flexShrink: 0 }}
                              ></i>
                              <span>{faq.question}</span>
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
                          <div
                            className="card-body text-muted px-4 py-3 border-top"
                            style={{ fontSize: '14.5px', lineHeight: 1.7, backgroundColor: '#fbfcfd' }}
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Ready to Discuss Box */}
              <div className="bg-light p-4 rounded text-left border mb-4 mt-4">
                <h3 className="h4 font-weight-bold text-left mb-3" style={{ color: "#0d3b66" }}>
                  Ready to Discuss Your Teen’s Orthodontic Options?
                </h3>
                <p className="text-left">
                  If your teenager is concerned about crowded teeth, gaps, or bite alignment, a professional assessment is a useful first step. Book a consultation at Simply Smilez Dental Clinic in Shaikpet to examine their teeth, discuss treatment options, and receive personalized guidance.
                </p>
                <div className="mt-3 text-left">
                  <p className="mb-1 text-left"><strong>Simply Smilez Dental Clinic</strong></p>
                  <p className="mb-1 text-left">
                    P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad, Telangana 500008
                  </p>
                  <p className="mb-1 text-left">
                    Opening hours: Monday&ndash;Saturday, 10:00 AM&ndash;8:30 PM; Sunday, 10:30 AM&ndash;1:00 PM.
                  </p>
                  <p className="mb-1 text-left">
                    Phone: <a href="tel:+917799376656">+91 77993 76656</a> / <a href="tel:+919603338904">+91 96033 38904</a>
                  </p>
                  <p className="mb-3 text-left">
                    Email: <a href="mailto:info.invisaligndental@gmail.com">info.invisaligndental@gmail.com</a>
                  </p>
                  <Link to="/contact" className="btn btn-primary px-4 py-2">Book Consultation</Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Sticky Sidebar matching existing pages */}
          <div className="col-lg-4 col-md-12 mt-4 mt-lg-0 text-left">
            <div className="sticky-top" style={{ top: 100 }}>
              <div className="card border-0 shadow-sm mb-4">
                <img
                  src="/images/invisalign-teens-hyderabad.webp"
                  className="card-img-top rounded-top"
                  alt="Invisalign for Teens in Hyderabad"
                />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">
                    Invisalign for Teens
                  </h4>
                  <p className="card-text text-muted text-left">
                    Clear, comfortable, and removable orthodontic aligners for teenagers to straighten teeth discreetly.
                  </p>
                  <Link to="/contact" className="btn btn-primary btn-block">Enquire About Consultation</Link>
                </div>
              </div>

              <div className="bg-primary text-white p-4 rounded shadow-sm text-left">
                <h4 className="text-white font-weight-bold mb-3 text-left">Simply Smilez Dental Clinic</h4>
                <p className="mb-3 text-left">
                  <i className="icon-map-marker mr-2" />
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
                  <a href="tel:+917799376656" className="text-white">+91 77993 76656</a> / <a href="tel:+919603338904" className="text-white">+91 96033 38904</a>
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
