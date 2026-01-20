export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="h-8 w-48 bg-white/[0.06] rounded animate-pulse mb-2" />
        <div className="h-5 w-64 bg-white/[0.06] rounded animate-pulse" />
      </div>

      {/* Stats grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-[#111] border border-white/[0.06] rounded-xl p-4 animate-pulse"
          >
            <div className="h-4 w-20 bg-white/[0.06] rounded mb-2" />
            <div className="h-8 w-16 bg-white/[0.06] rounded" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
        {/* Main panel */}
        <div className="lg:col-span-2 bg-[#111] border border-white/[0.06] rounded-xl p-6 animate-pulse">
          <div className="h-6 w-32 bg-white/[0.06] rounded mb-4" />
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-white/[0.06] rounded-xl" />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-[#111] border border-white/[0.06] rounded-xl p-6 animate-pulse">
          <div className="h-6 w-24 bg-white/[0.06] rounded mb-4" />
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-white/[0.06] rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
