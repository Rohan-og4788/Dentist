import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Car,
} from "lucide-react";
import clinic from "../config/clinic";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#F5F9FC] border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-primary font-medium">Contact</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl">
            We are here to answer your dental inquiries, help you schedule visits, and guide your oral healthcare journey.
          </p>
        </div>
      </section>

      {/* 2. Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="p-6 rounded-2xl bg-[#F5F9FC] border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
                  Call Us
                </h3>
                <p className="text-xs text-slate-500 mb-3">Speak with our front desk directly</p>
              </div>
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="text-sm font-bold text-primary hover:underline"
              >
                {clinic.phone}
              </a>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#F5F9FC] border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#20C997]" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
                  Email Us
                </h3>
                <p className="text-xs text-slate-500 mb-3">Send inquiries anytime</p>
              </div>
              <a
                href={`mailto:${clinic.email}`}
                className="text-sm font-bold text-primary hover:underline truncate"
              >
                {clinic.email}
              </a>
            </div>

            {/* Address */}
            <div className="p-6 rounded-2xl bg-[#F5F9FC] border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
                  Visit Clinic
                </h3>
                <p className="text-xs text-slate-500 mb-3">Central, easy-to-reach location</p>
              </div>
              <p className="text-xs font-medium text-slate-700 leading-relaxed">
                {clinic.address.full}
              </p>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl bg-[#F5F9FC] border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
                  Open Hours
                </h3>
                <p className="text-xs text-slate-500 mb-3">Mon – Sat appointments</p>
              </div>
              <p className="text-xs font-medium text-slate-700">
                Mon - Fri: 9am - 6pm<br />
                Sat: 10am - 3pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Form & Map Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Message Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Have a question about insurance, treatments, or scheduling? Drop us a line below.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 text-center animate-in fade-in">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="text-xl font-heading font-bold text-emerald-900 mb-1">
                      Message Received!
                    </h3>
                    <p className="text-emerald-700 text-sm">
                      Thank you for contacting {clinic.name}. A member of our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-6 px-5 py-2.5 bg-emerald-600 text-white font-semibold text-sm rounded-xl hover:bg-emerald-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="General Question / Insurance Inquiry"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help your smile today?"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-primary hover:bg-[#0a58ca] text-white font-semibold text-sm rounded-xl shadow-md shadow-primary/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Map & Location Details */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              {/* Map Embed Card */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-80 bg-slate-100">
                <iframe
                  title="Clinic Location Map"
                  src={clinic.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Convenience Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#F5F9FC] border border-slate-100 flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900 mb-1">
                      Free Patient Parking
                    </h4>
                    <p className="text-xs text-slate-600">
                      Dedicated visitor parking spaces directly behind the clinic building.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F9FC] border border-slate-100 flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900 mb-1">
                      WhatsApp Quick Help
                    </h4>
                    <a
                      href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                        clinic.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#0d8664] hover:underline"
                    >
                      Chat with clinic staff →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
