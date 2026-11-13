import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import '../src/index.css';
import '../public/css/style.css';
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
        <link rel="preload" as="image" href="/images/banner1.webp" type="image/webp" fetchPriority="high" />

        {/* Self-hosted, non-render-blocking FontAwesome with font-display: swap */}
        <link
          rel="preload"
          href="/css/fontawesome/all.min.css"
          as="style"
        />
        <link
          id="fa-all-css"
          rel="stylesheet"
          href="/css/fontawesome/all.min.css"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var fa = document.getElementById('fa-all-css');
                if (fa) {
                  fa.addEventListener('load', function() { fa.media = 'all'; });
                  if (fa.sheet) { fa.media = 'all'; }
                  setTimeout(function() { if (fa.media !== 'all') fa.media = 'all'; }, 1000);
                }
              })();
            `,
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="/css/fontawesome/all.min.css"
          />
        </noscript>


      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
