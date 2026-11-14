import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import services from "../data/services";
import clinic from "../config/clinic";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", name: "All Treatments" },
    { id: "general", name: "General & Preventive" },
    { id: "cosmetic", name: "Cosmetic & Aesthetics" },
    { id: "restorative", name: "Restorative & Surgery" },
  ];

  // Map service ID to category
  const getCategoryForService = (id) => {
    if (["general-dentistry", "teeth-cleaning", "pediatric-dentistry"].includes(id)) {
      return "general";
    }
    if (["teeth-whitening", "cosmetic-dentistry", "braces-orthodontics"].includes(id)) {
      return "cosmetic";
    }
    return "restorative";
  };

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || getCategoryForService(service.id) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const faqs = [
    {
      q: "How often should I visit the dentist for a routine checkup?",
      a: "The American Dental Association recommends visiting your dentist at least once every six months for a routine examination and professional cleaning. This helps catch minor issues before they become serious.",
    },
    {
      q: "Are dental implants permanent?",
      a: "Yes! Dental implants are crafted from medical-grade titanium that fuses with your jawbone. With regular oral hygiene and routine checkups, dental implants can last a lifetime.",
    },
    {
      q: "Does teeth whitening damage tooth enamel?",
      a: "No. Professional teeth whitening performed or supervised by a licensed dentist uses safe, calibrated peroxide concentrations that lift stains without damaging the enamel structure.",
    },
    {
      q: "What should I do if I have a severe toothache or broken tooth?",
      a: "A severe toothache or knocked-out tooth is a dental emergency. Contact our clinic immediately for same-day urgent care. If a tooth is knocked out, keep it moist in milk or saliva and bring it to our clinic right away.",
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
            <span className="text-primary font-medium">Services</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Our Dental Services
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl">
            Modern, compassionate dental care tailored to your unique smile. Explore our full range of preventative, cosmetic, and restorative treatments.
          </p>
        </div>
      </section>

      {/* 2. Filters & Search */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[73px] z-30 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-slate-500">No dental services found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const Icon = service.icon || Stethoscope;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                          {service.features.length} Features
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#20C997] flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/appointment?service=${service.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F5F9FC] hover:bg-primary text-slate-800 hover:text-white font-semibold text-sm transition-all duration-200"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book For This Service</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-16 md:py-24 bg-[#F5F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              Dental Questions
            </span>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mt-3 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Have questions about your upcoming dental treatment? Here are helpful answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-heading font-semibold text-base sm:text-lg text-slate-900">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-[#0a58ca] p-8 sm:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3">
              Need Help Choosing the Right Treatment?
            </h2>
            <p className="text-blue-100 text-base max-w-xl mx-auto mb-8">
              Schedule a comprehensive examination with {clinic.dentist.name} to receive a customized dental care plan.
            </p>
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-md hover:bg-slate-50 transition-transform hover:-translate-y-0.5"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
