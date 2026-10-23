'use client';

import React, { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  GA_TRACKING_ID,
  trackEvent,
  trackPhoneClick,
  trackEmailClick,
  trackWhatsAppClick,
  trackSocialClick,
  trackOutboundClick,
} from '../utils/analytics';

function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const fullPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      window.gtag('config', GA_TRACKING_ID, {
        page_path: fullPath,
        page_location: window.location.href,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a, button');
      if (!target) return;

      if (target.tagName.toLowerCase() === 'a') {
        const href = target.getAttribute('href') || '';
        const text = (target.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100);

        // 1. Phone number clicks
        if (href.startsWith('tel:')) {
          const phone = href.replace('tel:', '').trim();
          trackPhoneClick(phone, text);
          return;
        }

        // 2. Email address clicks
        if (href.startsWith('mailto:')) {
          const email = href.replace('mailto:', '').split('?')[0].trim();
          trackEmailClick(email, text);
          return;
        }

        // 3. WhatsApp link clicks
        if (href.includes('wa.me') || href.includes('whatsapp.com')) {
          trackWhatsAppClick(href, text);
          return;
        }

        // 4. Social Media clicks
        const lowerHref = href.toLowerCase();
        let socialPlatform = '';
        if (lowerHref.includes('instagram.com')) {
          socialPlatform = 'Instagram';
        } else if (lowerHref.includes('facebook.com') || lowerHref.includes('fb.com')) {
          socialPlatform = 'Facebook';
        } else if (lowerHref.includes('youtube.com') || lowerHref.includes('youtu.be')) {
          socialPlatform = 'YouTube';
        } else if (lowerHref.includes('twitter.com') || lowerHref.includes('x.com')) {
          socialPlatform = 'Twitter / X';
        } else if (lowerHref.includes('linkedin.com')) {
          socialPlatform = 'LinkedIn';
        } else if (
          lowerHref.includes('maps.google.com') ||
          lowerHref.includes('google.com/maps') ||
          lowerHref.includes('maps.app.goo.gl')
        ) {
          socialPlatform = 'Google Maps';
        }

        if (socialPlatform) {
          trackSocialClick(socialPlatform, href, text);
          return;
        }

        // 5. External outbound link clicks
        if (href.startsWith('http://') || href.startsWith('https://')) {
          try {
            const url = new URL(href, window.location.href);
            const isExternal = url.hostname && url.hostname !== window.location.hostname;
            if (isExternal) {
              trackOutboundClick(href, text);
            }
          } catch {
            // invalid URL format, ignore
          }
        }
      } else if (target.tagName.toLowerCase() === 'button') {
        const text = (target.textContent || '').trim().replace(/\s+/g, ' ');
        const lowerText = text.toLowerCase();

        if (lowerText.includes('call') || lowerText.includes('phone')) {
          trackEvent('button_click', {
            event_category: 'Button Clicks',
            event_label: `Call Button: ${text}`,
            button_type: 'call',
            button_text: text,
          });
        } else if (lowerText.includes('whatsapp')) {
          trackWhatsAppClick(undefined, text);
        } else if (lowerText.includes('book') || lowerText.includes('appointment')) {
          trackEvent('button_click', {
            event_category: 'Button Clicks',
            event_label: `Appointment Button: ${text}`,
            button_type: 'appointment_booking',
            button_text: text,
          });
        }
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, []);

  return (
    <Suspense fallback={null}>
      <RouteChangeTracker />
    </Suspense>
  );
}
