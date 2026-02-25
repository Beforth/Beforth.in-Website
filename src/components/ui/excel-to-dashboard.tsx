import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileSpreadsheet, LayoutDashboard, Zap, CheckCircle } from 'lucide-react';

export type ExcelToDashboardVariant = 'hero' | 'section';

const excelData = [
  ['Date', 'Product', 'Qty', 'Price', 'Total', 'Notes'],
  ['01/02', 'Item A', '45', '120', '=C2*D2', 'Manual calc'],
  ['01/02', 'Item B', '12', '350', '=C3*D3', ''],
  ['01/03', 'Item A', '23', '120', '=C4*D4', 'Check stock'],
  ['01/03', 'Item C', '8', '890', '=C5*D5', ''],
  ['01/04', 'Item B', '34', '350', '=C6*D6', ''],
  ['...', '...', '...', '...', '...', 'Copy-paste'],
];

const dashboardStats = [
  { label: 'Today\'s Revenue', value: '₹2,45,600', change: '+12%', trend: 'up' },
  { label: 'Orders', value: '127', change: '+8', trend: 'up' },
  { label: 'Inventory Alerts', value: '3', change: 'Low stock', trend: 'alert' },
  { label: 'Pending Tasks', value: '5', change: '2 due today', trend: 'neutral' },
];

const recentOrders = [
  { id: 'ORD-2847', product: 'Item A', qty: 45, amount: '₹5,400', status: 'Completed' },
  { id: 'ORD-2848', product: 'Item B', qty: 12, amount: '₹4,200', status: 'Completed' },
  { id: 'ORD-2849', product: 'Item C', qty: 8, amount: '₹7,120', status: 'Processing' },
];

export function ExcelToDashboard({ variant = 'section' }: { variant?: ExcelToDashboardVariant }) {
  const [view, setView] = useState<'before' | 'after' | 'both'>('both');
  const [isHovering, setIsHovering] = useState(false);
  const isHero = variant === 'hero';

  const content = (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: isHero ? 20 : 30 }}
      animate={isHero ? { opacity: 1, y: 0 } : undefined}
      whileInView={isHero ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: isHero ? 0.5 : 0.2 }}
      viewport={isHero ? undefined : { once: true }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-stretch ${isHero ? 'max-w-6xl mx-auto' : ''}`}>
            {/* BEFORE: Excel */}
            <AnimatePresence mode="wait">
              {(view === 'both' || view === 'before') && (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`lg:col-span-5 ${view === 'both' ? '' : 'lg:col-span-12 max-w-2xl mx-auto'}`}
                >
                  <div className="h-full flex flex-col">
                    {!isHero && (
                      <div className="flex items-center gap-2 mb-3">
                        <FileSpreadsheet className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium text-amber-700">Before: Excel & Manual Work</span>
                      </div>
                    )}
                    <div className={`flex-1 bg-white rounded-xl border-2 border-stone-200 shadow-lg overflow-hidden ${isHero ? 'shadow-xl' : ''}`}>
                      <div className="bg-stone-100 px-4 py-2 border-b border-stone-200 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="text-xs text-stone-500 ml-2">Sales_Report_Jan_Final_v3.xlsx</span>
                      </div>
                      <div className={`p-2 overflow-x-auto ${isHero ? 'max-h-[140px]' : ''}`}>
                        <table className={`w-full border-collapse min-w-[320px] ${isHero ? 'text-[10px]' : 'text-xs'}`}>
                          <tbody>
                            {excelData.map((row, i) => (
                              <tr key={i} className={i === 0 ? 'bg-stone-200 font-semibold' : i % 2 === 0 ? 'bg-amber-50/50' : ''}>
                                {row.map((cell, j) => (
                                  <td key={j} className={`border border-stone-200 px-2 py-1.5 ${j === 4 ? 'text-teal-600 font-mono' : 'text-stone-700'}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className={`bg-amber-50 border-t border-amber-200 px-4 py-2 flex items-center gap-2 text-amber-800 ${isHero ? 'text-[10px]' : 'text-xs'}`}>
                        <span>Manual entry • Copy-paste • Formulas break • No real-time view</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Arrow - only when both visible */}
            {view === 'both' && (
              <>
                <motion.div 
                  className="hidden lg:flex flex-col items-center justify-center lg:col-span-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div 
                    animate={{ x: isHovering ? [0, 4, 0] : 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                  >
                    <ArrowRight className="w-8 h-8 text-teal-500" />
                    <span className="text-xs font-medium text-teal-600">Becomes</span>
                  </motion.div>
                </motion.div>
                {/* Mobile: arrow between stacked cards */}
                <div className="flex lg:hidden col-span-12 justify-center py-2">
                  <motion.div 
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-1"
                  >
                    <ArrowRight className="w-6 h-6 text-teal-500 rotate-90" />
                    <span className="text-xs font-medium text-teal-600">Becomes</span>
                  </motion.div>
                </div>
              </>
            )}

            {/* AFTER: Dashboard */}
            <AnimatePresence mode="wait">
              {(view === 'both' || view === 'after') && (
                <motion.div
                  key="after"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className={`lg:col-span-5 ${view === 'both' ? '' : 'lg:col-span-12 max-w-2xl mx-auto'}`}
                >
                  <div className="h-full flex flex-col">
                    {!isHero && (
                      <div className="flex items-center gap-2 mb-3">
                        <LayoutDashboard className="w-5 h-5 text-teal-600" />
                        <span className="text-sm font-medium text-teal-700">After: Your System</span>
                      </div>
                    )}
                    <div className={`flex-1 bg-white rounded-xl border-2 border-teal-200 shadow-xl overflow-hidden ring-2 ring-teal-500/20 ${isHero ? 'ring-teal-500/30' : ''}`}>
                      {/* Dashboard Header */}
                      <div className="bg-stone-900 px-4 py-3 flex items-center justify-between">
                        <span className="text-white font-medium">Business Dashboard</span>
                        <div className="flex items-center gap-2">
                          <span className="text-teal-400 text-xs">Live</span>
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        </div>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className={`p-4 grid grid-cols-2 gap-3 ${isHero ? 'p-3 gap-2' : ''}`}>
                        {dashboardStats.map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className={`bg-stone-50 rounded-lg border border-stone-100 ${isHero ? 'p-2' : 'p-3'}`}
                          >
                            <p className={`text-muted-foreground ${isHero ? 'text-[10px]' : 'text-xs'}`}>{stat.label}</p>
                            <p className={`font-bold text-foreground ${isHero ? 'text-sm' : 'text-lg'}`}>{stat.value}</p>
                            <p className={`${isHero ? 'text-[10px]' : 'text-xs'} ${stat.trend === 'up' ? 'text-green-600' : stat.trend === 'alert' ? 'text-amber-600' : 'text-muted-foreground'}`}>
                              {stat.change}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Chart placeholder */}
                      <div className={`pb-2 ${isHero ? 'px-3' : 'px-4'}`}>
                        <div className={`bg-stone-50 rounded-lg border border-stone-100 flex items-center justify-center ${isHero ? 'h-14' : 'h-20'}`}>
                          <div className={`flex items-end gap-1 ${isHero ? 'h-8' : 'h-12'}`}>
                            {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                                className="w-4 bg-teal-500 rounded-t"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Recent Orders Table */}
                      <div className={`pb-4 ${isHero ? 'px-3 pb-3' : 'px-4'}`}>
                        <p className={`font-medium text-muted-foreground mb-2 ${isHero ? 'text-[10px]' : 'text-xs'}`}>Recent Orders (auto-updated)</p>
                        <div className="rounded-lg border border-stone-200 overflow-hidden">
                          <table className={`w-full ${isHero ? 'text-[10px]' : 'text-xs'}`}>
                            <thead className="bg-stone-100">
                              <tr>
                                <th className="text-left px-3 py-2 font-medium">Order</th>
                                <th className="text-left px-3 py-2 font-medium">Product</th>
                                <th className="text-right px-3 py-2 font-medium">Amount</th>
                                <th className="text-right px-3 py-2 font-medium">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {recentOrders.map((order, i) => (
                                <tr key={order.id} className="border-t border-stone-100 hover:bg-stone-50">
                                  <td className="px-3 py-2 font-mono">{order.id}</td>
                                  <td className="px-3 py-2">{order.product} × {order.qty}</td>
                                  <td className="px-3 py-2 text-right font-medium">{order.amount}</td>
                                  <td className="px-3 py-2 text-right">
                                    <span className={`inline-flex items-center gap-1 ${order.status === 'Completed' ? 'text-green-600' : 'text-amber-600'}`}>
                                      <CheckCircle className="w-3 h-3" />
                                      {order.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className={`bg-teal-50 border-t border-teal-100 px-4 py-2 flex items-center gap-2 text-teal-700 ${isHero ? 'text-[10px] px-3 py-1.5' : 'text-xs'}`}>
                        <Zap className={isHero ? 'w-3 h-3' : 'w-4 h-4'} />
                        <span>Automated • Real-time • No manual entry • Accurate calculations</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!isHero && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              This is what we build for you. Your data. Your process. Running properly and fast.
            </p>
          )}
        </motion.div>
  );

  if (isHero) {
    return content;
  }

  return (
    <section className="py-16 md:py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
            See the <span className="font-semibold text-teal-600">transformation.</span>
          </h2>
          <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Your Excel sheets, manual calculations, and paper registers—turned into a system that works. Fast, accurate, always up to date.
          </p>
          
          {/* View Toggle */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(['both', 'before', 'after'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  view === v 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-white border border-stone-200 text-muted-foreground hover:border-teal-300 hover:text-teal-600'
                }`}
              >
                {v === 'both' && 'Before & After'}
                {v === 'before' && 'Excel / Manual'}
                {v === 'after' && 'Your Dashboard'}
              </button>
            ))}
          </div>
        </motion.div>

        {content}
      </div>
    </section>
  );
}
