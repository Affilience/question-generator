export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header skeleton */}
      <header className="border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="h-6 w-32 bg-white/[0.06] rounded animate-pulse" />
            <div className="flex items-center gap-4">
              <div className="h-8 w-20 bg-white/[0.06] rounded animate-pulse" />
              <div className="h-8 w-24 bg-white/[0.06] rounded animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <div className="h-12 w-48 bg-white/[0.06] rounded-full mx-auto mb-6 animate-pulse" />
          <div className="h-16 w-3/4 bg-white/[0.06] rounded mx-auto mb-4 animate-pulse" />
          <div className="h-16 w-1/2 bg-white/[0.06] rounded mx-auto mb-6 animate-pulse" />
          <div className="h-6 w-2/3 bg-white/[0.06] rounded mx-auto mb-8 animate-pulse" />
          <div className="flex justify-center gap-4">
            <div className="h-14 w-40 bg-white/[0.06] rounded-xl animate-pulse" />
            <div className="h-14 w-40 bg-white/[0.06] rounded-xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 animate-pulse"
            >
              <div className="h-12 w-12 bg-white/[0.06] rounded-xl mb-4" />
              <div className="h-6 w-3/4 bg-white/[0.06] rounded mb-2" />
              <div className="h-4 w-full bg-white/[0.06] rounded mb-1" />
              <div className="h-4 w-2/3 bg-white/[0.06] rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
