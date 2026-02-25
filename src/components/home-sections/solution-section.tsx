import { motion } from 'framer-motion';
import { DoodleIcon } from '../ui/doodle-icon';

const solutions = [
  {
    title: 'Advanced Systems',
    description: 'Proven architectures and modern technology for accurate, efficient solutions. Real-time analytics, automated reporting, and data-driven insights that scale with your business.',
    features: ['Real-time analytics', 'Automated reporting', 'Scalable architecture'],
    icon: 'interface/analytics.svg',
    dashboardLarge: false,
    dashboard: (
      <div className="p-1.5 space-y-1">
        <div className="flex gap-1">
          {[
            { label: 'Revenue', value: '₹2.4L' },
            { label: 'Orders', value: '127' },
          ].map((s) => (
            <div key={s.label} className="flex-1 bg-stone-100 rounded p-1 border border-stone-200">
              <p className="text-[8px] text-muted-foreground">{s.label}</p>
              <p className="text-[10px] font-bold text-foreground">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-0.5 h-5">
          {[40, 65, 45, 80, 55, 70].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.1 + i * 0.03 }}
              className="flex-1 bg-teal-500 rounded-t min-w-[4px]"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Secure Data Handling',
    description: 'Encryption and strict privacy protocols to keep your information confidential. Role-based access, audit trails, and compliant data storage for peace of mind.',
    features: ['End-to-end encryption', 'Audit trails', 'Role-based access'],
    icon: 'interface/shield.svg',
    dashboardLarge: false,
    dashboard: (
      <div className="p-1.5 space-y-1">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[8px] text-teal-600 font-medium">Encryption Active</span>
        </div>
        <div className="space-y-0.5">
          {['Audit log', 'Access control', 'Backup'].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-[8px] text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-teal-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Seamless Integration',
    description: 'Integrate with your existing workflows and systems for smooth operations. Connect ERP, CRM, accounting tools, and custom APIs—data flows where you need it.',
    features: ['ERP & CRM connectors', 'API integrations', 'Real-time sync'],
    icon: 'misc/automation.svg',
    dashboardLarge: true,
    dashboard: (
      <div className="p-2 space-y-2 min-w-0">
        <div className="grid grid-cols-3 gap-1">
          {['ERP', 'CRM', 'API', 'Accounting', 'Inventory', 'Payroll'].map((conn) => (
            <div key={conn} className="rounded bg-teal-50 border border-teal-200 py-1.5 px-1 text-center">
              <span className="text-[9px] font-medium text-teal-700 block truncate">{conn}</span>
              <span className="block w-1.5 h-1.5 bg-green-500 rounded-full mx-auto mt-0.5" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[9px] text-muted-foreground">
          <span>Sync: Real-time</span>
          <span>Last: 2 min ago</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Customizable Solutions',
    description: 'Tailor our services to your needs with flexible customization options. Configure modules, workflows, and reports to match your exact process.',
    features: ['Module configuration', 'Custom workflows', 'Flexible reporting'],
    icon: 'interface/setting.svg',
    dashboardLarge: false,
    dashboard: (
      <div className="p-1.5 space-y-1">
        {['Modules', 'Workflows', 'Reports'].map((m) => (
          <div key={m} className="flex justify-between items-center text-[8px] text-muted-foreground">
            <span>{m}</span>
            <span className="w-6 h-1 bg-stone-200 rounded" />
          </div>
        ))}
      </div>
    ),
  },
];

function SolutionCard({
  title,
  description,
  features,
  icon,
  dashboard,
  index,
  className,
  dashboardLarge,
}: {
  title: string;
  description: string;
  features?: string[];
  icon: string;
  dashboard: React.ReactNode;
  index: number;
  className?: string;
  dashboardLarge?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`rounded-2xl group/bento overflow-hidden shadow-input bg-gradient-to-b from-stone-100/80 to-stone-100/80 hover:from-teal-50 hover:to-stone-100/80 border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col ${className || ''}`}
    >
      {/* Text section - top */}
      <div className="p-6 shrink-0">
        <div className="mb-3 text-primary">
          <DoodleIcon name={icon} className="h-6 w-6" />
        </div>
        <div className="font-sans font-bold text-foreground mb-2">{title}</div>
        <div className="font-sans text-muted-foreground text-sm">{description}</div>
        {features && features.length > 0 && (
          <ul className="mt-3 space-y-1">
            {features.map((f) => (
              <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-teal-500" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Dashboard section - bottom. Grows to fill card so it connects to bottom */}
      <div
        className={`flex flex-col overflow-hidden min-w-0 w-full flex-1 min-h-24 ${
          dashboardLarge ? 'min-h-[140px]' : ''
        }`}
      >
        <div className="h-full w-full ml-16 mr-0 mt-3 rounded-t-lg bg-stone-50 border-x border-t border-stone-200 shadow-md flex flex-col overflow-hidden transition-all duration-300 ease-out group-hover/bento:ml-10 group-hover/bento:mr-3 group-hover/bento:mt-0">
          <div className="px-3 py-1.5 flex items-center justify-between shrink-0 bg-stone-100">
            <span className="text-[10px] text-teal-600 font-medium">Dashboard</span>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div className="flex-1 min-h-0 p-2 overflow-hidden">
            {dashboard}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SolutionSection() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
            Solution
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Empower Your Business with Digital Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Generic tools won&apos;t suffice. Our platform is purpose-built to provide exceptional solutions for your unique business needs.
          </p>
        </motion.div>

        {/* Layout: row1 [1][2][3], row2 [4][4][3] - 3 cols, card 3 row-span-2, card 4 col-span-2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto md:auto-rows-[minmax(18rem,auto)]">
          <SolutionCard
            key={solutions[0].title}
            title={solutions[0].title}
            description={solutions[0].description}
            features={solutions[0].features}
            icon={solutions[0].icon}
            dashboard={solutions[0].dashboard}
            index={0}
            className="md:row-span-1 md:col-span-1"
          />
          <SolutionCard
            key={solutions[1].title}
            title={solutions[1].title}
            description={solutions[1].description}
            features={solutions[1].features}
            icon={solutions[1].icon}
            dashboard={solutions[1].dashboard}
            index={1}
            className="md:row-span-1 md:col-span-1"
          />
          <SolutionCard
            key={solutions[2].title}
            title={solutions[2].title}
            description={solutions[2].description}
            features={solutions[2].features}
            icon={solutions[2].icon}
            dashboard={solutions[2].dashboard}
            index={2}
            className="md:row-span-2 md:col-span-1"
            dashboardLarge={solutions[2].dashboardLarge}
          />
          <SolutionCard
            key={solutions[3].title}
            title={solutions[3].title}
            description={solutions[3].description}
            features={solutions[3].features}
            icon={solutions[3].icon}
            dashboard={solutions[3].dashboard}
            index={3}
            className="md:row-span-1 md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
