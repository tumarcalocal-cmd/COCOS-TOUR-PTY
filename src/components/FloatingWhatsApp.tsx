import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface FloatingWhatsAppProps {
  lang: Language;
  onOpenInquiry: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang, onOpenInquiry }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const greeting = lang === 'es' ? '¡Hola! ¿Deseas consultar una excursión?' : 'Hello! Would you like to inquire about a tour?';
  const cta = lang === 'es' ? 'Consultar por WhatsApp' : 'Chat on WhatsApp';

  return (
    <aside aria-label={cta} className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 max-w-xs bg-white text-slate-800 p-3 rounded-lg shadow-xl border border-slate-200 text-xs animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-[#092E3B]">Cocos Tour PTY</p>
              <p className="text-slate-600 mt-0.5">{greeting}</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Cerrar tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="mt-2.5 flex gap-2">
            <button
              onClick={() => {
                setShowTooltip(false);
                onOpenInquiry();
              }}
              className="w-full py-1.5 px-2 bg-[#12A8A3] text-[#092E3B] font-bold rounded text-[11px] text-center"
            >
              {lang === 'es' ? 'Formulario Rápido' : 'Quick Form'}
            </button>
            <a
              href="https://wa.me/50762893605"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-1.5 px-2 bg-emerald-600 text-white font-bold rounded text-[11px] text-center hover:bg-emerald-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <div className="relative group">
        <a
          href="https://wa.me/50762893605"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label={cta}
          title={cta}
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
        </a>
      </div>
    </aside>
  );
};
