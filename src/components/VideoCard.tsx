import React from 'react';
import { Play } from 'lucide-react';
import { Language, VideoItem } from '../types';

interface VideoCardProps {
  video: VideoItem;
  lang: Language;
  onPlay: (video: VideoItem) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, lang, onPlay }) => {
  const title = lang === 'es' ? video.title.es : video.title.en;
  const description = lang === 'es' ? video.description.es : video.description.en;
  const tag = lang === 'es' ? video.tag.es : video.tag.en;

  return (
    <div
      onClick={() => onPlay(video)}
      className="group relative bg-[#092E3B] rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-[#12A8A3]/50 transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Thumbnail + Scrim */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={video.poster}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Measured Scrim for media overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* Play Icon Affordance */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#12A8A3]/90 text-[#092E3B] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Metadata tag & duration */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
          <span className="text-[11px] font-semibold text-[#12A8A3] drop-shadow">{tag}</span>
          {video.duration && (
            <span className="text-[10px] font-mono bg-black/60 px-1.5 py-0.5 rounded text-white/90">
              {video.duration}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-base font-bold text-white group-hover:text-[#12A8A3] transition-colors leading-snug line-clamp-1">
            {title}
          </h4>
          <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span>{lang === 'es' ? 'Ver registro audiovisual' : 'Watch video record'}</span>
          <span className="text-[#12A8A3] font-semibold">▶</span>
        </div>
      </div>
    </div>
  );
};
