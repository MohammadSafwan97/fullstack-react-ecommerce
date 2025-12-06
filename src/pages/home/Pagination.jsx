// src/pages/products/Pagination.jsx
export default function Pagination({ meta, page, setPage }) {
  const total = meta.totalPages || 1;
  const current = meta.page || page || 1;
  const pagesToShow = 5;
  const start = Math.max(1, Math.min(current - 2, total - (pagesToShow - 1)));
  const pages = Array.from({ length: Math.min(total, pagesToShow) }).map(
    (_, i) => start + i
  );

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setPage(Math.max(1, current - 1))}
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={current <= 1}
      >
        ‹
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-10 h-10 flex items-center justify-center rounded ${
            p === current ? "bg-blue-600 text-white" : "border bg-white"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => setPage(Math.min(total, current + 1))}
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={current >= total}
      >
        ›
      </button>
    </div>
  );
}
