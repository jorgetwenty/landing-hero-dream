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
    <section className="wisdom-section">
      <div className="wisdom-container">
        <h2 className="wisdom-headline">
          Veja o que você vai aprender com o livro da Sabedoria Oculta
        </h2>

        <div className="card-efeitoxpai">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isLast = i === cards.length - 1;
            return (
              <div key={i} className={`card-efeitox${isLast ? " x" : ""}`}>
                <Icon className="card-icon" size={40} strokeWidth={1.5} />
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WisdomCards;
