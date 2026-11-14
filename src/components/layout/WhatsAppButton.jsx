import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import clinic from "../../config/clinic";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  if (!clinic.whatsapp) return null;

  const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    clinic.whatsappMessage || "Hi! I'd like to book a dental appointment."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium">Need quick advice? Chat on WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 hover:shadow-xl transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 opacity-75" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
