const phrases = ["uma vida saudável", "para uma vida plena"];

const TextMarquee = () => {
  const items = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="flex items-center">
      {phrases.map((phrase) => (
        <span key={phrase} className="flex items-center">
          <span className="whitespace-nowrap">{phrase}</span>
          <span aria-hidden className="mx-6 text-[#16A34A]/60 md:mx-10">*</span>
        </span>
      ))}
    </span>
  ));

  return (
    <section
      aria-label="Frase da marca"
      className="overflow-hidden bg-background pb-10 pt-1 md:pb-16 md:pt-2"
    >
      <div className="marquee flex w-max items-baseline text-3xl font-thin tracking-tight text-[#16A34A] md:text-5xl">
        {items}
        {items}
      </div>
    </section>
  );
};

export default TextMarquee;