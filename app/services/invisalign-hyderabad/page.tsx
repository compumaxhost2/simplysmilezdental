import type { Metadata } from 'next';
import InvisalignAdultsPage from '@/src/views/services/InvisalignAdultsPage';

export const metadata: Metadata = {
  title: "Invisalign for Adults in Hyderabad | Simply Smilez",
  description: "Explore Invisalign for adults in Hyderabad at Simply Smilez Dental, Shaikpet. Learn about clear aligners, treatment costs and consultation options.",
  keywords: "Invisalign for adults Hyderabad, adult Invisalign treatment Hyderabad, Invisalign dentist Hyderabad, Invisalign orthodontist Hyderabad, clear aligners for adults Hyderabad, Invisalign cost Hyderabad, Invisalign consultation Hyderabad, adult teeth straightening Hyderabad",
  authors: [{ name: "Simply Smilez Dental Clinic" }],
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/invisalign-hyderabad",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Invisalign for Adults in Hyderabad | Simply Smilez",
    description: "Discover adult Invisalign treatment at Simply Smilez Dental in Shaikpet, Hyderabad. Explore clear aligners, treatment options and costs.",
    url: "https://www.simplysmilezdental.in/services/invisalign-hyderabad",
    siteName: "Simply Smilez Dental Clinic",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/invisalign-adults-hyderabad.webp",
        alt: "Invisalign clear aligners for adults at Simply Smilez Dental Clinic in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisalign for Adults in Hyderabad | Simply Smilez",
    description: "Explore adult Invisalign treatment in Hyderabad. Learn about clear aligners, treatment costs and consultations at Simply Smilez Dental.",
    images: ["https://www.simplysmilezdental.in/images/invisalign-adults-hyderabad.webp"],
  },
};

const adultSchema = {
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(adultSchema) }}
      />
      <InvisalignAdultsPage />
    </>
  );
}
