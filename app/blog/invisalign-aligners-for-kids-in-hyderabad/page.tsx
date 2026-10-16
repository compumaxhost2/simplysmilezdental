import type { Metadata, Viewport } from 'next';
import InvisalignKidsBlogPage from '@/src/views/blogs/InvisalignKidsBlogPage';

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Invisalign Aligners for Kids in Hyderabad | Dr. Susheel Kumar",
  description: "Learn about Invisalign aligners for kids in Hyderabad, their benefits, the right age to start, treatment costs, and expert orthodontic care.",
  keywords: "Invisalign aligners for kids in Hyderabad, kids Invisalign treatment, clear aligners for children, Dr. Susheel Kumar dentist, Invisalign dentist near me in Hyderabad, Invisalign First Hyderabad",
  authors: [{ name: "Simply Smilez Dental" }],
  alternates: {
    canonical: "https://www.simplysmilezdental.in/blog/invisalign-aligners-for-kids-in-hyderabad",
  },
  robots: "index, follow",
  other: {
    referrer: "strict-origin-when-cross-origin",
  },
  openGraph: {
    type: "website",
    title: "Invisalign Aligners for Kids in Hyderabad | Dr. Susheel Kumar",
    description: "Learn about Invisalign aligners for kids in Hyderabad, their benefits, the right age to start, treatment costs, and expert orthodontic care.",
    url: "https://www.simplysmilezdental.in/blog/invisalign-aligners-for-kids-in-hyderabad",
    siteName: "Simply Smilez Dental",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/invisalign-aligners-for-kids-hyderabad.jpg",
        alt: "Invisalign clear aligners for children in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisalign Aligners for Kids in Hyderabad | Dr. Susheel Kumar",
    description: "Discover the benefits, ideal age, and cost considerations for kids' Invisalign treatment in Hyderabad.",
    images: ["https://www.simplysmilezdental.in/images/invisalign-aligners-for-kids-hyderabad.jpg"],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.simplysmilezdental.in/blog/invisalign-aligners-for-kids-in-hyderabad#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.simplysmilezdental.in/blog/invisalign-aligners-for-kids-in-hyderabad"
      },
      "headline": "Invisalign Aligners for Kids in Hyderabad: Benefits, Right Age, and Expert Care by Dr. Susheel Kumar",
      "description": "Learn about Invisalign aligners for kids in Hyderabad, their benefits, the right age to start, treatment costs, and expert orthodontic care.",
      "author": {
        "@type": "Organization",
        "name": "Simply Smilez Dental",
        "url": "https://www.simplysmilezdental.in/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Simply Smilez Dental",
        "url": "https://www.simplysmilezdental.in/"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Invisalign aligners for kids"
        },
        {
          "@type": "Thing",
          "name": "Orthodontic treatment for children"
        },
        {
          "@type": "Thing",
          "name": "Clear dental aligners"
        }
      ],
      "keywords": [
        "Invisalign aligners for kids in Hyderabad",
        "Kids Invisalign treatment",
        "Clear aligners for children",
        "Dr. Susheel Kumar dentist",
        "Invisalign dentist near me in Hyderabad"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental",
      "url": "https://www.simplysmilezdental.in/",
      "medicalSpecialty": "Dentistry",
      "areaServed": [
        { "@type": "City", "name": "Hyderabad" },
        { "@type": "Place", "name": "Shaikpet" },
        { "@type": "Place", "name": "Manikonda" },
        { "@type": "Place", "name": "Kondapur" },
        { "@type": "Place", "name": "Jubilee Hills" },
        { "@type": "Place", "name": "Gachibowli" },
        { "@type": "Place", "name": "Tolichowki" },
        { "@type": "Place", "name": "Raidurg" },
        { "@type": "Place", "name": "Puppalguda" },
        { "@type": "Place", "name": "Film Nagar" },
        { "@type": "Place", "name": "Banjara Hills" },
        { "@type": "Place", "name": "Mehdipatnam" },
        { "@type": "Place", "name": "Narsingi" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/blog/invisalign-aligners-for-kids-in-hyderabad#breadcrumb",
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
          "name": "Invisalign Aligners for Kids in Hyderabad",
          "item": "https://www.simplysmilezdental.in/blog/invisalign-aligners-for-kids-in-hyderabad"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/blog/invisalign-aligners-for-kids-in-hyderabad#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are Invisalign aligners suitable for all children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Suitability depends on dental development, bite concerns, the complexity of the orthodontic problem, and the child's ability to wear aligners consistently. A professional dental assessment is necessary before choosing treatment."
          }
        },
        {
          "@type": "Question",
          "name": "How many hours a day should children wear Invisalign aligners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Children are generally instructed to wear their aligners for around 20–22 hours daily, according to their individual treatment plan. They remove them for meals and oral hygiene."
          }
        },
        {
          "@type": "Question",
          "name": "Are Invisalign aligners better than braces for kids?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is best for every child. Clear aligners are removable and discreet, while traditional braces may be more appropriate for certain complex tooth movements. A dental professional can recommend an option based on the child's needs."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Invisalign for kids cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on treatment complexity, the number of aligners required, treatment duration, and follow-up care. Parents should request an individualized estimate from their dental provider."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best age for a child to see an orthodontist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The American Association of Orthodontists recommends an initial orthodontic check-up by age seven. This allows developing concerns to be identified early, although not every child needs treatment at that age."
          }
        },
        {
          "@type": "Question",
          "name": "Can children eat while wearing Invisalign aligners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aligners are generally removed before meals. Children should follow their dental professional's instructions for drinking, cleaning their teeth, and reinserting the trays."
          }
        },
        {
          "@type": "Question",
          "name": "How do I arrange a consultation with Dr. Susheel Kumar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact the dental clinic directly to confirm its location, appointment availability, and orthodontic services. During the consultation, ask whether clear aligners are suitable for your child and what alternatives are available."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <InvisalignKidsBlogPage />
    </>
  );
}
