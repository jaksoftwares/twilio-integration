import { NextRequest, NextResponse } from 'next/server';
import { parseTwilioFormData } from '@/lib/twilio-parser';
import { processIncomingMessage } from '@/lib/message-service';

/**
 * Twilio Webhook Handler
 * Receives incoming SMS/WhatsApp messages via POST request.
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const parsedData = parseTwilioFormData(formData);

    // Logging the parsed payload as requested
    console.log('[Twilio Webhook Received]', {
      timestamp: new Date().toISOString(),
      payload: parsedData
    });

    // Process message through service layer (ready for DB)
    await processIncomingMessage(parsedData);

    // Return valid TwiML response
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>Message received successfully</Message>
</Response>`;

    return new NextResponse(twiml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('[Twilio Webhook Error]', error);
    
    // Fallback response even on error to satisfy Twilio's webhook requirements
    const errorTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>Error processing message</Message>
</Response>`;

    return new NextResponse(errorTwiml, {
      status: 500,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}
