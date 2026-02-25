
import { Destination, Review } from './types';

export const APP_NAME = "Tailandia Travel";

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Wat Arun (Temple of Dawn)',
    location: 'Bangkok',
    description: 'A stunning Buddhist temple on the west bank of the Chao Phraya River, known for its colorful spires and intricate mosaics.',
    imageUrl: 'https://images.unsplash.com/photo-1528641938870-1f9f257b494d?w=800&q=80',
    rating: 4.8,
    tags: ['Culture', 'History', 'Landmark'],
    priceRange: 'Low'
  },
  {
    id: '2',
    name: 'Maya Bay',
    location: 'Ko Phi Phi Leh',
    description: 'The iconic beach made famous by "The Beach" movie. Crystal clear turquoise waters surrounded by towering limestone cliffs.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    rating: 4.9,
    tags: ['Nature', 'Beach', 'Swimming'],
    priceRange: 'Medium'
  },
  {
    id: '3',
    name: 'Chiang Mai Night Market',
    location: 'Chiang Mai',
    description: 'A vibrant night market stretching for several blocks, offering handicrafts, street food, clothes, and local entertainment.',
    imageUrl: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=800&q=80',
    rating: 4.6,
    tags: ['Shopping', 'Food', 'Nightlife'],
    priceRange: 'Low'
  },
  {
    id: '4',
    name: 'Elephant Sanctuary',
    location: 'Chiang Mai',
    description: 'An ethical sanctuary and rescue center for elephants. Visitors can observe and help bathe these majestic creatures.',
    imageUrl: 'https://images.unsplash.com/photo-1516715667182-c515115bb8b3?w=800&q=80',
    rating: 4.9,
    tags: ['Wildlife', 'Ethical', 'Family'],
    priceRange: 'High'
  },
  {
    id: '5',
    name: 'Railay Beach',
    location: 'Krabi',
    description: 'Accessible only by boat, this peninsula features stunning beaches, rock climbing spots, and a relaxed hippie vibe.',
    imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    rating: 4.7,
    tags: ['Adventure', 'Climbing', 'Beach'],
    priceRange: 'Medium'
  },
  {
    id: '6',
    name: 'Ayutthaya Historical Park',
    location: 'Ayutthaya',
    description: 'Ruins of the second capital of the Siamese Kingdom. A UNESCO World Heritage site full of ancient prangs and giant monasteries.',
    imageUrl: 'https://images.unsplash.com/photo-1508930704443-4cc812e96d07?w=800&q=80',
    rating: 4.7,
    tags: ['History', 'Ruins', 'Culture'],
    priceRange: 'Low'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Jenkins',
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5,
    comment: 'Tailandia Travel me ayudó a planear mi viaje a Bangkok a la perfección. ¡Wat Arun al atardecer fue mágico!',
    date: 'Hace 2 semanas'
  },
  {
    id: 'r2',
    author: 'Marcus Chen',
    avatarUrl: 'https://i.pravatar.cc/150?u=marcus',
    rating: 5,
    comment: 'Recomendaciones de comida increíbles. Nunca hubiera encontrado ese puesto callejero en Chiang Mai sin esta guía.',
    date: 'Hace 1 mes'
  },
  {
    id: 'r3',
    author: 'Elena Rodriguez',
    avatarUrl: 'https://i.pravatar.cc/150?u=elena',
    rating: 4,
    comment: 'Gran interfaz y muy rápida. Me encantó la sugerencia del santuario ético de elefantes.',
    date: 'Hace 3 semanas'
  }
];

export const SYSTEM_INSTRUCTION = `
Actúa como 'ThaiGuide', el Especialista Senior en Destinos y Embajador Cultural de Tailandia Travel. Tu propósito es ofrecer una asesoría de viaje de nivel premium, personalizada y experta para visitantes de Tailandia.

Directrices de Identidad y Estilo:
1. Tono Profesional: Mantén un lenguaje sofisticado, elocuente y cálido. Refleja la hospitalidad tailandesa refinada (estilo Concierge de 5 estrellas).
2. Saludo: Inicia con "Sawasdee khrap" (o "Sawasdee kha" si el usuario se identifica como mujer) para establecer una conexión cultural inmediata.
3. Autoridad Cultural: No solo des datos; ofrece contexto sobre la etiqueta (el 'Wai', el respeto a la monarquía, el decoro en templos) y la historia local.
4. Enfoque en Calidad: Prioriza las experiencias éticas y sostenibles.

Estructura de Respuesta:
- Claridad Logística: Si recomiendas un lugar, menciona brevemente la mejor hora para visitarlo o el tipo de vestimenta requerida.
- Moneda: Expresa costos en Baht tailandés (THB) con su aproximado en USD para mayor comodidad del viajero internacional.
- Formato: Utiliza negritas para resaltar puntos clave y listas cuando sea apropiado.

Restricciones:
- Limítate a información verificada y de alta calidad.
- Tu prioridad son los destinos destacados en Tailandia Travel: Wat Arun, Maya Bay, Chiang Mai, Railay Beach y Ayutthaya. Úsalos como base para tus recomendaciones de itinerario.

Tu misión es transformar una simple consulta en el inicio de una travesía inolvidable.
`;
