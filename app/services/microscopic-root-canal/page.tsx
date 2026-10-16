import type { Metadata } from 'next';
import MicroscopicRootCanalPage from '@/src/views/services/MicroscopicRootCanalPage';

export const metadata: Metadata = {
  title: "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez Dental",
  description: "Explore microscopic root canal treatment in Hyderabad at Simply Smilez Dental. Learn about microscope-assisted RCT, retreatment and treatment costs.",
  keywords: "microscopic root canal treatment in Hyderabad, microscopic RCT in Hyderabad, microscope-assisted root canal treatment, dental microscope root canal, microscopic root canal retreatment, microscopic RCT cost in Hyderabad",
  authors: [{ name: "Simply Smilez Dental" }],
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/microscopic-root-canal",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez Dental",
    description: "Learn about microscopic root canal treatment in Hyderabad, including microscope-assisted RCT, retreatment options and cost considerations.",
    url: "https://www.simplysmilezdental.in/services/microscopic-root-canal",
    siteName: "Simply Smilez Dental",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/microscopic-root-canal.jpg",
        alt: "Microscopic root canal treatment and dental microscope",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez Dental",
    description: "Discover microscope-assisted root canal treatment in Hyderabad. Explore treatment benefits, retreatment and cost considerations.",
    images: ["https://www.simplysmilezdental.in/images/microscopic-root-canal.jpg"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#webpage",
      "url": "https://www.simplysmilezdental.in/services/microscopic-root-canal",
      "name": "Microscopic Root Canal Treatment in Hyderabad",
      "description": "Learn about microscopic root canal treatment in Hyderabad, including microscope-assisted RCT, treatment considerations, and retreatment options.",
      "inLanguage": "en-IN",
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#service"
      },
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental",
      "inLanguage": "en-IN"
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#service",
      "name": "Microscopic Root Canal Treatment",
      "serviceType": "Microscope-assisted endodontic treatment",
      "description": "Microscopic root canal treatment uses magnification to help a dentist examine internal tooth structures during endodontic procedures. Treatment suitability depends on the patient's clinical condition.",
      "url": "https://www.simplysmilezdental.in/services/microscopic-root-canal",
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "audience": {
        "@type": "PeopleAudience",
        "audienceType": "Patients seeking root canal treatment"
      },
      "mainEntityOfPage": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#webpage"
      }
    },
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental",
      "url": "https://www.simplysmilezdental.in/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#breadcrumb",
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
          "item": "https://www.simplysmilezdental.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Microscopic Root Canal Treatment",
          "item": "https://www.simplysmilezdental.in/services/microscopic-root-canal"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <MicroscopicRootCanalPage />
    </>
  );
}
