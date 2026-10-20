import type { Metadata } from 'next';
import InvisalignFirstKidsPage from '@/src/views/services/InvisalignFirstKidsPage';

export const metadata: Metadata = {
  title: "Invisalign First for Kids in Hyderabad | Simply Smilez",
  description: "Explore Invisalign First for kids in Hyderabad at Simply Smilez Dental. Learn about age suitability, clear aligners, treatment options and consultation.",
  keywords: "Invisalign First for kids Hyderabad, Invisalign First treatment Hyderabad, Invisalign for children Hyderabad, Invisalign dentist for kids Hyderabad, Invisalign orthodontist for children Hyderabad, clear aligners for kids Hyderabad, invisible braces for children Hyderabad, Invisalign First cost Hyderabad, Invisalign First price Hyderabad, affordable Invisalign for kids Hyderabad, Invisalign First consultation Hyderabad, early orthodontic treatment Hyderabad, pediatric orthodontist Hyderabad, kids teeth straightening Hyderabad, removable aligners for kids Hyderabad, Invisalign for growing children Hyderabad, early teeth alignment Hyderabad, Invisalign for crowded teeth in kids, Invisalign for bite correction in children, Invisalign for mixed dentition Hyderabad, orthodontic treatment for children Hyderabad, Invisalign First age requirements, Invisalign First clinic Hyderabad",
  authors: [{ name: "Simply Smilez Dental" }],
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Invisalign First for Kids in Hyderabad | Simply Smilez",
    description: "Discover Invisalign First for children in Hyderabad. Explore clear aligners, age suitability, treatment options and consultation at Simply Smilez Dental.",
    url: "https://www.simplysmilezdental.in/services/invisalign-first-kids-hyderabad",
    siteName: "Simply Smilez Dental",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/invisalign-first-kids-hyderabad.webp",
        alt: "Invisalign First clear aligner treatment for children at Simply Smilez Dental in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisalign First for Kids in Hyderabad | Simply Smilez",
    description: "Learn about Invisalign First for kids in Hyderabad, including age suitability, clear aligners, treatment options and consultation.",
    images: ["https://www.simplysmilezdental.in/images/invisalign-first-kids-hyderabad.webp"],
  },
};

const firstKidsSchema = {
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(firstKidsSchema) }}
      />
      <InvisalignFirstKidsPage />
    </>
  );
}
