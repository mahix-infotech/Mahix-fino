import emailjs from "@emailjs/browser"

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

export interface EmailServiceResult {
  success: boolean
  message: string
  isConfigured: boolean
}

/**
 * Gets production-ready EmailJS environment configuration
 */
function getEmailConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_fwmsdda"
  const companyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_COMPANY_TEMPLATE_ID || "template_ycomids"
  const customerTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID || "template_ycomids"
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "U-xAF51I3cvun6mQo"
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "mahixinfotech@gmail.com"

  return {
    serviceId,
    companyTemplateId,
    customerTemplateId,
    publicKey,
    companyEmail,
  }
}

/**
 * Checks if EmailJS environment variables are configured
 */
export function isEmailJSConfigured(): boolean {
  const { serviceId, companyTemplateId, publicKey } = getEmailConfig()
  return (
    Boolean(serviceId) &&
    Boolean(companyTemplateId) &&
    Boolean(publicKey) &&
    !serviceId.includes("your_") &&
    !serviceId.includes("service_mahix")
  )
}

/**
 * Dispatches inquiry emails via EmailJS:
 * 1. Company Notification -> mahixinfotech@gmail.com
 * 2. Customer Auto-Reply -> Customer Email (if customer template ID is configured)
 */
export async function sendInquiryEmails(data: ContactFormData): Promise<EmailServiceResult> {
  const { serviceId, companyTemplateId, customerTemplateId, publicKey, companyEmail } = getEmailConfig()

  const fullName = `${data.firstName} ${data.lastName}`.trim()
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  })

  const templateParams = {
    // Customer details
    first_name: data.firstName,
    last_name: data.lastName,
    from_name: fullName,
    from_email: data.email,
    to_name: fullName,
    to_email: data.email,
    reply_to: data.email,
    phone: data.phone?.trim() || "Not provided",
    company: data.company?.trim() || "Not provided",
    service: data.service?.trim() || "General Inquiry",
    message: data.message,
    submitted_at: submittedAt,

    // Company details
    company_email: companyEmail,
    company_name: "Mahix InfoTech",
  }

  // Check setup status
  if (!isEmailJSConfigured()) {
    console.warn(
      "[EmailJS Notice] EmailJS keys missing.\nSubmitted Data:",
      templateParams
    )

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Form submission processed (Preview Mode).",
      isConfigured: false,
    }
  }

  try {
    const promises: Promise<any>[] = []

    // 1. Send Company Notification Email (To mahixinfotech@gmail.com)
    promises.push(
      emailjs.send(
        serviceId,
        companyTemplateId,
        templateParams,
        publicKey
      )
    )

    // 2. Send Customer Auto-Reply Email if a distinct customer template ID is configured
    if (
      customerTemplateId &&
      customerTemplateId !== companyTemplateId &&
      !customerTemplateId.includes("your_")
    ) {
      promises.push(
        emailjs.send(
          serviceId,
          customerTemplateId,
          templateParams,
          publicKey
        )
      )
    }

    // Await email dispatches concurrently
    const responses = await Promise.all(promises)
    console.log("[EmailJS Live Success]", responses)

    return {
      success: true,
      message: "Inquiry sent successfully via EmailJS.",
      isConfigured: true,
    }
  } catch (error: any) {
    console.error("[EmailJS Live Error Details]:", {
      status: error?.status,
      text: error?.text,
      error,
    })
    
    const errText = error?.text || error?.message || "EmailJS server connection failed."
    return {
      success: false,
      message: error?.status ? `EmailJS Error (${error.status}): ${errText}` : errText,
      isConfigured: true,
    }
  }
}
