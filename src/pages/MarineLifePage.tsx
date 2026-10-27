import React from 'react';
import { ArrowLeft, MessageCircle, Phone, ShieldAlert, Sparkles, Check, Info } from 'lucide-react';
import { Language, PageRoute, VideoItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/content';
import { IMAGES, MEDIA_CONFIG } from '../data/mediaConfig';
import { VideoCard } from '../components/VideoCard';

interface MarineLifePageProps {
  lang: Language;
  onNavigate: (path: PageRoute) => void;
  onOpenInquiry: (experiencePreselect?: string) => void;
  onPlayVideo: (video: VideoItem) => void;
}

export const MarineLifePage: React.FC<MarineLifePageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
  onPlayVideo,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#092E3B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.whales}
            alt="Avistamiento de Ballenas y Delfines en Panamá"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092E3B] via-[#092E3B]/80 to-[#092E3B]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#12A8A3] hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            {t.marineLifePage.heroTitle}
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {t.marineLifePage.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Avistamiento de delfines')}
              className="px-8 py-3.5 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded shadow transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.marineLifePage.ctaMarine}</span>
            </button>
          </div>
        </div>
      </section>

      {/* MANDATORY ETHICAL SIGHTING NOTICE */}
      <section className="py-8 bg-[#F2E9DA]/60 border-b border-amber-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#C9A878]/40 shadow-sm flex items-start gap-4">
            <Info className="w-6 h-6 text-[#092E3B] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-xs sm:text-sm text-[#092E3B]">
                {t.marineLifePage.disclaimerTitle}
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {t.marineLifePage.disclaimerText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELFINES MANCHADOS DEL PACÍFICO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Cetáceos Odontocetos' : 'Pacific Odontocetes'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight">
                {t.marineLifePage.dolphinsTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {t.marineLifePage.dolphinsDesc}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                <span className="font-bold text-[#092E3B] block">
                  {lang === 'es' ? 'Comportamiento en Libertad:' : 'Wild Behavior Patterns:'}
                </span>
                <p className="leading-relaxed">
                  {lang === 'es'
                    ? 'Nadan en grupos sociales que pueden variar desde parejas hasta decenas de ejemplares. Su agilidad les permite saltar verticalmente y deslizarse en las olas de presión generadas por el bote cuando deciden interactuar voluntariamente.'
                    : 'They travel in active social pods ranging from small family groups to dozens of individuals. Their agility allows them to breach vertically and ride pressure waves when they choose to voluntarily approach.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry('Avistamiento de delfines')}
                  className="px-6 py-3 bg-[#092E3B] hover:bg-[#142126] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  {t.featured.inquireExperience}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3">
                <img
                  src={IMAGES.dolphins}
                  alt="Delfines Manchados en el Pacífico de Panamá"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <VideoCard
                video={MEDIA_CONFIG.dolphinsVideo}
                lang={lang}
                onPlay={onPlayVideo}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BALLENAS JOROBADAS (TEMPORADA VERIFICADA JULIO - OCTUBRE) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-16/9">
                <img
                  src={IMAGES.whales}
                  alt="Ballena Jorobada en el Golfo de Panamá"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <VideoCard
                video={MEDIA_CONFIG.whalesVideo}
                lang={lang}
                onPlay={onPlayVideo}
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                  {lang === 'es' ? 'Migración Antártica Anual' : 'Annual Migration'}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  · {lang === 'es' ? 'Julio – Octubre' : 'July – October'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight">
                {t.marineLifePage.whalesTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {t.marineLifePage.whalesDesc}
              </p>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs text-slate-700">
                <span className="font-bold text-[#092E3B] block">
                  {lang === 'es' ? 'Por Qué Vienen a Panamá:' : 'Why They Migrate to Panama:'}
                </span>
                <p className="leading-relaxed">
                  {lang === 'es'
                    ? 'Las aguas tropicales cálidas y calmas del Pacífico panameño proporcionan el entorno óptimo para el alumbramiento de los ballenatos, que nacen con una capa delgada de grasa corporal insuficiente para soportar el gélido invierno austral.'
                    : 'The warm, calm tropical waters of the Panamanian Pacific provide ideal conditions for giving birth and nursing newborn calves, which lack the thick blubber layer needed to withstand subpolar winters.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry('Avistamiento de ballenas')}
                  className="px-6 py-3 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded transition-colors shadow"
                >
                  {t.featured.inquireExperience}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓDIGO DE OBSERVACIÓN RESPONSABLE DE FAUNA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
              {lang === 'es' ? 'Compromiso Ético y Ambiental' : 'Environmental Ethics'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight mt-1">
              {t.marineLifePage.responsibleTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              {lang === 'es'
                ? 'Nuestras operaciones en mar abierto siguen directrices rigurosas de protección animal.'
                : 'Our open ocean navigation strictly follows established wildlife protection standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#092E3B] text-[#12A8A3] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092E3B] mb-1">
                  {lang === 'es' ? 'Distancia Prudencial' : 'Safe Distance'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.marineLifePage.rule1}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#092E3B] text-[#12A8A3] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092E3B] mb-1">
                  {lang === 'es' ? 'Protección a Madres y Crías' : 'Mother & Calf Protection'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.marineLifePage.rule2}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#092E3B] text-[#12A8A3] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092E3B] mb-1">
                  {lang === 'es' ? 'Velocidad Reducida y Rumbo Constante' : 'Low Speed & Constant Heading'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.marineLifePage.rule3}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#092E3B] text-[#12A8A3] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092E3B] mb-1">
                  {lang === 'es' ? 'Cero Persecución Forzada' : 'Zero Pursuit Policy'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.marineLifePage.rule4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#092E3B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.finalCta.title}
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t.finalCta.subtitle}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Avistamiento de delfines')}
              className="w-full sm:w-auto px-8 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded shadow cursor-pointer"
            >
              {t.finalCta.whatsappBtn}
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded border border-white/20"
            >
              {t.finalCta.callBtn}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
