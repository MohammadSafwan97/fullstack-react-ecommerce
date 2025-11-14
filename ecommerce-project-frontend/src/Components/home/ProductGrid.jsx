import Product from "../Product";
const ProductGrid = ({ products, loadCart }) => {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return <Product loadCart={loadCart} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
