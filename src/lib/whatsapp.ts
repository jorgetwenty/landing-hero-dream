export const WHATSAPP_NUMBER = "556133621309";

export const whatsappLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
