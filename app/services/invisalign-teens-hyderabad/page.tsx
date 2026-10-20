import type { Metadata } from 'next';
import InvisalignTeensPage from '@/src/views/services/InvisalignTeensPage';

export const metadata: Metadata = {
  title: "Invisalign for Teens in Hyderabad | Simply Smilez",
  description: "Explore Invisalign for teens in Hyderabad at Simply Smilez Dental. Learn about clear aligners, treatment duration, eligibility and cost.",
  keywords: "Invisalign for teens Hyderabad, Invisalign teen treatment Hyderabad, Invisalign dentist for teenagers Hyderabad, Invisalign orthodontist for teens Hyderabad, clear aligners for teenagers Hyderabad, invisible braces for teens Hyderabad, Invisalign cost for teens Hyderabad, Invisalign price for teenagers Hyderabad, affordable Invisalign for teens Hyderabad, teen Invisalign consultation Hyderabad, teen teeth straightening Hyderabad, clear braces for teenagers Hyderabad, removable aligners for teens Hyderabad, teen orthodontic treatment Hyderabad, Invisalign for school students Hyderabad",
  authors: [{ name: "Simply Smilez Dental" }],
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Invisalign for Teens in Hyderabad | Simply Smilez Dental",
    description: "Discover clear aligners for teenagers at Simply Smilez Dental in Hyderabad. Explore treatment suitability, duration and cost, and enquire about a consultation.",
    url: "https://www.simplysmilezdental.in/services/invisalign-teens-hyderabad",
    siteName: "Simply Smilez Dental",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/invisalign-teens-hyderabad.webp",
        alt: "Invisalign clear aligners for teenagers at Simply Smilez Dental in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisalign for Teens in Hyderabad | Simply Smilez",
    description: "Learn about Invisalign for teens in Hyderabad, including clear aligners, treatment duration, eligibility and cost at Simply Smilez Dental.",
    images: ["https://www.simplysmilezdental.in/images/invisalign-teens-hyderabad.webp"],
  },
};

const teenSchema = {
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teenSchema) }}
      />
      <InvisalignTeensPage />
    </>
  );
}
