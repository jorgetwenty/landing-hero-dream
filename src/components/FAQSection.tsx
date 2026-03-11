import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é o kit Sabedoria Oculta?",
    answer:
      "É um conjunto completo de livros que reúne conhecimentos ancestrais, técnicas de desenvolvimento pessoal e sabedoria oculta para transformar sua vida em todas as áreas — mental, espiritual e financeira.",
  },
  {
    question: "O conteúdo é digital ou físico?",
    answer:
      "O kit é 100% digital. Você recebe acesso imediato após a compra e pode ler em qualquer dispositivo — celular, tablet ou computador.",
  },
  {
    question: "Quanto tempo tenho para acessar o material?",
    answer:
      "O acesso é vitalício. Uma vez adquirido, o conteúdo é seu para sempre, sem mensalidades ou cobranças extras.",
  },
  {
    question: "Preciso ter conhecimento prévio sobre o assunto?",
    answer:
      "Não. O material foi desenvolvido para ser acessível tanto para iniciantes quanto para quem já possui conhecimento na área. A linguagem é clara e os conceitos são apresentados de forma progressiva.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer:
      "Se por qualquer motivo você não ficar satisfeito, basta entrar em contato dentro de 30 dias após a compra e devolvemos 100% do seu investimento — sem perguntas, sem burocracia.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Sim! Utilizamos uma plataforma de pagamento com criptografia de ponta, garantindo total segurança dos seus dados. Aceitamos cartão de crédito, PIX e boleto bancário.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="wisdom-headline">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-[#8a7ca8] text-base md:text-lg mb-14">
          Tire suas dúvidas sobre o kit Sabedoria Oculta
        </p>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: isOpen
                    ? "linear-gradient(135deg, rgba(58, 16, 120, 0.4), rgba(91, 63, 136, 0.15))"
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isOpen ? "rgba(189, 149, 255, 0.3)" : "rgba(189, 149, 255, 0.08)"}`,
                  boxShadow: isOpen
                    ? "0 0 30px rgba(138, 43, 226, 0.15), inset 0 1px 0 rgba(205, 174, 255, 0.1)"
                    : "none",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group cursor-pointer"
                >
                  <span
                    className="text-base md:text-lg font-semibold transition-colors duration-300"
                    style={{
                      color: isOpen ? "#CDAEFF" : "#c8c0d8",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 transition-all duration-500"
                    style={{
                      background: isOpen
                        ? "linear-gradient(135deg, #8a2be2, #BD95FF)"
                        : "rgba(189, 149, 255, 0.1)",
                      boxShadow: isOpen
                        ? "0 0 15px rgba(189, 149, 255, 0.3)"
                        : "none",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown className="w-4 h-4 text-white" />
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <div
                      className="h-px mb-4 w-full"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(189, 149, 255, 0.3), transparent)",
                      }}
                    />
                    <p className="text-[#9a90ab] text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
