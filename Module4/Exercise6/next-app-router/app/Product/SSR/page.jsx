export default async function ProductSSR() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  const { products } = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-900 dark:text-indigo-200 mb-8">
          Products Overview
        </h2>

        <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-600">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 text-sm">
              <thead className="bg-indigo-100 dark:bg-indigo-700">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-indigo-700 dark:text-indigo-200 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-indigo-700 dark:text-indigo-200 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-indigo-700 dark:text-indigo-200 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-indigo-700 dark:text-indigo-200 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-indigo-700 dark:text-indigo-200 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {products.slice(0, 10).map(
                  ({ id, title, category, description, price }) => (
                    <tr
                      key={id}
                      className="hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-all duration-200 group"
                    >
                      <td className="px-6 py-4 font-medium text-indigo-800 dark:text-indigo-100">
                        #{id}
                      </td>

                      <td className="px-6 py-4 font-semibold text-indigo-900 dark:text-white group-hover:text-pink-500 transition-colors cursor-pointer">
                        {title}
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300">
                          {category}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs truncate">
                        {description}
                      </td>

                      <td className="px-6 py-4">
                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                          ${price}
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
