import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Compass,
  Anchor,
  Shield,
  MessageCircle,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Play,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Language, PageRoute, VideoItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO, EXPERIENCES, REVIEWS, FAQS } from '../data/content';
import { MEDIA_CONFIG, IMAGES } from '../data/mediaConfig';
import { VideoCard } from '../components/VideoCard';

interface HomePageProps {
  lang: Language;
  onNavigate: (path: PageRoute) => void;
  onOpenInquiry: (experiencePreselect?: string) => void;
  onPlayVideo: (video: VideoItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
  onPlayVideo,
}) => {
  const t = TRANSLATIONS[lang];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const heroVideo = MEDIA_CONFIG.heroVideo;
  const videoGalleryItems = [
    MEDIA_CONFIG.otoqueVideo,
    MEDIA_CONFIG.bonaVideo,
    MEDIA_CONFIG.dolphinsVideo,
    MEDIA_CONFIG.whalesVideo,
    MEDIA_CONFIG.restaurantVideo,
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. PORTADA CINEMATOGRÁFICA */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#092E3B] text-white">
        {/* Background Video / High-Fidelity Poster with fallback */}
        <div className="absolute inset-0 z-0">
          {heroVideo.videoUrl ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={heroVideo.poster}
            >
              <source src={heroVideo.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <img
              src={IMAGES.hero}
              alt="Archipiélago del Pacífico Panameño - Cocos Tour PTY"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-105 animate-pulse duration-[12000ms]"
            />
          )}

          {/* Measured Scrim for Media Overlays: ensures 4.5:1 text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#092E3B] via-[#092E3B]/70 to-[#092E3B]/40" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          {/* Unboxed Metadata Header (Anti-slop zero-pill rule) */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#12A8A3] mb-4 flex items-center gap-2">
            <span>Punta Chame</span>
            <span aria-hidden="true">·</span>
            <span>Panamá Oeste</span>
            <span aria-hidden="true">·</span>
            <span>4.6 ★ Google</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl text-balance leading-tight drop-shadow-md">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-2xl font-light leading-relaxed drop-shadow">
            {t.hero.subtitle}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                const el = document.getElementById('experiencias');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-[#092E3B] font-bold text-xs sm:text-sm tracking-wider uppercase rounded shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              {t.hero.primaryBtn}
            </button>

            <button
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto px-8 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs sm:text-sm tracking-wider uppercase rounded shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.hero.secondaryBtn}</span>
            </button>
          </div>

          {/* Direct Call & Video Info */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#12A8A3]" />
              <span>{lang === 'es' ? 'Atención telefónica:' : 'Direct phone:'} <span className="font-mono">{BUSINESS_INFO.phone}</span></span>
            </a>
            <span aria-hidden="true" className="text-white/30 hidden sm:inline">|</span>
            <button
              onClick={() => onPlayVideo(heroVideo)}
              className="inline-flex items-center gap-1.5 text-[#12A8A3] hover:underline cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{lang === 'es' ? 'Ver video aéreo' : 'Watch aerial video'}</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block animate-bounce opacity-70">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* 2. PRESENTACIÓN DE LA EMPRESA & VALORES LOCALES */}
      <section className="py-20 bg-[#F2E9DA]/40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Operador Turístico en Punta Chame' : 'Tour Operator in Punta Chame'}
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight leading-snug">
                {lang === 'es'
                  ? 'Turismo náutico responsable y vivencias auténticas en el Golfo de Panamá'
                  : 'Responsible nautical tourism & authentic experiences in the Gulf of Panama'}
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {lang === 'es'
                  ? 'Cocos Tour PTY nace en la costa de Punta Chame como una iniciativa turística comprometida con mostrar la riqueza natural, histórica y marina de nuestras islas. Diseñamos excursiones que priorizan la seguridad de los viajeros, el respeto a la fauna marina y la valorización de la cultura insular.'
                  : 'Cocos Tour PTY originated on the shores of Punta Chame as a dedicated initiative showcasing the natural wonders, maritime history, and marine wildlife of our local islands. We craft boat journeys that prioritize traveler safety, ethical wildlife observation, and island heritage.'}
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {lang === 'es'
                  ? 'Desde la serenidad de Isla Otoque hasta los acantilados repletos de aves en Isla Bona y los saltos de delfines en aguas abiertas, cada salida se coordina de manera directa y personalizada según las mareas y el clima.'
                  : 'From the peaceful bays of Isla Otoque to the seabird-filled sea cliffs of Isla Bona and leaping dolphin pods in open waters, every trip is coordinated personally according to tides and weather.'}
              </p>

              {/* Verified Trust Strip */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-800">
                <div>
                  <div className="text-2xl font-bold font-mono text-[#092E3B]">4.6 ★</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {lang === 'es' ? '10 opiniones Google' : '10 Google reviews'}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[#092E3B]">100%</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {lang === 'es' ? 'Atención directa' : 'Direct host support'}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[#092E3B]">Punta Chame</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {lang === 'es' ? 'Panamá Oeste' : 'West Panama'}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3">
                <img
                  src={IMAGES.otoque}
                  alt="Isla Otoque - Cocos Tour PTY"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs font-semibold text-white">
                    {lang === 'es' ? 'Bahía costera en Isla Otoque' : 'Coastal bay in Isla Otoque'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JOSÉ VALVERDE — HISTORIA Y CONFIANZA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092E3B] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Photo Column */}
              <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full">
                <img
                  src={IMAGES.guide}
                  alt="José Valverde - Guía Local y Capitán Cocos Tour PTY"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092E3B] via-transparent to-transparent lg:hidden" />
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                    {t.guide.sectionKicker}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    {t.guide.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#F2E9DA] font-medium leading-relaxed">
                    {t.guide.subtitle}
                  </p>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                    <p>{t.guide.body1}</p>
                    <p>{t.guide.body2}</p>
                  </div>

                  <blockquote className="my-4 p-4 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                    {t.guide.quote}
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white">José Valverde</p>
                    <p className="text-xs text-[#12A8A3]">{t.guide.badgeRole} · Punta Chame</p>
                  </div>

                  <button
                    onClick={() => onOpenInquiry('Isla Otoque')}
                    className="px-6 py-3 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded transition-colors shadow active:scale-95"
                  >
                    {t.guide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCIAS DESTACADAS */}
      <section id="experiencias" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
              {t.featured.sectionKicker}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight mt-1">
              {t.featured.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              {t.featured.subtitle}
            </p>
            <p className="text-xs text-slate-500 mt-1 italic">
              {t.featured.noPricesNotice}
            </p>
          </div>

          {/* Grid of Experiences */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => {
              const title = lang === 'es' ? exp.title.es : exp.title.en;
              const subtitle = lang === 'es' ? exp.subtitle.es : exp.subtitle.en;
              const description = lang === 'es' ? exp.description.es : exp.description.en;
              const highlights = lang === 'es' ? exp.highlights.es : exp.highlights.en;

              return (
                <div
                  key={exp.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Media container */}
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                      <img
                        src={exp.image}
                        alt={title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <span className="text-[11px] font-semibold text-[#12A8A3] block">
                          {exp.location}
                        </span>
                        <h3 className="text-lg font-bold leading-tight drop-shadow">
                          {title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4">
                      <p className="text-xs font-medium text-slate-500 leading-snug">
                        {subtitle}
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed line-clamp-3">
                        {description}
                      </p>

                      <div className="space-y-1.5 pt-1">
                        {highlights.slice(0, 3).map((hl, i) => (
                          <div key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                            <span className="text-[#12A8A3] mt-0.5">·</span>
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 space-y-2">
                    <button
                      onClick={() => onOpenInquiry(exp.title.es)}
                      className="w-full py-2.5 px-3 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded transition-colors text-center active:scale-95 cursor-pointer shadow-sm"
                    >
                      {t.featured.inquireExperience}
                    </button>

                    <button
                      onClick={() => {
                        onNavigate(exp.targetPage);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-[#092E3B] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>{t.featured.viewDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ISLA OTOQUE E ISLA BONA — DESTINOS MARÍTIMOS PROTAGONISTAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bona Feature */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <div className="aspect-16/9 overflow-hidden">
                <img
                  src={IMAGES.bona}
                  alt="Santuario de Aves Isla Bona"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 bg-[#092E3B] text-white space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                  {lang === 'es' ? 'Refugio de Vida Silvestre' : 'Wildlife Sanctuary'}
                </span>
                <h3 className="text-2xl font-bold tracking-tight">
                  {lang === 'es' ? 'Isla Bona e Islote Estiva' : 'Isla Bona & Islote Estiva'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'es'
                    ? 'Un santuario de aves marinas en acantilados volcánicos: piqueros pardos, piqueros de patas azules y fragatas anidando en paredes oceánicas.'
                    : 'A biological seabird sanctuary on volcanic cliffs: brown boobies, blue-footed boobies, and frigatebirds nesting along oceanic rock faces.'}
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onNavigate('/islas')}
                    className="px-5 py-2.5 bg-white text-[#092E3B] font-bold text-xs rounded hover:bg-slate-100 transition-colors"
                  >
                    {lang === 'es' ? 'Explorar Isla Bona' : 'Explore Isla Bona'}
                  </button>
                  <button
                    onClick={() => onOpenInquiry('Isla Bona')}
                    className="text-xs text-[#12A8A3] hover:underline font-semibold"
                  >
                    {lang === 'es' ? 'Consultar excursión →' : 'Inquire about tour →'}
                  </button>
                </div>
              </div>
            </div>

            {/* Otoque Feature */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <div className="aspect-16/9 overflow-hidden">
                <img
                  src={IMAGES.otoque}
                  alt="Bahías de Isla Otoque"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 bg-[#092E3B] text-white space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                  {lang === 'es' ? 'Comunidades y Patrimonio' : 'Settlements & Heritage'}
                </span>
                <h3 className="text-2xl font-bold tracking-tight">
                  {lang === 'es' ? 'Isla Otoque (Oriente y Occidente)' : 'Isla Otoque (East & West)'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'es'
                    ? 'Bahías tranquilas de aguas turquesa, comunidades tradicionales de pescadores y vestigios de la histórica grúa minera insular.'
                    : 'Calm turquoise bays, traditional island fishing villages, and historical relics of the vintage mining crane.'}
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onNavigate('/islas')}
                    className="px-5 py-2.5 bg-white text-[#092E3B] font-bold text-xs rounded hover:bg-slate-100 transition-colors"
                  >
                    {lang === 'es' ? 'Explorar Isla Otoque' : 'Explore Isla Otoque'}
                  </button>
                  <button
                    onClick={() => onOpenInquiry('Isla Otoque')}
                    className="text-xs text-[#12A8A3] hover:underline font-semibold"
                  >
                    {lang === 'es' ? 'Consultar excursión →' : 'Inquire about tour →'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VIDA MARINA — DELFINES Y BALLENAS TEASER */}
      <section className="py-20 bg-[#092E3B] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Avistamiento de Cetáceos' : 'Cetacean Watching'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {lang === 'es'
                  ? 'Delfines Manchados y Ballenas Jorobadas'
                  : 'Spotted Dolphins & Humpback Whales'}
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {lang === 'es'
                  ? 'Las aguas del Golfo de Panamá albergan manadas activas de delfines manchados y reciben anualmente a las ballenas jorobadas durante su migración (julio a octubre). Observamos a la fauna en total libertad sin garantizar avistamientos ni alterar su comportamiento.'
                  : 'The waters of the Gulf of Panama host active pods of spotted dolphins and welcome humpback whales during their annual breeding migration (July to October). We observe wildlife with complete ethical respect, never guaranteeing sightings or altering natural behavior.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('/vida-marina')}
                  className="px-6 py-3 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded transition-colors shadow"
                >
                  {lang === 'es' ? 'Ver Guía de Fauna Marina' : 'View Marine Wildlife Guide'}
                </button>
                <button
                  onClick={() => onOpenInquiry('Avistamiento de delfines')}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded transition-colors"
                >
                  {lang === 'es' ? 'Consultar Temporada' : 'Inquire Seasonal Dates'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 aspect-square">
                <img
                  src={IMAGES.dolphins}
                  alt="Delfines Manchados - Cocos Tour PTY"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 aspect-square">
                <img
                  src={IMAGES.whales}
                  alt="Ballena Jorobada en Panamá - Cocos Tour PTY"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALERÍA AUDIOVISUAL */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
              {t.videos.sectionKicker}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-1">
              {t.videos.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              {t.videos.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoGalleryItems.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                lang={lang}
                onPlay={onPlayVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. CÓMO RESERVAR (PROCESO DE CONSULTA) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
              {t.bookingFlow.sectionKicker}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight mt-1">
              {t.bookingFlow.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 text-left space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#092E3B] text-[#12A8A3] flex items-center justify-center font-bold font-mono">
                01
              </div>
              <h3 className="text-lg font-bold text-[#092E3B]">
                {t.bookingFlow.step1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.bookingFlow.step1Desc}
              </p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 text-left space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#092E3B] text-[#12A8A3] flex items-center justify-center font-bold font-mono">
                02
              </div>
              <h3 className="text-lg font-bold text-[#092E3B]">
                {t.bookingFlow.step2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.bookingFlow.step2Desc}
              </p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 text-left space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#092E3B] text-[#12A8A3] flex items-center justify-center font-bold font-mono">
                03
              </div>
              <h3 className="text-lg font-bold text-[#092E3B]">
                {t.bookingFlow.step3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.bookingFlow.step3Desc}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenInquiry()}
              className="px-8 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow transition-all active:scale-95 cursor-pointer"
            >
              {t.hero.secondaryBtn}
            </button>
          </div>
        </div>
      </section>

      {/* 9. RESEÑAS REALES VERIFICABLES */}
      <section className="py-20 bg-[#F2E9DA]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                {t.reviews.sectionKicker}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight mt-1">
                {t.reviews.title}
              </h2>
              <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-slate-700">
                <div className="flex text-amber-500">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span>{t.reviews.scoreBadge}</span>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#092E3B] hover:text-[#12A8A3] transition-colors"
            >
              <span>{t.reviews.viewGoogleProfile}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{lang === 'es' ? rev.text.es : rev.text.en}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-bold text-slate-900">{rev.author}</span>
                  <span>Google</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8">
            {t.reviews.note}
          </p>
        </div>
      </section>

      {/* 10. UBICACIÓN COMERCIAL Y CONTACTO */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                  {t.location.sectionKicker}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight mt-1">
                  {t.location.title}
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  {t.location.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-[#092E3B] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#12A8A3]" />
                    <span>{t.location.commercialAddressTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    {t.location.commercialAddressText}
                  </p>
                </div>

                {/* Important notice: Distinct location */}
                <div className="p-4 rounded-lg bg-[#F2E9DA]/50 border border-[#C9A878]/40 text-xs text-slate-800 leading-relaxed">
                  {t.location.distinctLocationNotice}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="flex-1 p-3.5 rounded-lg border border-slate-200 flex items-center gap-3 hover:border-[#12A8A3] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#12A8A3]" />
                    <div>
                      <div className="text-[11px] text-slate-500">{t.location.phoneTitle}</div>
                      <div className="text-sm font-bold text-[#092E3B] font-mono">{BUSINESS_INFO.phone}</div>
                    </div>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3.5 rounded-lg border border-slate-200 flex items-center gap-3 hover:border-[#12A8A3] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-[#12A8A3]" />
                    <div>
                      <div className="text-[11px] text-slate-500">{t.location.whatsappTitle}</div>
                      <div className="text-sm font-bold text-[#092E3B] font-mono">+507 6289-3605</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#092E3B] hover:bg-[#142126] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow"
                  >
                    <span>{t.location.openMapsBtn}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Visual representation / Interactive Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-4/3 flex flex-col justify-between p-6 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(9, 46, 59, 0.4), rgba(9, 46, 59, 0.85)), url(${IMAGES.hero})` }}>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#12A8A3]" />
                    <span className="font-bold text-sm">Cocos Tour PTY</span>
                  </div>
                  <span className="text-xs bg-[#12A8A3] text-[#092E3B] font-bold px-2 py-0.5 rounded">
                    4.6 ★
                  </span>
                </div>

                <div className="text-white space-y-3">
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Playa, Punta Chame, provincia de Panamá Oeste, República de Panamá.
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#092E3B] font-bold text-xs rounded hover:bg-slate-100 transition-colors shadow"
                  >
                    <span>{lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PREGUNTAS FRECUENTES (FAQ ACORDEÓN) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
              {lang === 'es' ? 'Resolución de Dudas' : 'Frequently Asked Questions'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight mt-1">
              {lang === 'es' ? 'Preguntas Frecuentes' : 'Common Questions'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {lang === 'es'
                ? 'Información clara y transparente para planificar tu viaje con tranquilidad.'
                : 'Clear and transparent information to organize your coastal adventure.'}
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              const question = lang === 'es' ? faq.question.es : faq.question.en;
              const answer = lang === 'es' ? faq.answer.es : faq.answer.en;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 text-left font-bold text-[#092E3B] text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                  >
                    <span>{question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#12A8A3] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. CTA FINAL CONVERSIÓN WHATSAPP / LLAMADA */}
      <section className="py-20 bg-[#092E3B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
            {lang === 'es' ? 'Atención Personalizada' : 'Personalized Support'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.finalCta.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.finalCta.subtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto px-8 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.finalCta.whatsappBtn}</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded border border-white/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-[#12A8A3]" />
              <span>{t.finalCta.callBtn}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
