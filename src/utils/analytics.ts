// Global TypeScript declarations for Google Analytics (gtag)
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-3HVHJD8ZT5';

/**
 * Safely trigger a Google Analytics event
 */
export function trackEvent(
  action: string,
  params?: Record<string, any>
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
}

/**
 * Track phone call clicks
 */
export function trackPhoneClick(phoneNumber: string, linkText?: string) {
  trackEvent('phone_call_click', {
    event_category: 'Contact',
    event_label: phoneNumber,
    phone_number: phoneNumber,
    link_text: linkText || phoneNumber,
  });

  // Track conversion lead
  trackEvent('generate_lead', {
    event_category: 'Leads',
    lead_type: 'Phone Call',
    phone_number: phoneNumber,
  });
}

/**
 * Track email link clicks
 */
export function trackEmailClick(emailAddress: string, linkText?: string) {
  trackEvent('email_click', {
    event_category: 'Contact',
    event_label: emailAddress,
    email_address: emailAddress,
    link_text: linkText || emailAddress,
  });
}

/**
 * Track WhatsApp button/link clicks
 */
export function trackWhatsAppClick(urlOrNumber?: string, linkText?: string) {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: 'WhatsApp Inquiry',
    platform: 'WhatsApp',
    link_url: urlOrNumber,
    link_text: linkText || 'WhatsApp',
  });

  // Track conversion lead
  trackEvent('generate_lead', {
    event_category: 'Leads',
    lead_type: 'WhatsApp',
  });
}

/**
 * Track Social Media clicks
 */
export function trackSocialClick(platform: string, url: string, linkText?: string) {
  trackEvent('social_click', {
    event_category: 'Social Media',
    event_label: `${platform}: ${url}`,
    platform,
    link_url: url,
    link_text: linkText || platform,
  });
}

/**
 * Track External / Outbound clicks
 */
export function trackOutboundClick(url: string, linkText?: string) {
  try {
    const urlObj = new URL(url, typeof window !== 'undefined' ? window.location.href : 'https://www.simplysmilezdental.in');
    trackEvent('outbound_click', {
      event_category: 'Outbound Link',
      event_label: url,
      link_url: url,
      link_domain: urlObj.hostname,
      link_text: linkText || '',
    });
  } catch {
    trackEvent('outbound_click', {
      event_category: 'Outbound Link',
      event_label: url,
      link_url: url,
      link_text: linkText || '',
    });
  }
}
