'use client';

import React, { useEffect, useState } from 'react';
import Link from '../../components/Link';

const invisalignAdultSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-hyderabad#webpage",
      "url": "https://www.simplysmilezdental.in/services/invisalign-hyderabad",
      "name": "Invisalign for Adults in Hyderabad | Simply Smilez",
      "description": "Explore Invisalign for adults in Hyderabad at Simply Smilez Dental, Shaikpet. Learn about clear aligners, treatment costs and consultation options.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/invisalign-hyderabad#service"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/services/invisalign-hyderabad#breadcrumb"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental Clinic",
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "telephone": [
        "+91 77993 76656",
        "+91 96033 38904"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-hyderabad#service",
      "name": "Invisalign for Adults in Hyderabad",
      "serviceType": "Adult Invisalign treatment and clear aligner orthodontics",
      "url": "https://www.simplysmilezdental.in/services/invisalign-hyderabad",
      "description": "Adult Invisalign treatment information and clear aligner consultation services at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "audience": {
        "@type": "PeopleAudience",
        "suggestedMinAge": 18,
        "audienceType": "Adults seeking orthodontic teeth alignment"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-hyderabad#breadcrumb",
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
          "name": "Invisalign for Adults in Hyderabad",
          "item": "https://www.simplysmilezdental.in/services/invisalign-hyderabad"
        }
      ]
    }
  ]
};

const adultFaqs = [
  {
    id: 1,
    question: "Can adults get Invisalign treatment in Hyderabad?",
    answer: "Yes. Adults can use Invisalign to correct certain tooth alignment and bite concerns. Suitability depends on the position of your teeth, gum health, bite and overall orthodontic needs. An assessment at Simply Smilez Dental Clinic in Shaikpet can help determine whether Invisalign or another treatment option is appropriate for you."
  },
  {
    id: 2,
    question: "How much does Invisalign cost in Hyderabad?",
    answer: "Invisalign treatment costs vary according to case complexity, the treatment plan and the provider's fees. Invisalign India publishes indicative starting prices of ₹1,50,000 for mild cases, ₹2,50,000 for moderate cases and ₹3,50,000 for severe cases. These are reference prices, not a confirmed clinic quotation. Contact Simply Smilez Dental Clinic for current pricing."
  },
  {
    id: 3,
    question: "How long does Invisalign treatment take for adults?",
    answer: "Treatment duration depends on the tooth movements required, bite complexity and adherence to the prescribed wear schedule. Approximately 12–18 months is a general average published in Invisalign's patient guidance, but individual cases may take less or more time. Your orthodontist can estimate the likely duration after examining your teeth."
  },
  {
    id: 4,
    question: "Is Invisalign better than metal braces for adults?",
    answer: "Invisalign may suit adults who prefer removable, less noticeable aligners. Traditional braces may be more appropriate for certain complex orthodontic problems. Both treatments have advantages and limitations. Your orthodontist can compare suitability, expected duration, cost and daily care requirements based on your individual case."
  },
  {
    id: 5,
    question: "How many hours a day should I wear Invisalign?",
    answer: "Invisalign generally recommends wearing aligners for 20–22 hours a day, removing them for meals and appropriate cleaning. Your orthodontist will provide instructions specific to your treatment plan. Consistent wear is important because wearing aligners for less time than prescribed may interfere with treatment progress."
  },
  {
    id: 6,
    question: "Can Invisalign correct crowded teeth and gaps?",
    answer: "Invisalign can address certain cases of crowding, gaps and bite misalignment. The extent of correction depends on the cause and severity of the problem and the tooth movements required. Some cases may need additional treatment or a different orthodontic approach. A clinical examination is necessary to determine suitability."
  },
  {
    id: 7,
    question: "Is Invisalign suitable for working professionals?",
    answer: "Invisalign may be convenient for working professionals who prefer a less noticeable orthodontic appliance. The trays can be removed for meals and oral hygiene, but consistent daily wear and regular dental reviews remain essential. Your orthodontist can help you determine whether the treatment fits your work schedule and clinical needs."
  },
  {
    id: 8,
    question: "Do I need retainers after Invisalign treatment?",
    answer: "Yes, retainers are generally recommended after active orthodontic treatment to help maintain corrected tooth positions. Teeth can shift over time, even after successful alignment. Your orthodontist will explain the appropriate retainer and wearing schedule to help maintain your treatment results."
  }
];

export default function InvisalignAdultsPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    // Dynamic Schema script injection
    const scriptId = 'invisalign-adults-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(invisalignAdultSchema);

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
                Invisalign for Adults in Hyderabad | Straighten Your Teeth with Clear Aligners
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <p className="lead text-left">
                Looking for a discreet way to straighten your teeth as an adult? <Link to="/services/braces" style={{ color: "#0284c7", fontWeight: 600 }}>Invisalign clear aligners</Link> offer an alternative to traditional metal braces for suitable orthodontic cases. These removable, transparent trays are designed to gradually move your teeth according to an individualized treatment plan.
              </p>

              <p className="text-left">
                At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, adults can explore Invisalign treatment options for crooked teeth, gaps, crowding and certain bite alignment concerns. An orthodontic consultation can help determine whether clear aligners are suitable for your smile, expected treatment duration and budget.
              </p>

              <p className="text-left">
                If you want to improve your teeth alignment without the appearance of conventional metal braces, Invisalign may be an option worth exploring.
              </p>

              <p className="text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2 mt-2 mb-3">
                  Book an Invisalign Consultation in Hyderabad
                </Link>
              </p>

              <p className="text-left">
                Contact <Link to="/about" style={{ color: "#0284c7", fontWeight: 600 }}>Simply Smilez Dental Clinic</Link> to discuss your smile goals, understand your treatment options and learn about the cost of adult Invisalign treatment.
              </p>

              {/* What Is Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                What Is Invisalign for Adults?
              </h2>
              <p className="text-left">
                <Link to="/" style={{ color: "#0284c7", fontWeight: 600 }}>Invisalign</Link> is an orthodontic treatment system that uses a series of clear, removable aligners to gradually move teeth into planned positions. Each aligner is designed to apply controlled pressure to specific teeth as part of a dentist-prescribed treatment plan.
              </p>
              <p className="text-left">
                For adults, Invisalign provides an option for teeth straightening without fixed metal brackets and wires. It may help address certain cases of crooked teeth, gaps, crowding and bite misalignment.
              </p>
              <p className="text-left">
                Unlike traditional braces, Invisalign aligners can be removed for eating, drinking beverages other than water and maintaining oral hygiene. However, they must be worn consistently according to your orthodontist&apos;s instructions to support treatment progress.
              </p>
              <p className="text-left">
                Not every orthodontic problem can be treated with clear aligners. Your dentist or orthodontist will assess your teeth, bite and gum health before recommending a suitable treatment option.
              </p>

              {/* Benefits Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Benefits of Invisalign for Adults
              </h2>
              <ul className="text-left pl-4" style={{ lineHeight: '1.8' }}>
                <li>
                  <strong>1. A Discreet Way to Straighten Teeth:</strong> Invisalign aligners are made from transparent material, making them less noticeable than conventional metal braces. This can appeal to adults who prefer a discreet orthodontic option at work, during meetings or in social situations.
                </li>
                <li>
                  <strong>2. Removable Clear Aligners:</strong> The aligners can be removed for meals and oral hygiene. This allows you to continue brushing and flossing your teeth without working around fixed brackets and wires.
                </li>
                <li>
                  <strong>3. Convenient for Working Professionals:</strong> For adults with busy schedules, clear aligners may offer flexibility when eating, travelling and maintaining daily routines. However, successful treatment requires consistent wear and attendance at scheduled dental reviews.
                </li>
                <li>
                  <strong>4. Personalized Orthodontic Treatment:</strong> Invisalign treatment is planned around your individual teeth and orthodontic needs. The proposed movements, aligner sequence and expected treatment duration depend on your clinical assessment.
                </li>
                <li>
                  <strong>5. Improved Teeth Alignment:</strong> For suitable cases, Invisalign can help address crowding, gaps and certain bite problems. The aim is to improve alignment and function while working toward your planned smile outcome.
                </li>
              </ul>

              {/* Candidate Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Who Is a Good Candidate for Adult Invisalign Treatment?
              </h2>
              <p className="text-left">
                Invisalign may be suitable for adults who want to improve their teeth alignment without conventional metal braces.
              </p>
              <p className="text-left mb-2">You may wish to consider an Invisalign consultation if you have:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>Crooked or overlapping teeth.</li>
                <li>Gaps between your teeth.</li>
                <li>Mild to moderate dental crowding.</li>
                <li>Teeth that have shifted after previous orthodontic treatment.</li>
                <li>Certain bite alignment concerns.</li>
                <li>A preference for removable, less noticeable orthodontic appliances.</li>
                <li>A desire to explore clear aligners as an alternative to traditional braces.</li>
              </ul>
              <p className="text-left">
                Adults can undergo orthodontic treatment at different ages, provided their oral health and clinical condition support it. For younger patients, our clinic also provides <Link to="/services/invisalign-teens-hyderabad" style={{ color: "#0284c7" }}>Invisalign Teens</Link> and <Link to="/services/invisalign-first-kids-hyderabad" style={{ color: "#0284c7" }}>Invisalign First for Kids</Link>.
              </p>
              <p className="text-left">
                Before treatment begins, your orthodontist may need to address dental decay with <Link to="/services/composite-fillings" style={{ color: "#0284c7" }}>composite tooth fillings</Link>, gum health with <Link to="/services/laser-gum-surgery" style={{ color: "#0284c7" }}>laser gum care</Link>, or examine root structures requiring <Link to="/services/microscopic-root-canal" style={{ color: "#0284c7" }}>microscopic root canal treatment</Link>. More complex alignment problems may require conventional braces or another treatment approach.
              </p>
              <p className="text-left">
                A professional examination is necessary to determine whether Invisalign is appropriate for your individual needs.
              </p>

              {/* How Treatment Works */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                How Does Invisalign Treatment Work?
              </h2>
              <p className="text-left">
                Adult Invisalign treatment involves assessment, personalized planning, aligner wear and regular monitoring.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 1: Initial Invisalign Consultation</h3>
              <p className="text-left">
                Your consultation begins with a discussion about your smile concerns, dental history and treatment expectations. The orthodontist evaluates your teeth, bite and gum health to determine whether clear aligners may be appropriate.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 2: Dental Assessment and Treatment Planning</h3>
              <p className="text-left">
                If Invisalign is a suitable option, your provider arranges the necessary diagnostic records. These may include digital scans, photographs and X-rays when clinically indicated. The treatment plan outlines the proposed tooth movements and provides an estimate of the expected treatment duration.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 3: Custom Clear Aligners</h3>
              <p className="text-left">
                A series of aligners is prepared according to your prescribed treatment plan. Your provider explains how to insert, remove, clean and wear the aligners.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 4: Wearing Your Aligners</h3>
              <p className="text-left">
                You wear your aligners for the number of hours prescribed by your orthodontist. They are generally removed for meals and oral hygiene, and changed according to your provider&apos;s instructions. Consistent wear is important because irregular use may affect treatment progress.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 5: Progress Reviews</h3>
              <p className="text-left">
                Periodic appointments allow your orthodontist to monitor tooth movement, check aligner fit and address any concerns. The review schedule depends on your individual treatment plan.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 6: Retainers After Treatment</h3>
              <p className="text-left">
                Once active treatment is complete, retainers are generally recommended to help maintain your corrected tooth positions. Your orthodontist will explain the appropriate retainer and wearing schedule.
              </p>
              <p className="text-left text-muted small">
                <em>The exact treatment process may vary according to your clinical needs and the plan recommended by your provider.</em>
              </p>

              {/* Treatment Duration */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                How Long Does Invisalign Treatment Take for Adults?
              </h2>
              <p className="text-left">
                The duration of adult Invisalign treatment depends on the complexity of your case, the amount of tooth movement required, your bite and how consistently you wear your aligners.
              </p>
              <p className="text-left">
                Invisalign&apos;s published patient guidance gives approximately 12–18 months as a general average for adult treatment. However, some cases may take less time, while others require longer.
              </p>
              <p className="text-left">
                Your orthodontist can provide a more relevant estimate after assessing your teeth and preparing your treatment plan. Following your prescribed aligner schedule and attending regular reviews can help keep treatment progressing as planned.
              </p>

              {/* Cost in Hyderabad */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                How Much Does Invisalign Cost in Hyderabad?
              </h2>
              <p className="text-left">
                The cost of Invisalign for adults in Hyderabad depends on the complexity of your orthodontic problem, the treatment plan, the number and type of aligners required and the provider&apos;s fees.
              </p>
              <p className="text-left">
                Invisalign India publishes indicative starting prices of <strong>₹1,50,000</strong> for mild cases, <strong>₹2,50,000</strong> for moderate cases and <strong>₹3,50,000</strong> for severe cases. These are manufacturer-published reference prices and are not a confirmed quotation from Simply Smilez Dental Clinic. Actual fees may vary.
              </p>
              <p className="text-left">
                Before starting treatment, request a personalized estimate and clarify what is included in the total cost.
              </p>
              <p className="text-left mb-2">Factors that may influence Invisalign treatment cost include:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>The severity of crowding, gaps or bite misalignment.</li>
                <li>The complexity of the required tooth movements.</li>
                <li>The prescribed treatment plan.</li>
                <li>Diagnostic records and consultation requirements.</li>
                <li>Progress reviews and any necessary refinements.</li>
                <li>Retainers after active treatment.</li>
                <li>Additional dental procedures, if clinically required.</li>
              </ul>
              <p className="text-left">
                If you are looking for affordable Invisalign treatment in Hyderabad, compare the complete treatment plan and included services rather than price alone. Contact Simply Smilez Dental Clinic to enquire about current Invisalign pricing, consultation fees and available payment options.
              </p>

              {/* Comparison */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign vs. Traditional Braces: Which Is Better for Adults?
              </h2>
              <p className="text-left">
                Both Invisalign and conventional braces can help correct teeth alignment, but they differ in appearance, removability and daily care.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Invisalign Clear Aligners</h3>
              <ul className="text-left pl-4">
                <li>Transparent trays that are less noticeable than metal braces.</li>
                <li>Removable for meals and oral hygiene.</li>
                <li>Require consistent daily wear.</li>
                <li>May be suitable for certain crowding, spacing and bite concerns.</li>
                <li>Require regular orthodontic monitoring.</li>
              </ul>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Traditional Metal Braces</h3>
              <ul className="text-left pl-4">
                <li>Fixed brackets and wires attached to the teeth.</li>
                <li>Remain in place during meals and oral hygiene.</li>
                <li>Require careful cleaning around brackets and wires.</li>
                <li>Can treat a broad range of orthodontic problems.</li>
                <li>May be recommended for certain complex tooth movements.</li>
              </ul>
              <p className="text-left">
                The right treatment depends on your orthodontic needs, preferences, budget and clinical assessment. Invisalign is not automatically better than braces for every adult. Your orthodontist can explain the advantages, limitations, expected duration and cost of each option.
              </p>

              {/* Working Professionals */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign for Working Professionals in Hyderabad
              </h2>
              <p className="text-left">
                Many adults want to improve their smile while continuing their professional and personal routines. Invisalign may be worth considering if you prefer an orthodontic appliance that is less noticeable than conventional braces.
              </p>
              <p className="text-left">
                Clear aligners can be removed for meals and oral hygiene, making them convenient for many working adults. However, frequent removal or inconsistent wear can interfere with treatment progress.
              </p>
              <p className="text-left">
                If you travel regularly, attend business meetings or have an unpredictable schedule, discuss how to maintain your prescribed aligner-wearing routine before starting treatment. A consultation can help you understand whether Invisalign fits your lifestyle and orthodontic requirements.
              </p>

              {/* Daily Care */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Daily Care and Maintenance of Invisalign Aligners
              </h2>
              <p className="text-left">
                Proper aligner care helps maintain oral hygiene and supports your treatment routine:
              </p>
              <ul className="text-left pl-4" style={{ lineHeight: '1.8' }}>
                <li><strong>Wear your aligners consistently:</strong> Follow your orthodontist&apos;s instructions regarding daily wear and aligner changes.</li>
                <li><strong>Remove them for meals:</strong> Remove aligners when eating and when drinking beverages other than water, unless instructed otherwise by your provider.</li>
                <li><strong>Brush and floss regularly:</strong> Clean your teeth before reinserting your aligners whenever possible.</li>
                <li><strong>Clean the aligners properly:</strong> Follow the manufacturer&apos;s cleaning instructions.</li>
                <li><strong>Store them safely:</strong> Keep removed aligners in their protective case to reduce the risk of loss or damage.</li>
                <li><strong>Attend scheduled appointments:</strong> Your orthodontist needs to monitor progress and address concerns.</li>
                <li><strong>Wear your retainers:</strong> After active treatment, follow the prescribed retention schedule to help prevent teeth from shifting.</li>
              </ul>
              <p className="text-left">
                Invisalign generally recommends 20–22 hours of daily wear, although you should follow the specific instructions given by your treating orthodontist.
              </p>

              {/* Why Consider Simply Smilez */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Why Consider Simply Smilez Dental Clinic for Invisalign?
              </h2>
              <p className="text-left">
                Simply Smilez Dental Clinic is located in Shaikpet, Hyderabad, and lists Invisalign and braces among its orthodontic services. The clinic&apos;s published doctor information identifies <Link to="/doctor/dr-ankush-kumar" style={{ color: "#0284c7", fontWeight: 600 }}>Dr. Ankush Kumar</Link> as an MDS orthodontist and Certified Invisalign provider.
              </p>
              <p className="text-left">
                Adults considering clear aligners can contact the clinic to discuss their teeth alignment concerns, understand the available orthodontic options and enquire about the next steps toward treatment. Before proceeding, ask for a clear explanation of your clinical assessment, proposed treatment plan, expected duration, total fees and follow-up requirements.
              </p>
              <p className="text-left">
                The goal of an initial consultation is to help you make an informed decision about your orthodontic treatment.
              </p>

              {/* Areas Served List */}
              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Areas We Serve in Hyderabad
              </h3>
              <p className="text-left">
                Patients visit Simply Smilez Dental Clinic for Invisalign clear aligners from across Hyderabad, including:
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

              {/* FAQs Accordion Section Matching Existing Pages */}
              <div className="service-faq-container mt-5 mb-4">
                <h3 className="h4 font-weight-bold mb-4 text-left" style={{ color: "#0d3b66" }}>
                  Frequently Asked Questions About Invisalign for Adults
                </h3>
                <div className="accordion faq-service-accordion">
                  {adultFaqs.map((faq) => {
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

              {/* Ready to Discuss Box (Standard in all pages) */}
              <div className="bg-light p-4 rounded text-left border mb-4 mt-4">
                <h3 className="h4 font-weight-bold text-left mb-3" style={{ color: "#0d3b66" }}>
                  Ready to Discuss Your Adult Invisalign Treatment?
                </h3>
                <p className="text-left">
                  Thinking about straightening your teeth without traditional metal braces? Simply Smilez Dental Clinic in Shaikpet, Hyderabad, can help you explore adult Invisalign treatment and understand your available options.
                </p>
                <p className="text-left">
                  Contact the clinic to discuss your smile goals, arrange an orthodontic assessment and enquire about treatment cost and duration. Take the first step toward a well-informed decision about your smile.
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
                    Phone: <a href="tel:+917799376656">77993 76656</a> / <a href="tel:+919603338904">96033 38904</a>
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
                  src="/images/invisalign-adults-hyderabad.webp"
                  className="card-img-top rounded-top"
                  alt="Invisalign for Adults in Hyderabad"
                />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">
                    Invisalign for Adults
                  </h4>
                  <p className="card-text text-muted text-left">
                    Discreet, custom clear aligners for adults to straighten teeth and correct bite misalignment with comfort.
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
