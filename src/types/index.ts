export type Language = 'es' | 'en';

export type PageRoute = '/' | '/islas' | '/vida-marina' | '/restaurante';

export interface VideoItem {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  poster: string;
  videoUrl?: string; // External MP4 or streaming link
  tag: {
    es: string;
    en: string;
  };
  duration?: string;
}

export interface Experience {
  id: string;
  slug: string;
  title: {
    es: string;
    en: string;
  };
  subtitle: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  highlights: {
    es: string[];
    en: string[];
  };
  image: string;
  videoId?: string;
  location: string;
  targetPage: PageRoute;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: {
    es: string;
    en: string;
  };
  text: {
    es: string;
    en: string;
  };
  source: 'Google Maps';
}

export interface FAQItem {
  question: {
    es: string;
    en: string;
  };
  answer: {
    es: string;
    en: string;
  };
}

export interface InquiryFormData {
  experience: string;
  date: string;
  adults: number;
  children: number;
  name: string;
  phone: string;
  languagePreference: Language;
  comments: string;
}
