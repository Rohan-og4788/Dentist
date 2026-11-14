import { Link } from "react-router-dom";
import { Home, Calendar, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className="w-24 h-24 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
          <span className="font-heading font-black text-4xl">404</span>
        </div>
        <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm mb-8 leading-relaxed">
          Looks like the page you are looking for has moved or does not exist. Let&apos;s get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-[#0a58ca] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            to="/appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm hover:bg-slate-200 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
