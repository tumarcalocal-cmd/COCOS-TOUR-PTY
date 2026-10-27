import React from 'react';
import { X, Play, Volume2, Info, MessageCircle, ExternalLink } from 'lucide-react';
import { Language, VideoItem } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface VideoPlayerModalProps {
  video: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onInquireAboutVideo: (videoTitle: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  isOpen,
  onClose,
  lang,
  onInquireAboutVideo,
}) => {
  if (!isOpen || !video) return null;

  const t = TRANSLATIONS[lang];
  const title = lang === 'es' ? video.title.es : video.title.en;
  const description = lang === 'es' ? video.description.es : video.description.en;
  const tag = lang === 'es' ? video.tag.es : video.tag.en;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#142126] text-white rounded-xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top close bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#092E3B] border-b border-white/10">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#12A8A3] font-semibold">{tag}</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded transition-colors"
            aria-label="Cerrar video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player or High-Fidelity Poster Viewer */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {video.videoUrl ? (
            video.videoUrl.includes('canva.com') || video.videoUrl.includes('embed') ? (
              <iframe
                src={video.videoUrl}
                title={title}
                loading="lazy"
                allow="fullscreen"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <video
                src={video.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                poster={video.poster}
              >
                <source src={video.videoUrl} type="video/mp4" />
                Tu navegador no soporta reproducción de video HTML5.
              </video>
            )
          ) : (
            <div className="relative w-full h-full group">
              <img
                src={video.poster}
                alt={title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#12A8A3]/90 text-[#092E3B] flex items-center justify-center shadow-xl mb-4 transform hover:scale-105 transition-transform">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold max-w-2xl text-white drop-shadow">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-slate-100 mt-2 max-w-xl leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-xs sm:text-sm text-[#F2E9DA] border border-white/20">
                  {lang === 'es'
                    ? 'Registro audiovisual de Cocos Tour PTY en Punta Chame y archipiélago.'
                    : 'Audiovisual record from Cocos Tour PTY in Punta Chame and archipelago.'}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info & Action Bar */}
        <div className="p-5 sm:p-7 bg-[#092E3B]/95 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-white text-lg sm:text-xl">{title}</h4>
            <p className="text-sm text-slate-200 mt-1">{description}</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onInquireAboutVideo(title);
              }}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#12A8A3] hover:bg-[#16bfba] text-[#092E3B] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'es' ? 'Consultar esta experiencia' : 'Inquire about this tour'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
