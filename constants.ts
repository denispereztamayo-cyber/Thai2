
import { Destination, Review } from './types';

export const APP_NAME = "ThaiVoyage";

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Wat Arun (Temple of Dawn)',
    location: 'Bangkok',
    description: 'A stunning Buddhist temple on the west bank of the Chao Phraya River, known for its colorful spires and intricate mosaics.',
    imageUrl: 'https://lcwtfqxnlmsmouvtdhfk.supabase.co/storage/v1/object/public/Imagenes/4600_t8afNwa2.jpg',
    rating: 4.8,
    tags: ['Culture', 'History', 'Landmark'],
    priceRange: 'Low'
  },
  {
    id: '2',
    name: 'Maya Bay',
    location: 'Ko Phi Phi Leh',
    description: 'The iconic beach made famous by "The Beach" movie. Crystal clear turquoise waters surrounded by towering limestone cliffs.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    rating: 4.9,
    tags: ['Nature', 'Beach', 'Swimming'],
    priceRange: 'Medium'
  },
  {
    id: '3',
    name: 'Chiang Mai Night Bazaar',
    location: 'Chiang Mai',
    description: 'A vibrant night market stretching for several blocks, offering handicrafts, street food, clothes, and local entertainment.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    rating: 4.6,
    tags: ['Shopping', 'Food', 'Nightlife'],
    priceRange: 'Low'
  },
  {
    id: '4',
    name: 'Elephant Nature Park',
    location: 'Chiang Mai',
    description: 'An ethical sanctuary and rescue center for elephants. Visitors can observe and help bathe these majestic creatures.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    rating: 4.9,
    tags: ['Wildlife', 'Ethical', 'Family'],
    priceRange: 'High'
  },
  {
    id: '5',
    name: 'Railay Beach',
    location: 'Krabi',
    description: 'Accessible only by boat, this peninsula features stunning beaches, rock climbing spots, and a relaxed hippie vibe.',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    rating: 4.7,
    tags: ['Adventure', 'Climbing', 'Beach'],
    priceRange: 'Medium'
  },
  {
    id: '6',
    name: 'Ayutthaya Historical Park',
    location: 'Ayutthaya',
    description: 'Ruins of the second capital of the Siamese Kingdom. A UNESCO World Heritage site full of ancient prangs and giant monasteries.',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    rating: 4.7,
    tags: ['History', 'Ruins', 'Culture'],
    priceRange: 'Low'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Jenkins',
    avatarUrl: 'https://picsum.photos/100/100?random=10',
    rating: 5,
    comment: 'The AI assistant helped me plan a 3-day itinerary in Bangkok perfectly. Wat Arun at sunset was magical!',
    date: '2 weeks ago'
  },
  {
    id: 'r2',
    author: 'Marcus Chen',
    avatarUrl: 'https://picsum.photos/100/100?random=11',
    rating: 5,
    comment: 'Incredible food recommendations. I would have never found the street food stall in Chiang Mai without this site.',
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Elena Rodriguez',
    avatarUrl: 'https://picsum.photos/100/100?random=12',
    rating: 4,
    comment: 'Great interface and very responsive on mobile. Loved the ethical elephant sanctuary suggestion.',
    date: '3 weeks ago'
  }
];

export const SYSTEM_INSTRUCTION = `
Actúa como 'Taibot', el Especialista Senior en Destinos y Embajador Cultural de ThaiVoyage. Tu propósito es ofrecer una asesoría de viaje de nivel premium, personalizada y experta para visitantes de Tailandia.

Directrices de Identidad y Estilo:
1. Tono Profesional: Mantén un lenguaje sofisticado, elocuente y cálido. Refleja la hospitalidad tailandesa refinada (estilo Concierge de 5 estrellas).
2. Saludo: Inicia con "Sawasdee khrap" (o "Sawasdee kha" si el usuario se identifica como mujer) para establecer una conexión cultural inmediata.
3. Autoridad Cultural: No solo des datos; ofrece contexto sobre la etiqueta (el 'Wai', el respeto a la monarquía, el decoro en templos) y la historia local.
4. Enfoque en Calidad: Prioriza las experiencias éticas y sostenibles (como el Elephant Nature Park mencionado en nuestro sitio).

Estructura de Respuesta:
- Claridad Logística: Si recomiendas un lugar, menciona brevemente la mejor hora para visitarlo o el tipo de vestimenta requerida.
- Moneda: Expresa costos en Baht tailandés (THB) con su aproximado en USD para mayor comodidad del viajero internacional.
- Formato: Utiliza negritas para resaltar puntos clave y listas cuando sea apropiado para facilitar la lectura rápida en dispositivos móviles.

Restricciones:
- Limítate a información verificada y de alta calidad. Si un detalle es incierto, indica amablemente que es recomendable verificar con guías locales certificados.
- Tu prioridad son los destinos destacados en ThaiVoyage: Wat Arun, Maya Bay, Chiang Mai Night Bazaar, Elephant Nature Park, Railay Beach y Ayutthaya. Úsalos como base para tus recomendaciones de itinerario.

Tu misión es transformar una simple consulta en el inicio de una travesía buena.
`;
