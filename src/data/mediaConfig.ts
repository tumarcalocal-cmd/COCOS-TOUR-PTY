/**
 * CONFIGURACIÓN CENTRAL DE MEDIOS AUDIOVISUALES — COCOS TOUR PTY
 * 
 * Aquí se centralizan los videos y fotografías del sitio web.
 * Para agregar o actualizar videos exportados de Canva o alojados externamente
 * (ej. Cloudinary, AWS S3, Vimeo, etc.), simplemente pegue el enlace en 'videoUrl'.
 * Si 'videoUrl' no se especifica o está vacío, el sistema mostrará automáticamente
 * la miniatura auténtica con el reproductor informativo o marcador de posición elegante.
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
    poster: '/images/hero_panama_islands_1793082060622.jpg',
    // Inserte aquí el enlace directo al MP4 exportado de Canva o servidor externo:
    // videoUrl: 'https://ejemplo.com/videos/hero_cocos_tour.mp4',
    tag: {
      es: 'Vista Aérea Dron',
      en: 'Aerial Drone View',
    },
    duration: '0:45',
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
    poster: '/images/isla_otoque_coastal_1793082061061.jpg',
    tag: {
      es: 'Islas y Cultura',
      en: 'Islands & Culture',
    },
    duration: '1:12',
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
    poster: '/images/isla_bona_birds_cliffs_1793082061784.jpg',
    tag: {
      es: 'Reserva Natural',
      en: 'Nature Sanctuary',
    },
    duration: '1:30',
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
    poster: '/images/pacific_spotted_dolphins_1793082062460.jpg',
    tag: {
      es: 'Fauna Marina',
      en: 'Marine Wildlife',
    },
    duration: '0:58',
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
    poster: '/images/humpback_whale_tail_1793082063160.jpg',
    tag: {
      es: 'Avistamiento de Temporada',
      en: 'Seasonal Whale Watching',
    },
    duration: '1:45',
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
    poster: '/images/cocos_pub_restaurant_1793082064167.jpg',
    tag: {
      es: 'Gastronomía y Relax',
      en: 'Dining & Relax',
    },
    duration: '0:40',
  },
};

export const IMAGES = {
  hero: '/images/hero_panama_islands_1793082060622.jpg',
  otoque: '/images/isla_otoque_coastal_1793082061061.jpg',
  bona: '/images/isla_bona_birds_cliffs_1793082061784.jpg',
  dolphins: '/images/pacific_spotted_dolphins_1793082062460.jpg',
  whales: '/images/humpback_whale_tail_1793082063160.jpg',
  restaurant: '/images/cocos_pub_restaurant_1793082064167.jpg',
  guide: '/images/jose_valverde_guide_1793082064189.jpg',
};
