const particles = [
  { left: "8%", top: "18%", size: 5 },
  { left: "22%", top: "68%", size: 3 },
  { left: "35%", top: "32%", size: 4 },
  { left: "48%", top: "80%", size: 3 },
  { left: "62%", top: "22%", size: 5 },
  { left: "74%", top: "58%", size: 3 },
  { left: "85%", top: "14%", size: 4 },
  { left: "92%", top: "70%", size: 3 },
  { left: "15%", top: "88%", size: 4 },
  { left: "55%", top: "6%", size: 3 },
];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Circuit-board grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(228,228,231,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(228,228,231,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute -top-40 -left-24 w-[30rem] h-[30rem] rounded-full bg-white/[0.05] blur-[110px] animate-blob-move" />
      <div
        className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-zinc-400/[0.06] blur-[110px] animate-blob-move"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute bottom-[-8rem] left-1/4 w-[26rem] h-[26rem] rounded-full bg-white/[0.04] blur-[120px] animate-blob-move"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-[20rem] h-[20rem] rounded-full bg-zinc-500/[0.05] blur-[100px] animate-blob-move"
        style={{ animationDelay: "-11s" }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-particle-float bg-zinc-400"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgba(228,228,231,0.6)",
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
