import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, CheckCircle, ShoppingCart, Package, AlertTriangle, IndianRupee } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const excelData = [
  ['Date', 'Product', 'Qty', 'Price', 'Total', 'Notes'],
  ['01/02', 'Item A', '45', '120', '=C2*D2', 'Manual calc'],
  ['01/02', 'Item B', '12', '350', '=C3*D3', ''],
  ['01/03', 'Item A', '23', '120', '=C4*D4', 'Check stock'],
  ['01/03', 'Item C', '8', '890', '=C5*D5', ''],
  ['01/04', 'Item B', '34', '350', '=C6*D6', ''],
  ['01/04', 'Item D', '19', '220', '#REF!', 'Broken link'],
  ['01/05', 'Item A', '56', '120', '=C8*D8', ''],
  ['01/05', 'Item C', '11', '890', '=C9*D9', ''],
  ['01/06', 'Item B', '28', '350', '=C10*D10', 'Pending'],
  ['01/06', 'Item E', '7', '450', '=C11*D11', 'New SKU'],
  ['01/07', 'Item A', '31', '120', '=C12*D12', ''],
  ['01/07', 'Item D', '14', '220', '=C13*D13', ''],
  ['01/08', 'Item B', '42', '350', '=C14*D14', 'Urgent'],
  ['01/08', 'Item C', '9', '890', '#VALUE!', 'Wrong format'],
  ['01/09', 'Item A', '22', '120', '=C16*D16', ''],
  ['...', '...', '...', '...', '...', 'Copy-paste'],
];

const dashboardStats = [
  { label: 'Money earned today', value: '₹2,45,600', change: 'Up 12% from yesterday', trend: 'up', icon: IndianRupee },
  { label: 'Orders today', value: '127', change: '8 more than yesterday', trend: 'up', icon: ShoppingCart },
  { label: 'Items running low', value: '3', change: 'Need to restock soon', trend: 'alert', icon: Package },
  { label: 'Tasks to complete', value: '5', change: '2 due today', trend: 'neutral', icon: AlertTriangle },
];

const topProducts = [
  { name: 'Item A', qty: 156, trend: 'up' },
  { name: 'Item B', qty: 98, trend: 'up' },
  { name: 'Item C', qty: 67, trend: 'down' },
];

const recentOrders = [
  { id: 'ORD-2847', product: 'Item A', qty: 45, amount: '₹5,400', status: 'Completed' },
  { id: 'ORD-2848', product: 'Item B', qty: 12, amount: '₹4,200', status: 'Completed' },
  { id: 'ORD-2849', product: 'Item C', qty: 8, amount: '₹7,120', status: 'Processing' },
  { id: 'ORD-2850', product: 'Item D', qty: 22, amount: '₹4,840', status: 'Completed' },
  { id: 'ORD-2851', product: 'Item A', qty: 15, amount: '₹1,800', status: 'Completed' },
  { id: 'ORD-2852', product: 'Item A', qty: 30, amount: '₹3,600', status: 'Processing' },
];

const alerts = [
  { text: 'Item A needs restock (below 20 units)', action: 'View' },
  { text: 'Order ORD-2849 needs shipping', action: 'Ship' },
];

export function HeroTransformation() {
  const stackRef = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card2 = card2Ref.current;
    if (!card2) return;

    // Dashboard card: slides up from below and overlaps Excel
    const t2 = gsap.fromTo(
      card2,
      { y: '100%', scale: 0.9 },
      {
        y: '0%',
        scale: 1,
        scrollTrigger: {
          trigger: card2,
          start: 'top bottom',
          end: 'top 15%',
          scrub: true,
        },
      }
    );

    return () => {
      t2.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={stackRef} className="relative w-full">
      {/* First sticky stack: Excel - stays in place for overlap */}
      <div className="dashboard-stack z-10">
        <div className="card">
          <p className="text-sm font-medium text-amber-700 mb-3">Your existing system</p>
          <div className="bg-white rounded-xl border-2 border-stone-200 overflow-hidden min-h-[320px] max-h-[min(500px,68vh)] flex flex-col">
            <div className="bg-stone-100 px-3 py-1.5 sm:px-4 sm:py-2 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs sm:text-sm text-stone-500 ml-2 truncate max-w-[180px] sm:max-w-none">Sales_Report_Jan_Final_v3.xlsx</span>
              </div>
              <span className="text-xs text-stone-400">Row 17 of 247</span>
            </div>
            <div className="p-3 sm:p-4 overflow-auto flex-1 max-h-[280px] sm:max-h-[320px]">
              <table className="w-full text-xs sm:text-sm border-collapse min-w-[420px] sm:min-w-[500px]">
                <tbody>
                  {excelData.map((row, i) => (
                    <tr key={i} className={i === 0 ? 'bg-stone-200 font-semibold' : i % 2 === 0 ? 'bg-amber-50/50' : ''}>
                      {row.map((cell, j) => (
                        <td key={j} className={`border border-stone-200 px-2 py-1.5 sm:px-3 sm:py-2 ${j === 4 ? 'text-teal-600 font-mono' : 'text-stone-700'} ${['#REF!', '#VALUE!'].includes(String(cell)) ? 'bg-red-50 text-red-600' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-stone-100 border-t border-stone-200 px-3 py-1.5 flex gap-1">
              <span className="px-2 py-1 bg-white border border-stone-200 rounded-t text-xs font-medium text-amber-800">Sheet1</span>
              <span className="px-2 py-1 bg-stone-200/80 border border-stone-300 rounded-t text-xs text-stone-500">Sheet2</span>
              <span className="px-2 py-1 bg-stone-200/80 border border-stone-300 rounded-t text-xs text-stone-500">Jan_Backup</span>
              <span className="px-2 py-1 bg-stone-200/80 border border-stone-300 rounded-t text-xs text-stone-500">+</span>
            </div>
            <div className="bg-amber-50 border-t border-amber-200 px-3 py-1.5 sm:px-4 sm:py-2 text-amber-800 text-xs sm:text-sm">
              Manual entry • Copy-paste • Formulas break • No real-time view
            </div>
          </div>
        </div>
      </div>

      {/* Spacer - scroll distance before dashboard overlaps */}
      <div className="h-[10vh]" aria-hidden />

      {/* Second sticky stack: Dashboard - slides over Excel */}
      <div className="dashboard-stack z-20">
        <div ref={card2Ref} className="card">
          <p className="text-sm font-medium text-teal-700 mb-3">After: Your system</p>
          <div className="bg-white rounded-xl border-2 border-teal-200 overflow-hidden ring-2 ring-teal-500/20 min-h-[360px] max-h-[min(540px,72vh)] flex flex-col">
            <div className="bg-stone-900 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between">
              <span className="text-white font-medium">Business Dashboard</span>
              <div className="flex items-center gap-2">
                <span className="text-stone-400 text-xs">Updated 2 min ago</span>
                <span className="text-teal-400 text-xs">Live</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>

            <div className="p-3 sm:p-4 overflow-auto flex-1 min-h-0">
              {/* Key numbers */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {dashboardStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="bg-stone-50 rounded-lg p-2 sm:p-3 border border-stone-100">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 shrink-0" />
                        <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{stat.label}</p>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-foreground">{stat.value}</p>
                      <p className={`text-xs mt-0.5 ${stat.trend === 'up' ? 'text-green-600' : stat.trend === 'alert' ? 'text-amber-600' : 'text-muted-foreground'}`}>
                        {stat.change}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Sales chart */}
              <div className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm font-medium text-foreground mb-1.5">Sales this week</p>
                <div className="bg-stone-50 rounded-lg p-3 sm:p-4 border border-stone-100">
                  <div className="flex items-end justify-between gap-1 sm:gap-2 h-14 sm:h-20">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                      <div key={day} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full max-w-[28px] bg-teal-500 rounded-t min-h-[4px]"
                          style={{ height: `${[40, 65, 45, 80, 55, 70, 90][i]}%` }}
                        />
                        <span className="text-[9px] sm:text-[10px] text-muted-foreground">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Two columns: Orders + Top products */}
              <div className="grid md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="md:col-span-2">
                  <p className="text-xs sm:text-sm font-medium text-foreground mb-1.5">Recent orders (auto-updated)</p>
                  <div className="rounded-lg border border-stone-200 overflow-hidden max-h-[100px] sm:max-h-[120px] overflow-y-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-stone-100 sticky top-0">
                        <tr>
                          <th className="text-left px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-[10px] sm:text-xs">Order</th>
                          <th className="text-left px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-[10px] sm:text-xs">Product</th>
                          <th className="text-right px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-[10px] sm:text-xs">Amount</th>
                          <th className="text-right px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-[10px] sm:text-xs">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((order) => (
                          <tr key={order.id} className="border-t border-stone-100 hover:bg-stone-50">
                            <td className="px-2 py-1.5 sm:px-3 sm:py-2 font-mono text-[10px] sm:text-xs">{order.id}</td>
                            <td className="px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-sm">{order.product} × {order.qty}</td>
                            <td className="px-2 py-1.5 sm:px-3 sm:py-2 text-right font-medium text-[10px] sm:text-sm">{order.amount}</td>
                            <td className="px-2 py-1.5 sm:px-3 sm:py-2 text-right">
                              <span className={`inline-flex items-center gap-0.5 text-[10px] sm:text-xs ${order.status === 'Completed' ? 'text-green-600' : 'text-amber-600'}`}>
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
                <div>
                  <p className="text-xs sm:text-sm font-medium text-foreground mb-1.5">Top selling products</p>
                  <div className="rounded-lg border border-stone-200 overflow-hidden">
                    {topProducts.map((p) => (
                      <div key={p.name} className="flex items-center justify-between px-2 py-1.5 sm:px-3 sm:py-2 border-t border-stone-100 first:border-t-0">
                        <span className="text-xs sm:text-sm">{p.name}</span>
                        <span className="text-xs sm:text-sm font-medium">{p.qty} sold</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Alerts */}
              <div>
                <p className="text-xs sm:text-sm font-medium text-foreground mb-1.5">Need your attention</p>
                <div className="space-y-1.5 sm:space-y-2">
                  {alerts.map((alert, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2">
                      <span className="text-[10px] sm:text-sm text-amber-800 line-clamp-1">{alert.text}</span>
                      <button type="button" className="text-[10px] sm:text-xs font-medium text-teal-600 hover:text-teal-700 shrink-0 ml-1">
                        {alert.action}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border-t border-teal-100 px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-1.5 sm:gap-2 text-teal-700 text-xs sm:text-sm shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="line-clamp-1 sm:line-clamp-none">Automated • Real-time • No manual entry • Accurate calculations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer for scroll completion */}
      <div className="h-[50vh]" aria-hidden />
    </div>
  );
}
