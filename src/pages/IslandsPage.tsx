import React from 'react';
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Compass,
  Anchor,
  Bird,
  Waves,
  Eye,
  Camera,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
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
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Encabezado Visual Propio de Islas y Aventuras */}
      <section className="relative min-h-[620px] lg:h-screen flex items-center justify-center overflow-hidden bg-[#092E3B] text-white">
        {/* Background Video con autoplay, mute y bucle continuo */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          style={{ objectFit: 'cover' }}
        >
          <source src="https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/videos/hero-2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#092E3B] via-[#092E3B]/70 to-[#092E3B]/40 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center w-full">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#12A8A3] hover:text-white transition-colors mb-6 cursor-pointer drop-shadow"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>

          <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#12A8A3] block mb-2 drop-shadow px-2">
            {lang === 'es' ? 'Archipiélago del Pacífico Panameño' : 'Panamanian Pacific Archipelago'}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight drop-shadow-md px-2">
            {t.islandsPage.heroTitle}
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed font-light drop-shadow px-2">
            {t.islandsPage.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
            <button
              onClick={() => onOpenInquiry('Isla Otoque')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-xl transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.islandsPage.ctaIsland}</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg border border-white/25 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#12A8A3]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ISLA OTOQUE — ORIENTE, OCCIDENTE Y PATRIMONIO */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Comunidades Tradicionales e Historia' : 'Traditional Villages & Heritage'}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#092E3B] tracking-tight">
                {t.islandsPage.otoqueTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t.islandsPage.otoqueDesc}
              </p>

              {/* Two Villages Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#092E3B] text-base sm:text-lg">Otoque Oriente</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {lang === 'es'
                      ? 'Poblado de pescadores tradicionales, costa abierta al golfo con botes pintorescos y arquitectura isleña.'
                      : 'Traditional fishing settlement, coastal bay with colorful artisan pangas and charming island life.'}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#092E3B] text-base sm:text-lg">Otoque Occidente</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {lang === 'es'
                      ? 'Ensenada de aguas apacibles y resguardadas, ideal para baño y punto de partida de senderos históricos.'
                      : 'Protected bay with tranquil turquoise waters, ideal for calm swimming and scenic trailheads.'}
                  </p>
                </div>
              </div>

              {/* Verified Historical Mining Crane */}
              <div className="p-5 rounded-xl bg-[#F2E9DA]/60 border border-[#C9A878]/50 space-y-2 text-sm text-slate-800">
                <div className="flex items-center gap-2 font-bold text-[#092E3B] text-base">
                  <Anchor className="w-5 h-5 text-[#12A8A3]" />
                  <span>{t.islandsPage.historyTitle}</span>
                </div>
                <p className="leading-relaxed">
                  {t.islandsPage.historyDesc}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry('Isla Otoque')}
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
                  src={IMAGES.otoque}
                  alt="Bahía de Isla Otoque"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* 3. ISLA BONA E ISLOTE ESTIVA — SANTUARIO DE AVES */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3">
                <img
                  src={IMAGES.bona}
                  alt="Isla Bona y Acantilados de Aves Marinas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>


            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Refugio de Vida Silvestre Protegido' : 'Protected Wildlife Sanctuary'}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#092E3B] tracking-tight">
                {t.islandsPage.bonaTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t.islandsPage.bonaDesc}
              </p>

              {/* Image Carousel for Birds */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <div className="absolute inset-0">
                  <img src="/images/fragatas.jpg" alt="Fragatas" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold text-lg">Fragatas</p>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <img src="/images/piquero-patas-azules.jpg" alt="Piquero Patas Azules" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold text-lg">Piquero Patas Azules</p>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <img src="/images/piquero-pardo.jpg" alt="Piquero Pardo" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold text-lg">Piquero Pardo</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry('Isla Bona')}
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

      {/* 4. SNORKEL, CORALES, SENDERISMO Y PLAYAS */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
              {lang === 'es' ? 'Aventuras en el Mar y en Tierra' : 'Sea and Coastal Adventures'}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#092E3B] tracking-tight mt-1">
              {lang === 'es' ? 'Snorkel, Playas y Senderismo' : 'Snorkeling, Beaches & Hiking'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              {t.islandsPage.snorkelDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#092E3B] text-[#12A8A3] flex items-center justify-center">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#092E3B] text-xl">
                {lang === 'es' ? 'Arrecifes Rocosos y Peces' : 'Rocky Reefs & Coral Fish'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'es'
                  ? 'Exploración con máscara y tubo en calas resguardadas donde las corrientes atraen cardúmenes de peces tropicales y coloridos invertebrados.'
                  : 'Snorkel exploration in sheltered island coves where oceanic currents attract tropical fish shoals and Pacific invertebrates.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#092E3B] text-[#12A8A3] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#092E3B] text-xl">
                {lang === 'es' ? 'Senderismo Isleño' : 'Island Trail Walks'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'es'
                  ? 'Caminatas por los caminos comunales que unen las bahías de Otoque, con vistas panorámicas privilegiadas del golfo y la brisa oceánica.'
                  : 'Scenic trail walks along community paths linking Otoque’s bays, offering panoramic vantage points over the ocean horizon.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#092E3B] text-[#12A8A3] flex items-center justify-center">
                <Anchor className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#092E3B] text-xl">
                {lang === 'es' ? 'Playas y Descanso' : 'Beaches & Relaxation'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'es'
                  ? 'Tiempo libre para nadar y relajarte en calas de arena antes de emprender la navegación de regreso hacia Punta Chame.'
                  : 'Free time to swim and unwind in secluded sandy coves before heading back across the waters to Punta Chame.'}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenInquiry('Snorkel')}
              className="px-9 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              {lang === 'es' ? 'Consultar Snorkel y Playas' : 'Inquire Snorkel & Beaches'}
            </button>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
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
              onClick={() => onOpenInquiry('Isla Otoque')}
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
