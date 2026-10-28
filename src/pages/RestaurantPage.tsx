import React from 'react';
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  MapPin,
  Utensils,
  GlassWater,
  Sun,
  Wind,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
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

const RESTAURANT_IMAGES = [
  {
    url: IMAGES.restaurant,
    alt: "Instalaciones y piscina de Coco's Pub Bar Restaurante",
  },
  {
    url: 'https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/plato-1.jpg',
    alt: 'Gastronomía marina - Plato 1',
  },
  {
    url: 'https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/plato-2.jpg',
    alt: 'Gastronomía marina - Plato 2',
  },
  {
    url: 'https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/plato-3.jpg',
    alt: 'Gastronomía marina - Plato 3',
  },
];

const extendedRestaurantImages = [
  ...RESTAURANT_IMAGES,
  ...RESTAURANT_IMAGES,
  ...RESTAURANT_IMAGES,
];

const RestaurantImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(RESTAURANT_IMAGES.length);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);
  const pauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  const triggerPause = () => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    triggerPause();
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    triggerPause();
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleDotClick = (index: number) => {
    triggerPause();
    setIsTransitioning(true);
    setCurrentIndex(RESTAURANT_IMAGES.length + index);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= RESTAURANT_IMAGES.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - RESTAURANT_IMAGES.length);
    } else if (currentIndex < RESTAURANT_IMAGES.length) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + RESTAURANT_IMAGES.length);
    }
  };

  React.useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        handleNext();
      } else if (diff < -50) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeDotIndex = currentIndex % RESTAURANT_IMAGES.length;

  return (
    <div className="space-y-4">
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3 group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex h-full w-full ${
            isTransitioning
              ? 'transition-transform duration-500 ease-in-out'
              : 'transition-none'
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {extendedRestaurantImages.map((img, idx) => (
            <div key={idx} className="shrink-0 w-full h-full relative">
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Fotografía anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-[#12A8A3] text-white border border-slate-700/80 flex items-center justify-center transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 shadow-xl cursor-pointer z-10 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Fotografía siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-[#12A8A3] text-white border border-slate-700/80 flex items-center justify-center transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 shadow-xl cursor-pointer z-10 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2">
        {RESTAURANT_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            aria-label={`Ver imagen ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              idx === activeDotIndex ? 'w-8 bg-[#12A8A3]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

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
      ? "Hola, Coco's Pub Bar. Me gustaría recibir información sobre el restaurante"
      : "Hello, Coco's Pub Bar. I'd like more information about the restaurant";
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/50762893605?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Encabezado Visual Propio de Coco's Pub */}
      <section className="relative py-28 sm:py-36 bg-[#092E3B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={IMAGES.restaurant}
            className="w-full h-full object-cover"
          >
            <source src={MEDIA_CONFIG.restaurantVideo.videoUrl} type="video/mp4" />
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
            {lang === 'es' ? 'Gastronomía y Descanso en Punta Chame' : 'Coastal Dining & Rest in Punta Chame'}
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            {t.restaurantPage.heroTitle}
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-light">
            {t.restaurantPage.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleRestaurantInquiry}
              className="px-8 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-xl transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{lang === 'es' ? 'CONTACTAR POR WHATSAPP' : 'CONTACT VIA WHATSAPP'}</span>
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

      {/* 2. PRESENTACIÓN DEL ESTABLECIMIENTO & INSTALACIONES */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Hospitalidad Costera' : 'Coastal Hospitality'}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#092E3B] tracking-tight">
                {t.restaurantPage.aboutTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t.restaurantPage.aboutDesc}
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <Wind className="w-6 h-6 text-[#12A8A3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base text-[#092E3B]">
                      {lang === 'es' ? 'Brisa y Vista Marina' : 'Sea Breeze & Ocean View'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-snug">
                      {lang === 'es' ? 'Deck playero ventilado frente a las aguas de Chame.' : 'Airy beachside deck facing tranquil waters.'}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <Utensils className="w-6 h-6 text-[#12A8A3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base text-[#092E3B]">
                      {lang === 'es' ? 'Cocina del Mar' : 'Coastal Seafood'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-snug">
                      {lang === 'es' ? 'Platos tradicionales y productos frescos del litoral.' : 'Local culinary staples and fresh coastal fare.'}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <GlassWater className="w-6 h-6 text-[#12A8A3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base text-[#092E3B]">
                      {lang === 'es' ? 'Bebidas Frías y Cocos' : 'Cold Drinks & Coconuts'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-snug">
                      {lang === 'es' ? 'Refrescos, cocos y bebidas para hidratarte tras el mar.' : 'Cold refreshments and drinks after your boat trip.'}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <Sun className="w-6 h-6 text-[#12A8A3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base text-[#092E3B]">
                      {lang === 'es' ? 'Cierre de Jornada' : 'The Ideal Wrap-Up'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-snug">
                      {lang === 'es' ? 'El complemento perfecto para tus excursiones.' : 'The natural complement to your island journeys.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy note: No online prices, contact directly */}
              <div className="p-5 rounded-xl bg-[#F2E9DA]/70 border border-[#C9A878]/50 text-sm text-slate-800 leading-relaxed">
                {t.restaurantPage.disclaimer}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRestaurantInquiry}
                  className="px-8 py-3.5 bg-[#092E3B] hover:bg-[#142126] text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#12A8A3]" />
                  <span>{lang === 'es' ? 'CONTACTAR POR WHATSAPP' : 'CONTACT VIA WHATSAPP'}</span>
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="px-8 py-3.5 border-2 border-slate-300 text-slate-800 font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-slate-50 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#092E3B]" />
                  <span>{lang === 'es' ? 'Llamar al Restaurante' : 'Call Restaurant'}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <RestaurantImageCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA FINAL */}
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
              onClick={handleRestaurantInquiry}
              className="w-full sm:w-auto px-9 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-xl cursor-pointer"
            >
              <span>{lang === 'es' ? 'CONTACTAR POR WHATSAPP' : 'CONTACT VIA WHATSAPP'}</span>
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
