export async function sendToRd({ name, phone, email, company, product, finality, utmParams }) {
  const body = {
    token_rdstation: process.env.NEXT_PUBLIC_RD_TOKEN || "aa831b26629b5b5a0c6016e67c2bcc08",
    identificador: "form-kronox-landing",
    email,
    name,
    mobile_phone: phone || "",
    company_name: company || "",
    cf_produto_interesse: product || "",
    cf_finalidade: finality || "",
    cf_utm_source: utmParams.utm_source || "",
    cf_utm_medium: utmParams.utm_medium || "",
    cf_utm_campaign: utmParams.utm_campaign || "",
    cf_utm_term: utmParams.utm_term || "",
    cf_utm_content: utmParams.utm_content || "",
    cf_ad_id: utmParams.ad_id || "",
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

  return response.json();
}