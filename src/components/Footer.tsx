import React from 'react';
import { Phone, MapPin, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  lang: Language;
  onNavigate: (path: PageRoute) => void;
  onOpenLegal: () => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  onOpenLegal,
  onOpenInquiry,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-[#092E3B] text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-tight text-white">
              COCOS TOUR <span className="text-[#12A8A3]">PTY</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="pt-2">
              <span className="text-[11px] text-[#C9A878] font-semibold block mb-1">
                {lang === 'es' ? 'Guía local y anfitrión:' : 'Local guide & host:'}
              </span>
              <p className="text-sm font-semibold text-white">{BUSINESS_INFO.guideName}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#12A8A3] transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/islas')}
                  className="hover:text-[#12A8A3] transition-colors cursor-pointer"
                >
                  {t.nav.islands}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/vida-marina')}
                  className="hover:text-[#12A8A3] transition-colors cursor-pointer"
                >
                  {t.nav.marineLife}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/restaurante')}
                  className="hover:text-[#12A8A3] transition-colors cursor-pointer"
                >
                  {t.nav.restaurant}
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenInquiry}
                  className="text-[#12A8A3] font-semibold hover:underline"
                >
                  {t.nav.inquireBtn} →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#12A8A3] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="tabular-nums font-mono">{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#12A8A3] shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp (+507 6289-3605)</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-slate-300">
                <MapPin className="w-4 h-4 text-[#12A8A3] shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Google Maps & Verification */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'es' ? 'Ficha Verificada Google' : 'Google Verified Profile'}
            </h4>
            <div className="bg-[#142126] p-3.5 rounded-lg border border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <span>★ 4.6</span>
                <span className="text-slate-400 font-normal">
                  ({BUSINESS_INFO.reviewsCount} {lang === 'es' ? 'opiniones en Google' : 'reviews on Google'})
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                {lang === 'es'
                  ? 'Consulta opiniones auténticas y ubicación comercial directamente en Google Maps.'
                  : 'Check authentic guest reviews and commercial base directly on Google Maps.'}
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#12A8A3] font-semibold hover:underline pt-1"
              >
                <span>{lang === 'es' ? 'Abrir ficha en Google Maps' : 'Open Google Maps Listing'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © {new Date().getFullYear()} Cocos Tour PTY. {t.footer.rights}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              {t.footer.noPricesNotice}
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenLegal}
              className="hover:text-white transition-colors cursor-pointer underline underline-offset-2"
            >
              {t.footer.legalNotice}
            </button>
            <span>·</span>
            <button
              onClick={onOpenLegal}
              className="hover:text-white transition-colors cursor-pointer underline underline-offset-2"
            >
              {t.footer.termsNotice}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
