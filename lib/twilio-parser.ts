export interface TwilioAttachment {
  url: string;
  contentType: string;
}

export interface ParsedTwilioMessage {
  messageSid: string;
  from: string;
  to: string;
  body: string;
  numMedia: number;
  attachments: TwilioAttachment[];
}

/**
 * Parses Twilio Webhook FormData into a structured object.
 * Handles single or multiple media attachments (SMS/WhatsApp).
 */
export function parseTwilioFormData(formData: FormData): ParsedTwilioMessage {
  const messageSid = (formData.get('MessageSid') as string) || '';
  const from = (formData.get('From') as string) || '';
  const to = (formData.get('To') as string) || '';
  const body = (formData.get('Body') as string) || '';
  const numMediaStr = (formData.get('NumMedia') as string) || '0';
  const numMedia = parseInt(numMediaStr, 10) || 0;

  const attachments: TwilioAttachment[] = [];
  for (let i = 0; i < numMedia; i++) {
    const url = (formData.get(`MediaUrl${i}`) as string) || '';
    const contentType = (formData.get(`MediaContentType${i}`) as string) || '';
    if (url) {
      attachments.push({ url, contentType });
    }
  }

  return {
    messageSid,
    from,
    to,
    body,
    numMedia,
    attachments,
  };
}
