import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O Livro é digital ou físico?",
    answer:
      "O guia e todos os bônus são 100% digitais, e você recebe o acesso imediatamente por email após a compra.",
  },
  {
    question: "Este livro é indicado pra quem ainda não conhece nada sobre sabedoria oculta?",
    answer:
      "Sim! Todos os ensinamentos foram colocados em prática e validados por buscadores como você. A transformação é real, muitos relatam que, depois de aplicar, é como se uma nova percepção tivesse se aberto... e o melhor: sem os velhos padrões limitantes que você quer deixar pra trás.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Sim! O pagamento é 100% seguro, processado com criptografia 128bits. Seguimos a Lei Geral de Proteção de Dados Pessoais (LGPD) Lei nº 13.709, de 2018.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer:
      "Oferecemos uma garantia de satisfação de 7 dias. Se, por qualquer motivo, você sentir que o Ebook não atende às suas expectativas, pode solicitar um reembolso completo dentro desse período ou seja, você não corre nenhum risco.",
  },
  {
    question: "Como posso entrar em contato com o suporte?",
    answer:
      "Você pode entrar em contato com o nosso suporte pelo e-mail (24 horas 7 dias por semana) suporte@sabedoriasocultas.com.br. Estamos à disposição para te ajudar! 😄🙋",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-20 max-w-3xl mx-auto leading-tight">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-gray-500 text-base md:text-lg mb-14">
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
                    ? "linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(192, 132, 252, 0.05))"
                    : "rgba(0,0,0,0.02)",
                  border: `1px solid ${isOpen ? "rgba(147, 51, 234, 0.3)" : "rgba(0, 0, 0, 0.08)"}`,
                  boxShadow: isOpen
                    ? "0 0 30px rgba(147, 51, 234, 0.08), inset 0 1px 0 rgba(147, 51, 234, 0.05)"
                    : "none",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 min-h-[48px] text-left group cursor-pointer"
                >
                  <span
                    className="text-base md:text-lg font-semibold transition-colors duration-300"
                    style={{
                      color: isOpen ? "#7c3aed" : "#374151",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 transition-all duration-500"
                    style={{
                      background: isOpen
                        ? "linear-gradient(135deg, #8a2be2, #BD95FF)"
                        : "rgba(147, 51, 234, 0.1)",
                      boxShadow: isOpen
                        ? "0 0 15px rgba(189, 149, 255, 0.3)"
                        : "none",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown className="w-4 h-4 text-white" style={{ color: isOpen ? "white" : "#6b7280" }} />
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
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
