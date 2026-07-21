# EmailJS Setup Guide & HTML Templates for Mahix InfoTech

This document provides step-by-step instructions for configuring **EmailJS** to send dual emails whenever a customer submits an inquiry on the **Mahix InfoTech** website:
1. **Company Notification Email** (Delivered to `mahixinfotech@gmail.com`)
2. **Customer Auto-Reply Email** (Delivered to the customer's email address)

---

## 📌 Step-by-Step EmailJS Setup Guide

### Step 1: Create an EmailJS Account
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/sign-up).
2. Sign up for a free account (includes 200 free emails/month).

---

### Step 2: Add Email Service (Gmail)
1. Go to **Email Services** → Click **Add New Service**.
2. Select **Gmail** (or SMTP/Outlook).
3. Click **Connect Account** and log in with your company email: **`mahixinfotech@gmail.com`**.
4. Click **Create Service**.
5. Copy your **Service ID** (e.g., `service_abc123`).

---

### Step 3: Create Template 1 — Company Notification Email
This template notifies your team (`mahixinfotech@gmail.com`) whenever a customer submits an inquiry.

1. Go to **Email Templates** → Click **Create New Template**.
2. Set the **Template Name**: `Company Inquiry Notification`.
3. Set **To Email**: `mahixinfotech@gmail.com` (or `{{company_email}}`).
4. Set **Subject Line**: `🚨 New Inquiry from {{from_name}} - {{service}}`
5. Switch to **HTML Code** tab or standard content editor, and paste the following HTML template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #7f1d1d 0%, #1e3a8a 100%); padding: 30px; text-align: center; }
    .header img { max-height: 50px; width: auto; }
    .badge { display: inline-block; background: rgba(255,255,255,0.2); color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 10px; text-transform: uppercase; letter-spacing: 1px; }
    .content { padding: 32px; }
    .title { font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; }
    .field-group { margin-bottom: 16px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; }
    .value { font-size: 15px; font-weight: 600; color: #0f172a; margin-top: 4px; }
    .message-box { background: #f8fafc; border-left: 4px solid #7f1d1d; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 8px; white-space: pre-wrap; }
    .footer { background: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <!-- Company Logo -->
      <img src="https://mahixinfotech.com/mahix_logo.png" alt="Mahix InfoTech Logo" />
      <div><span class="badge">New Website Inquiry</span></div>
    </div>
    
    <div class="content">
      <div class="title">📋 Lead Details</div>
      
      <div class="field-group">
        <div class="label">Customer Name</div>
        <div class="value">{{from_name}}</div>
      </div>
      
      <div class="field-group">
        <div class="label">Customer Email</div>
        <div class="value"><a href="mailto:{{from_email}}" style="color: #7f1d1d;">{{from_email}}</a></div>
      </div>
      
      <div class="field-group">
        <div class="label">Phone Number</div>
        <div class="value">{{phone}}</div>
      </div>
      
      <div class="field-group">
        <div class="label">Company Name</div>
        <div class="value">{{company}}</div>
      </div>
      
      <div class="field-group">
        <div class="label">Requested Service</div>
        <div class="value" style="color: #1e3a8a; font-weight: 700;">{{service}}</div>
      </div>
      
      <div class="field-group">
        <div class="label">Submission Timestamp</div>
        <div class="value" style="font-size: 13px; color: #64748b;">{{submitted_at}}</div>
      </div>
      
      <div class="field-group" style="margin-top: 24px;">
        <div class="label">Message / Project Requirements</div>
        <div class="message-box">{{message}}</div>
      </div>
    </div>
    
    <div class="footer">
      This lead was captured from the official <strong>Mahix InfoTech</strong> website contact form.
    </div>
  </div>
</body>
</html>
```

6. Click **Save**. Copy the **Template ID** (e.g. `template_company_inquiry`).

---

### Step 4: Create Template 2 — Customer Auto-Reply Email
This template is automatically sent to the customer confirming their inquiry.

1. Click **Create New Template**.
2. Set the **Template Name**: `Customer Auto Reply`.
3. Set **To Email**: `{{to_email}}` (Customer Email).
4. Set **Subject Line**: `Thank you for contacting Mahix InfoTech - We've received your inquiry`
5. Switch to **HTML Code** tab or standard content editor, and paste the following HTML template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #7f1d1d 0%, #1e3a8a 100%); padding: 32px 20px; text-align: center; }
    .header img { max-height: 55px; width: auto; }
    .content { padding: 32px; }
    .greeting { font-size: 22px; font-weight: 800; color: #0f172a; margin-bottom: 12px; }
    .text { font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 20px; }
    .guarantee-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0; }
    .guarantee-title { font-size: 16px; font-weight: 800; color: #166534; margin-bottom: 4px; }
    .guarantee-text { font-size: 13px; color: #15803d; }
    .summary-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
    .summary-title { font-size: 13px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 12px; letter-spacing: 0.5px; }
    .summary-item { font-size: 14px; margin-bottom: 8px; color: #334155; }
    .contact-info { font-size: 13px; color: #64748b; line-height: 1.8; margin-top: 24px; border-top: 1px solid #f1f5f9; padding-top: 20px; }
    .footer { background: #0f172a; padding: 24px; text-align: center; font-size: 12px; color: #94a3b8; }
    .footer a { color: #f87171; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <!-- Company Logo -->
      <img src="https://mahixinfotech.com/mahix_logo.png" alt="Mahix InfoTech Logo" />
    </div>
    
    <div class="content">
      <div class="greeting">Hello {{first_name}},</div>
      
      <p class="text">
        Thank you for reaching out to <strong>Mahix InfoTech</strong>. We have successfully received your inquiry regarding <strong>{{service}}</strong>.
      </p>
      
      <div class="guarantee-box">
        <div class="guarantee-title">⚡ 24-Hour Response Guarantee</div>
        <div class="guarantee-text">Our engineering and consulting team is reviewing your message and will reach out to you within 24 hours.</div>
      </div>
      
      <div class="summary-box">
        <div class="summary-title">Summary of Your Inquiry</div>
        <div class="summary-item"><strong>Service:</strong> {{service}}</div>
        <div class="summary-item"><strong>Submitted Message:</strong></div>
        <div style="font-style: italic; color: #475569; margin-top: 4px;">"{{message}}"</div>
      </div>
      
      <p class="text">
        If you have any immediate details to add, feel free to reply directly to this email or call us at <strong>+91 8608610760</strong>.
      </p>
      
      <div class="contact-info">
        <strong>Mahix InfoTech Office</strong><br>
        89/4, Scheme Road, Krishna Raja Harini Illam,<br>
        Near Head Post Office Road, Dindigul, Tamil Nadu — 624001<br>
        Email: <a href="mailto:mahixinfotech@gmail.com" style="color: #7f1d1d;">mahixinfotech@gmail.com</a> | Phone: +91 8608610760
      </div>
    </div>
    
    <div class="footer">
      © {{company_name}}. All rights reserved.<br>
      Software Development & Digital Solutions | Dindigul, Tamil Nadu
    </div>
  </div>
</body>
</html>
```

6. Click **Save**. Copy the **Template ID** (e.g. `template_customer_reply`).

---

### Step 5: Get Public Key & Update `.env.local`
1. Go to **Account** (bottom left profile icon) → **API Keys**.
2. Copy your **Public Key** (e.g., `user_xyz123...`).
3. Open `.env.local` in your project root and update the variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_COMPANY_TEMPLATE_ID=your_company_template_id_here
NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID=your_customer_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

NEXT_PUBLIC_COMPANY_EMAIL=mahixinfotech@gmail.com
```

4. Restart your Next.js server (`npm run dev`) for changes to take effect!
