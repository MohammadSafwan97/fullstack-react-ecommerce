import { Product } from "./Product";

export function ProductsGrid({ products, loadCart }) {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          loadCart={loadCart}
        />
      ))}
    </div>
  );
}
