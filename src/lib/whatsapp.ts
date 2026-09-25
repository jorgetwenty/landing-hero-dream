export const WHATSAPP_NUMBER = "5561996396886";

export const whatsappLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
