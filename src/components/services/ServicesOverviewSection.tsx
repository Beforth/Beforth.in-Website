import { motion } from 'framer-motion';
import { IndianRupee, ShoppingCart, Package, AlertTriangle, Mail, Cloud, MessageSquare, Zap } from 'lucide-react';

const dashboardStats = [
  { label: 'Today', value: '₹2.4L', icon: IndianRupee },
  { label: 'Orders', value: '127', icon: ShoppingCart },
  { label: 'Low', value: '3', icon: Package },
  { label: 'Tasks', value: '5', icon: AlertTriangle },
];

const integrations = [
  { name: 'Gmail', icon: Mail, bg: '#ea4335', pos: 'right-[3%] bottom-[25%]' },
  { name: 'Google', icon: Cloud, bg: '#4285f4', pos: 'right-[18%] bottom-[5%]' },
  { name: 'Slack', icon: MessageSquare, bg: '#4a154b', pos: 'left-[2%] bottom-[20%]' },
  { name: 'Zapier', icon: Zap, bg: '#ff6b35', pos: 'right-[8%] bottom-[40%]' },
];

/** Still-life composition with hover effects */
export function ServicesOverviewSection() {
  return (
    <div id="services-overview" className="scroll-mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text side - left: minimal */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-1 lg:pl-4 lg:pt-2"
        >
          <div>
            <div className="w-12 h-px bg-stone-300 mb-4" aria-hidden />
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-[0.2em] mb-4">Services</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-5">
              Custom <span className="text-teal-600">Systems</span>
              <br />
              & Pure <span className="text-teal-600">Integrations.</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              We compose digital ecosystems. Mobile apps, dashboards, and integrations—all connected.
            </p>
            <div className="flex gap-4 text-sm font-semibold uppercase tracking-widest text-stone-400">
              <span>Mobile</span>
              <span>•</span>
              <span>Dashboard</span>
              <span>•</span>
              <span>Integrations</span>
            </div>
          </div>
        </motion.div>

        {/* Composition - right: still-life with hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[380px] sm:min-h-[420px] lg:h-[480px] flex items-center justify-center order-2 lg:order-2"
        >
          <div className="absolute right-[8%] bottom-[12%] w-28 h-28 bg-teal-500 rounded-full opacity-[0.08] blur-2xl" />

          {/* Dashboard slice - hover: lift + scale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02, rotate: -3 }}
            className="absolute w-[280px] sm:w-[320px] bg-white rounded-xl border border-stone-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] p-4 z-[2] -rotate-[5deg] cursor-pointer transition-all hover:shadow-xl hover:border-teal-200/60"
          >
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-200" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-200" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-200" />
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-2 bg-teal-500 rounded-full w-3/5" />
              <div className="h-2 bg-stone-100 rounded-full w-full" />
              <div className="h-2 bg-stone-100 rounded-full w-4/5" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {dashboardStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="h-14 bg-stone-50 rounded-lg p-2 flex flex-col justify-center border border-stone-100">
                    <div className="flex items-center gap-1">
                      <Icon className="w-3 h-3 text-teal-600" />
                      <span className="text-[9px] text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="text-sm font-bold text-foreground">{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Mobile device - hover: lift */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02, rotate: 8 }}
            className="absolute left-[5%] top-[8%] w-[140px] sm:w-[160px] rounded-[24px] border-[6px] border-stone-800 bg-stone-800 shadow-xl z-[4] rotate-[5deg] overflow-hidden cursor-pointer transition-all hover:shadow-2xl hover:shadow-teal-500/10"
          >
            <div className="aspect-[9/19] bg-white p-3">
              <div className="w-8 h-8 rounded-full bg-stone-100 mb-4" />
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-stone-100 rounded" />
                <div className="h-1.5 w-5/6 bg-stone-100 rounded" />
                <div className="h-1.5 w-2/3 bg-stone-50 rounded" />
              </div>
              <div className="mt-12 h-20 w-full bg-teal-500 rounded-xl" />
            </div>
          </motion.div>

          {/* Live System badge - hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="absolute right-[5%] top-[15%] z-10 px-4 py-3 bg-white border border-stone-200 rounded-xl shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Live System</span>
            </div>
          </motion.div>

          {/* Integration icons - each separate, split across composition */}
          {integrations.map(({ name, icon: Icon, bg, pos }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className={`absolute z-[3] w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg cursor-pointer ${pos}`}
              style={{ backgroundColor: bg }}
            >
              <Icon className="w-5 h-5" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
