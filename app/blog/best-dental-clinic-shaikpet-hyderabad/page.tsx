import type { Metadata, Viewport } from 'next';
import BestDentalClinicShaikpetHyderabadBlogPage from '@/src/views/blogs/BestDentalClinicShaikpetHyderabadBlogPage';

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Best Dental Clinic in Shaikpet, Hyderabad | Simply Smilez",
  description: "Find the best dental clinic in Shaikpet, Hyderabad. Explore expert dental care, Invisalign, braces, implants, root canal treatment and more.",
  keywords: "Best Dental Clinic in Shaikpet, Hyderabad, Trusted Dentist in Hyderabad, Dental Clinic in Shaikpet, Dental Implants in Shaikpet, Invisalign Treatment in Hyderabad, Pediatric Dentist in Hyderabad, Root Canal Treatment in Hyderabad, Braces and Clear Aligners in Hyderabad, Simply Smilez Dental",
  authors: [{ name: "Simply Smilez Dental" }],
  alternates: {
    canonical: "https://www.simplysmilezdental.in/blog/best-dental-clinic-shaikpet-hyderabad",
  },
  robots: "index, follow",
  other: {
    referrer: "strict-origin-when-cross-origin",
  },
  openGraph: {
    type: "article",
    title: "Best Dental Clinic in Shaikpet, Hyderabad | Simply Smilez",
    description: "Discover how to choose the best dental clinic in Shaikpet, Hyderabad. Compare dental treatments, dentist qualifications, hygiene and patient care.",
    url: "https://www.simplysmilezdental.in/blog/best-dental-clinic-shaikpet-hyderabad",
    siteName: "Simply Smilez Dental",
    images: [
      {
        url: "https://www.simplysmilezdental.in/wp-content/uploads/dental-clinic-shaikpet-hyderabad.jpg",
        alt: "Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dental Clinic in Shaikpet, Hyderabad | Simply Smilez",
    description: "Looking for a trusted dentist in Shaikpet? Learn how to choose the right dental clinic for implants, braces, Invisalign and family dental care.",
    images: ["https://www.simplysmilezdental.in/wp-content/uploads/dental-clinic-shaikpet-hyderabad.jpg"],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental",
      "url": "https://www.simplysmilezdental.in/",
      "telephone": [
        "+91-7799376656",
        "+91-9603338904"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, First Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Shaikpet",
        "Manikonda",
        "Tolichowki",
        "Jubilee Hills",
        "Puppalguda",
        "Hyderabad"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/blog/best-dental-clinic-shaikpet-hyderabad#webpage",
      "url": "https://www.simplysmilezdental.in/blog/best-dental-clinic-shaikpet-hyderabad",
      "name": "How to Choose the Best Dental Clinic in Shaikpet, Hyderabad",
      "description": "Learn how to choose the best dental clinic in Shaikpet, Hyderabad by comparing dentist qualifications, treatments, hygiene, technology and costs.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/blog/best-dental-clinic-shaikpet-hyderabad#breadcrumb"
      }
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.simplysmilezdental.in/blog/best-dental-clinic-shaikpet-hyderabad#article",
      "mainEntityOfPage": {
        "@id": "https://www.simplysmilezdental.in/blog/best-dental-clinic-shaikpet-hyderabad#webpage"
      },
      "headline": "How to Choose the Best Dental Clinic in Shaikpet, Hyderabad",
      "description": "Discover how to select a reliable dental clinic in Shaikpet, Hyderabad. Explore dental treatments, qualifications, hygiene standards and patient care.",
      "image": "https://www.simplysmilezdental.in/wp-content/uploads/dental-clinic-shaikpet-hyderabad.jpg",
      "keywords": [
        "Best Dental Clinic in Shaikpet, Hyderabad",
        "Trusted Dentist in Hyderabad",
        "Dental Clinic in Shaikpet",
        "Dental Implants in Shaikpet",
        "Invisalign Treatment in Hyderabad",
        "Pediatric Dentist in Hyderabad",
        "Root Canal Treatment in Hyderabad",
        "Braces and Clear Aligners in Hyderabad"
      ],
      "inLanguage": "en-US",
      "author": {
        "@type": "Organization",
        "name": "Simply Smilez Dental"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "articleSection": "Dental Care",
      "about": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/blog/best-dental-clinic-shaikpet-hyderabad#breadcrumb",
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
          "name": "Blog",
          "item": "https://www.simplysmilezdental.in/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Best Dental Clinic in Shaikpet, Hyderabad",
          "item": "https://www.simplysmilezdental.in/blog/best-dental-clinic-shaikpet-hyderabad"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BestDentalClinicShaikpetHyderabadBlogPage />
    </>
  );
}
