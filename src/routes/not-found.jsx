import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold">404 — Not Found</h1>
      <p className="mt-2 text-white/70">The page you're looking for doesn't exist.</p>
      <p className="mt-4">
        <Link to="/" className="text-emerald-400 underline hover:text-emerald-300">
          Return to Home
        </Link>
      </p>
    </div>
  );
}
