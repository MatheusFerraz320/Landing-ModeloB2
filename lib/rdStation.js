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

      name: name,
      email: email,
      personal_phone: phone || "",
      company_name: company || "",

      cf_produto_interesse: product || "",
      cf_finalidade: finality || "",

      ...(utmParams.utm_source && { utm_source: utmParams.utm_source }),
      ...(utmParams.utm_medium && { utm_medium: utmParams.utm_medium }),
      ...(utmParams.utm_campaign && { utm_campaign: utmParams.utm_campaign }),
      ...(utmParams.utm_term && { utm_term: utmParams.utm_term }),
      ...(utmParams.utm_content && { utm_content: utmParams.utm_content }),

      ...(utmParams.ad_id && { cf_ad_id: utmParams.ad_id }),
    },
  };

  try {
    const response = await fetch(
      "https://api.rd.services/platform/conversions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_RD_TOKEN}`,
        },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();

    console.log("RD STATUS:", response.status);
    console.log("RD RESPONSE:", text);

    if (!response.ok) {
      throw new Error(`RD error ${response.status}`);
    }

    return text;
  } catch (error) {
    console.error("RD ERROR:", error);
    throw error;
  }
}