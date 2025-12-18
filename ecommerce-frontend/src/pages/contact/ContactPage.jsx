import { useState } from "react";
import { Header } from "../../Components/Header";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-slate-50">
        {/* subtle background accent */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green-200/30 blur-3xl" />

        <section className="relative mx-auto max-w-2xl px-4 py-28">
          {/* HEADER */}
          <div className="mb-20">
            <h1 className="text-5xl font-medium text-slate-900 leading-[1.15]">
              Let’s work together
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Have a project, an idea, or just want to say hello?
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-12">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-label="Your name"
              required
              className="w-full border-b border-slate-300 bg-transparent px-1 py-3 text-lg text-slate-900
                         placeholder:text-slate-400
                         focus:border-green-700 focus:outline-none transition"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              aria-label="Email address"
              required
              className="w-full border-b border-slate-300 bg-transparent px-1 py-3 text-lg text-slate-900
                         placeholder:text-slate-400
                         focus:border-green-700 focus:outline-none transition"
            />

            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your idea…"
              aria-label="Message"
              required
              className="w-full border-b border-slate-300 bg-transparent px-1 py-3 text-lg text-slate-900
                         placeholder:text-slate-400
                         focus:border-green-700 focus:outline-none transition"
            />

            <button
              type="submit"
              className="group inline-flex items-center gap-2 text-green-700 font-medium text-lg transition hover:text-green-800"
            >
              Send message
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          {/* FOOTER INFO */}
          <div className="mt-24 space-y-2 text-sm text-slate-500">
            <p>support@safwanexpress.com</p>
            <p>+1 (234) 567-890</p>
          </div>
        </section>
      </main>
    </>
  );
}
