import React from 'react';
import { ArrowLeft, MessageCircle, Phone, Compass, Anchor, Bird, Waves, Eye } from 'lucide-react';
import { Language, PageRoute, VideoItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/content';
import { IMAGES, MEDIA_CONFIG } from '../data/mediaConfig';
import { VideoCard } from '../components/VideoCard';

interface IslandsPageProps {
  lang: Language;
  onNavigate: (path: PageRoute) => void;
  onOpenInquiry: (experiencePreselect?: string) => void;
  onPlayVideo: (video: VideoItem) => void;
}

export const IslandsPage: React.FC<IslandsPageProps> = ({
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
            src={IMAGES.otoque}
            alt="Isla Otoque e Isla Bona"
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
            {t.islandsPage.heroTitle}
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {t.islandsPage.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Isla Otoque')}
              className="px-8 py-3.5 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded shadow transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.islandsPage.ctaIsland}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ISLA OTOQUE — ORIENTE, OCCIDENTE Y PATRIMONIO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Comunidades Tradicionales' : 'Island Heritage'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight">
                {t.islandsPage.otoqueTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {t.islandsPage.otoqueDesc}
              </p>

              {/* Two Villages Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h4 className="font-bold text-[#092E3B] text-sm">Otoque Oriente</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'es'
                      ? 'Pueblo tradicional costero con embarcaciones artesanales y vista al golfo.'
                      : 'Traditional coastal village with artisanal boats and ocean horizon views.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h4 className="font-bold text-[#092E3B] text-sm">Otoque Occidente</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'es'
                      ? 'Bahía más protegida, aguas apacibles y acceso a senderos interiores.'
                      : 'Sheltered cove, tranquil swimming waters, and inland trail routes.'}
                  </p>
                </div>
              </div>

              {/* Mining Crane verified history */}
              <div className="p-4 rounded-xl bg-[#F2E9DA]/50 border border-[#C9A878]/40 space-y-1 text-xs text-slate-800">
                <span className="font-bold text-[#092E3B] block">
                  {t.islandsPage.historyTitle}
                </span>
                <p className="leading-relaxed">
                  {t.islandsPage.historyDesc}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry('Isla Otoque')}
                  className="px-6 py-3 bg-[#092E3B] hover:bg-[#142126] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  {t.featured.inquireExperience}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3">
                <img
                  src={IMAGES.otoque}
                  alt="Isla Otoque y Bahía"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <VideoCard
                video={MEDIA_CONFIG.otoqueVideo}
                lang={lang}
                onPlay={onPlayVideo}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ISLA BONA E ISLOTE ESTIVA — SANTUARIO DE AVES */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3">
                <img
                  src={IMAGES.bona}
                  alt="Isla Bona y Acantilados de Aves"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <VideoCard
                video={MEDIA_CONFIG.bonaVideo}
                lang={lang}
                onPlay={onPlayVideo}
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Refugio de Vida Silvestre Protegido' : 'Protected Wildlife Sanctuary'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight">
                {t.islandsPage.bonaTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {t.islandsPage.bonaDesc}
              </p>

              {/* 3 Marine Birds Details */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#092E3B]">
                    <Bird className="w-4 h-4 text-[#12A8A3]" />
                    <span>{t.islandsPage.bird1Title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    {t.islandsPage.bird1Desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#092E3B]">
                    <Bird className="w-4 h-4 text-[#12A8A3]" />
                    <span>{t.islandsPage.bird2Title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    {t.islandsPage.bird2Desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#092E3B]">
                    <Bird className="w-4 h-4 text-[#12A8A3]" />
                    <span>{t.islandsPage.bird3Title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    {t.islandsPage.bird3Desc}
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenInquiry('Isla Bona')}
                  className="px-6 py-3 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded transition-colors shadow"
                >
                  {t.featured.inquireExperience}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNORKEL, CORALES, PLAYAS Y SENDERISMO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
              {lang === 'es' ? 'Actividades Complementarias' : 'Complementary Activities'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight mt-1">
              {lang === 'es' ? 'Snorkel, Playas y Fondos Marinos' : 'Snorkeling, Beaches & Marine Life'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              {t.islandsPage.snorkelDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#092E3B] text-[#12A8A3] flex items-center justify-center">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#092E3B] text-base">
                {lang === 'es' ? 'Fondos Coralinos del Pacífico' : 'Pacific Coral Habitats'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'es'
                  ? 'Zonas rocosas protegidas donde se congregan peces cirujano, damiselas y peces mariposa bajo condiciones de marea propicias.'
                  : 'Sheltered rocky points hosting surgeonfish, damselfish, and butterflyfish during favorable tide windows.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#092E3B] text-[#12A8A3] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#092E3B] text-base">
                {lang === 'es' ? 'Caminatas y Miradores Insulares' : 'Island Viewpoints & Trails'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'es'
                  ? 'Senderos tradicionales que unen los poblados de Otoque, ofreciendo vistas espectaculares del horizonte oceánico.'
                  : 'Traditional community pathways connecting settlements with scenic panoramas across the Pacific horizon.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#092E3B] text-[#12A8A3] flex items-center justify-center">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#092E3B] text-base">
                {lang === 'es' ? 'Playas y Descanso Marino' : 'Beaches & Ocean Rest'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'es'
                  ? 'Ensenadas para nadar con calma antes de retomar el rumbo costero de regreso a Punta Chame.'
                  : 'Serene coves ideal for a refreshing swim before cruising back to the shores of Punta Chame.'}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenInquiry('Snorkel')}
              className="px-8 py-3.5 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded shadow transition-all active:scale-95 cursor-pointer"
            >
              {lang === 'es' ? 'Consultar Snorkel y Playas' : 'Inquire Snorkel & Beaches'}
            </button>
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
              onClick={() => onOpenInquiry('Isla Otoque')}
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
