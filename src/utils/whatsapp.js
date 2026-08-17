/**
 * Builds a clean, URL-safe WhatsApp click-to-chat URL.
 * Automatically cleans non-digits from phone number and properly encodes the message payload.
 */
export function buildWhatsAppUrl(phoneNumber, message = '') {
  if (!phoneNumber) return '#';
  const cleanPhone = String(phoneNumber).replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}${encodedText ? `?text=${encodedText}` : ''}`;
}

/**
 * Formats/masks phone number for privacy display (e.g., 0821-****-01).
 */
export function maskPhoneNumber(phone) {
  if (!phone) return '';
  const clean = String(phone).replace(/[^0-9]/g, '');
  if (clean.length < 8) return phone;
  const prefix = clean.slice(0, 4);
  const suffix = clean.slice(-2);
  return `${prefix}-****-${suffix}`;
}
