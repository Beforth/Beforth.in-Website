import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Layout, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Requirements & tech stack',
    label: 'Discovery',
    desc: 'We gather your requirements, understand your process, and decide the right tech stack for your needs.',
  },
  {
    num: '02',
    title: 'Design & approval',
    label: 'Architecture',
    desc: 'We design the solution, share it with you, and iterate until you approve. Your feedback shapes every decision.',
  },
  {
    num: '03',
    title: 'Build, fix & deliver',
    label: 'Delivery',
    desc: 'We build, fix issues, refine, and deliver your final product. Ready to run your business.',
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  
  // Using an array of refs for cleaner logic
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fragRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // 1. Activate snapping on the HTML element
    document.documentElement.classList.add('how-it-works-snap-active');

    const triggers: ScrollTrigger[] = [];

    stepRefs.current.forEach((step, i) => {
      if (!step) return;

      // 2. Create the Trigger to update the Left Side State
      const st = ScrollTrigger.create({
        trigger: step,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) setActiveStep(i + 1);
        },
      });
      triggers.push(st);

      // 3. Create the Entrance Animation for the Still-Life Fragments
      const fragment = fragRefs.current[i];
      if (fragment) {
        const t = gsap.fromTo(
          fragment,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
        if (t.scrollTrigger) triggers.push(t.scrollTrigger);
      }
    });

    // Cleanup - only kill our triggers
    return () => {
      triggers.forEach((t) => t.kill());
      document.documentElement.classList.remove('how-it-works-snap-active');
    };
  }, []);

  return (
    <section className="bg-stone-50 relative py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* LEFT: FIXED CONTENT - visible on mobile at top, sticky on desktop */}
          <div className="lg:order-1">
            <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center">
              <p className="text-teal-600 font-semibold tracking-[0.2em] uppercase text-xs mb-3 md:mb-4">
                How it works
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 lg:mb-6">
                From chaos
                <br />
                <span className="text-teal-600">to clarity.</span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-md mb-8 lg:mb-12">
                We gather requirements, decide the tech stack, design and get your approval, fix issues, and deliver your final product.
              </p>

              {/* Step Indicators */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className="flex items-center gap-4 sm:gap-6 transition-all duration-500"
                    style={{ opacity: activeStep === i + 1 ? 1 : 0.35 }}
                  >
                    <div
                      className={`h-px flex-shrink-0 transition-all duration-500 ${
                        activeStep === i + 1 ? 'w-12 sm:w-16 bg-teal-600' : 'w-6 sm:w-8 bg-stone-300'
                      }`}
                    />
                    <div className="min-w-0">
                      <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] block ${activeStep === i + 1 ? 'text-teal-600' : 'text-stone-500'}`}>
                        {step.num} {step.title}
                      </span>
                      {activeStep === i + 1 && (
                        <span className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2 block max-w-xs leading-relaxed">
                          {step.desc}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: SNAPPING COMPOSITIONS */}
          <div className="order-2 lg:order-2">
            {/* Step 1 - Requirements & tech stack */}
            <div
              ref={(el) => (stepRefs.current[0] = el)}
              className="how-it-works-snap-point min-h-[70vh] lg:min-h-screen flex items-center justify-center py-8 lg:py-0"
            >
              <div className="w-full min-h-[280px] sm:min-h-[360px] lg:h-[75%] lg:max-h-[550px] rounded-2xl lg:rounded-[48px] bg-stone-100 border border-stone-200 relative flex items-center justify-center overflow-hidden bg-[radial-gradient(#e7e5e4_1.5px,transparent_1.5px)] bg-[length:32px_32px]">
                <div
                  ref={(el) => (fragRefs.current[0] = el)}
                  className="w-[min(100%,320px)] max-w-[320px] bg-white border border-stone-200 rounded-2xl shadow-2xl p-4 sm:p-6 z-10"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-bold text-foreground">Requirements</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="h-2 w-full bg-stone-100 rounded" />
                    <div className="h-2 w-4/5 bg-stone-100 rounded" />
                    <div className="h-2 w-3/4 bg-stone-100 rounded" />
                  </div>
                  <div className="pt-3 border-t border-stone-100">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node', 'Postgres'].map((t) => (
                        <span key={t} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-md border border-teal-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-4 lg:bottom-10 text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.5em] text-stone-400 font-bold">
                  {steps[0].title}
                </span>
              </div>
            </div>

            {/* Step 2 - Design & approval */}
            <div
              ref={(el) => (stepRefs.current[1] = el)}
              className="how-it-works-snap-point min-h-[70vh] lg:min-h-screen flex items-center justify-center py-8 lg:py-0"
            >
              <div className="w-full min-h-[280px] sm:min-h-[360px] lg:h-[75%] lg:max-h-[550px] rounded-2xl lg:rounded-[48px] bg-teal-50/30 border border-teal-100 relative flex items-center justify-center overflow-hidden">
                <div
                  ref={(el) => (fragRefs.current[1] = el)}
                  className="w-[min(100%,340px)] max-w-[340px] bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden z-10"
                >
                  <div className="flex gap-2 p-3 sm:p-4 border-b border-stone-100">
                    <div className="w-2 h-2 rounded-full bg-red-100" />
                    <div className="w-2 h-2 rounded-full bg-amber-100" />
                    <div className="w-2 h-2 rounded-full bg-green-100" />
                  </div>
                  <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2">
                      <Layout className="w-5 h-5 text-teal-600" />
                      <span className="text-sm font-bold text-foreground">Design mockup</span>
                    </div>
                    <div className="h-24 bg-stone-50 rounded-xl border border-stone-100" />
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground">Awaiting approval</span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">Review</span>
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-4 lg:bottom-10 text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.5em] text-stone-400 font-bold">
                  {steps[1].title}
                </span>
              </div>
            </div>

            {/* Step 3 - Build, fix & deliver */}
            <div
              ref={(el) => (stepRefs.current[2] = el)}
              className="how-it-works-snap-point min-h-[70vh] lg:min-h-screen flex items-center justify-center py-8 lg:py-0"
            >
              <div className="w-full min-h-[280px] sm:min-h-[360px] lg:h-[75%] lg:max-h-[550px] rounded-2xl lg:rounded-[48px] bg-stone-100 border border-stone-200 relative flex items-center justify-center overflow-hidden bg-[radial-gradient(#e7e5e4_1.5px,transparent_1.5px)] bg-[length:32px_32px]">
                <div
                  ref={(el) => (fragRefs.current[2] = el)}
                  className="w-[min(100%,320px)] max-w-[320px] bg-white border-2 border-teal-200 rounded-2xl shadow-2xl p-4 sm:p-6 z-10"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-teal-600" />
                    <span className="text-sm font-bold text-foreground">Final product</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="h-3 w-full bg-teal-500/20 rounded" />
                    <div className="h-3 w-4/5 bg-teal-500/10 rounded" />
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-12 bg-stone-50 rounded-lg" />
                      <div className="h-12 bg-teal-50 rounded-lg border border-teal-100" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-stone-100">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-teal-600">Live & delivered</span>
                  </div>
                </div>
                <span className="absolute bottom-4 lg:bottom-10 text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.5em] text-stone-400 font-bold">
                  {steps[2].title}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}