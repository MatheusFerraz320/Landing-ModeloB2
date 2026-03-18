export async function sendToRd({
  name,
  phone,
  email,
  company,
  product,
  finality,
  utmParams = {},
}) {
  const body = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload: {
      conversion_identifier: "[B2] Form Kronox",

      name,
      email,
      phone: phone || "",
      company: company || "",

      product: product || "",
      finality: finality || "",

      ...(utmParams.utm_source && { utm_source: utmParams.utm_source }),
      ...(utmParams.utm_medium && { utm_medium: utmParams.utm_medium }),
      ...(utmParams.utm_campaign && { utm_campaign: utmParams.utm_campaign }),
      ...(utmParams.utm_term && { utm_term: utmParams.utm_term }),
      ...(utmParams.utm_content && { utm_content: utmParams.utm_content }),

      ...(utmParams.ad_id && { ad_id: utmParams.ad_id }),
    },
  };

  try {
    const token = "b49922e23ecdb074ee8c6562d96c06de"
    const response = await fetch(
      "https://api.rd.services/platform/conversions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();

    console.log("📡 RD STATUS:", response.status);
    console.log("📨 RD RESPONSE:", text);
    console.log("📦 BODY ENVIADO:", body);

    if (!response.ok) {
      throw new Error(`RD error ${response.status} - ${text}`);
    }

    return text;
  } catch (error) {
    console.error("❌ RD ERROR:", error);
    throw error;
  }
}

import emailjs from "@emailjs/browser";

export async function emailSend({
  name,
  phone,
  email,
  company,
  message,
  finality,
}) {
  try {
    const response = await emailjs.send(
      "service_xxx",
      "template_xxx",
      {
        name,
        email,
        phone,
        company,
        message,
        finality,
      },
      "public_key_xxx"
    );

    console.log("📧 EMAIL ENVIADO:", response);
    return response;
  } catch (error) {
    console.error("❌ ERRO EMAIL:", error);
    throw error;
  }
}