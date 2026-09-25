export const WHATSAPP_NUMBER = "5561996396886";

export const whatsappLink = (message: string) => {
  const params = new URLSearchParams({
    phone: WHATSAPP_NUMBER,
    text: message,
    type: "phone_number",
    app_absent: "0",
  });

  return `https://web.whatsapp.com/send/?${params.toString()}`;
};
