import React from 'react';
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  ShieldAlert,
  Sparkles,
  Check,
  Info,
  Waves,
  Eye,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
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

  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const whaleVideos = ['/videos/whales.mp4', '/videos/whales-2.mp4', '/videos/whales-3.mp4'];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % whaleVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + whaleVideos.length) % whaleVideos.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Encabezado Visual Propio de Delfines y Ballenas */}
      <section className="relative py-28 sm:py-36 bg-[#092E3B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-specific.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#092E3B] via-[#092E3B]/80 to-[#092E3B]/55" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#12A8A3] hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>

          <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#12A8A3] block mb-2">
            {lang === 'es' ? 'Fauna Marina en el Golfo de Panamá' : 'Marine Wildlife in the Gulf of Panama'}
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            {t.marineLifePage.heroTitle}
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-light">
            {t.marineLifePage.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Avistamiento de delfines')}
              className="px-8 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-xl transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.marineLifePage.ctaMarine}</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg border border-white/25 flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#12A8A3]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. AVISO ÉTICO OBLIGATORIO SOBRE AVISTAMIENTOS */}
      <section className="py-8 bg-[#F2E9DA]/70 border-b border-amber-300/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#C9A878]/50 shadow-sm flex items-start gap-4">
            <Info className="w-7 h-7 text-[#092E3B] shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h3 className="font-bold text-sm sm:text-base text-[#092E3B]">
                {t.marineLifePage.disclaimerTitle}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {t.marineLifePage.disclaimerText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DELFINES MANCHADOS DEL PACÍFICO */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Cetáceos Odontocetos del Golfo' : 'Pacific Odontocete Cetaceans'}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#092E3B] tracking-tight">
                {t.marineLifePage.dolphinsTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t.marineLifePage.dolphinsDesc}
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-sm text-slate-700">
                <span className="font-bold text-[#092E3B] text-base block">
                  {lang === 'es' ? 'Comportamiento en Libertad:' : 'Wild Behavior in Freedom:'}
                </span>
                <p className="leading-relaxed">
                  {lang === 'es'
                    ? 'Navegan en manadas dinámicas que patrullan el golfo en busca de alimento. Frecuentemente se acercan por iniciativa propia a surfear la estela de los botes, ofreciendo avistamientos asombrosos en superficie sin forzar la interacción.'
                    : 'They cruise in dynamic pods feeding throughout the gulf waters. They frequently approach by their own curiosity to ride boat wakes, creating breathtaking surface encounters without coerced interaction.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry('Avistamiento de delfines')}
                  className="px-8 py-3.5 bg-[#092E3B] hover:bg-[#142126] text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors shadow flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#12A8A3]" />
                  <span>{t.featured.inquireExperience}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3">
                <img
                  src={IMAGES.dolphins}
                  alt="Delfines Manchados en el Pacífico de Panamá"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* 4. BALLENAS JOROBADAS (TEMPORADA VERIFICADA JULIO - OCTUBRE) */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <div className="relative w-full aspect-16/9 overflow-hidden rounded-2xl shadow-2xl border border-slate-200 bg-[#071b2b] group">
                <video
                  key={whaleVideos[currentVideoIndex]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={whaleVideos[currentVideoIndex]} type="video/mp4" />
                </video>

                {/* Carousel Navigation Arrows */}
                <button
                  onClick={prevVideo}
                  aria-label="Anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextVideo}
                  aria-label="Siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {whaleVideos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentVideoIndex(idx)}
                      aria-label={`Video ${idx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentVideoIndex ? 'w-6 bg-[#12A8A3]' : 'w-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
                  {lang === 'es' ? 'Migración Anual Verificada' : 'Verified Migration Season'}
                </span>
                <span className="text-sm font-bold text-[#092E3B] bg-[#F2E9DA] px-2.5 py-0.5 rounded">
                  {lang === 'es' ? 'Julio – Octubre' : 'July – October'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#092E3B] tracking-tight">
                {t.marineLifePage.whalesTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t.marineLifePage.whalesDesc}
              </p>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-sm text-slate-700 shadow-sm">
                <span className="font-bold text-[#092E3B] text-base block">
                  {lang === 'es' ? 'El Santuario de Crianza en Panamá:' : 'The Nursery Waters of Panama:'}
                </span>
                <p className="leading-relaxed">
                  {lang === 'es'
                    ? 'Tras recorrer más de 8.000 kilómetros desde la Antártida, las ballenas jorobadas encuentran en el golfo aguas cálidas y tranquilas, óptimas para que las crías recién nacidas puedan ganar fuerza antes de regresar a mares fríos.'
                    : 'After traversing over 8,000 kilometers from Antarctica, humpback whales reach the gulf’s calm, warm waters—the optimal sanctuary for newborn calves to build strength before the journey back.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry('Avistamiento de ballenas')}
                  className="px-8 py-3.5 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-sm uppercase tracking-wider rounded-lg transition-colors shadow flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.featured.inquireExperience}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CÓDIGO DE OBSERVACIÓN RESPONSABLE DE FAUNA */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
              {lang === 'es' ? 'Compromiso Ético y Ambiental' : 'Environmental Ethics'}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#092E3B] tracking-tight mt-1">
              {t.marineLifePage.responsibleTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              {lang === 'es'
                ? 'Nuestras salidas se rigen por principios de protección animal y respeto al entorno marino.'
                : 'All our boat excursions strictly observe established marine wildlife welfare standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#092E3B] text-[#12A8A3] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-[#092E3B]">
                  {lang === 'es' ? 'Distancia Prudencial de Seguridad' : 'Safe Distance Protocol'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.marineLifePage.rule1}
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#092E3B] text-[#12A8A3] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-[#092E3B]">
                  {lang === 'es' ? 'Protección a Madres y Ballenatos' : 'Mothers & Calves Sanctuary'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.marineLifePage.rule2}
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#092E3B] text-[#12A8A3] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-[#092E3B]">
                  {lang === 'es' ? 'Velocidad Reducida y Rumbo Constante' : 'Low Speed & Predictable Heading'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.marineLifePage.rule3}
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#092E3B] text-[#12A8A3] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-[#092E3B]">
                  {lang === 'es' ? 'Cero Persecución Forzada' : 'Zero Coercive Pursuit'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.marineLifePage.rule4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-20 sm:py-24 bg-[#092E3B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t.finalCta.title}
          </h2>
          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {t.finalCta.subtitle}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Avistamiento de delfines')}
              className="w-full sm:w-auto px-9 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-xl cursor-pointer"
            >
              {t.finalCta.whatsappBtn}
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-9 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg border border-white/20"
            >
              {t.finalCta.callBtn}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
