import { Header } from "../../Components/Header";

export function AboutPage() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-slate-50">
        {/* subtle background accent */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-200/30 blur-3xl" />

        <section className="relative mx-auto max-w-2xl px-4 py-28">
          {/* HEADER */}
          <div className="mb-20">
            <p className="mb-4 text-sm uppercase tracking-widest text-green-700">
              About
            </p>

            <h1 className="text-5xl sm:text-6xl font-medium text-slate-900 leading-[1.15]">
              Building simple, meaningful digital experiences
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              A little bit about who I am, how I think, and how I approach
              building modern web products.
            </p>
          </div>

          {/* STORY */}
          <div className="space-y-10 text-lg text-slate-700 leading-8">
            <p>
              SafwanExpress started with a simple belief: technology should make
              life easier, not more complicated. I care deeply about building
              software that feels fast, intuitive, and dependable.
            </p>

            <p>
              I enjoy working across the full stack — from designing clean,
              accessible interfaces to writing well-structured backend logic.
              My focus is always on maintainability, clarity, and long-term
              quality.
            </p>

            <p>
              Over time, I’ve learned that great software isn’t about adding more
              features. It’s about making thoughtful decisions, paying attention
              to details, and respecting the user’s time.
            </p>
          </div>

          {/* VALUES */}
          <div className="mt-24 space-y-14">
            <Value
              title="Quality over quantity"
              description="I focus on doing fewer things well rather than many things poorly."
            />
            <Value
              title="User-first thinking"
              description="Every technical decision starts with how it impacts the user."
            />
            <Value
              title="Continuous learning"
              description="I stay curious and constantly refine my skills as technology evolves."
            />
            <Value
              title="Attention to detail"
              description="Small details are often what separate good products from great ones."
            />
          </div>
        </section>
      </main>
    </>
  );
}

/* -----------------------------
   Value Component
-------------------------------- */

function Value({ title, description }) {
  return (
    <div>
      <h3 className="mb-3 text-2xl font-medium text-slate-900 leading-snug">
        {title}
      </h3>
      <p className="text-lg text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
