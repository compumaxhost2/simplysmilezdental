import type { Metadata } from 'next';
import InvisalignFirstCrookedCrowdedPage from '@/src/views/services/InvisalignFirstCrookedCrowdedPage';

export const metadata: Metadata = {
  title: "Invisalign First for Crooked, Crowded Teeth & Bite Problems in Kids",
  description: "Discover Invisalign First for crooked, crowded teeth and bite problems in kids. Explore children's clear aligners and bite correction in Hyderabad.",
  keywords: "Invisalign First for crooked teeth, Invisalign First for crowded teeth, Invisalign First for bite problems, Invisalign First for misaligned teeth, Invisalign for crooked teeth in kids, Invisalign for crowded teeth in children, Invisalign for bite correction in kids, Invisalign for child overbite, Invisalign for child underbite, Invisalign for crossbite in children, Invisalign for gaps between children's teeth, clear aligners for crooked teeth, clear aligners for crowded teeth, early orthodontic treatment for children, pediatric orthodontic treatment for crowded teeth, early bite correction for children, Invisalign First Hyderabad, children's clear aligners Hyderabad, teeth alignment for kids Hyderabad, pediatric orthodontist Hyderabad, kids bite correction Hyderabad, treatment for crooked teeth in children Hyderabad, treatment for crowded teeth in children Hyderabad",
  authors: [{ name: "Simply Smilez Dental" }],
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Invisalign First for Crooked, Crowded Teeth & Bite Problems in Kids",
    description: "Learn how Invisalign First may help children with crooked teeth, crowding and bite problems. Explore orthodontic treatment options in Hyderabad.",
    url: "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite",
    siteName: "Simply Smilez Dental",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/invisalign-first-crooked-crowded.webp",
        alt: "Invisalign First clear aligners for children with crooked, crowded teeth and bite problems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisalign First for Crooked, Crowded Teeth & Bite Problems in Kids",
    description: "Explore Invisalign First for crooked teeth, crowded teeth and bite correction in kids at Simply Smilez Dental Clinic in Hyderabad.",
    images: ["https://www.simplysmilezdental.in/images/invisalign-first-crooked-crowded.webp"],
  },
};

const crookedCrowdedSchema = {
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
          "name": "Invisalign First for Kids",
          "item": "https://www.simplysmilezdental.in/services/invisalign-first-crooked-crowded-teeth-bite"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crookedCrowdedSchema) }}
      />
      <InvisalignFirstCrookedCrowdedPage />
    </>
  );
}
