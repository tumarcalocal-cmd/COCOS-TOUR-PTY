import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[lang];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden my-6 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#092E3B] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#12A8A3]" />
            <h3 className="font-bold text-base sm:text-lg">{t.legal.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded transition-colors"
            aria-label="Cerrar modal legal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-7 space-y-6 text-base text-slate-800 max-h-[70vh] overflow-y-auto leading-relaxed">
          <section className="space-y-2.5">
            <h4 className="font-bold text-[#092E3B] text-lg flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#12A8A3]" />
              {t.legal.privacyTitle}
            </h4>
            <p className="text-slate-700">{t.legal.privacyContent}</p>
          </section>

          <section className="space-y-2.5 pt-4 border-t border-slate-200">
            <h4 className="font-bold text-[#092E3B] text-lg flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#12A8A3]" />
              {t.legal.termsTitle}
            </h4>
            <p className="text-slate-700">{t.legal.termsContent}</p>
          </section>

          <div className="bg-[#F2E9DA] p-4 rounded-xl text-sm text-slate-800">
            <p className="font-bold mb-1">Cocos Tour PTY — Punta Chame, Panamá</p>
            <p>Contacto comercial directo: +507 6289-3605 | cocostourpty@gmail.com</p>
          </div>
        </div>

        <div className="bg-slate-50 px-7 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#092E3B] hover:bg-[#142126] text-white font-bold text-sm rounded-lg transition-colors cursor-pointer"
          >
            {t.legal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
