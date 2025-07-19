export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="relative bg-green-800 py-12 text-white">
          <div className="container relative z-10 text-center">
            <div className="mx-auto h-10 w-64 animate-pulse rounded-md bg-green-700"></div>
            <div className="mx-auto mt-4 h-6 w-40 animate-pulse rounded-md bg-green-700"></div>
            <div className="mx-auto mt-4 h-4 w-80 animate-pulse rounded-md bg-green-700"></div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="h-4 w-24 animate-pulse rounded-md bg-gray-200"></div>
                    <div className="mt-2 h-4 w-32 animate-pulse rounded-md bg-gray-200"></div>
                  </div>
                  <div className="text-right">
                    <div className="h-4 w-20 animate-pulse rounded-md bg-gray-200"></div>
                    <div className="mt-2 h-4 w-24 animate-pulse rounded-md bg-gray-200"></div>
                  </div>
                </div>
                <div className="mb-4 h-6 w-32 animate-pulse rounded-md bg-gray-200"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse rounded-md bg-gray-200"></div>
                  <div className="h-4 w-full animate-pulse rounded-md bg-gray-200"></div>
                  <div className="h-4 w-3/4 animate-pulse rounded-md bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
