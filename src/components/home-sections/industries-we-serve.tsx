import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FlaskConical, Store, Warehouse, Gem, Shirt, ShoppingCart, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { tag: 'Pharma', label: 'Pharma Manufacturing', focus: 'Accuracy & compliance', top: '15%', left: '20%', icon: FlaskConical },
  { tag: 'Retail', label: 'Salons & Retail', focus: 'Speed & billing', top: '10%', right: '25%', icon: Store },
  { tag: 'Wholesale', label: 'Distribution Hubs', focus: 'Stock & accounts', bottom: '15%', left: '15%', icon: Warehouse },
  { tag: 'Jewellery', label: 'Gold & Jewellery', focus: 'Precise tracking', bottom: '10%', right: '15%', icon: Gem },
  { tag: 'Textiles', label: 'Garment & Textiles', focus: 'Inventory & orders', top: '45%', right: '5%', icon: Shirt },
  { tag: 'E-Commerce', label: 'Real-time Sales', focus: 'Sync & scale', top: '45%', left: '5%', icon: ShoppingCart },
];

export function IndustriesWeServe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const hub = hubRef.current;
    const svg = svgRef.current;
    const container = containerRef.current;
    const nodes = nodesRef.current.filter(Boolean) as HTMLDivElement[];

    if (!hub || !svg || !container || nodes.length === 0) return;

    // Clear any existing lines (prevents duplicates in Strict Mode)
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const lines: SVGLineElement[] = nodes.map(() => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('stroke', '#e7e5e4');
      line.setAttribute('stroke-width', '1');
      line.setAttribute('stroke-dasharray', '4 4');
      line.setAttribute('opacity', '0.3');
      svg.appendChild(line);
      return line;
    });

    // Unified Update Function
    const updateLines = () => {
      const sRect = svg.getBoundingClientRect();
      const hRect = hub.getBoundingClientRect();
      const hX = hRect.left + hRect.width / 2 - sRect.left;
      const hY = hRect.top + hRect.height / 2 - sRect.top;

      nodes.forEach((node, i) => {
        const nRect = node.getBoundingClientRect();
        const nX = nRect.left + nRect.width / 2 - sRect.left;
        const nY = nRect.top + nRect.height / 2 - sRect.top;

        lines[i].setAttribute('x1', String(hX));
        lines[i].setAttribute('y1', String(hY));
        lines[i].setAttribute('x2', String(nX));
        lines[i].setAttribute('y2', String(nY));
      });
    };

    // GSAP Intro Animations
    const ctx = gsap.context(() => {
      nodes.forEach((node, i) => {
        gsap.from(node, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
          },
        });

        // Floating Animation
        gsap.to(node, {
          y: 'random(-15, 15)',
          x: 'random(-10, 10)',
          duration: 'random(2.5, 4)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          onUpdate: updateLines, // Critically important: lines follow the float
        });
      });
    }, container);

    // Sync lines on resize and scroll
    window.addEventListener('resize', updateLines);
    // Initial draw
    setTimeout(updateLines, 100); 

    return () => {
      ctx.revert(); // Cleans up GSAP and ScrollTriggers
      window.removeEventListener('resize', updateLines);
    };
  }, []);

  const hubContent = hoveredIndex !== null ? industries[hoveredIndex] : null;

  return (
    <section className="py-20 md:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-3 md:mb-4">
            Industries we served
          </h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground px-1">
            Your process, our platform
          </h3>
        </motion.div>

        {/* Mobile: Grid layout */}
        <div className="md:hidden grid grid-cols-2 gap-3 sm:gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="block text-[9px] text-muted-foreground font-bold uppercase tracking-wider">
                    {ind.tag}
                  </span>
                </div>
                <span className="block text-foreground font-semibold text-sm leading-tight">
                  {ind.label}
                </span>
                <span className="block text-[10px] text-muted-foreground mt-1">
                  {ind.focus}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: Orbit layout */}
        <div
          ref={containerRef}
          className="hidden md:block relative h-[600px] lg:h-[750px] flex items-center justify-center"
        >
          {/* SVG Canvas for Lines */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
          />

          {/* Central Hub - shows industry on hover, default title otherwise */}
          <div
            ref={hubRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-44 h-44 md:w-52 md:h-52 bg-primary rounded-full flex flex-col items-center justify-center text-primary-foreground text-center shadow-xl shadow-primary/25 border border-primary/80 px-5"
          >
            {hubContent ? (
              <>
                <div className="mb-2">
                  {(() => {
                    const HubIcon = hubContent.icon;
                    return (
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                        <HubIcon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    );
                  })()}
                </div>
                <span className="text-[9px] uppercase tracking-widest opacity-80 mb-1">
                  {hubContent.tag}
                </span>
                <span className="font-bold text-sm md:text-base leading-tight">
                  {hubContent.label}
                </span>
                <span className="text-[10px] opacity-90 mt-1 font-normal">
                  {hubContent.focus}
                </span>
              </>
            ) : (
              <>
                <div className="mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                    <Layers className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-[9px] uppercase tracking-widest opacity-80 mb-1">
                  Industries we served
                </span>
                <span className="font-bold text-sm md:text-base leading-tight">
                  Your process, our platform
                </span>
              </>
            )}
          </div>

          {/* Industry Nodes */}
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.label}
                ref={(el) => (nodesRef.current[i] = el)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`absolute z-10 bg-card border px-6 py-4 rounded-2xl font-semibold text-sm shadow-sm cursor-pointer transition-all duration-300 min-w-[160px] text-center ${
                  hoveredIndex === i
                    ? 'border-primary text-primary shadow-lg shadow-primary/15'
                    : 'border-border hover:border-primary/70 hover:text-primary'
                }`}
                style={{
                  top: ind.top,
                  bottom: ind.bottom,
                  left: ind.left,
                  right: ind.right,
                }}
              >
                <div className="flex justify-center mb-2">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    hoveredIndex === i ? 'bg-primary/15' : 'bg-muted'
                  }`}>
                    <Icon className={`w-4 h-4 ${hoveredIndex === i ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                </div>
                <span className="block text-[9px] text-muted-foreground font-bold uppercase tracking-widest mb-1">
                  {ind.tag}
                </span>
                <span className="block text-foreground">{ind.label}</span>
                <div className="h-px w-4 bg-border mx-auto my-2" />
                <span className="block text-[10px] text-muted-foreground font-normal">
                  {ind.focus}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}