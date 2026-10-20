'use client';

import React, { useEffect, useState } from 'react';
import Link from '../../components/Link';

const invisalignFirstSchema = {
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
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad#webpage",
      "url": "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad",
      "name": "Invisalign First for Kids in Hyderabad",
      "description": "Explore Invisalign First for kids in Hyderabad at Simply Smilez Dental. Learn about age suitability, clear aligners, treatment options and consultation.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.simplysmilezdental.in/#website",
        "url": "https://www.simplysmilezdental.in/",
        "name": "Simply Smilez Dental"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad#service",
      "name": "Invisalign First for Kids",
      "serviceType": "Early orthodontic treatment with clear aligners",
      "url": "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad",
      "description": "Invisalign First is a clear-aligner treatment for selected growing children who need early orthodontic care. Suitability depends on dental development and an orthodontic assessment.",
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
        "suggestedMaxAge": 10,
        "audienceType": "Children requiring orthodontic assessment"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad#breadcrumb",
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
          "name": "Invisalign First for Kids in Hyderabad",
          "item": "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad"
        }
      ]
    }
  ]
};

const firstKidsFaqs = [
  {
    id: 1,
    question: "What is Invisalign First for kids?",
    answer: "Invisalign First is a clear-aligner treatment designed for selected growing children who need early orthodontic care. It uses custom-made, removable aligners to address certain tooth alignment and dental arch concerns. It may be considered when baby teeth and permanent teeth are present together. An orthodontist must assess the child's dental development and bite before recommending treatment."
  },
  {
    id: 2,
    question: "What is the right age for Invisalign First?",
    answer: "Invisalign First is commonly designed for eligible children around 6–10 years old. However, the appropriate starting point depends on dental development and the orthodontic problem being addressed. Some children need early intervention, while others can wait and be monitored. An orthodontic assessment helps determine the right timing."
  },
  {
    id: 3,
    question: "How much does Invisalign First cost in Hyderabad?",
    answer: "The cost depends on the child's orthodontic needs, treatment complexity, proposed treatment plan, and any additional appliances or follow-up care required. Simply Smilez Dental can provide fee information after assessing your child. Ask for an itemized estimate that explains what is included and whether additional charges may apply."
  },
  {
    id: 4,
    question: "Is Invisalign First better than traditional braces for children?",
    answer: "Neither treatment is best for every child. Invisalign First offers removable, relatively discreet aligners, while traditional braces remain fixed to the teeth. Aligners require consistent wear and careful handling. Braces may be more suitable for certain orthodontic problems. The orthodontist should compare the options according to your child's bite, dental development, and ability to follow treatment instructions."
  },
  {
    id: 5,
    question: "Can Invisalign First correct crowded teeth in children?",
    answer: "Invisalign First is designed to address selected orthodontic problems, including certain types of crowding, spacing, and dental arch concerns. Whether it can manage your child's specific concern depends on the severity of the problem, tooth eruption, and bite relationships. A clinical examination is needed to establish the treatment goals and determine whether clear aligners are appropriate."
  },
  {
    id: 6,
    question: "Can children remove Invisalign First aligners to eat and brush their teeth?",
    answer: "Yes. Invisalign First aligners are removable, allowing children to take them out for meals and oral hygiene. They must be worn according to the treating orthodontist's instructions to support the planned tooth movements. Parents should help younger children clean and store the aligners correctly and make sure they are not frequently misplaced."
  },
  {
    id: 7,
    question: "How long does Invisalign First treatment take?",
    answer: "Treatment duration varies according to the child's orthodontic condition, dental development, treatment goals, and consistency of aligner wear. The orthodontist can provide an individualized estimate after examination and planning. Early treatment may be followed by a monitoring period or another phase of orthodontic treatment, so completing Phase 1 does not necessarily mean that all future treatment is finished."
  },
  {
    id: 8,
    question: "Where can I consult about Invisalign First for kids in Hyderabad?",
    answer: "Simply Smilez Dental Clinic offers Invisalign First for suitable children at its Shaikpet clinic in Hyderabad. Parents can enquire about an orthodontic consultation by calling +91 77993 76656 or +91 96033 38904. During the consultation, discuss your child's dental development, suitable treatment options, expected responsibilities, and estimated costs before deciding whether to proceed."
  }
];

export default function InvisalignFirstKidsPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    const scriptId = 'invisalign-first-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(invisalignFirstSchema);

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
                Invisalign First for Kids in Hyderabad | Early Phase 1 Orthodontics
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <p className="lead text-left">
                Is your child developing crowded teeth, gaps, or bite alignment concerns? <Link to="/services/invisalign-first-crooked-crowded-teeth-bite" style={{ color: "#0284c7", fontWeight: 600 }}>Invisalign First for Kids</Link> in Hyderabad may be a suitable option for selected growing children who need early orthodontic treatment.
              </p>

              <p className="text-left">
                Simply Smilez Dental Clinic in Shaikpet, Hyderabad, offers Invisalign First for eligible children. This treatment uses a series of custom-made, clear, removable aligners to address selected orthodontic concerns while a child&apos;s teeth are developing.
              </p>

              <p className="text-left">
                Every child&apos;s smile develops differently. An orthodontic assessment helps determine whether Invisalign First, traditional braces, another orthodontic appliance, or monitoring is the most appropriate approach for your child.
              </p>

              <p className="text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2 mt-2 mb-3">
                  Book an Invisalign First Consultation for Your Child
                </Link>
              </p>

              <p className="text-left">
                Want to know whether Invisalign First is right for your child? Contact <Link to="/about" style={{ color: "#0284c7", fontWeight: 600 }}>Simply Smilez Dental</Link> to enquire about an orthodontic consultation. Also read our comprehensive guide on <Link to="/blog/invisalign-aligners-for-kids-in-hyderabad" style={{ color: "#0284c7" }}>Invisalign aligners for kids in Hyderabad</Link>.
              </p>

              {/* What Is Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                What Is Invisalign First?
              </h2>
              <p className="text-left">
                <Link to="/" style={{ color: "#0284c7", fontWeight: 600 }}>Invisalign First</Link> is a clear-aligner treatment designed for selected children with developing teeth. It may be used during Phase 1 orthodontic treatment, when a child has a combination of baby teeth and permanent teeth, known as mixed dentition.
              </p>
              <p className="text-left">
                The treatment uses custom-made transparent aligners that fit over the teeth. Each aligner is designed to produce planned tooth movements as part of an orthodontist-supervised treatment plan.
              </p>
              <p className="text-left">
                Unlike conventional fixed braces, Invisalign First aligners can be removed for eating, brushing, and flossing. However, children must wear them consistently as instructed and attend scheduled review appointments.
              </p>
              <p className="text-left">
                Invisalign First may help address certain alignment concerns, including selected cases of crowding, spacing, and dental arch development. It is not suitable for every child or every orthodontic problem.
              </p>

              {/* Who Can Benefit */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Who Can Benefit From Invisalign First?
              </h2>
              <p className="text-left">
                Invisalign First may be considered for children whose teeth and jaws are still developing and who have orthodontic concerns that could benefit from early intervention.
              </p>
              <p className="text-left mb-2">An orthodontic consultation may be appropriate if your child has:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>Crowded teeth or limited space within the dental arch.</li>
                <li>Gaps or spacing between teeth.</li>
                <li>Certain developing bite alignment problems.</li>
                <li>A narrow dental arch that requires assessment.</li>
                <li>A combination of baby teeth and permanent teeth.</li>
                <li>Alignment concerns that may benefit from early orthodontic treatment.</li>
              </ul>
              <p className="text-left">
                The need for treatment depends on the child&apos;s dental development, bite, and individual orthodontic condition. Some children benefit from early treatment, while others may be monitored until a later stage.
              </p>
              <p className="text-left">
                An orthodontist can explain whether clear aligners are suitable or whether traditional braces, another appliance, or observation would be more appropriate. For general preventive children&apos;s care, explore our <Link to="/services/pediatric-dentistry" style={{ color: "#0284c7" }}>pediatric dentistry services</Link>.
              </p>

              {/* Age Requirements */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign First Age Requirements
              </h2>
              <p className="text-left">
                Invisalign First is commonly designed for eligible children around 6–10 years old. However, age alone does not determine whether a child can begin treatment.
              </p>
              <p className="text-left">
                The orthodontist considers which teeth have erupted, the development of the jaws, the nature of the alignment problem, and the child&apos;s ability to follow the treatment instructions.
              </p>
              <p className="text-left">
                An orthodontic evaluation around age seven is commonly recommended to identify developing concerns. This does not mean every child needs braces or clear aligners at that age.
              </p>
              <p className="text-left">
                If your child has crowded teeth, an unusual bite, or concerns about how permanent teeth are emerging, an assessment can help establish whether early treatment is appropriate. The goal is to choose the right treatment at the right developmental stage rather than starting treatment solely because of the child&apos;s age. For older children, we offer <Link to="/services/invisalign-teens-hyderabad" style={{ color: "#0284c7" }}>Invisalign for Teens</Link> and for parents, <Link to="/services/invisalign-hyderabad" style={{ color: "#0284c7" }}>Invisalign for Adults</Link>.
              </p>

              {/* Benefits Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Benefits of Invisalign First for Kids
              </h2>
              <ul className="text-left pl-4" style={{ lineHeight: '1.8' }}>
                <li>
                  <strong>Clear and discreet appearance:</strong> The transparent aligners are less noticeable than conventional metal braces. This can be appealing to children who prefer a more discreet orthodontic option.
                </li>
                <li>
                  <strong>Removable for meals and oral hygiene:</strong> Children can remove the aligners for eating, brushing, and flossing. Parents may need to supervise younger children to help maintain good oral hygiene and prevent aligners from being misplaced.
                </li>
                <li>
                  <strong>Designed for growing smiles:</strong> Invisalign First is intended for selected orthodontic concerns in growing children. Treatment planning takes the child&apos;s stage of dental development into account.
                </li>
                <li>
                  <strong>No fixed brackets or wires:</strong> The aligners do not use conventional fixed brackets and wires. Children still need to follow their orthodontist&apos;s instructions and attend regular reviews.
                </li>
                <li>
                  <strong>Individualized treatment planning:</strong> An orthodontic assessment helps establish the treatment goals and determine whether Invisalign First is suitable for the child&apos;s particular needs.
                </li>
              </ul>
              <p className="text-left text-muted small">
                <em>Although these features may make aligners attractive to some families, treatment success depends on clinical suitability, consistent wear, and appropriate professional monitoring.</em>
              </p>

              {/* Crowded Teeth and Bite Correction Child Page Linking */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign First for Crowded Teeth and Bite Correction in Children
              </h2>
              <p className="text-left">
                Crowding occurs when there is insufficient space for teeth to align within the dental arch. Spacing and certain bite discrepancies may also require assessment while a child is growing. Learn more details in our dedicated guide on <Link to="/services/invisalign-first-crooked-crowded-teeth-bite" style={{ color: "#0284c7", fontWeight: 600 }}>Invisalign First for Crooked, Crowded Teeth &amp; Bite Correction</Link>.
              </p>
              <p className="text-left">
                Invisalign First may help address selected cases of crowding, spacing, and dental arch concerns. The treatment&apos;s suitability depends on the child&apos;s individual diagnosis and the movements required.
              </p>
              <p className="text-left">
                For children with bite alignment concerns, the orthodontist assesses how the upper and lower teeth meet and considers the relationship between the dental arches and jaws.
              </p>
              <p className="text-left">
                Not every bite problem can be managed with clear aligners alone. Some children may benefit from conventional <Link to="/services/braces" style={{ color: "#0284c7" }}>dental braces</Link>, other orthodontic appliances, a combination of treatments, or continued monitoring. A professional examination is the best way to understand the options available for your child&apos;s developing smile.
              </p>

              {/* Comparison Section with Table */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign First vs. Traditional Braces for Children
              </h2>
              <p className="text-left">
                Both clear aligners and conventional braces can play a role in children&apos;s orthodontic treatment. The most appropriate option depends on the orthodontic problem, the child&apos;s dental development, and their ability to follow treatment instructions.
              </p>

              <div className="table-responsive my-4">
                <table className="table table-bordered table-striped" style={{ borderColor: '#e2e8f0' }}>
                  <thead style={{ background: '#094765', color: '#ffffff' }}>
                    <tr>
                      <th scope="col" style={{ width: '22%' }}>Feature</th>
                      <th scope="col" style={{ width: '39%' }}>Invisalign First</th>
                      <th scope="col" style={{ width: '39%' }}>Traditional Braces</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Appearance</strong></td>
                      <td>Transparent and relatively discreet</td>
                      <td>Metal brackets are visible; ceramic options may be less noticeable</td>
                    </tr>
                    <tr>
                      <td><strong>Removability</strong></td>
                      <td>Removable for eating and cleaning</td>
                      <td>Fixed to the teeth</td>
                    </tr>
                    <tr>
                      <td><strong>Oral hygiene</strong></td>
                      <td>Teeth can be brushed and flossed without the aligners in place</td>
                      <td>Requires careful cleaning around brackets and wires</td>
                    </tr>
                    <tr>
                      <td><strong>Daily responsibility</strong></td>
                      <td>Requires consistent wear, cleaning, and safe storage</td>
                      <td>Requires careful appliance care and adherence to instructions</td>
                    </tr>
                    <tr>
                      <td><strong>Suitability</strong></td>
                      <td>Depends on the orthodontic condition and treatment goals</td>
                      <td>Depends on the orthodontic condition and treatment goals</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-left">
                Neither option is automatically better for every child. An orthodontist can explain the advantages, limitations, expected responsibilities, and costs of the appropriate treatment options.
              </p>

              {/* How Treatment Works */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                How Does Invisalign First Treatment Work?
              </h2>
              <p className="text-left">
                The treatment process depends on the child&apos;s needs and the orthodontist&apos;s clinical assessment. A typical pathway includes the following steps:
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 1: Orthodontic Consultation</h3>
              <p className="text-left">
                The orthodontist discusses your concerns, examines the child&apos;s teeth and bite, and assesses their stage of dental development.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 2: Dental Assessment and Treatment Planning</h3>
              <p className="text-left">
                If clear aligners appear suitable, the orthodontist determines which diagnostic records are needed. These may include dental scans, photographs, or X-rays when clinically indicated.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 3: Custom Aligner Planning</h3>
              <p className="text-left">
                A series of aligners is planned around the child&apos;s treatment goals. The orthodontist explains how the aligners should be worn, removed, and cleaned.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 4: Wearing the Aligners</h3>
              <p className="text-left">
                Your child follows the prescribed wear schedule and care instructions. Consistent wear is important for the treatment to progress as planned.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 5: Progress Reviews</h3>
              <p className="text-left">
                Follow-up visits allow the orthodontist to assess the aligner fit, monitor tooth movement, review compliance, and adjust the plan if needed.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-3 text-left">Step 6: Completion and Follow-Up</h3>
              <p className="text-left">
                At the end of the planned treatment phase, the orthodontist evaluates progress and explains whether retention, continued monitoring, or another phase of orthodontic treatment may be necessary.
              </p>

              {/* Cost Section */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign First Cost in Hyderabad
              </h2>
              <p className="text-left">
                The cost of Invisalign First in Hyderabad depends on the child&apos;s orthodontic needs and the treatment plan recommended after an examination. There is no single price that accurately represents every child&apos;s treatment.
              </p>
              <p className="text-left mb-2">Factors that may influence the Invisalign First price include:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>The complexity of the alignment or bite concern.</li>
                <li>The scope and expected duration of treatment.</li>
                <li>The aligners and any additional orthodontic appliances required.</li>
                <li>The diagnostic records and treatment-planning requirements.</li>
                <li>Follow-up visits, retention, and any additional treatment included in the plan.</li>
              </ul>
              <p className="text-left">
                Simply Smilez Dental can explain the applicable fees after assessing your child&apos;s needs and confirming the proposed treatment plan.
              </p>

              <h3 className="h5 font-weight-bold text-dark mt-4 text-left">How to Compare Invisalign First Prices</h3>
              <p className="text-left mb-2">When comparing treatment estimates, ask the provider:</p>
              <ul className="text-left pl-4 mb-3" style={{ lineHeight: '1.8' }}>
                <li>What is included in the quoted fee?</li>
                <li>Are diagnostic records and aligners included?</li>
                <li>Are review appointments included?</li>
                <li>Are retainers or additional appliances charged separately?</li>
                <li>What happens if the treatment plan needs to be adjusted?</li>
                <li>Could another phase of orthodontic treatment be needed later?</li>
              </ul>
              <p className="text-left">
                If you are looking for affordable Invisalign for kids in Hyderabad, consider the overall treatment plan, included services, and follow-up arrangements rather than comparing the initial fee alone.
              </p>
              <p className="text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2 mt-1 mb-3">
                  Enquire About Invisalign First Cost in Hyderabad
                </Link>
              </p>

              {/* Why Consider Simply Smilez */}
              <h2 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Why Consider Simply Smilez Dental for Invisalign First?
              </h2>
              <p className="text-left">
                Simply Smilez Dental Clinic offers Invisalign First for suitable children at its clinic in Shaikpet, Hyderabad.
              </p>
              <p className="text-left">
                Our clinic&apos;s doctors include <Link to="/doctor/dr-ankush-kumar" style={{ color: "#0284c7", fontWeight: 600 }}>Dr. Ankush Kumar</Link>, MDS Orthodontist and Certified Invisalign Provider, and <Link to="/doctor/dr-susheel-kumar" style={{ color: "#0284c7", fontWeight: 600 }}>Dr. Susheel Kumar</Link>, experienced dentist and implantologist.
              </p>
              <p className="text-left">
                For parents considering early orthodontic treatment, a consultation provides an opportunity to discuss their child&apos;s dental development, understand possible treatment approaches, and learn about the responsibilities and costs involved.
              </p>
              <p className="text-left">
                Before choosing a treatment, ask the clinician to explain the diagnosis, intended treatment goals, available alternatives, expected follow-up schedule, and estimated total fee.
              </p>

              {/* Clinic Address & Details */}
              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Invisalign First Clinic in Shaikpet, Hyderabad
              </h3>
              <p className="text-left">
                Simply Smilez Dental Clinic is located in Shaikpet, Hyderabad, Telangana:
              </p>
              <div className="bg-light p-3 rounded mb-3 border">
                <p className="mb-1 text-left"><strong>Clinic Address:</strong> P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad, Telangana 500008.</p>
                <p className="mb-1 text-left"><strong>Phone:</strong> <a href="tel:+917799376656">+91 77993 76656</a> / <a href="tel:+919603338904">+91 96033 38904</a></p>
                <p className="mb-0 text-left"><strong>Email:</strong> <a href="mailto:info.invisaligndental@gmail.com">info.invisaligndental@gmail.com</a></p>
              </div>

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
                    <Link to="/services/invisalign-first-crooked-crowded-teeth-bite" className="service-card-link p-3 text-left">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="h6 font-weight-bold service-title mb-0 text-left">Crooked, Crowded Teeth &amp; Bite</h5>
                          <i className="fas fa-chevron-right text-primary small" />
                        </div>
                        <p className="small text-muted mb-2 text-left">Invisalign First for expanding arches and correcting teeth crowding.</p>
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

              {/* FAQs Accordion Section Matching Existing Pages */}
              <div className="service-faq-container mt-5 mb-4">
                <h3 className="h4 font-weight-bold mb-4 text-left" style={{ color: "#0d3b66" }}>
                  Frequently Asked Questions About Invisalign First for Kids
                </h3>
                <div className="accordion faq-service-accordion">
                  {firstKidsFaqs.map((faq) => {
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
                  Book an Invisalign First Consultation in Hyderabad
                </h3>
                <p className="text-left">
                  Every child&apos;s teeth develop at a different pace. If you have concerns about crowding, spacing, or your child&apos;s developing bite, an orthodontic assessment can help you understand whether early treatment is appropriate.
                </p>
                <p className="text-left">
                  Simply Smilez Dental can help you enquire about Invisalign First, discuss available treatment options, and understand the expected costs and responsibilities before making a decision.
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
                  src="/images/invisalign-first-kids-hyderabad.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/braces.webp';
                  }}
                  className="card-img-top rounded-top"
                  alt="Invisalign First for Kids in Hyderabad"
                />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">
                    Invisalign First for Kids
                  </h4>
                  <p className="card-text text-muted text-left">
                    Phase 1 early orthodontic treatment designed for growing children with mixed dentition.
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
