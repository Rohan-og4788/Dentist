import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Clock,
  Star,
  BookOpen,
  Users,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import clinic from '../config/clinic';

const OurDentist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dentist = clinic?.dentist || {};

  // Extract initials (e.g., "Dr. Sarah Mitchell" -> "SM")
  const getInitials = (name) => {
    if (!name) return 'DR';
    const clean = name.replace(/^(Dr\.|Dr|Doctor)\s+/i, '').trim();
    const parts = clean.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return clean.slice(0, 2).toUpperCase() || 'DR';
  };

  const initials = getInitials(dentist.name);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* 1. Page Header Banner */}
      <section className="bg-[#F5F9FC] border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-sm text-slate-500 mb-3"
              aria-label="Breadcrumb"
            >
              <Link
                to="/"
                className="hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-primary font-medium">Our Dentist</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
              Our Dentist
            </h1>
            <p className="mt-2 text-slate-600 text-base sm:text-lg max-w-2xl">
              Meet the caring hands and dedicated mind behind healthy, confident smiles at {clinic.name}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Dentist Profile Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-slate-100 p-8 sm:p-12 flex flex-col items-center text-center shadow-lg">
                {/* Decorative dot pattern background */}
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  aria-hidden="true"
                >
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern
                        id="dentist-dots-pattern"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1.5" fill="#0D6EFD" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dentist-dots-pattern)" />
                  </svg>
                </div>

                {/* Decorative radial blur element */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/15 rounded-full blur-2xl pointer-events-none" />

                {/* Large circle with initials */}
                <div className="w-48 h-48 rounded-full bg-white shadow-xl border-4 border-white flex items-center justify-center text-primary font-bold text-6xl relative z-10 transition-transform duration-300 hover:scale-105">
                  <span>{initials}</span>
                </div>

                {/* Name below the circle */}
                <h3 className="mt-6 text-2xl font-heading font-bold text-slate-900 relative z-10">
                  {dentist.name}
                </h3>

                {/* Title/specialization */}
                <p className="mt-1 text-sm font-semibold text-primary relative z-10">
                  {dentist.title}
                </p>
                <p className="mt-0.5 text-xs text-slate-500 font-medium relative z-10">
                  {dentist.specialization}
                </p>

                {/* Quick Trust Highlights */}
                <div className="mt-6 pt-6 border-t border-slate-200/60 w-full flex items-center justify-center gap-6 relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>5.0 Rated</span>
                  </div>
                  <div className="h-3 w-px bg-slate-300" />
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                    <Users className="w-4 h-4 text-primary" />
                    <span>5,000+ Smiles</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              {/* Name */}
              <h2 className="text-4xl font-heading font-bold text-slate-900 tracking-tight">
                {dentist.name}
              </h2>

              {/* Title */}
              <p className="text-primary text-lg font-semibold mt-1 mb-5">
                {dentist.title}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
                {/* Qualifications badge */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 text-primary border border-blue-100">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>{dentist.qualifications}</span>
                </span>

                {/* Experience badge */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>{dentist.experience}</span>
                </span>

                {/* Specialization badge */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-teal-50 text-teal-700 border border-teal-100">
                  <Award className="w-4 h-4 text-teal-600" />
                  <span>{dentist.specialization}</span>
                </span>
              </div>

              {/* Full bio */}
              <div className="text-slate-600 leading-relaxed text-base sm:text-lg whitespace-pre-line mb-8">
                {dentist.bio}
              </div>

              {/* CTA link to consultation */}
              <div className="pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-[#0a58ca] text-white font-semibold rounded-xl shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Book a Consultation with {dentist.name?.split(' ')[1] || 'Doctor'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Education & Credentials */}
      <section className="py-16 md:py-20 bg-[#F5F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 tracking-tight">
              Education & Credentials
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              A commitment to excellence built through rigorous academic training and continuous professional mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Education
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Academic degrees and clinical certifications
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {(dentist.education || []).map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-slate-700 leading-relaxed text-sm sm:text-base">
                      {edu}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Professional Memberships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                  <BookOpen className="w-6 h-6 text-[#20C997]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Professional Memberships
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Active industry associations and fellowships
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {(dentist.memberships || []).map((membership, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-slate-700 leading-relaxed text-sm sm:text-base">
                      {membership}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Philosophy & Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5" />
              <span>Care Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
              My Approach to Dental Care
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              I believe that exceptional dentistry begins with listening. Every patient comes with unique goals, comfort levels, and dental histories. My philosophy centers on providing compassionate, gentle care in a judgment-free environment where modern technology and personalized attention work hand in hand to protect your oral health for a lifetime.
            </p>
          </motion.div>

          {/* 3 Value cards in a row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Gentle Touch */}
            <motion.div
              variants={itemVariants}
              className="bg-[#F5F9FC] rounded-2xl p-8 border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6">
                <Heart className="w-7 h-7 text-[#20C997]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                Gentle Touch
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Prioritizing your comfort with minimally invasive techniques, gentle numbing, and a calm chairside manner that eliminates anxiety.
              </p>
            </motion.div>

            {/* Patient Education */}
            <motion.div
              variants={itemVariants}
              className="bg-[#F5F9FC] rounded-2xl p-8 border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                Patient Education
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Empowering you through open dialogue, transparent treatment options, and clear guidance so you always make fully informed decisions.
              </p>
            </motion.div>

            {/* Lasting Results */}
            <motion.div
              variants={itemVariants}
              className="bg-[#F5F9FC] rounded-2xl p-8 border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6 border border-amber-100">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                Lasting Results
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Utilizing state-of-the-art materials and precision restorative practices to craft durable, healthy smiles engineered to stand the test of time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-[#0B5ED7] to-[#0a58ca] text-white p-8 sm:p-12 lg:p-16 text-center shadow-xl"
          >
            {/* Background decorative elements */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              aria-hidden="true"
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="cta-dots-pattern"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-dots-pattern)" />
              </svg>
            </div>
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 tracking-tight">
                Schedule a Consultation with {dentist.name}
              </h2>
              <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Take the next step towards the smile you have always deserved. Experience gentle, personalized dentistry tailored specifically to your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary hover:bg-blue-50 font-semibold rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                {clinic.phone && (
                  <a
                    href={`tel:${clinic.phoneRaw || clinic.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
                  >
                    <span>Call {clinic.phone}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurDentist;

