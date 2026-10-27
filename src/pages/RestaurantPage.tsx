import React from 'react';
import { ArrowLeft, MessageCircle, Phone, MapPin, Utensils, GlassWater, Sun, Wind } from 'lucide-react';
import { Language, PageRoute, VideoItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO } from '../data/content';
import { IMAGES, MEDIA_CONFIG } from '../data/mediaConfig';
import { VideoCard } from '../components/VideoCard';

interface RestaurantPageProps {
  lang: Language;
  onNavigate: (path: PageRoute) => void;
  onOpenInquiry: (experiencePreselect?: string) => void;
  onPlayVideo: (video: VideoItem) => void;
}

export const RestaurantPage: React.FC<RestaurantPageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
  onPlayVideo,
}) => {
  const t = TRANSLATIONS[lang];

  const handleRestaurantInquiry = () => {
    const isEs = lang === 'es';
    const msg = isEs
      ? 'Hola, Cocos Tour PTY y Coco\'s Pub. Me gustaría consultar disponibilidad de mesa y atención en el restaurante.'
      : 'Hello, Cocos Tour PTY & Coco\'s Pub. I would like to inquire about table availability and restaurant services.';
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/50762893605?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#092E3B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.restaurant}
            alt="Coco's Pub Bar Restaurante en Punta Chame"
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
            {t.restaurantPage.heroTitle}
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {t.restaurantPage.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleRestaurantInquiry}
              className="px-8 py-3.5 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs uppercase tracking-wider rounded shadow transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.restaurantPage.ctaRestaurant}</span>
            </button>
          </div>
        </div>
      </section>

      {/* PRESENTACIÓN DEL ESTABLECIMIENTO & AMBIENTE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Gastronomía y Hospitalidad Costera' : 'Coastal Dining & Hospitality'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight">
                {t.restaurantPage.aboutTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {t.restaurantPage.aboutDesc}
              </p>

              {/* 4 Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Wind className="w-5 h-5 text-[#12A8A3] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#092E3B]">
                      {lang === 'es' ? 'Brisa y Vista Marina' : 'Sea Breeze & Ocean View'}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {lang === 'es' ? 'Deck playero ventilado frente a las aguas de Chame.' : 'Airy beachside deck facing tranquil waters.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Utensils className="w-5 h-5 text-[#12A8A3] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#092E3B]">
                      {lang === 'es' ? 'Cocina del Mar' : 'Coastal Seafood'}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {lang === 'es' ? 'Platos tradicionales y productos frescos del litoral.' : 'Local culinary staples and fresh coastal fare.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <GlassWater className="w-5 h-5 text-[#12A8A3] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#092E3B]">
                      {lang === 'es' ? 'Bebidas Frías' : 'Cold Beverages'}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {lang === 'es' ? 'Refrescos, cocos y bebidas para hidratarte tras el tour.' : 'Cold refreshments and drinks after your boat trip.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Sun className="w-5 h-5 text-[#12A8A3] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#092E3B]">
                      {lang === 'es' ? 'El Cierre Perfecto' : 'The Ideal Wrap-Up'}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {lang === 'es' ? 'El complemento natural a tus excursiones con Cocos Tour.' : 'The natural complement to your island tours.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy note: No online prices, contact directly */}
              <div className="p-4 rounded-lg bg-[#F2E9DA]/50 border border-[#C9A878]/30 text-xs text-slate-700 leading-relaxed">
                {t.restaurantPage.disclaimer}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRestaurantInquiry}
                  className="px-6 py-3 bg-[#092E3B] hover:bg-[#142126] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  {t.restaurantPage.ctaRestaurant}
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="px-6 py-3 border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider rounded hover:bg-slate-50 transition-colors text-center"
                >
                  {lang === 'es' ? 'Llamar al Restaurante' : 'Call Restaurant'}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3">
                <img
                  src={IMAGES.restaurant}
                  alt="Instalaciones de Coco's Pub Bar Restaurante"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <VideoCard
                video={MEDIA_CONFIG.restaurantVideo}
                lang={lang}
                onPlay={onPlayVideo}
              />
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
              onClick={handleRestaurantInquiry}
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
