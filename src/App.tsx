/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, PageRoute, VideoItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { LegalModal } from './components/LegalModal';
import { HomePage } from './pages/HomePage';
import { IslandsPage } from './pages/IslandsPage';
import { MarineLifePage } from './pages/MarineLifePage';
import { RestaurantPage } from './pages/RestaurantPage';

export default function App() {
  // 1. Language state with local storage persistence
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('cocos_tour_lang');
      return saved === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('cocos_tour_lang', newLang);
    } catch {
      // ignore
    }
  };

  // 2. Navigation path state with History API sync
  const [currentPath, setCurrentPath] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/islas') return '/islas';
      if (path === '/vida-marina') return '/vida-marina';
      if (path === '/restaurante') return '/restaurante';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/islas' || path === '/vida-marina' || path === '/restaurante') {
        setCurrentPath(path as PageRoute);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: PageRoute) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 3. Modals & UI States
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPreselect, setInquiryPreselect] = useState<string | undefined>(undefined);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const handleOpenInquiry = (experiencePreselect?: string) => {
    setInquiryPreselect(experiencePreselect);
    setIsInquiryOpen(true);
  };

  const handlePlayVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsVideoOpen(true);
  };

  // 4. Update page titles dynamically for SEO
  useEffect(() => {
    const titles: Record<PageRoute, { es: string; en: string }> = {
      '/': {
        es: 'Cocos Tour PTY | Turismo en Panamá — Isla Otoque e Isla Bona',
        en: 'Cocos Tour PTY | Panama Tours — Isla Otoque & Isla Bona',
      },
      '/islas': {
        es: 'Islas y Aventuras | Isla Otoque e Isla Bona — Cocos Tour PTY',
        en: 'Islands & Adventures | Isla Otoque & Isla Bona — Cocos Tour PTY',
      },
      '/vida-marina': {
        es: 'Delfines y Ballenas | Fauna Marina del Pacífico — Cocos Tour PTY',
        en: 'Dolphins & Whales | Pacific Marine Wildlife — Cocos Tour PTY',
      },
      '/restaurante': {
        es: "Coco's Pub Bar Restaurante | Punta Chame — Cocos Tour PTY",
        en: "Coco's Pub Bar Restaurant | Punta Chame — Cocos Tour PTY",
      },
    };

    const currentTitle = titles[currentPath]?.[lang] || titles['/'][lang];
    document.title = currentTitle;

    // Update html lang attribute
    document.documentElement.lang = lang;
  }, [currentPath, lang]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#142126] selection:bg-[#12A8A3] selection:text-white">
      {/* Universal Navigation Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPath === '/' && (
          <HomePage
            lang={lang}
            onNavigate={navigateTo}
            onOpenInquiry={handleOpenInquiry}
            onPlayVideo={handlePlayVideo}
          />
        )}
        {currentPath === '/islas' && (
          <IslandsPage
            lang={lang}
            onNavigate={navigateTo}
            onOpenInquiry={handleOpenInquiry}
            onPlayVideo={handlePlayVideo}
          />
        )}
        {currentPath === '/vida-marina' && (
          <MarineLifePage
            lang={lang}
            onNavigate={navigateTo}
            onOpenInquiry={handleOpenInquiry}
            onPlayVideo={handlePlayVideo}
          />
        )}
        {currentPath === '/restaurante' && (
          <RestaurantPage
            lang={lang}
            onNavigate={navigateTo}
            onOpenInquiry={handleOpenInquiry}
            onPlayVideo={handlePlayVideo}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        lang={lang}
        onNavigate={navigateTo}
        onOpenLegal={() => setIsLegalOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Discrete Floating WhatsApp */}
      <FloatingWhatsApp
        lang={lang}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Mobile Sticky Inquiry Bottom Bar */}
      <MobileBottomBar
        lang={lang}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Booking / Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        lang={lang}
        preselectedExperience={inquiryPreselect}
      />

      {/* Reusable Video Player Modal */}
      <VideoPlayerModal
        video={activeVideo}
        isOpen={isVideoOpen}
        onClose={() => {
          setIsVideoOpen(false);
          setActiveVideo(null);
        }}
        lang={lang}
        onInquireAboutVideo={(videoTitle) => {
          setIsVideoOpen(false);
          handleOpenInquiry(videoTitle);
        }}
      />

      {/* Legal & Terms Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
