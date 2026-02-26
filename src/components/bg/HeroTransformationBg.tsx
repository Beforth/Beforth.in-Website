/**
 * Hero background: chips and cards showing dashboard elements.
 * No gradients, no blur bubbles.
 */
export default function HeroTransformationBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Chips - scattered around */}
      <div className="absolute top-[12%] left-[8%] flex flex-wrap gap-1.5 max-w-[140px]">
        <span className="px-2 py-1 rounded-md bg-stone-200/80 text-stone-600 text-[10px] font-medium">Orders</span>
        <span className="px-2 py-1 rounded-md bg-teal-100/90 text-teal-700 text-[10px] font-medium">Revenue</span>
        <span className="px-2 py-1 rounded-md bg-stone-200/80 text-stone-600 text-[10px] font-medium">Inventory</span>
      </div>
      <div className="absolute top-[18%] right-[12%] flex flex-wrap gap-1.5 max-w-[120px]">
        <span className="px-2 py-1 rounded-md bg-amber-100/90 text-amber-800 text-[10px] font-medium">Alert</span>
        <span className="px-2 py-1 rounded-md bg-stone-200/80 text-stone-600 text-[10px] font-medium">Live</span>
      </div>
      <div className="absolute bottom-[35%] left-[15%] flex flex-wrap gap-1.5 max-w-[130px]">
        <span className="px-2 py-1 rounded-md bg-teal-100/90 text-teal-700 text-[10px] font-medium">Analytics</span>
        <span className="px-2 py-1 rounded-md bg-stone-200/80 text-stone-600 text-[10px] font-medium">Reports</span>
      </div>
      <div className="absolute bottom-[25%] right-[10%] flex flex-wrap gap-1.5 max-w-[140px]">
        <span className="px-2 py-1 rounded-md bg-green-100/90 text-green-800 text-[10px] font-medium">Completed</span>
        <span className="px-2 py-1 rounded-md bg-stone-200/80 text-stone-600 text-[10px] font-medium">Sync</span>
      </div>

      {/* Small cards - dashboard-style elements */}
      <div className="absolute top-[22%] right-[20%] w-24 rounded-lg border border-stone-200 bg-white/90 shadow-sm p-2">
        <p className="text-[9px] text-stone-500 mb-0.5">Today</p>
        <p className="text-sm font-bold text-stone-800">₹2.4L</p>
        <p className="text-[8px] text-green-600">↑ 12%</p>
      </div>
      <div className="absolute top-[35%] left-[12%] w-28 rounded-lg border border-stone-200 bg-white/90 shadow-sm p-2">
        <p className="text-[9px] text-stone-500 mb-0.5">Orders</p>
        <p className="text-sm font-bold text-stone-800">127</p>
        <p className="text-[8px] text-stone-500">+8 today</p>
      </div>
      <div className="absolute bottom-[40%] right-[25%] w-32 rounded-lg border border-amber-200 bg-amber-50/95 shadow-sm p-2">
        <p className="text-[9px] text-amber-800 font-medium mb-0.5">Need attention</p>
        <p className="text-[10px] text-amber-900 line-clamp-2">Item A restock below 20</p>
      </div>
      <div className="absolute bottom-[28%] left-[22%] w-28 rounded-lg border border-stone-200 bg-white/90 shadow-sm p-2">
        <p className="text-[9px] text-stone-500 mb-0.5">Tasks</p>
        <p className="text-sm font-bold text-stone-800">5</p>
        <p className="text-[8px] text-stone-500">2 due today</p>
      </div>
      <div className="absolute top-[45%] right-[12%] w-28 rounded-lg border border-teal-200 bg-teal-50/95 shadow-sm p-2">
        <p className="text-[9px] text-teal-700 font-medium mb-0.5">Real-time</p>
        <p className="text-[10px] text-teal-800">Updated 2m ago</p>
      </div>
    </div>
  );
}
