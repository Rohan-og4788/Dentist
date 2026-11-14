import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import ScrollToTop from "./components/ui/ScrollToTop";

// Lazy-loaded Pages for optimal performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const OurDentist = lazy(() => import("./pages/OurDentist"));
const Appointment = lazy(() => import("./pages/Appointment"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Fallback spinner
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-3" />
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
        Loading...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* Scroll restorative utility */}
      <ScrollToTop />

      {/* Main Global Navigation */}
      <Navbar />

      {/* Main Route Content */}
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dentist" element={<OurDentist />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />
    </div>
  );
}
