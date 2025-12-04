export default function ExclusiveDeals() {
  return (
    <section className="w-full py-20 bg-[#FFF6F2]">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-gray-900">
          Unlock Exclusive Deals!
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-600 mt-3 leading-relaxed">
          Sign up for our newsletter and get 15% off your first purchase.
          Don&apos;t miss out on amazing savings!
        </p>

        {/* BUTTON */}
        <button
          className="
            mt-6 px-6 py-3 
            bg-white border border-gray-300 
            rounded-md shadow-sm
            text-gray-800 font-medium 
            hover:bg-gray-50 transition
          "
        >
          Explore Deals
        </button>
      </div>
    </section>
  );
}
