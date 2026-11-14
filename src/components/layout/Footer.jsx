import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import clinic from "../../config/clinic";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "All Dental Services", path: "/services" },
    { name: "Meet Our Dentist", path: "/dentist" },
    { name: "Book Appointment", path: "/appointment" },
    { name: "Contact & Location", path: "/contact" },
  ];

  const popularServices = [
    { name: "General Dentistry", path: "/services" },
    { name: "Teeth Whitening", path: "/services" },
    { name: "Dental Implants", path: "/services" },
    { name: "Root Canal Therapy", path: "/services" },
    { name: "Braces & Orthodontics", path: "/services" },
    { name: "Pediatric Dentistry", path: "/services" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Alert Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-red-950/50 via-slate-800 to-slate-800 border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-heading font-bold text-lg">
                Experiencing a Dental Emergency?
              </h4>
              <p className="text-slate-400 text-sm">
                Severe toothache or injury? Contact our priority emergency line right away.
              </p>
            </div>
          </div>
          <a
            href={`tel:${clinic.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-lg shadow-red-600/30 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: {clinic.phone}</span>
          </a>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Clinic Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2.5 8 .8 2 1.5 4 3.5 4s2.7-2 3.5-4c1-2.5 2.5-5 2.5-8 0-3.5-2.5-6-6-6zm0 2c2.5 0 4 1.8 4 4.5 0 2.2-1.2 4.5-2.1 6.8-.6 1.5-1.2 3.1-1.9 3.7-.7-.6-1.3-2.2-1.9-3.7C9.2 13 8 10.7 8 8.5 8 5.8 9.5 4 12 4z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-2xl text-white">
                {clinic.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {clinic.shortDescription || clinic.description}
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                Led by
              </p>
              <Link
                to="/dentist"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors"
              >
                <span>{clinic.dentist.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white font-heading font-bold text-base mb-4">
              Our Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {popularServices.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.path}
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-secondary text-xs">›</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 className="text-white font-heading font-bold text-base mb-4">
              Clinic Information
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{clinic.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${clinic.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {clinic.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${clinic.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {clinic.email}
                </a>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1.5">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  <span>Clinic Hours:</span>
                </div>
                <p className="text-xs text-slate-400">
                  Mon – Thu: 9:00 AM – 6:00 PM<br />
                  Fri: 9:00 AM – 5:00 PM<br />
                  Sat: 10:00 AM – 3:00 PM (Sun: Closed)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {clinic.name}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for healthy and happy smiles</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
