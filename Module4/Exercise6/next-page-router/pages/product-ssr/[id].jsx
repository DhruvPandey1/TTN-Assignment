export default function ProductPage({ product }) {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-red-500">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 transition-transform hover:scale-[1.02] duration-300">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {product.title}
        </h1>

        <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
          {product.category}
        </span>

        <p className="text-gray-600 leading-relaxed mb-6">
          {product.description}
        </p>

        <div className="flex items-center justify-between border-t pt-4">
          <span className="text-lg font-medium text-gray-500">
            Price
          </span>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps({params}) {
    const {id}=params;

    const res=await fetch(`https://dummyjson.com/products/${id}`);
    const product=await res.json()

    return {
        props:{product},
    }
}