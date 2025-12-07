import dayjs from "dayjs";
import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import { formatMoney } from "../../utils/money";
import { getOrdersByUser } from "../../api/orders.js";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  const user_id = 1; // TEMP → replace with logged-in user later

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await getOrdersByUser(user_id);
        setOrders(data);
      } catch (err) {
        console.error("Failed to load orders:", err);
      }
    };

    loadOrders();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
          Your Orders
        </h1>

        {orders.length === 0 && (
          <p className="text-gray-600 text-lg">You have no orders yet.</p>
        )}

        <div className="space-y-10">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
            >
              {/* HEADER */}
              <div className="flex flex-wrap justify-between gap-6 border-b pb-5">
                <div>
                  <p className="text-xs text-gray-500 uppercase">
                    Order Placed
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {dayjs(order.created_at).format("MMMM D")}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase">Order Total</p>
                  <p className="text-lg font-semibold text-green-700">
                    {formatMoney(order.total_cents)}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase">Order ID</p>
                  <p className="text-lg font-semibold">{order.id}</p>
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="mt-6 space-y-6">
                {order.products.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-6 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"
                  >
                    <img
                      src={item.product.image}
                      className="w-28 h-28 rounded-lg object-cover shadow-sm"
                    />

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

                      <button className="mt-3 px-5 py-1.5 rounded-full border border-green-700 text-green-700 font-medium text-sm hover:bg-green-700 hover:text-white transition">
                        Buy Again
                      </button>
                    </div>

                    <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-white shadow-sm transition">
                      Track Package
                    </button>
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
