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
  utm_source: utmParams.utm_source || "",
  utm_medium: utmParams.utm_medium || "",
  utm_campaign: utmParams.utm_campaign || "",
  utm_term: utmParams.utm_term || "",
  utm_content: utmParams.utm_content || "",
  ad_id: utmParams.ad_id || "",
};
  const response = await fetch("https://www.rdstation.com.br/api/1.3/conversions", {
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