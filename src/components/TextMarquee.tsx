const phrases = ["uma vida saudável", "para uma vida plena"];

const TextMarquee = () => {
  const items = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="flex items-center">
      {phrases.map((phrase) => (
        <span key={phrase} className="flex items-center">
          <span className="whitespace-nowrap">{phrase}</span>
          <span aria-hidden className="mx-6 text-[0.55em] opacity-70 md:mx-10">✦</span>
        </span>
      ))}
    </span>
  ));

  return (
    <section
      aria-label="Frase da marca"
      className="overflow-hidden bg-[#D9C9AE] py-5 md:py-7"
    >
      <div className="marquee flex w-max items-baseline text-2xl font-semibold uppercase tracking-tight text-white md:text-4xl">
        {items}
        {items}
      </div>
    </section>
  );
};

export default TextMarquee;