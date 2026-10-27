/**
 * CONFIGURACIÓN CENTRAL DE MEDIOS AUDIOVISUALES — COCOS TOUR PTY
 * 
 * Aquí se centralizan los videos y fotografías del sitio web.
 *
 * FOTOS: reemplaza el archivo en /public/images/ manteniendo el mismo
 * nombre (hero.jpg, otoque.jpg, bona.jpg, dolphins.jpg, whales.jpg,
 * restaurant.jpg, guide.jpg) y se actualiza solo, sin tocar este archivo.
 *
 * VIDEOS: sube el .mp4 a /public/videos/ con el nombre de la sección
 * (hero.mp4, otoque.mp4, bona.mp4, dolphins.mp4, whales.mp4,
 * restaurant.mp4) y descomenta/activa la línea 'videoUrl' correspondiente
 * abajo. Si 'videoUrl' no está activo, se muestra la miniatura con el
 * marcador de posición elegante (sin reproducir video).
 */

import { VideoItem } from '../types';

export const MEDIA_CONFIG: Record<string, VideoItem> = {
  heroVideo: {
    id: 'heroVideo',
    title: {
      es: 'Panorámica Aérea del Pacífico Panameño',
      en: 'Pacific Panama Aerial Drone Overview',
    },
    description: {
      es: 'Vuelo de dron sobre las costas e islas del Pacífico panameño en Punta Chame y el archipiélago.',
      en: 'Drone flight over the coasts and islands of the Panamanian Pacific in Punta Chame and archipelago.',
    },
    poster: '/images/hero.jpg',
    videoUrl: '/videos/hero.mp4',
    tag: {
      es: 'Vista Aérea Dron',
      en: 'Aerial Drone View',
    },
  },

  otoqueVideo: {
    id: 'otoqueVideo',
    title: {
      es: 'Descubriendo Isla Otoque',
      en: 'Discovering Isla Otoque',
    },
    description: {
      es: 'Recorrido costero por Otoque Oriente y Occidente, sus aguas cristalinas, playas y vestigios históricos.',
      en: 'Coastal journey through Otoque Oriente and Occidente, pristine waters, beaches and historic relics.',
    },
    poster: '/images/otoque.jpg',
    // videoUrl: '/videos/otoque.mp4',
    tag: {
      es: 'Islas y Cultura',
      en: 'Islands & Culture',
    },
  },

  bonaVideo: {
    id: 'bonaVideo',
    title: {
      es: 'Santuario de Aves de Isla Bona',
      en: 'Isla Bona Seabird Sanctuary',
    },
    description: {
      es: 'Acantilados volcánicos donde anidan miles de piqueros pardos, piqueros de patas azules y fragatas.',
      en: 'Volcanic cliffs nesting thousands of brown boobies, blue-footed boobies and frigatebirds.',
    },
    poster: '/images/bona.jpg',
    // videoUrl: '/videos/bona.mp4',
    tag: {
      es: 'Reserva Natural',
      en: 'Nature Sanctuary',
    },
  },

  dolphinsVideo: {
    id: 'dolphinsVideo',
    title: {
      es: 'Delfines Manchados en su Hábitat Natural',
      en: 'Spotted Dolphins in Natural Habitat',
    },
    description: {
      es: 'Manadas de delfines del Pacífico surcando las olas frente a la proa con libertad y alegría.',
      en: 'Pods of Pacific spotted dolphins gliding alongside the bow in open Pacific waters.',
    },
    poster: '/images/dolphins.jpg',
    // videoUrl: '/videos/dolphins.mp4',
    tag: {
      es: 'Fauna Marina',
      en: 'Marine Wildlife',
    },
  },

  whalesVideo: {
    id: 'whalesVideo',
    title: {
      es: 'Encuentro con Ballenas Jorobadas',
      en: 'Humpback Whale Encounter',
    },
    description: {
      es: 'Majestuoso salto y aletazos de ballenas jorobadas migratorias en las cálidas aguas del Golfo de Panamá.',
      en: 'Majestic breeching and tail flukes of migratory humpback whales in the warm Gulf of Panama waters.',
    },
    poster: '/images/whales.jpg',
    // videoUrl: '/videos/whales.mp4',
    tag: {
      es: 'Avistamiento de Temporada',
      en: 'Seasonal Whale Watching',
    },
  },

  restaurantVideo: {
    id: 'restaurantVideo',
    title: {
      es: 'Ambiente en Coco\'s Pub Bar Restaurante',
      en: 'Atmosphere at Coco\'s Pub Bar Restaurant',
    },
    description: {
      es: 'El rincón perfecto en Punta Chame para relajarse frente a la brisa marina y refrescarse tras el recorrido.',
      en: 'The beachside spot in Punta Chame to unwind by the sea breeze and enjoy fresh refreshments.',
    },
    poster: '/images/restaurant.jpg',
    // videoUrl: '/videos/restaurant.mp4',
    tag: {
      es: 'Gastronomía y Relax',
      en: 'Dining & Relax',
    },
  },
};

export const IMAGES = {
  hero: '/images/hero.jpg',
  otoque: '/images/otoque.jpg',
  bona: '/images/bona.jpg',
  dolphins: '/images/dolphins.jpg',
  whales: '/images/whales.jpg',
  restaurant: '/images/restaurant.jpg',
  guide: '/images/guide.jpg',
};
