import { Link } from "react-router";

export function ShopByCategory() {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200",
      link: "/products?category=electronics",
    },
    {
      name: "Fashion & Apparel",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200",
      link: "/products?category=apparel",
    },
    {
      name: "Home Decor",
      image:
        "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Health & Beauty",
      image:
        "https://images.unsplash.com/photo-1631730486784-5456119f69ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoJTIwYW5kJTIwYmVhdXR5fGVufDB8fDB8fHww",
    },
    {
      name: "Kids & Toys",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Books & Media",
      image:
        "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Shop by Category
        </h2>

        {/* SUBTITLE */}
        <p className="text-center text-gray-500 mt-2">
          Browse our extensive collection of products
        </p>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={cat.link}
              className="
                bg-white rounded-xl overflow-hidden 
                shadow-sm hover:shadow-md 
                border border-gray-200 
                transition block
              "
            >
              {/* IMAGE */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CATEGORY NAME */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
