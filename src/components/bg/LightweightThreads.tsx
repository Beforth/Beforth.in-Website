/**
 * Ultra-lightweight thread-like background.
 * Pure SVG + CSS - no JS, no WebGL, no Canvas. Minimal memory & CPU.
 * Shape: one thread left → many in middle → one thread right. 35 threads, varied motion.
 */
const THREAD_COUNT = 35;

export default function LightweightThreads() {
  // Generate paths: varied bends per thread (1, 2, 3, 4, or 5 bends)
  const threads = Array.from({ length: THREAD_COUNT }, (_, i) => {
    const t = i / (THREAD_COUNT - 1);
    const amp = 15 + t * 20;
    const y = 8 + t * 84;
    const bends = 1 + (i % 5); // 1 to 5 bends per thread
    let d: string;
    if (bends === 1) {
      d = `M 0 50 C 200 50 200 ${y} 400 50`;
    } else if (bends === 2) {
      const y1 = 50 - amp;
      d = `M 0 50 C 100 50 100 ${y1} 200 ${y1} C 300 ${y1} 300 50 400 50`;
    } else if (bends === 3) {
      const y1 = 50 - amp;
      const y2 = 50 + amp * 0.8;
      d = `M 0 50 C 66 50 66 ${y1} 133 ${y1} C 200 ${y1} 200 ${y2} 267 ${y2} C 334 ${y2} 334 50 400 50`;
    } else if (bends === 4) {
      const y1 = 50 - amp;
      const y2 = 50 + amp * 0.9;
      const y3 = 50 - amp * 0.7;
      d = `M 0 50 C 50 50 50 ${y1} 100 ${y1} C 150 ${y1} 150 ${y2} 200 ${y2} C 250 ${y2} 250 ${y3} 300 ${y3} C 350 ${y3} 350 50 400 50`;
    } else {
      const y1 = 50 - amp;
      const y2 = 50 + amp * 0.9;
      const y3 = 50 - amp * 0.7;
      const y4 = 50 + amp * 0.6;
      d = `M 0 50 C 40 50 40 ${y1} 80 ${y1} C 120 ${y1} 120 ${y2} 160 ${y2} C 200 ${y2} 200 ${y3} 240 ${y3} C 280 ${y3} 280 ${y4} 320 ${y4} C 360 ${y4} 360 50 400 50`;
    }
    return {
      d,
      delay: (i * 0.15) % 3,
      duration: 8 + (i % 9) * 1.5,
      dir: i % 2 === 0 ? 1 : -1,
    };
  });

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[500px] w-full overflow-hidden"
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 400 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="thread-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0" />
            <stop offset="12%" stopColor="#94a3b8" stopOpacity="0.14" />
            <stop offset="50%" stopColor="#64748b" stopOpacity="0.18" />
            <stop offset="88%" stopColor="#94a3b8" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {threads.map((t, i) => (
          <path
            key={i}
            d={t.d}
            fill="none"
            stroke="url(#thread-fade)"
            strokeWidth="0.26"
            strokeLinecap="round"
            className="animate-thread-drift"
            style={{
              transformOrigin: '0 50px',
              animationDelay: `${t.delay}s`,
              animationDuration: `${t.duration}s`,
              animationDirection: t.dir === 1 ? 'normal' : 'alternate',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
