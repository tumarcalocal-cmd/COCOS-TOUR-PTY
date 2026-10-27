import React, { useState } from 'react';
import { Menu, X, Phone, Globe, MessageCircle } from 'lucide-react';
import { Language, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  currentPath: PageRoute;
  onNavigate: (path: PageRoute) => void;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenInquiry: (experiencePreselect?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  lang,
  onToggleLang,
  onOpenInquiry,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navLinks: { label: string; path: PageRoute }[] = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.islands, path: '/islas' },
    { label: t.nav.marineLife, path: '/vida-marina' },
    { label: t.nav.restaurant, path: '/restaurante' },
  ];

  const handleNavClick = (path: PageRoute) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#092E3B]/95 backdrop-blur-md text-white border-b border-white/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, clean display) */}
        <button
          onClick={() => handleNavClick('/')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A8A3]"
        >
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#12A8A3] transition-colors whitespace-nowrap shrink-0">
            COCOS TOUR <span className="text-[#12A8A3]">PTY</span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-medium text-slate-200">
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A8A3] ${
                  isActive
                    ? 'text-white font-bold border-b-2 border-[#12A8A3]'
                    : 'text-slate-300 hover:text-white hover:border-b-2 hover:border-white/30'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary action + Language Switcher */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          {/* Language Selector */}
          <div className="flex items-center bg-[#142126]/60 rounded-md p-1 border border-white/10 text-xs">
            <button
              onClick={() => onToggleLang('es')}
              aria-label="Cambiar idioma a Español"
              className={`px-3 py-1.5 rounded cursor-pointer transition-colors font-bold ${
                lang === 'es'
                  ? 'bg-[#12A8A3] text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => onToggleLang('en')}
              aria-label="Change language to English"
              className={`px-3 py-1.5 rounded cursor-pointer transition-colors font-bold ${
                lang === 'en'
                  ? 'bg-[#12A8A3] text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Quick Call */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="flex items-center gap-2 text-sm text-slate-200 hover:text-white transition-colors px-2.5 py-1.5 rounded"
            title={lang === 'es' ? 'Llamar a Cocos Tour PTY' : 'Call Cocos Tour PTY'}
          >
            <Phone className="w-4 h-4 text-[#12A8A3]" />
            <span className="tabular-nums font-mono font-medium">{BUSINESS_INFO.phone}</span>
          </a>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenInquiry()}
            className="px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#092E3B] bg-[#12A8A3] hover:bg-[#16bfba] rounded-lg shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
          >
            {t.nav.inquireBtn}
          </button>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Language Selector */}
          <div className="flex items-center bg-[#142126]/80 rounded p-0.5 border border-white/10 text-xs mr-1">
            <button
              onClick={() => onToggleLang('es')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                lang === 'es' ? 'bg-[#12A8A3] text-white' : 'text-slate-300'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                lang === 'en' ? 'bg-[#12A8A3] text-white' : 'text-slate-300'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white focus:outline-none"
            aria-label={isMobileMenuOpen ? t.nav.close : t.nav.menu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#092E3B] border-b border-white/15 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`block w-full text-left px-3 py-2.5 rounded text-sm font-medium ${
                    isActive
                      ? 'bg-[#12A8A3]/20 text-[#12A8A3] font-semibold border-l-2 border-[#12A8A3]'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-[#092E3B] bg-[#12A8A3] rounded shadow"
            >
              {t.nav.inquireBtn}
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-white bg-white/10 rounded"
            >
              <Phone className="w-4 h-4 text-[#12A8A3]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
