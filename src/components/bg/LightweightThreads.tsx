/**
 * Ultra-lightweight thread-like background.
 * Pure SVG + CSS - no JS, no WebGL, no Canvas. Minimal memory & CPU.
 * Shape: one thread left → many in middle → one thread right. 35 threads, varied motion.
 */
const THREAD_COUNT = 35;

export default function LightweightThreads() {
  // Generate paths: converge at left (0,50) → spread in middle → converge at right (400,50)
  const threads = Array.from({ length: THREAD_COUNT }, (_, i) => {
    const t = i / (THREAD_COUNT - 1);
    const y = 8 + t * 84; // spread from y=8 to y=92
    return {
      d: `M 0 50 C 85 50 85 ${y} 200 ${y} C 315 ${y} 315 50 400 50`,
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
