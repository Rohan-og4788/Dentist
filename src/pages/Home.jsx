import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Award,
  Clock,
  ArrowRight,
  CheckCircle2,
  Heart,
  Stethoscope,
} from "lucide-react";
import clinic from "../config/clinic";
import services from "../data/services";
import testimonials from "../data/testimonials";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = services.slice(0, 6);

  const keyFeatures = [
    {
      icon: Heart,
      title: "Gentle & Painless",
      description: "State-of-the-art anesthetic and gentle techniques designed for anxious patients.",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Sparkles,
      title: "Advanced Technology",
      description: "Digital imaging, ultra-low radiation X-rays, and precision dental instruments.",
      color: "bg-blue-50 text-primary",
    },
    {
      icon: Award,
      title: "Board-Certified Care",
      description: `Over 15 years of specialized clinical experience led by ${clinic.dentist.name}.`,
      color: "bg-teal-50 text-secondary-dark text-[#0f8b66]",
    },
    {
      icon: ShieldCheck,
      title: "Transparent & Honest",
      description: "No hidden charges, clear treatment plans, and evidence-based recommendations.",
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F9FC] via-white to-white py-16 md:py-24">
        {/* Background decorative dots and glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Premier Dental Care in {clinic.address.city}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
                Your Smile Deserves the <span className="text-primary">Gentlest</span> Care
              </h1>

              <p className="mt-5 text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
                {clinic.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary hover:bg-[#0a58ca] text-white font-semibold shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 text-base"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors text-base"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-slate-200/80 w-full grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                    15+
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-heading font-bold text-primary">
                    5,000+
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Smiles Restored
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                    <span>4.9</span>
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500 inline" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Patient Rating
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Visual Card */}
                <div className="relative z-10 rounded-3xl bg-gradient-to-br from-primary via-[#1a7aff] to-[#0a58ca] p-8 sm:p-10 text-white shadow-2xl">
                  {/* Decorative Tooth SVG */}
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/20">
                    <svg
                      className="w-12 h-12 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2.5 8 .8 2 1.5 4 3.5 4s2.7-2 3.5-4c1-2.5 2.5-5 2.5-8 0-3.5-2.5-6-6-6zm0 2c2.5 0 4 1.8 4 4.5 0 2.2-1.2 4.5-2.1 6.8-.6 1.5-1.2 3.1-1.9 3.7-.7-.6-1.3-2.2-1.9-3.7C9.2 13 8 10.7 8 8.5 8 5.8 9.5 4 12 4z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                    {clinic.name}
                  </h3>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                    {clinic.tagline}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/20 text-sm">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#20C997] flex-shrink-0" />
                      <span>Zero Pain Anesthesia Options</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#20C997] flex-shrink-0" />
                      <span>Same-Day Emergency Appointments</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#20C997] flex-shrink-0" />
                      <span>Custom Smile Makeovers</span>
                    </div>
                  </div>

                  {/* Doctor badge inside visual */}
                  <div className="mt-8 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white text-primary font-bold text-lg flex items-center justify-center flex-shrink-0">
                      SM
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{clinic.dentist.name}</p>
                      <p className="text-xs text-blue-200">{clinic.dentist.title}</p>
                    </div>
                  </div>
                </div>

                {/* Floating Satisfaction Pill */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Patient Satisfaction</p>
                    <p className="text-base font-bold text-slate-900">99.8% Positive</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. KEY FEATURES / WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mt-3 mb-4">
              A Better Dental Experience From Start to Finish
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We combine modern clinical techniques with genuine empathy so you can feel completely at ease during every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#F5F9FC] border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feat.color} flex items-center justify-center mb-6`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="py-16 md:py-24 bg-[#F5F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/15 px-3.5 py-1.5 rounded-full text-[#0f8b66]">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mt-3">
                Comprehensive Dental Care
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-xl">
                From routine preventative cleanings to advanced dental restorations, we have you fully covered.
              </p>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => {
              const Icon = service.icon || Stethoscope;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/appointment"
                    className="inline-flex items-center justify-between pt-4 border-t border-slate-100 text-sm font-semibold text-primary hover:text-[#0a58ca]"
                  >
                    <span>Book For This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MEET THE DENTIST TEASER */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary/5 via-[#F5F9FC] to-secondary/5 border border-slate-100 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-white shadow-xl border-4 border-white flex items-center justify-center text-primary font-bold text-6xl">
                  SM
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  Lead Dentist
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900">
                  {clinic.dentist.name}
                </h2>
                <p className="text-primary font-semibold text-base mt-1">
                  {clinic.dentist.title} • {clinic.dentist.specialization}
                </p>
                <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                  {clinic.dentist.shortBio}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/dentist"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-[#0a58ca] shadow-md shadow-primary/20 transition-all"
                  >
                    <span>Read Full Profile & Credentials</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
                  >
                    <span>Schedule Visit</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATIENT TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-[#F5F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
              Patient Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mt-3 mb-4">
              Real Smiles, Real Experiences
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Hear what our patients have to say about their care at {clinic.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-heading font-bold text-sm text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {t.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary via-[#0B5ED7] to-[#0a58ca] text-white p-8 sm:p-12 lg:p-16 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Book your consultation today and take the first step towards pain-free, confident dental health.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:bg-slate-50 transition-all hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Now</span>
              </Link>
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call {clinic.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
