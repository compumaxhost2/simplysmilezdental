import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import '../src/index.css';
import ClientLayout from '../src/components/ClientLayout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.simplysmilezdental.in'),
  title: {
    default: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    template: '%s',
  },
  description:
    'Simply Smilez Dental Clinic in Shaikpet offers Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Hyderabad.',
  authors: [{ name: 'Simply Smilez Dental' }],
  keywords: [
    'dental clinic in Shaikpet',
    'dentist in Shaikpet Hyderabad',
    'Invisalign Shaikpet',
    'Invisalign First for Kids Hyderabad',
    'root canal Shaikpet',
    'dental implants Hyderabad',
    'braces Shaikpet',
    'pediatric dentist Hyderabad',
    'dentist Manikonda',
    'dentist Kondapur',
    'dentist Jubilee Hills',
    'dentist Gachibowli',
  ],
  alternates: {
    canonical: 'https://www.simplysmilezdental.in/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.simplysmilezdental.in/',
    siteName: 'Simply Smilez Dental',
    title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    description:
      'Comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, Invisalign First for Kids, root canals, braces, implants and more.',
    images: [
      {
        url: 'https://www.simplysmilezdental.in/images/about.webp',
        alt: 'Simply Smilez Dental Clinic in Shaikpet, Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    description:
      'Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Shaikpet, Hyderabad.',
    images: ['https://www.simplysmilezdental.in/images/about.webp'],
  },
  verification: {
    google: 'WxYo0CEREwF25EcXU4_EfH0R7M23fkQN6JvAydEDapE',
  },
  icons: {
    icon: '/images/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* Google Analytics Tag (gtag.js) - lazyOnload preserves tracking while freeing CPU for FCP/LCP */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-3HVHJD8ZT5"
        />
        <Script
          id="google-analytics-gtag"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3HVHJD8ZT5');
            `,
          }}
        />

        {/* Preload critical LCP Hero image for instant rendering on mobile */}
        <link rel="preload" as="image" href="/images/banner1.jpeg" fetchPriority="high" />

        {/* CDN preconnection for fast icon asset resolution */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Core Site Stylesheet */}
        <link rel="preload" href="/css/style.css" as="style" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
