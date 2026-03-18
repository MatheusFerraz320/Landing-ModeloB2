export async function sendToRd({ name, phone, email, company, product, finality, utmParams = {} }) {
const body = {
  token_rdstation: process.env.NEXT_PUBLIC_RD_TOKEN || "b49922e23ecdb074ee8c6562d96c06de",
  identificador: "[B2] Form Kronox",
  email,
  name,
  mobile_phone: phone || "",
  company_name: company || "",
  cf_produto_interesse: product || "",
  cf_finalidade: finality || "",

  ...(utmParams.utm_source && { utm_source: utmParams.utm_source }),
  ...(utmParams.utm_medium && { utm_medium: utmParams.utm_medium }),
  ...(utmParams.utm_campaign && { utm_campaign: utmParams.utm_campaign }),
  ...(utmParams.utm_term && { utm_term: utmParams.utm_term }),
  ...(utmParams.utm_content && { utm_content: utmParams.utm_content }),

  ...(utmParams.ad_id && { cf_ad_id: utmParams.ad_id }),
};

  const response = await fetch("https://api.rd.services/platform/conversions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("RD Station error:", errorData);
    throw new Error(errorData.message || `RD Station error ${response.status}`);
  }
  console.log("Enviado para RD Station:");
  return response.json();
}

export async function emailSend({ name, phone, email, company, message, finality }) {
  await emailjs.send(
  "service_xxx",     // service_id
  "template_xxx",    // template_id
  {
    name: name,
    email: email,
    phone: phone,
    message: message,
    company: company,
    finality: finality
  },
  "61xYofVMBaMtGRdio"   // public key
)}