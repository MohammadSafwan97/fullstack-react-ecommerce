import { Link } from "react-router";

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35b0?q=80&w=800",
      link: "/products?category=electronics",
    },
    {
      name: "Apparel",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      link: "/products?category=apparel",
    },
    {
      name: "Home Goods",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=800",
      link: "/products?category=homegoods",
    },
    {
      name: "Books",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
      link: "/products?category=books",
    },
    {
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800",
      link: "/products?category=sports",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=800",
      link: "/products?category=beauty",
    },
    {
      name: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1585238341985-3b91fc0b9f4a?q=80&w=800",
      link: "/products?category=kitchen",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-gray-900">
          Featured Categories
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-500 mt-2">Click a category to explore</p>

        {/* CATEGORY GRID */}
        <div
          className="
            mt-10 
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
            lg:grid-cols-7 gap-10 place-items-center
          "
        >
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={cat.link}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-3 text-gray-800 font-medium text-sm group-hover:text-primary transition">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
