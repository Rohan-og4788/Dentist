import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import clinic from "../config/clinic";
import services from "../data/services";

export default function Appointment() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceId: initialService,
    date: "",
    timeSlot: "morning",
    isFirstVisit: "yes",
    notes: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceId: initialService }));
    }
  }, [initialService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate backend submission
    setTimeout(() => {
      const randomRef = "DC-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setStatus("success");
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      serviceId: "",
      date: "",
      timeSlot: "morning",
      isFirstVisit: "yes",
      notes: "",
    });
    setStatus("idle");
  };

  // Minimum date today in YYYY-MM-DD
  const todayDate = new Date().toISOString().split("T")[0];

  const selectedServiceName =
    services.find((s) => s.id === formData.serviceId)?.title || "General Consultation";

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#F5F9FC] border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-primary font-medium">Book Appointment</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Schedule Your Visit
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl">
            Book an appointment online in under 2 minutes. We will confirm your preferred time and ensure your visit is prompt and stress-free.
          </p>
        </div>
      </section>

      {/* 2. Main Booking Layout */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form or Success Confirmation */}
            <div className="lg:col-span-8">
              {status === "success" ? (
                <div className="bg-[#F5F9FC] rounded-3xl p-8 sm:p-12 border border-slate-200 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-slate-900 mb-2">
                    Appointment Requested!
                  </h3>
                  <p className="text-slate-600 text-base max-w-lg mx-auto mb-6">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our clinic coordinator will review your request and send a confirmation via SMS/Email shortly.
                  </p>

                  {/* Summary Box */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 max-w-md mx-auto text-left space-y-3 mb-8 shadow-sm">
                    <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
                      <span className="text-slate-500">Booking Reference</span>
                      <span className="font-mono font-bold text-primary">{bookingRef}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
                      <span className="text-slate-500">Treatment</span>
                      <span className="font-semibold text-slate-800">{selectedServiceName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
                      <span className="text-slate-500">Requested Date</span>
                      <span className="font-semibold text-slate-800">{formData.date || "Next available"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Time Window</span>
                      <span className="font-semibold text-slate-800 capitalize">
                        {formData.timeSlot === "morning"
                          ? "Morning (9:00 AM – 12:00 PM)"
                          : formData.timeSlot === "afternoon"
                          ? "Afternoon (12:00 PM – 4:00 PM)"
                          : "Evening (4:00 PM – 7:00 PM)"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-[#0a58ca] transition-colors"
                    >
                      Book Another Appointment
                    </button>
                    <Link
                      to="/"
                      className="w-full sm:w-auto px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl transition-colors"
                    >
                      Back to Homepage
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                  <div className="mb-8">
                    <h2 className="text-2xl font-heading font-bold text-slate-900">
                      Patient Details & Scheduling
                    </h2>
                    <p className="text-slate-500 text-sm mt-1">
                      Please fill out your information so we can prepare for your visit.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Contact Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="sarah@example.com"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Reason for Visit / Treatment *
                      </label>
                      <select
                        name="serviceId"
                        required
                        value={formData.serviceId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm bg-white"
                      >
                        <option value="">-- Select a Treatment --</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                        <option value="consultation">General Consultation & Checkup</option>
                        <option value="emergency">Emergency / Acute Tooth Pain</option>
                      </select>
                    </div>

                    {/* Date & Time Slot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          min={todayDate}
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Preferred Time Window *
                        </label>
                        <select
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm bg-white"
                        >
                          <option value="morning">Morning (9:00 AM – 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                          <option value="evening">Evening (4:00 PM – 7:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* First visit radio */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Is this your first visit to {clinic.name}?
                      </label>
                      <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                          <input
                            type="radio"
                            name="isFirstVisit"
                            value="yes"
                            checked={formData.isFirstVisit === "yes"}
                            onChange={handleChange}
                            className="text-primary focus:ring-primary"
                          />
                          <span>Yes, I am a new patient</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                          <input
                            type="radio"
                            name="isFirstVisit"
                            value="no"
                            checked={formData.isFirstVisit === "no"}
                            onChange={handleChange}
                            className="text-primary focus:ring-primary"
                          />
                          <span>No, returning patient</span>
                        </label>
                      </div>
                    </div>

                    {/* Notes / Symptoms */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Any specific symptoms or notes? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Describe any sensitivity, tooth pain, dental anxiety, or specific requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 rounded-xl bg-primary hover:bg-[#0a58ca] text-white font-semibold text-base shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Confirm Appointment Request</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Info & Assurance Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Doctor Card */}
              <div className="bg-[#F5F9FC] p-6 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                    SM
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900">
                      {clinic.dentist.name}
                    </h4>
                    <p className="text-xs text-primary font-medium">
                      {clinic.dentist.title}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  &ldquo;We reserve dedicated time for each patient so you receive thorough, unhurried attention in a gentle environment.&rdquo;
                </p>
              </div>

              {/* Guarantees */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h4 className="font-heading font-bold text-slate-900 text-base">
                  What to Expect:
                </h4>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Prompt confirmation via SMS and Email within 2 business hours.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Minimal wait times with our smart scheduling policy.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Complimentary consultation for cosmetic and implant procedures.</span>
                </div>
              </div>

              {/* Immediate assistance box */}
              <div className="bg-slate-900 text-white p-6 rounded-3xl">
                <h4 className="font-heading font-bold text-base mb-2">
                  Prefer to Schedule by Phone?
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  Our front-desk team is ready to answer any questions or find urgent openings.
                </p>
                <a
                  href={`tel:${clinic.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-[#0a58ca] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {clinic.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
