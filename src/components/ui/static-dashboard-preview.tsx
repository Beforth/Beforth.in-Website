import { Zap, CheckCircle, ShoppingCart, Package, AlertTriangle, IndianRupee } from 'lucide-react';

const dashboardStats = [
  { label: 'Money earned today', value: '₹2,45,600', change: 'Up 12% from yesterday', trend: 'up' as const, icon: IndianRupee },
  { label: 'Orders today', value: '127', change: '8 more than yesterday', trend: 'up' as const, icon: ShoppingCart },
  { label: 'Items running low', value: '3', change: 'Need to restock soon', trend: 'alert' as const, icon: Package },
  { label: 'Tasks to complete', value: '5', change: '2 due today', trend: 'neutral' as const, icon: AlertTriangle },
];

const topProducts = [
  { name: 'Item A', qty: 156 },
  { name: 'Item B', qty: 98 },
  { name: 'Item C', qty: 67 },
];

const recentOrders = [
  { id: 'ORD-2847', product: 'Item A', qty: 45, amount: '₹5,400', status: 'Completed' },
  { id: 'ORD-2848', product: 'Item B', qty: 12, amount: '₹4,200', status: 'Completed' },
  { id: 'ORD-2849', product: 'Item C', qty: 8, amount: '₹7,120', status: 'Processing' },
];

const alerts = [
  { text: 'Item A needs restock (below 20 units)', action: 'View' },
  { text: 'Order ORD-2849 needs shipping', action: 'Ship' },
];

/** Static dashboard preview - no animations. Used for mobile hero. */
export function StaticDashboardPreview() {
  return (
    <div className="w-full max-w-lg mx-auto rounded-xl border-2 border-teal-200 overflow-hidden ring-2 ring-teal-500/20 shadow-lg bg-white">
      <div className="bg-stone-900 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between">
        <span className="text-white font-medium text-sm">Business Dashboard</span>
        <div className="flex items-center gap-2">
          <span className="text-stone-400 text-xs">Updated 2 min ago</span>
          <span className="text-teal-400 text-xs">Live</span>
          <span className="w-2 h-2 bg-green-400 rounded-full" />
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {dashboardStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-stone-50 rounded-lg p-2 border border-stone-100">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <p className="text-[10px] text-muted-foreground line-clamp-2">{stat.label}</p>
                </div>
                <p className="text-sm font-bold text-foreground">{stat.value}</p>
                <p className={`text-[10px] mt-0.5 ${stat.trend === 'up' ? 'text-green-600' : stat.trend === 'alert' ? 'text-amber-600' : 'text-muted-foreground'}`}>
                  {stat.change}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-3">
          <p className="text-xs font-medium text-foreground mb-1.5">Sales this week</p>
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-100">
            <div className="flex items-end justify-between gap-1 h-14">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full max-w-[20px] bg-teal-500 rounded-t min-h-[4px]"
                    style={{ height: `${[40, 65, 45, 80, 55, 70, 90][i]}%` }}
                  />
                  <span className="text-[8px] text-muted-foreground">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-3">
          <div>
            <p className="text-xs font-medium text-foreground mb-1.5">Recent orders</p>
            <div className="rounded-lg border border-stone-200 overflow-hidden max-h-[80px] overflow-y-auto">
              <table className="w-full text-xs">
                <thead className="bg-stone-100 sticky top-0">
                  <tr>
                    <th className="text-left px-2 py-1.5 font-medium text-[10px]">Order</th>
                    <th className="text-right px-2 py-1.5 font-medium text-[10px]">Amount</th>
                    <th className="text-right px-2 py-1.5 font-medium text-[10px]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.slice(0, 4).map((order) => (
                    <tr key={order.id} className="border-t border-stone-100">
                      <td className="px-2 py-1.5 font-mono text-[10px]">{order.id}</td>
                      <td className="px-2 py-1.5 text-right font-medium text-[10px]">{order.amount}</td>
                      <td className="px-2 py-1.5 text-right">
                        <span className={`inline-flex items-center gap-0.5 text-[10px] ${order.status === 'Completed' ? 'text-green-600' : 'text-amber-600'}`}>
                          <CheckCircle className="w-2.5 h-2.5" />
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
            <p className="text-xs font-medium text-foreground mb-1.5">Top products</p>
            <div className="rounded-lg border border-stone-200 overflow-hidden">
              {topProducts.map((p) => (
                <div key={p.name} className="flex items-center justify-between px-2 py-1.5 border-t border-stone-100 first:border-t-0">
                  <span className="text-xs">{p.name}</span>
                  <span className="text-xs font-medium">{p.qty} sold</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-foreground mb-1.5">Need attention</p>
          <div className="space-y-1.5">
            {alerts.map((alert, idx) => (
              <div key={idx} className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5">
                <span className="text-[10px] text-amber-800 line-clamp-1">{alert.text}</span>
                <span className="text-[10px] font-medium text-teal-600 shrink-0 ml-1">{alert.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-teal-50 border-t border-teal-100 px-3 py-2 flex items-center gap-1.5 text-teal-700 text-xs shrink-0">
        <Zap className="w-4 h-4 shrink-0" />
        <span className="line-clamp-1">Automated • Real-time • No manual entry</span>
      </div>
    </div>
  );
}
