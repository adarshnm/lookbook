/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { products } from "@/mockData";

function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:underline">
          Home
        </a>{" "}
        /
        <a href="/fashion" className="hover:underline">
          Fashion
        </a>{" "}
        /<span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4">
          <img
            src={product.images && product.images[0]}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images &&
              product.images
                .slice(1, 5)
                .map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          <p className=" mb-4">{product.description}</p>

          <div className="text-2xl font-bold mb-4">$99.99</div>

          <Button className="rounded-lg w-full">Add to Cart</Button>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Product Information</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-50">
              <li>Available Sizes: S, M, L, XL</li>
              <li>Material: 100% Cotton</li>
              <li>Care: Machine wash</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
