export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="relative bg-green-800 py-12 text-white">
          <div className="container relative z-10 text-center">
            <div className="mx-auto h-10 w-64 animate-pulse rounded-md bg-green-700"></div>
            <div className="mx-auto mt-4 h-6 w-40 animate-pulse rounded-md bg-green-700"></div>
            <div className="mx-auto mt-6 flex justify-center space-x-4">
              <div className="h-10 w-32 animate-pulse rounded-md bg-green-700"></div>
              <div className="h-10 w-32 animate-pulse rounded-md bg-green-700"></div>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="mb-8 text-center">
            <div className="mx-auto h-8 w-64 animate-pulse rounded-md bg-gray-200"></div>
            <div className="mx-auto mt-4 h-4 w-96 animate-pulse rounded-md bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 h-7 w-32 animate-pulse rounded-md bg-gray-200"></div>
                <div className="mb-2 h-5 w-full animate-pulse rounded-md bg-gray-200"></div>
                <div className="mb-6 h-5 w-3/4 animate-pulse rounded-md bg-gray-200"></div>
                <div className="mb-4 h-8 w-24 animate-pulse rounded-md bg-gray-200"></div>
                <div className="space-y-3">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="flex items-center">
                      <div className="mr-2 h-5 w-5 animate-pulse rounded-full bg-gray-200"></div>
                      <div className="h-4 w-full animate-pulse rounded-md bg-gray-200"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-10 w-full animate-pulse rounded-md bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
