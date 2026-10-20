'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';

const invisalignCrookedCrowdedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite#webpage",
      "url": "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite",
      "name": "Invisalign First for Crooked, Crowded Teeth and Bite Problems in Kids",
      "description": "Discover Invisalign First for crooked teeth, crowded teeth and bite problems in children. Explore children's clear aligners and orthodontic treatment options in Hyderabad.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite#service"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite#breadcrumb"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental",
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
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite#service",
      "name": "Invisalign First for Children",
      "serviceType": "Early orthodontic assessment and Invisalign First treatment",
      "description": "Orthodontic assessment for children with crooked teeth, crowded teeth, spacing concerns and selected developing bite problems. Treatment suitability depends on individual dental development and professional evaluation.",
      "url": "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "audience": {
        "@type": "PeopleAudience",
        "suggestedMinAge": 6,
        "suggestedMaxAge": 12,
        "audienceType": "Children and their parents or caregivers"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite#breadcrumb",
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
          "name": "Invisalign First for Kids",
          "item": "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Crooked, Crowded Teeth & Bite Problems",
          "item": "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite"
        }
      ]
    }
  ]
};

export default function InvisalignFirstCrookedCrowdedPage() {
  useEffect(() => {
    const scriptId = 'invisalign-crooked-crowded-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(invisalignCrookedCrowdedSchema);

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
                Invisalign First for Crooked, Crowded Teeth and Bite Problems in Kids
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <p className="lead text-left">
                Crooked teeth, overlapping teeth, gaps, or an uneven bite can raise questions for parents as their child&apos;s smile develops. <Link to="/services/invisalign-first-kids-hyderabad" style={{ color: "#0284c7", fontWeight: 600 }}>Invisalign First</Link> is a clear aligner treatment designed for growing children who may benefit from early orthodontic care. Depending on the child&apos;s dental development and treatment needs, it may help address certain cases of crowding, spacing, and dental-arch concerns.
              </p>

              <p className="text-left">
                At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, parents can explore Invisalign First and other orthodontic options for children. A professional assessment helps determine whether clear aligners are appropriate for your child&apos;s teeth, bite, and stage of growth.
              </p>

              <p className="text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2 mt-2 mb-3">
                  Book an Orthodontic Consultation
                </Link>
              </p>

              <p className="text-left">
                Concerned about your child&apos;s crooked or crowded teeth? Contact <Link to="/about" style={{ color: "#0284c7", fontWeight: 600 }}>Simply Smilez Dental Clinic</Link> to arrange an orthodontic consultation and discuss suitable treatment options.
              </p>

              {/* What Is Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                What Is Invisalign First for Kids?
              </h2>
              <p className="text-left">
                <Link to="/" style={{ color: "#0284c7", fontWeight: 600 }}>Invisalign First</Link> is a clear aligner system designed specifically for growing children. It uses a series of custom-made, removable aligners to guide selected tooth movements and address certain orthodontic concerns during dental development.
              </p>
              <p className="text-left">
                Unlike traditional braces, Invisalign First aligners do not use fixed metal brackets and wires. Children remove the aligners for meals, brushing, and flossing, but they must wear them according to the treating orthodontist&apos;s instructions for treatment to progress as planned.
              </p>
              <p className="text-left mb-2">Invisalign First may be considered for eligible children with concerns such as:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>Crooked or overlapping teeth.</li>
                <li>Crowded teeth caused by limited space in the dental arches.</li>
                <li>Gaps between teeth.</li>
                <li>Certain developing bite problems.</li>
                <li>Selected cases involving narrow dental arches.</li>
              </ul>
              <p className="text-left">
                Not every child needs early orthodontic treatment, and clear aligners are not suitable for every orthodontic problem. The appropriate option depends on the child&apos;s dental development, the type and severity of the problem, and the orthodontist&apos;s assessment.
              </p>

              {/* Crooked Teeth Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign First for Crooked Teeth in Children
              </h2>
              <p className="text-left">
                Crooked teeth can appear when individual teeth erupt at an angle, rotate, or do not line up evenly with neighbouring teeth. Some children develop visible misalignment as permanent teeth begin to replace their baby teeth.
              </p>
              <p className="text-left">
                Invisalign First for crooked teeth may be an option when the orthodontist determines that early tooth alignment would be beneficial. The treatment plan is designed around the child&apos;s individual dental needs rather than appearance alone.
              </p>
              <p className="text-left mb-2">A consultation can help parents understand:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>Which teeth are misaligned and why.</li>
                <li>Whether treatment should begin during the current stage of dental development.</li>
                <li>Whether Invisalign First or another orthodontic option like <Link to="/services/braces" style={{ color: "#0284c7" }}>dental braces</Link> is more appropriate.</li>
                <li>What improvements can reasonably be expected from the proposed treatment.</li>
              </ul>
              <p className="text-left">
                Early evaluation does not automatically mean treatment must start immediately. In some cases, monitoring the development of the teeth is the more appropriate approach.
              </p>

              {/* Crowded Teeth Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign First for Crowded Teeth
              </h2>
              <p className="text-left">
                Crowded teeth occur when there is insufficient space in the dental arch for teeth to align comfortably. Teeth may overlap, twist, or emerge out of their expected positions.
              </p>
              <p className="text-left">
                Parents may notice crowding when their child&apos;s permanent front teeth begin to erupt, or when new teeth appear to overlap existing ones.
              </p>
              <p className="text-left">
                Invisalign First for crowded teeth may help manage selected cases by guiding tooth movement and, where appropriate, addressing aspects of dental-arch development. Whether aligners can achieve the desired result depends on the amount of crowding, the child&apos;s growth, and other orthodontic factors.
              </p>
              <p className="text-left">
                Treating crowding is not simply about making teeth look straighter. Better alignment may also make some areas easier to clean, although good brushing, flossing, and regular dental checkups with our <Link to="/services/pediatric-dentistry" style={{ color: "#0284c7" }}>pediatric dentistry team</Link> remain essential.
              </p>
              <p className="text-left">
                A pediatric dental or orthodontic assessment can help determine whether your child needs treatment now, later, or not at all.
              </p>

              {/* Bite Problems Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign First for Bite Problems in Kids
              </h2>
              <p className="text-left">
                A bite problem occurs when the upper and lower teeth do not meet in the intended relationship. Some bite differences are mild, while others may affect how the teeth fit together or how the jaws relate to one another.
              </p>
              <p className="text-left">
                Invisalign First for bite problems may be considered for certain developing orthodontic conditions. However, the right treatment depends on whether the issue involves tooth position, jaw growth, or a combination of both.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Invisalign for a Child&apos;s Overbite</h3>
              <p className="text-left">
                An overbite describes the vertical overlap of the upper front teeth over the lower front teeth. Some overlap is normal, but an excessive overbite may require orthodontic assessment. Invisalign First may help address selected cases involving tooth position and overbite. More complex cases may require a different or additional treatment approach.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Invisalign for a Child&apos;s Underbite</h3>
              <p className="text-left">
                An underbite occurs when the lower front teeth sit ahead of the upper front teeth when the child bites down. The cause may involve tooth positioning, jaw relationships, or both. An orthodontist should assess an underbite during childhood to understand the underlying cause and determine whether early intervention is appropriate. Clear aligners alone may not be sufficient for every case.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Invisalign for Crossbite in Children</h3>
              <p className="text-left">
                A crossbite occurs when one or more upper teeth bite inside the lower teeth rather than outside them in the expected relationship. It can involve front teeth, back teeth, or both. Invisalign First may be suitable for selected crossbite cases, but the treatment approach depends on the location, severity, and cause of the crossbite. Some children may need another orthodontic appliance or a combined treatment plan.
              </p>
              <div className="alert alert-info border-0 p-3 mb-4" style={{ background: '#f0f9ff', color: '#0369a1' }}>
                <p className="mb-0 text-left">
                  <strong>Important:</strong> Overbite, underbite, and crossbite are different conditions. A dental examination is needed to identify the problem and determine the most appropriate treatment.
                </p>
              </div>

              {/* Benefits Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Benefits of Clear Aligners for Growing Children
              </h2>
              <p className="text-left">
                For children who are suitable candidates, Invisalign First may offer several practical advantages:
              </p>
              <ul className="text-left pl-4" style={{ lineHeight: '1.8' }}>
                <li>
                  <strong>Removable for Everyday Oral Hygiene:</strong> Children can remove their aligners to brush and floss their teeth. This allows them to follow their usual oral hygiene routine without cleaning around fixed brackets and wires.
                </li>
                <li>
                  <strong>No Fixed Metal Brackets or Wires:</strong> Clear aligners do not use the traditional brackets and wires found in conventional braces. This may appeal to children and parents who prefer a less noticeable orthodontic option.
                </li>
                <li>
                  <strong>Designed for Developing Smiles:</strong> Invisalign First is designed for selected orthodontic needs in growing children, including certain crowding, spacing, and dental-arch concerns.
                </li>
                <li>
                  <strong>Planned Tooth Movement:</strong> A prescribed series of aligners is used to guide planned tooth movements. The treating orthodontist determines the treatment goals and monitors progress.
                </li>
                <li>
                  <strong>Consideration of Growth and Dental Development:</strong> An early orthodontic assessment helps establish whether a child may benefit from treatment during the current stage of development or whether observation is more appropriate.
                </li>
              </ul>
              <p className="text-left text-muted small">
                <em>These potential advantages do not mean that Invisalign First is always the best option. Successful treatment depends on case suitability, consistent wear, follow-up appointments, and the child&apos;s individual response to treatment.</em>
              </p>

              {/* Suitability Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Is Invisalign First Suitable for Every Child?
              </h2>
              <p className="text-left">
                No. Invisalign First is not the right choice for every child or every orthodontic condition.
              </p>
              <p className="text-left">
                It is commonly associated with early orthodontic treatment during the mixed-dentition stage, when children have a combination of baby teeth and permanent teeth. The manufacturer&apos;s information describes Invisalign First as a treatment option designed for growing children, particularly those in the early school-age years. Age alone, however, does not establish eligibility.
              </p>
              <p className="text-left mb-2">An orthodontist may consider:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>The child&apos;s current teeth and stage of dental development.</li>
                <li>The degree of crowding, spacing, or misalignment.</li>
                <li>The type and severity of any bite problem.</li>
                <li>Whether the concern involves the teeth, the jaws, or both.</li>
                <li>The child&apos;s ability to wear removable aligners as instructed.</li>
                <li>Whether another appliance, conventional braces, or monitoring would be more appropriate.</li>
              </ul>
              <p className="text-left">
                Parents should not assume that every crooked tooth or bite concern needs immediate treatment. The purpose of an assessment is to identify the problem and make an informed decision about timing and treatment. For older family members, explore <Link to="/services/invisalign-teens-hyderabad" style={{ color: "#0284c7" }}>Invisalign for Teens</Link> and <Link to="/services/invisalign-hyderabad" style={{ color: "#0284c7" }}>Invisalign for Adults</Link>.
              </p>

              {/* Invisalign First vs. Traditional Braces */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign First vs. Traditional Braces for Children
              </h2>
              <p className="text-left">
                Both clear aligners and braces can be used to address orthodontic problems, but their suitability differs by case:
              </p>
              <p className="text-left">
                <strong>Invisalign First</strong> uses removable, transparent aligners and requires the child to wear them consistently as prescribed. It may be appropriate for selected alignment, spacing, and developing dental-arch concerns.
              </p>
              <p className="text-left">
                <strong>Traditional braces</strong> use fixed brackets and wires to move teeth. They may be recommended when the orthodontic problem requires movements or treatment mechanics better suited to a fixed appliance.
              </p>
              <p className="text-left">
                Neither option is automatically superior for every child. The orthodontist should explain the benefits, limitations, expected treatment requirements, and alternatives for your child&apos;s particular condition.
              </p>

              {/* What to Expect During Consultation */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                What to Expect During an Invisalign First Consultation
              </h2>
              <p className="text-left">
                At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, the first step is to arrange an orthodontic assessment and discuss your child&apos;s concerns:
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">1. Discuss Your Child&apos;s Dental Concerns</h3>
              <p className="text-left">
                Tell the dental professional what you have noticed, such as overlapping front teeth, gaps, crowding, or an uneven bite.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">2. Assess Teeth and Bite</h3>
              <p className="text-left">
                The orthodontic assessment helps identify tooth-position concerns, the relationship between the upper and lower teeth, and the child&apos;s stage of dental development. Any additional diagnostic records should be based on clinical need.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">3. Discuss Suitable Treatment Options</h3>
              <p className="text-left">
                If treatment is indicated, the orthodontist can explain whether Invisalign First, traditional braces, another appliance, or monitoring is appropriate.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">4. Understand the Treatment Plan</h3>
              <p className="text-left">
                Before proceeding, ask about treatment goals, expected duration, aligner wear requirements, follow-up visits, costs, and any limitations that apply to your child&apos;s case.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">5. Attend Follow-Up Appointments</h3>
              <p className="text-left">
                Orthodontic treatment requires monitoring. Follow the treating professional&apos;s instructions and attend the recommended review appointments so that progress can be assessed.
              </p>

              {/* Treatment Duration */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                How Long Does Invisalign First Treatment Take?
              </h2>
              <p className="text-left">
                Treatment duration varies from child to child. It depends on the type and severity of the orthodontic problem, the movements required, the child&apos;s dental development, and how consistently the aligners are worn.
              </p>
              <p className="text-left">
                Some cases may require a shorter course of treatment, while others need a longer treatment plan or additional orthodontic care as permanent teeth erupt.
              </p>
              <p className="text-left">
                Your orthodontist can provide a more meaningful estimate after assessing your child. Avoid relying on a standard treatment duration advertised for other children, because their orthodontic needs may be different.
              </p>

              {/* Cost Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                What Is the Cost of Invisalign First in Hyderabad?
              </h2>
              <p className="text-left">
                The cost of Invisalign First in Hyderabad depends on the individual treatment plan and the orthodontic requirements involved.
              </p>
              <p className="text-left mb-2">Factors that may influence the overall cost include:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>The complexity of the tooth-alignment or bite problem.</li>
                <li>The planned scope of treatment.</li>
                <li>The number and sequence of aligners required.</li>
                <li>The expected duration of treatment.</li>
                <li>The follow-up and retention arrangements included in the plan.</li>
              </ul>
              <p className="text-left">
                For an accurate estimate, contact Simply Smilez Dental Clinic and ask about the consultation process, treatment options, and fees applicable to your child&apos;s case. A price should be discussed in the context of the treatment actually recommended rather than assumed from a general online estimate.
              </p>

              {/* Why Consider Simply Smilez */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Why Consider Simply Smilez Dental Clinic for Your Child&apos;s Orthodontic Assessment?
              </h2>
              <p className="text-left">
                Simply Smilez Dental Clinic provides dental care for children and adults in Shaikpet, Hyderabad, and lists Invisalign First for Kids among its services.
              </p>
              <p className="text-left">
                The clinic&apos;s published doctor information identifies <Link to="/doctor/dr-ankush-kumar" style={{ color: "#0284c7", fontWeight: 600 }}>Dr. Ankush Kumar</Link> as an orthodontist and Invisalign provider, with qualifications in orthodontics and dentofacial orthopedics. Parents can use a consultation to discuss their child&apos;s dental concerns, understand the available options, and ask questions before deciding on treatment.
              </p>
              <p className="text-left">
                The clinic is located at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad, Telangana 500008. Families from nearby areas, including Manikonda, Tolichowki, Jubilee Hills, and Gachibowli, can contact the clinic to enquire about appointments.
              </p>

              {/* Areas Served List */}
              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Areas We Serve in Hyderabad
              </h3>
              <p className="text-left">
                Parents bring their children for early orthodontic evaluations from nearby areas across Hyderabad including:
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

              {/* Explore Other Dental Services Grid */}
              <div className="mt-5 pt-4 border-top text-left">
                <h3 className="h4 font-weight-bold mb-3 text-left" style={{ color: "#0d3b66" }}>
                  Explore Other Dental Services
                </h3>
                <p className="text-left mb-4">
                  Simply Smilez Dental Clinic in Shaikpet, Hyderabad offers a full range of comprehensive dental treatments:
                </p>
                <div className="row">
                  <div className="col-md-6 col-12 mb-3">
                    <Link to="/services/invisalign-first-kids-hyderabad" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Invisalign First for Kids</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Early Phase 1 clear aligner treatment for children aged 6 to 10.</p>
                      </div>
                      <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                    </Link>
                  </div>
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

              {/* Ready to Discuss Box */}
              <div className="bg-light p-4 rounded text-left border mb-4 mt-4">
                <h3 className="h4 font-weight-bold text-left mb-3" style={{ color: "#0d3b66" }}>
                  Book an Invisalign First Consultation in Hyderabad
                </h3>
                <p className="text-left">
                  Not sure whether your child&apos;s crooked teeth, crowding, or bite problem needs treatment now? Start with a professional orthodontic assessment at Simply Smilez Dental Clinic.
                </p>
                <p className="text-left">
                  The right treatment begins with understanding your child&apos;s individual orthodontic needs. Arrange an assessment to discuss the available options and make an informed decision about the next step.
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
                  src="/images/invisalign-first-crooked-crowded.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/braces.webp';
                  }}
                  className="card-img-top rounded-top"
                  alt="Invisalign First for Crooked, Crowded Teeth & Bite Problems in Kids"
                />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">
                    Invisalign First for Kids
                  </h4>
                  <p className="card-text text-muted text-left">
                    Early intervention clear aligners designed to address crowding, spacing, and bite correction in developing smiles.
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
