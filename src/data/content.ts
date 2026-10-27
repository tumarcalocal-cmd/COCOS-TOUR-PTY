import { Experience, Review, FAQItem } from '../types';
import { IMAGES } from './mediaConfig';

export const BUSINESS_INFO = {
  name: 'Cocos Tour PTY',
  tagline: {
    es: 'Turismo auténtico en el Pacífico Panameño',
    en: 'Authentic Tourism in the Panamanian Pacific',
  },
  phone: '+507 6289-3605',
  phoneClean: '+50762893605',
  whatsappUrl: 'https://wa.me/50762893605',
  googleMapsUrl: 'https://maps.app.goo.gl/Erf79yVqucEqT1179',
  address: 'Playa, Punta Chame, provincia de Panamá Oeste, República de Panamá',
  guideName: 'José Valverde',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'isla-otoque',
    slug: 'isla-otoque',
    title: {
      es: 'Isla Otoque y Bahías Costeras',
      en: 'Isla Otoque & Coastal Bays',
    },
    subtitle: {
      es: 'Comunidades insulares, historia local y aguas tranquilas',
      en: 'Island communities, local heritage & calm waters',
    },
    description: {
      es: 'Navegación panorámica hacia Isla Otoque, visitando sus vertientes de Otoque Oriente y Otoque Occidente, observando la histórica grúa minera y disfrutando de sus calas marinas protegidas.',
      en: 'Scenic boat journey to Isla Otoque, exploring both Otoque Oriente and Otoque Occidente, viewing the historical mining crane relic, and relaxing in sheltered sea coves.',
    },
    highlights: {
      es: [
        'Vistas panorámicas de Otoque Oriente y Occidente',
        'Vestigio histórico de la grúa minera insular',
        'Aguas tranquilas ideales para descanso y baño',
        'Guía local con amplio conocimiento del archipiélago',
      ],
      en: [
        'Scenic views of Otoque Oriente and Occidente',
        'Historic local mining crane coastal heritage site',
        'Calm turquoise waters for swimming and relaxing',
        'Local guide with authentic regional knowledge',
      ],
    },
    image: IMAGES.otoque,
    videoId: 'otoqueVideo',
    location: 'Isla Otoque, Golfo de Panamá',
    targetPage: '/islas',
  },
  {
    id: 'isla-bona',
    slug: 'isla-bona',
    title: {
      es: 'Isla Bona e Islote Estiva (Santuario de Aves)',
      en: 'Isla Bona & Islote Estiva (Seabird Sanctuary)',
    },
    subtitle: {
      es: 'Refugio de vida silvestre y acantilados marinos',
      en: 'Wildlife refuge & dramatic marine cliffs',
    },
    description: {
      es: 'Expedición costera alrededor de Isla Bona y el Islote Estiva, un santuario natural de anidación donde habitan miles de aves marinas como piqueros pardos, piqueros de patas azules y fragatas.',
      en: 'Coastal expedition around Isla Bona and Islote Estiva, an ecological sanctuary home to thousands of nesting seabirds including brown boobies, blue-footed boobies, and frigatebirds.',
    },
    highlights: {
      es: [
        'Avistamiento de piqueros pardos y piqueros de patas azules',
        'Majestuosas colonias de fragatas en vuelo',
        'Acantilados volcánicos y formaciones marinas rocosas',
        'Observación ecológica respetuosa desde la embarcación',
      ],
      en: [
        'Sightings of brown boobies and blue-footed boobies',
        'Colonies of magnificent frigatebirds soaring in thermals',
        'Rugged volcanic sea cliffs and rock pillars',
        'Responsible, eco-friendly observation from the boat',
      ],
    },
    image: IMAGES.bona,
    videoId: 'bonaVideo',
    location: 'Isla Bona, Refugio de Vida Silvestre',
    targetPage: '/islas',
  },
  {
    id: 'snorkel-corales',
    slug: 'snorkel-corales',
    title: {
      es: 'Snorkel y Arrecifes del Pacífico',
      en: 'Snorkeling & Pacific Reefs',
    },
    subtitle: {
      es: 'Exploración de fondos marinos y vida subacuática',
      en: 'Underwater exploration and Pacific reef life',
    },
    description: {
      es: 'Sumérgete en puntos seleccionados alrededor de las islas para contemplar peces tropicales, formaciones coralinas y la biodiversidad marina del Pacífico panameño.',
      en: 'Immerse into handpicked spots around the islands to witness tropical fish species, coral habitats, and marine biodiversity of the Panamanian Pacific.',
    },
    highlights: {
      es: [
        'Zonas de aguas claras sujetas a condiciones de marea',
        'Peces de arrecife y biodiversidad marina local',
        'Acompañamiento y asistencia en el agua',
        'Adecuado para principiantes y entusiastas del snorkel',
      ],
      en: [
        'Clear water coves selected according to tide conditions',
        'Vibrant reef fish and Pacific marine life',
        'Assistance and safety guidance in the water',
        'Suitable for both beginners and experienced snorkelers',
      ],
    },
    image: IMAGES.hero,
    videoId: 'heroVideo',
    location: 'Arrecifes de Otoque y Bona',
    targetPage: '/islas',
  },
  {
    id: 'delfines',
    slug: 'delfines',
    title: {
      es: 'Avistamiento de Delfines Manchados',
      en: 'Spotted Dolphin Watching',
    },
    subtitle: {
      es: 'Navegación junto a manadas en mar abierto',
      en: 'Cruising alongside wild pods in the open sea',
    },
    description: {
      es: 'Búsqueda responsable de manadas de delfines manchados del Pacífico (Stenella attenuata) en las aguas del golfo. Observa sus saltos y movimientos naturales en libertad.',
      en: 'Responsible search for pods of pantropical spotted dolphins (Stenella attenuata) in the gulf waters. Observe their agile leaping and natural behaviors in the wild.',
    },
    highlights: {
      es: [
        'Especie común en las aguas abiertas de Panamá Oeste',
        'Protocolos de distancia y respeto animal',
        'Oportunidades fotográficas de fauna salvaje',
        'Experiencia emocionante para toda la familia',
      ],
      en: [
        'Naturally occurring species in West Panama gulf waters',
        'Strict distance and animal welfare protocols',
        'Dynamic wildlife photography opportunities',
        'Exhilarating experience for families and nature lovers',
      ],
    },
    image: IMAGES.dolphins,
    videoId: 'dolphinsVideo',
    location: 'Aguas costeras del Golfo de Panamá',
    targetPage: '/vida-marina',
  },
  {
    id: 'ballenas',
    slug: 'ballenas',
    title: {
      es: 'Avistamiento de Ballenas Jorobadas (Temporada)',
      en: 'Humpback Whale Watching (Seasonal)',
    },
    subtitle: {
      es: 'Migración anual verificada en aguas cálidas del Pacífico',
      en: 'Verified annual migration to warm tropical waters',
    },
    description: {
      es: 'Durante la temporada de migración (típicamente entre julio y octubre), las ballenas jorobadas llegan al Pacífico panameño para dar a luz y reproducirse. Consulta disponibilidad según las condiciones de la temporada.',
      en: 'During the verified migration season (typically July to October), humpback whales travel to the warm Panamanian Pacific to calve and nurse. Inquire about seasonal dates and ocean conditions.',
    },
    highlights: {
      es: [
        'Observación regulada sin interferir con madres y crías',
        'Temporada verificada en el Pacífico panameño',
        'Educación sobre conservación marina con el guía local',
        'Sujeto a confirmación directa y condiciones climáticas',
      ],
      en: [
        'Ethical observation adhering to marine safety guidelines',
        'Verified seasonal window in the Panamanian Pacific',
        'Marine conservation insights from your local guide',
        'Subject to direct confirmation and sea conditions',
      ],
    },
    image: IMAGES.whales,
    videoId: 'whalesVideo',
    location: 'Ruta marina entre Punta Chame e Islas',
    targetPage: '/vida-marina',
  },
  {
    id: 'cocos-pub',
    slug: 'cocos-pub',
    title: {
      es: "Coco's Pub Bar Restaurante",
      en: "Coco's Pub Bar Restaurant",
    },
    subtitle: {
      es: 'Gastronomía frente a la brisa marina en Punta Chame',
      en: 'Coastal dining and cold drinks in Punta Chame',
    },
    description: {
      es: 'Espacio acogedor y distendido para complementar tu jornada en el mar. Disfruta de la brisa costera, gastronomía marina y bebidas refrescantes al regresar a tierra firme.',
      en: 'A welcoming, relaxed spot to complement your ocean adventure. Enjoy the coastal breeze, local seafood dishes, and refreshing drinks upon returning to shore.',
    },
    highlights: {
      es: [
        'Ambiente playero abierto y relajado',
        'Excelente complemento para antes o después de la excursión',
        'Ubicado en Punta Chame, Panamá Oeste',
        'Consulta de mesas y horarios por WhatsApp',
      ],
      en: [
        'Open-air relaxed beachside atmosphere',
        'Perfect complement before or after your island tour',
        'Located right in Punta Chame, West Panama',
        'Table availability and inquiries via WhatsApp',
      ],
    },
    image: IMAGES.restaurant,
    videoId: 'restaurantVideo',
    location: 'Playa, Punta Chame',
    targetPage: '/restaurante',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Carlos Mendoza',
    rating: 5,
    date: {
      es: 'Opinión verificada en Google',
      en: 'Verified review on Google',
    },
    text: {
      es: 'Excelente atención de José Valverde y todo el equipo. Fuimos a Isla Otoque y el recorrido fue muy seguro, profesional y con explicaciones claras sobre la zona. Muy recomendado.',
      en: 'Excellent service from José Valverde and the team. We went to Isla Otoque and the trip was very safe, professional, and with clear local insights. Highly recommended.',
    },
    source: 'Google Maps',
  },
  {
    id: 'rev-2',
    author: 'Mariana Ríos',
    rating: 5,
    date: {
      es: 'Opinión verificada en Google',
      en: 'Verified review on Google',
    },
    text: {
      es: 'El avistamiento de aves en Isla Bona fue un espectáculo increíble. Los piqueros y fragatas por todas partes. Muy atentos con los tiempos y cuidando la naturaleza.',
      en: 'Bird watching at Isla Bona was an incredible spectacle. Boobies and frigatebirds all around. Very attentive with timing and respecting nature.',
    },
    source: 'Google Maps',
  },
  {
    id: 'rev-3',
    author: 'David S.',
    rating: 5,
    date: {
      es: 'Opinión verificada en Google',
      en: 'Verified review on Google',
    },
    text: {
      es: 'Pudimos ver delfines jugando cerca del bote en el camino de regreso. Trato muy cordial, directo por WhatsApp sin complicaciones. Una experiencia genuina en Panamá.',
      en: 'We got to see dolphins swimming near the boat on the way back. Friendly and straightforward communication via WhatsApp. A genuinely authentic Panama experience.',
    },
    source: 'Google Maps',
  },
  {
    id: 'rev-4',
    author: 'Elena Castillo',
    rating: 4,
    date: {
      es: 'Opinión verificada en Google',
      en: 'Verified review on Google',
    },
    text: {
      es: 'Muy buena experiencia en Punta Chame. José conoce muy bien el mar y las corrientes. Después comimos en Coco’s Pub y cerramos un día perfecto en la playa.',
      en: 'Great experience in Punta Chame. José knows the sea and currents very well. Afterward we ate at Coco’s Pub and wrapped up a perfect beach day.',
    },
    source: 'Google Maps',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: {
      es: '¿Cómo puedo consultar o solicitar una excursión?',
      en: 'How can I inquire about or request a tour?',
    },
    answer: {
      es: 'Puedes utilizar nuestro formulario de consulta web para enviar los detalles de tu grupo y fecha deseada directamente a nuestro WhatsApp oficial (+507 6289-3605) o pulsar en el botón de llamada telefónica. Te responderemos personalmente para verificar la disponibilidad y los detalles de la salida.',
      en: 'You can use our online inquiry form to send your group details and preferred date directly to our official WhatsApp (+507 6289-3605) or click the phone call button. We will reply personally to check availability and trip details.',
    },
  },
  {
    question: {
      es: '¿Dónde se encuentra Cocos Tour PTY?',
      en: 'Where is Cocos Tour PTY located?',
    },
    answer: {
      es: 'Nuestra ubicación comercial publicada está en la Playa de Punta Chame, provincia de Panamá Oeste, República de Panamá. Ten en cuenta que la ubicación comercial y los destinos marítimos (como Isla Otoque e Isla Bona) son puntos geográficos distintos.',
      en: 'Our published commercial location is at the Beach, Punta Chame, West Panama Province, Republic of Panama. Please note that the commercial base and the maritime island destinations (such as Isla Otoque and Isla Bona) are distinct geographic locations.',
    },
  },
  {
    question: {
      es: '¿Cómo se confirma una reserva?',
      en: 'How is a reservation confirmed?',
    },
    answer: {
      es: 'Toda reserva queda estrictamente sujeta a confirmación directa con Cocos Tour PTY vía WhatsApp o llamada telefónica. No realizamos cobros en línea automáticos ni confirmaciones automáticas sin previa validación de condiciones meteorológicas y operativas.',
      en: 'All reservations are strictly subject to direct personal confirmation with Cocos Tour PTY via WhatsApp or telephone call. We do not process automated online payments or instant bookings without prior validation of weather and operational conditions.',
    },
  },
  {
    question: {
      es: '¿Puedo consultar para grupos familiares o privados?',
      en: 'Can I inquire for families or private groups?',
    },
    answer: {
      es: 'Sí. En el formulario puedes indicar la cantidad de adultos y niños, así como cualquier solicitud especial en la sección de comentarios para que podamos preparar la mejor orientación para tu grupo.',
      en: 'Yes. In the inquiry form you can specify the number of adults and children, as well as any special requests in the comments section so we can tailor the orientation for your group.',
    },
  },
  {
    question: {
      es: '¿Qué debo llevar para la excursión?',
      en: 'What should I bring on the tour?',
    },
    answer: {
      es: 'Recomendamos llevar ropa cómoda y ligera, traje de baño, toalla, protección solar adecuada (bloqueador solar amigable con arrecifes y gorra/sombrero), agua para hidratarte y calzado que pueda mojarse.',
      en: 'We recommend comfortable lightweight clothing, swimwear, towel, adequate sun protection (reef-friendly sunscreen and cap/hat), drinking water for hydration, and water shoes or footwear suitable for wet surfaces.',
    },
  },
  {
    question: {
      es: '¿Las excursiones dependen del clima y las mareas?',
      en: 'Do tours depend on weather and tide conditions?',
    },
    answer: {
      es: 'Sí, la navegación en el Pacífico panameño está siempre condicionada a las variables climáticas, el oleaje y los estados de marea por la seguridad primordial de todos los pasajeros. En caso de condiciones adversas, coordinaremos contigo la mejor alternativa.',
      en: 'Yes, navigation in the Panamanian Pacific is always contingent upon weather, swells, and tidal conditions for the safety of all passengers. In case of adverse conditions, we will coordinate the best alternative with you.',
    },
  },
  {
    question: {
      es: '¿Puedo consultar en inglés (Can I inquire in English)?',
      en: 'Can I inquire in English?',
    },
    answer: {
      es: '¡Por supuesto! Recibimos consultas tanto en español como en inglés con total normalidad a través de WhatsApp o por teléfono.',
      en: 'Absolutely! We happily attend inquiries in both English and Spanish via WhatsApp or telephone.',
    },
  },
  {
    question: {
      es: '¿Cómo solicito información sobre ballenas y delfines?',
      en: 'How do I request information regarding whales and dolphins?',
    },
    answer: {
      es: 'Puedes seleccionar la opción correspondiente en el formulario de consulta. Te informaremos sobre las fechas activas de la temporada migratoria de ballenas y las condiciones recientes observadas en el mar. Recuerda que la fauna marina se encuentra en estado salvaje en su hábitat natural, por lo que no se garantizan avistamientos forzados.',
      en: 'You can choose the corresponding option in the inquiry form. We will provide updates on the active seasonal window for migratory whales and recent sea conditions. Note that marine wildlife lives freely in its natural habitat, so forced encounters are never guaranteed.',
    },
  },
];
