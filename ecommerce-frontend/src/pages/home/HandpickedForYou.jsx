import { Link } from "react-router";

export function HandpickedForYou() {
  const items = [
    {
      name: "Wireless Noise-Cancelling Headphones",
      price: 249.99,
      image:
        "https://images.unsplash.com/photo-1518449022251-1d6c3f940e39?q=80&w=1200",
      link: "/product/1",
    },
    {
      name: "Premium Leather Smartwatch",
      price: 399.0,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200",
      link: "/product/2",
    },
    {
      name: "Artisanal Scented Candle Set",
      price: 59.5,
      image:
        "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=1200",
      link: "/product/3",
    },
    {
      name: "Ergonomic Office Chair",
      price: 499.0,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
      link: "/product/4",
    },
    {
      name: "Smart Home Hub with Voice Assistant",
      price: 129.0,
      image:
        "https://images.unsplash.com/photo-1555617983-eec1e0d69f06?q=80&w=1200",
      link: "/product/5",
    },
    {
      name: "Gourmet Coffee Bean Selection",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200",
      link: "/product/6",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Handpicked For You
        </h2>

        {/* SUBTITLE */}
        <p className="text-center text-gray-500 mt-2">
          Scroll to view more unique products
        </p>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-white border border-gray-200 rounded-xl 
                shadow-sm hover:shadow-md transition overflow-hidden
                flex flex-col
              "
            >
              {/* IMAGE */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BODY */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-gray-900 font-semibold text-base leading-snug">
                  {item.name}
                </h3>

                <p className="text-blue-600 font-semibold mt-1 text-sm">
                  ${item.price.toFixed(2)}
                </p>

                <Link
                  to={item.link}
                  className="
                    mt-auto block text-center
                    px-4 py-2 border border-gray-300 bg-white 
                    rounded-md text-gray-700 text-sm font-medium 
                    hover:bg-gray-50 transition mt-4
                  "
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
