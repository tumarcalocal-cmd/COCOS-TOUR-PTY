import React from 'react';
import { Send, Phone } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/content';

interface MobileBottomBarProps {
  lang: Language;
  onOpenInquiry: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ lang, onOpenInquiry }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#092E3B] border-t border-white/10 px-3 py-2 flex items-center gap-2 shadow-2xl h-14">
      <button
        onClick={onOpenInquiry}
        className="flex-1 h-10 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <Send className="w-3.5 h-3.5" />
        <span>{t.floatingBar.btn}</span>
      </button>

      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        className="h-10 px-3 bg-white/10 text-white rounded flex items-center justify-center active:scale-95 transition-transform"
        aria-label="Llamar a Cocos Tour PTY"
      >
        <Phone className="w-4 h-4 text-[#12A8A3]" />
      </a>
    </div>
  );
};
