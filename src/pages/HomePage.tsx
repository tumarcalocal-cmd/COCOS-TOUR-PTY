import React from 'react';
import {
  MessageCircle,
  Phone,
  Play,
  ArrowRight,
  Compass,
  Waves,
  Utensils,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Language, PageRoute, VideoItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_INFO, REVIEWS } from '../data/content';
import { MEDIA_CONFIG, IMAGES } from '../data/mediaConfig';
import { VideoCard } from '../components/VideoCard';

interface HomePageProps {
  lang: Language;
  onNavigate: (path: PageRoute) => void;
  onOpenInquiry: (experiencePreselect?: string) => void;
  onPlayVideo: (video: VideoItem) => void;
}

const ISLAND_PHOTOS = [
  {
    url: 'https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/otoque-1.jpg',
    title: 'Paisajes de Isla Otoque',
    caption: '«Descubre la belleza natural de Isla Otoque.»',
  },
  {
    url: 'https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/otoque-2.jpg',
    title: 'Rincones de Isla Otoque',
    caption: '«Paisajes y rincones que hacen especial esta isla.»',
  },
  {
    url: 'https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/otoque-oriente.jpg',
    title: 'Otoque Oriente',
    caption: '«Una comunidad llena de historia y tradición.»',
  },
  {
    url: 'https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/otoque-occidente.jpg',
    title: 'Otoque Occidente',
    caption: '«Conoce la otra comunidad de Isla Otoque.»',
  },
  {
    url: 'https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/grua-minera.jpg',
    title: 'Grúa minera de Isla Bona',
    caption: '«Vestigios de la antigua actividad minera de magnetita en Isla Bona.»',
  },
  {
    url: 'https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/guia-turistica.jpg',
    title: 'Experiencia turística',
    caption: '«Descubre nuestras islas, sus paisajes y su historia.»',
  },
];

const extendedPhotos = [...ISLAND_PHOTOS, ...ISLAND_PHOTOS, ...ISLAND_PHOTOS];

const IslandPhotosCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(ISLAND_PHOTOS.length);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(3);
  const pauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    setCurrentIndex(ISLAND_PHOTOS.length + index);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= ISLAND_PHOTOS.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - ISLAND_PHOTOS.length);
    } else if (currentIndex < ISLAND_PHOTOS.length) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + ISLAND_PHOTOS.length);
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

  const activeDotIndex = currentIndex % ISLAND_PHOTOS.length;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Islas del Pacífico: Naturaleza, Cultura e Historia
        </h3>
        <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed">
          «Descubre paisajes, comunidades, historia y experiencias auténticas de nuestras islas.»
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden group py-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex -mx-3 ${
            isTransitioning
              ? 'transition-transform duration-500 ease-in-out'
              : 'transition-none'
          }`}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {extendedPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 flex flex-col justify-between"
            >
              {/* Photo Card */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-800 border border-slate-700/60 shadow-xl group/card">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>

              {/* Title & Caption BELOW Image */}
              <div className="mt-4 space-y-1">
                <h4 className="text-lg font-bold text-white leading-snug">
                  {photo.title}
                </h4>
                <p className="text-sm text-[#12A8A3] leading-relaxed font-medium">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Fotografía anterior"
          className="absolute left-2 top-1/3 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-[#12A8A3] text-white border border-slate-700 hover:border-[#12A8A3] flex items-center justify-center transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 shadow-2xl cursor-pointer z-20 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Fotografía siguiente"
          className="absolute right-2 top-1/3 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-[#12A8A3] text-white border border-slate-700 hover:border-[#12A8A3] flex items-center justify-center transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 shadow-2xl cursor-pointer z-20 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {ISLAND_PHOTOS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            aria-label={`Ver fotografía ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              idx === activeDotIndex ? 'w-8 bg-[#12A8A3]' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
  onPlayVideo,
}) => {
  const t = TRANSLATIONS[lang];
  const heroVideo = MEDIA_CONFIG.heroVideo;

  const featuredVideos = [
    MEDIA_CONFIG.otoqueVideo,
    MEDIA_CONFIG.bonaVideo,
    MEDIA_CONFIG.dolphinsVideo,
    MEDIA_CONFIG.whalesVideo,
  ];

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser requires user gesture
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. PORTADA CINEMATOGRÁFICA DE BIENVENIDA */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-[#092E3B]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          style={{ objectFit: 'cover' }}
        >
          <source src={heroVideo.videoUrl} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#092E3B] via-[#092E3B]/70 to-[#092E3B]/40 pointer-events-none" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl drop-shadow-md">
              {t.hero.title}
            </h1>
            <p className="mt-5 text-lg text-white md:text-2xl drop-shadow font-light">
              {t.hero.subtitle}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('/islas')}
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-[#092E3B] font-bold text-sm sm:text-base tracking-wider uppercase rounded-lg shadow-xl transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{t.hero.primaryBtn}</span>
                <ArrowRight className="w-5 h-5 text-[#092E3B]" />
              </button>

              <button
                onClick={() => onOpenInquiry()}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-sm sm:text-base tracking-wider uppercase rounded-lg shadow-xl transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.hero.secondaryBtn}</span>
              </button>
            </div>

            {/* Direct Phone */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-200">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#12A8A3]" />
                <span>
                  {lang === 'es' ? 'Atención telefónica:' : 'Direct phone:'}{' '}
                  <strong className="font-mono text-base">{BUSINESS_INFO.phone}</strong>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block animate-bounce opacity-70">
          <ChevronDown className="w-7 h-7 text-white" />
        </div>
      </section>

      {/* 2. PRESENTACIÓN DE COCOS TOUR PTY */}
      <section className="py-20 sm:py-24 bg-[#F2E9DA]/40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
                {lang === 'es' ? 'Historia, Tradición y Naturaleza' : 'History, Heritage & Nature'}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#092E3B] tracking-tight leading-snug text-center">
                {lang === 'es'
                  ? 'Isla Otoque: raíces indígenas y paraíso marino'
                  : 'Isla Otoque: indigenous roots & marine paradise'}
              </h2>
              <div className="space-y-4 text-slate-800 leading-relaxed text-base sm:text-lg text-center">
                <p>
                  {lang === 'es'
                    ? 'Una isla del Golfo de Panamá con raíces indígenas y una historia marcada por los caciques Careta, Tatalao y Estivá. Con sus 2.66 km², se divide en dos comunidades: Otoque Oriente y Otoque Occidente, donde viven cerca de 350 personas dedicadas a la pesca y al turismo local.'
                    : 'An island in the Gulf of Panama with indigenous roots and a history marked by caciques Careta, Tatalao, and Estivá. Spanning 2.66 km², it is divided into two communities: Otoque Oriente and Otoque Occidente, home to approximately 350 people dedicated to fishing and local tourism.'}
                </p>
                <p>
                  {lang === 'es'
                    ? 'Frente a la isla se encuentran los islotes Boná y Estivá, ricos en vida marina, aves y corales.'
                    : 'Facing the island lie the islets of Boná and Estivá, rich in marine life, seabirds, and coral reefs.'}
                </p>
                <p>
                  {lang === 'es'
                    ? 'Entre sus aguas se pueden observar delfines, ballenas, aves marinas y arrecifes llenos de color, lo que convierte a Otoque en un destino ideal para el ecoturismo.'
                    : 'In its waters, you can observe dolphins, whales, seabirds, and colorful reefs, making Otoque an ideal destination for ecotourism.'}
                </p>
              </div>

              {/* Data Strip with authentic values - Centered and Improved Typography */}
              <div className="pt-10 flex flex-wrap items-center justify-center gap-12 sm:gap-20 text-center border-t border-slate-300/60 mt-8">
                <div className="flex flex-col items-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#092E3B] flex items-baseline">
                    2.66 <span className="text-xl sm:text-2xl ml-1 font-bold">km²</span>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[#12A8A3] mt-2 uppercase tracking-wider">
                    {lang === 'es' ? 'Superficie' : 'Land area'}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#092E3B]">
                    350
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[#12A8A3] mt-2 uppercase tracking-wider">
                    {lang === 'es' ? 'Habitantes' : 'Residents'}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#092E3B]">
                    2
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[#12A8A3] mt-2 uppercase tracking-wider">
                    {lang === 'es' ? 'Comunidades' : 'Villages'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 3. PRESENTACIÓN BREVE DE JOSÉ VALVERDE */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092E3B] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row items-stretch">
            {/* Fotografía (45% ancho en escritorio, altura completa) */}
            <div className="w-full md:w-[45%] shrink-0 min-h-[320px] md:min-h-full relative overflow-hidden">
              <img
                src="https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/guide.jpg"
                alt="José Valverde"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Contenido (55% ancho en escritorio) */}
            <div className="w-full md:w-[55%] p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
                  Guía local de confianza
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Conoce a José Valverde
                </h2>
                <p className="text-base sm:text-lg text-[#F2E9DA] font-medium leading-relaxed">
                  Guía local de Isla Otoque y creador de Cocostourpty enfocado en experiencias marinas y avistamiento de cetáceos y aves.
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-2">
                  Desde hace varios años recorre cada rincón de esta isla del Pacífico panameño, aprendiendo de sus aguas, sus corales y de la vida silvestre que la rodea. Su conexión con los delfines y las ballenas nace del respeto profundo que siente por ellos y de la pasión por compartir ese mundo con quienes lo visitan.
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-2">
                  Su misión es mostrar la belleza real de Otoque y despertar en cada persona el amor por la naturaleza, enseñando a observarla, entenderla y cuidarla. José combina conocimiento, dedicación y una experiencia auténtica de un guía local que vive y respira el mar. Cada tour que lidera no es solo un paseo, sino un encuentro con la vida marina, con la historia de la isla y con los secretos que solo alguien que ha crecido entre estas aguas puede compartir.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-end">
                <button
                  onClick={() => onOpenInquiry('Isla Otoque')}
                  className="px-6 py-3.5 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-colors shadow cursor-pointer active:scale-95"
                >
                  {t.guide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TARJETAS DE ISLA OTOQUE, ISLA BONA Y VIDA MARINA (RUTAS MULTIPÁGINA) */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
              {lang === 'es' ? 'Nuestras 3 Grandes Áreas' : 'Our 3 Signature Areas'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight mt-1">
              {lang === 'es' ? 'Explora las Páginas del Sitio' : 'Explore the Pages of Our Site'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              {lang === 'es'
                ? 'Accede a cada página independiente para conocer todos los detalles, especies, historia y fotografías.'
                : 'Visit each dedicated page to discover complete details, species, history, and photography.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Islas y Aventuras */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src="https://tumarcalocal-cmd.github.io/COCOS-TOUR-PTY/images/otoque.jpg"
                    alt="Islas y Aventuras"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-xs font-bold uppercase text-[#12A8A3] tracking-wider block">
                      Ruta /islas
                    </span>
                    <h3 className="text-xl font-bold leading-tight">
                      {lang === 'es' ? 'Islas y Aventuras' : 'Islands & Adventures'}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Isla Otoque (Oriente y Occidente), Isla Bona, Islote Estiva, acantilados de aves marinas (piqueros y fragatas), snorkel y playas.'
                      : 'Isla Otoque (East & West), Isla Bona seabird sanctuary, Islote Estiva, snorkeling, trails, and secluded beaches.'}
                  </p>
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#12A8A3]" />
                      <span>{lang === 'es' ? 'Pueblos de Otoque y Grúa Minera' : 'Otoque Villages & Historic Crane'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Waves className="w-4 h-4 text-[#12A8A3]" />
                      <span>{lang === 'es' ? 'Santuario de Aves de Isla Bona' : 'Isla Bona Seabird Sanctuary'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('/islas')}
                  className="w-full py-3.5 px-4 bg-[#092E3B] hover:bg-[#142126] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'es' ? 'Ver Islas y Aventuras' : 'Visit Islands Page'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Delfines y Ballenas */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={IMAGES.dolphins}
                    alt="Delfines y Ballenas"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-xs font-bold uppercase text-[#12A8A3] tracking-wider block">
                      Ruta /vida-marina
                    </span>
                    <h3 className="text-xl font-bold leading-tight">
                      {lang === 'es' ? 'Delfines y Ballenas' : 'Dolphins & Whales'}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Delfines manchados del Pacífico, avistamiento estacional de ballenas jorobadas (julio a octubre) y normas de observación ética.'
                      : 'Pantropical spotted dolphins, seasonal humpback whale migration (July to October), and responsible observation standards.'}
                  </p>
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Waves className="w-4 h-4 text-[#12A8A3]" />
                      <span>{lang === 'es' ? 'Manadas en mar abierto' : 'Wild pods in open sea'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#12A8A3]" />
                      <span>{lang === 'es' ? 'Código de respeto a la fauna' : 'Ethical wildlife code'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('/vida-marina')}
                  className="w-full py-3.5 px-4 bg-[#092E3B] hover:bg-[#142126] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'es' ? 'Ver Delfines y Ballenas' : 'Visit Wildlife Page'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Coco's Pub Restaurante */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={IMAGES.restaurant}
                    alt="Coco's Pub Bar Restaurante"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-xs font-bold uppercase text-[#12A8A3] tracking-wider block">
                      Ruta /restaurante
                    </span>
                    <h3 className="text-xl font-bold leading-tight">
                      {lang === 'es' ? "Coco's Pub Bar Restaurante" : "Coco's Pub Bar Restaurant"}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'El punto de encuentro en la playa de Punta Chame. Gastronomía marina, bebidas frías, terraza con brisa y descanso tras tu excursión.'
                      : 'The beachside gathering spot in Punta Chame. Fresh seafood, cold refreshments, airy deck, and relaxation after your sea tour.'}
                  </p>
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-[#12A8A3]" />
                      <span>{lang === 'es' ? 'Ambiente playero abierto' : 'Open-air coastal setting'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#12A8A3]" />
                      <span>{lang === 'es' ? 'Playa de Punta Chame' : 'Beach, Punta Chame'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('/restaurante')}
                  className="w-full py-3.5 px-4 bg-[#092E3B] hover:bg-[#142126] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'es' ? 'Ver Restaurante' : 'Visit Restaurant Page'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALERÍA DESTACADA DE VIDEOS */}
      <section className="py-20 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">




          {/* Carrusel automático de 6 fotografías reales de las islas */}
          <IslandPhotosCarousel />
        </div>
      </section>

      {/* 6. RESEÑAS VERIFICADAS DE GOOGLE */}
      <section className="py-20 bg-[#F2E9DA]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
                {t.reviews.sectionKicker}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092E3B] tracking-tight mt-1">
                {t.reviews.title}
              </h2>
              <div className="flex items-center gap-2 mt-2 text-sm sm:text-base font-semibold text-slate-800">
                <span className="text-amber-500 text-lg">★★★★★</span>
                <span>{t.reviews.scoreBadge}</span>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#092E3B] hover:text-[#12A8A3] transition-colors"
            >
              <span>{t.reviews.viewGoogleProfile}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 text-base mb-3">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{lang === 'es' ? rev.text.es : rev.text.en}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-slate-900">{rev.author}</span>
                  <span>Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONSULTA POR WHATSAPP Y LLAMADA (CTA FINAL) */}
      <section className="py-20 sm:py-24 bg-[#092E3B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-sm font-bold uppercase tracking-wider text-[#12A8A3]">
            {lang === 'es' ? 'Atención Personalizada' : 'Personalized Support'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.finalCta.title}
          </h2>
          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {t.finalCta.subtitle}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto px-9 py-4 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.finalCta.whatsappBtn}</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-9 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg border border-white/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Phone className="w-5 h-5 text-[#12A8A3]" />
              <span>{t.finalCta.callBtn}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
