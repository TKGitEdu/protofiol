import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

export default function Layout() {
  const link = ({ isActive }) =>
    `px-3 py-2 text-sm ${isActive ? "text-emerald-400" : "text-white/70 hover:text-white"}`;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <NavLink to="/" className="font-semibold tracking-wide text-emerald-300">
            Đặng Quốc Tâm
          </NavLink>
          <div className="ml-auto flex gap-1">
            <NavLink to="/" className={link}>Home</NavLink>
            <NavLink to="/projects" className={link}>Projects</NavLink>
            <NavLink to="/resume" className={link}>Resume</NavLink>
            <NavLink to="/contact" className={link}>Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} • Đặng Quốc Tâm
      </footer>

      <ScrollRestoration />
    </div>
  );
}
