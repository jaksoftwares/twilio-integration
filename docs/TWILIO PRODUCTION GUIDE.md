# Kapuletu: Twilio Production & Implementation Guide

This document outlines the transition from development to a live production environment for the Kapuletu messaging platform.

---

## 1. Moving from Sandbox to Production

### WhatsApp Business API
In development, we used the "Join Sandbox" command. In production, this is removed.
*   **The Process**: You must apply for a **WhatsApp Business Profile** via the Twilio Console (Messaging > Senders > WhatsApp Senders).
*   **Requirements**: You need a verified Facebook Business Manager ID.
*   **Result**: Users can text your number directly without any setup. It appears as a standard contact in their WhatsApp.

### Webhook Persistence
Instead of `ngrok`, your application will be deployed to a permanent host (e.g., Vercel, Railway).
*   **Live URL**: `https://your-app.com/api/twilio/incoming`
*   **Configuration**: You set this URL once in the Twilio Console, and it handles all incoming traffic 24/7.

---

## 2. Branding (Kapuletu)

### Alphanumeric Sender ID (SMS Only)
You can make SMS messages appear as being from **"Kapuletu"** instead of a phone number.
*   **Pros**: Instant brand recognition, looks high-end.
*   **Cons**: Usually one-way (users cannot reply to a name, only to a number).
*   **Availability**: Supported in many countries (including Kenya, UK, etc.), but not the USA.

### WhatsApp Branding
*   **Profile**: You can set a profile picture, business description, and your business name.
*   **Official Business Account**: You can apply for the "Green Tick" (verified badge) once your volume increases.

---

## 3. Cost Structure

| Channel | Cost to User (Your Customer) | Cost to You (Kapuletu) |
| :--- | :--- | :--- |
| **SMS** | Standard carrier carrier SMS rates. | Small per-message fee (approx. $0.0075). |
| **WhatsApp** | Free (Standard Data/WiFi). | Per-conversation fee (Meta charges). |

---

## 4. The "Welcome" Onboarding Flow

To send the message: *"Welcome to Kapuletu - here is your messaging platform,"* the system uses **Outbound API Calls**.

### Flow for New Users:
1.  **Signup**: User registers on your website.
2.  **Trigger**: Your Next.js backend calls the Twilio API.
3.  **Delivery (SMS)**: Delivered immediately as "Kapuletu" or your designated number.
4.  **Delivery (WhatsApp)**: Delivered using a **Message Template** (required by Meta for the first message).

---

## 5. Next Steps for Implementation

1.  **Install SDK**: `npm install twilio`
2.  **Environment Variables**: Securely store `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN`.
3.  **Onboarding Logic**: Create a function to trigger the welcome message upon user registration.
4.  **Database Integration**: Implement a database (like PostgreSQL) to track user message history.
