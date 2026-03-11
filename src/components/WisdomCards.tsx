import { Eye, Calculator, Zap, Flower2, Landmark, Compass } from "lucide-react";

const cards = [
  { icon: Eye, title: "Glândula Pineal", desc: "Ative sua glândula pineal para despertar a visão interior e atrair clareza, sucesso e prosperidade." },
  { icon: Calculator, title: "A importância da numerologia", desc: "Calcule e entenda a numerologia para descobrir seu número guia, alcançando autoconhecimento e sucesso." },
  { icon: Zap, title: "Aprenda a Elevar Suas Frequências Energéticas", desc: "Domine técnicas para elevar sua frequência energética, limpar sua vibração e atrair abundância diária." },
  { icon: Flower2, title: "Libere os 7 Chakras", desc: "Entenda e ative os 7 chakras para equilibrar corpo e alma, desvendando os segredos do seu corpo energético." },
  { icon: Landmark, title: "Os segredos do Vaticano", desc: "Explore as verdades e segredos seculares escondidos na Biblioteca do Vaticano que o mundo precisa saber." },
  { icon: Compass, title: "Segredos da Maçonaria", desc: "Desvende os mistérios, símbolos e o real funcionamento da Maçonaria, uma das sociedades mais enigmáticas da história." },
];

const WisdomCards = () => {
  return (
    <section className="wisdom-section relative w-full bg-[#0b0710] py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-16 md:mb-24 leading-snug max-w-3xl mx-auto" style={{ color: "#e0d6f0" }}>
          Veja o que você vai aprender com o livro da Sabedoria Oculta
        </h2>

        <div className="card-row flex justify-center items-center flex-wrap md:flex-nowrap">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isLast = i === cards.length - 1;
            return (
              <div
                key={i}
                className={`wisdom-card ${isLast ? "last-card" : ""}`}
              >
                <Icon className="wisdom-card-icon" size={40} />
                <h3 className="wisdom-card-title">{card.title}</h3>
                <p className="wisdom-card-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WisdomCards;
