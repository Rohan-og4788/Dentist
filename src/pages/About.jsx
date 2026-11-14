import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Compass,
  Eye,
  CheckCircle2,
  Award,
  Users,
  ShieldCheck,
  Heart,
  Sparkles,
  ArrowRight,
  Clock,
} from "lucide-react";
import clinic from "../config/clinic";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facilityHighlights = [
    {
      title: "Digital Low-Dose X-Rays",
      description: "Up to 90% less radiation than traditional film, with instant high-resolution results.",
    },
    {
      title: "Comfort-First Treatment Rooms",
      description: "Ergonomic dental chairs, calming ambiance, and ceiling-mounted entertainment screens.",
    },
    {
      title: "Hospital-Grade Sterilization",
      description: "Rigorous autoclaving and multi-stage sanitation complying with ADA & OSHA standards.",
    },
    {
      title: "3D Intraoral Scanning",
      description: "Mess-free, digital impressions that replace gooey impression trays for crowns and aligners.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#F5F9FC] border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-primary font-medium">About Us</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            About {clinic.name}
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl">
            {clinic.tagline}. Dedicated to delivering compassionate, comprehensive dental care to patients of all ages.
          </p>
        </div>
      </section>

      {/* 2. Clinic Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 leading-tight">
                Redefining the Dental Experience With Empathy & Precision
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Founded with a simple mission: to make dental visits comfortable, transparent, and anxiety-free. At {clinic.name}, we believe that a visit to the dentist shouldn’t evoke dread or apprehension.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                From our welcoming reception lounge to our high-tech treatment suites, every detail of our clinic has been thoughtfully designed with patient comfort at its core. Whether you need a simple cleaning or a complex smile restoration, you are treated like family.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-[#F5F9FC]">
                  <p className="text-2xl font-heading font-bold text-primary">5,000+</p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">Satisfied Smiles Treated</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F5F9FC]">
                  <p className="text-2xl font-heading font-bold text-secondary">15+ Years</p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">Clinical Practice Experience</p>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-3xl bg-gradient-to-br from-primary/10 via-[#F5F9FC] to-secondary/10 p-8 sm:p-12 border border-slate-100 shadow-lg text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary mb-6">
                  <Heart className="w-12 h-12 text-[#20C997]" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                  Patient-First Commitment
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  &ldquo;Our promise to you is honest recommendations, painless techniques, and care you can rely on for years to come.&rdquo;
                </p>
                <div className="pt-4 border-t border-slate-200/60 w-full">
                  <p className="font-heading font-bold text-slate-900">{clinic.dentist.name}</p>
                  <p className="text-xs text-primary font-medium">{clinic.dentist.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-16 md:py-20 bg-[#F5F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {clinic.mission}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-[#20C997]" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {clinic.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              The fundamental standards that guide every patient interaction and clinical decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(clinic.values || []).map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F5F9FC] border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-base mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Modern Facilities & Safety Standards */}
      <section className="py-16 md:py-20 bg-[#F5F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900">
              Modern Facilities & Safety Protocols
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Designed for clinical accuracy, minimal discomfort, and absolute safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilityHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Meet The Team CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-[#0a58ca] text-white p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Get to Know Our Doctor
            </h2>
            <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8">
              Learn about Dr. Sarah Mitchell&apos;s education, board certifications, and patient care approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dentist"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:bg-slate-50 transition-colors"
              >
                <span>View Doctor Profile</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
              >
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
