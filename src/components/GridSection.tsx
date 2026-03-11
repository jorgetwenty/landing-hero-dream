const GridSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Grid lines */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          opacity: 0.3,
          backgroundImage:
            'linear-gradient(90deg, #d9d9d9, #d9d9d9 1px, transparent 1px, transparent 11px), linear-gradient(0deg, #d9d9d9, #d9d9d9 1px, transparent 1px, transparent 11px)',
          backgroundSize: '50px 50px',
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(transparent 0%, #000 70%)',
        }}
      />
      {/* Purple glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, rgba(138, 43, 226, 0.15) 0%, transparent 60%)',
        }}
      />
      {/* Content goes here */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
      </div>
    </section>
  );
};

export default GridSection;
