import dayjs from "dayjs";
import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import { formatMoney } from "../../utils/money";

// TEMPORARY DUMMY DATA
const dummyOrders = [
  {
    id: 101,
    orderTimeMs: Date.now() - 7 * 24 * 60 * 60 * 1000,
    totalCostCents: 25997,
    products: [
      {
        quantity: 1,
        estimatedDeliveryTimeMs: Date.now() + 2 * 24 * 60 * 60 * 1000,
        product: {
          id: 1,
          name: "Classic Leather Backpack",
          image:
            "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=300",
        },
      },
      {
        quantity: 2,
        estimatedDeliveryTimeMs: Date.now() + 2 * 24 * 60 * 60 * 1000,
        product: {
          id: 2,
          name: "Wireless Noise Cancelling Headphones",
          image:
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=300",
        },
      },
    ],
  },
  {
    id: 102,
    orderTimeMs: Date.now() - 3 * 24 * 60 * 60 * 1000,
    totalCostCents: 14999,
    products: [
      {
        quantity: 1,
        estimatedDeliveryTimeMs: Date.now() + 4 * 24 * 60 * 60 * 1000,
        product: {
          id: 3,
          name: "Smart Fitness Watch",
          image:
            "https://images.unsplash.com/photo-1600180758890-6fc4b1b8b81a?q=80&w=300",
        },
      },
    ],
  },
];

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(dummyOrders);
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* PAGE TITLE */}
        <h1 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
          Your Orders
        </h1>

        <div className="space-y-10">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
            >
              {/* HEADER INFO */}
              <div className="flex flex-wrap justify-between gap-6 border-b pb-5">
                <div>
                  <p className="text-xs text-gray-500 uppercase">
                    Order Placed
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {dayjs(order.orderTimeMs).format("MMMM D")}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase">Order Total</p>
                  <p className="text-lg font-semibold text-green-700">
                    {formatMoney(order.totalCostCents)}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase">Order ID</p>
                  <p className="text-lg font-semibold">{order.id}</p>
                </div>
              </div>

              {/* PRODUCT LIST */}
              <div className="mt-6 space-y-6">
                {order.products.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-6 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"
                  >
                    {/* IMAGE */}
                    <img
                      src={item.product.image}
                      className="w-28 h-28 rounded-lg object-cover shadow-sm"
                    />

                    {/* PRODUCT INFO */}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {item.product.name}
                      </h2>

                      <p className="text-sm text-gray-600 mt-1">
                        Arriving on:{" "}
                        <span className="font-medium">
                          {dayjs(item.estimatedDeliveryTimeMs).format("MMMM D")}
                        </span>
                      </p>

                      <p className="text-sm text-gray-600 mt-1">
                        Quantity:{" "}
                        <span className="font-medium">{item.quantity}</span>
                      </p>

                      {/* BUY AGAIN BUTTON */}
                      <button className="mt-3 px-5 py-1.5 rounded-full border border-green-700 text-green-700 font-medium text-sm hover:bg-green-700 hover:text-white transition">
                        Buy Again
                      </button>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-col items-end">
                      <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-white shadow-sm transition">
                        Track Package
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
