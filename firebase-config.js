/* ════════════════════════════════════════════════════════════
   FIREBASE — CONFIGURACIÓN DEL PROYECTO
   ════════════════════════════════════════════════════════════ */
const firebaseConfig = {
  apiKey: "AIzaSyAh1TH2gQSzrl1izmFsi8rnw7nZPmrKdjw",
  authDomain: "menu-restaurante-8a7f5.firebaseapp.com",
  databaseURL: "https://menu-restaurante-8a7f5-default-rtdb.firebaseio.com",
  projectId: "menu-restaurante-8a7f5",
  storageBucket: "menu-restaurante-8a7f5.firebasestorage.app",
  messagingSenderId: "893980282257",
  appId: "1:893980282257:web:672c3ce9e41ae45147de30"
};

/* ════════════════════════════════════════════════════════════
   CATEGORÍAS — edita aquí para agregar o cambiar categorías
   ════════════════════════════════════════════════════════════ */
const CATS = [
  { id: 'entrada', name: 'Entradas',       icon: '🥗', color: '#7F77DD', bg: '#EEEDFE' },
  { id: 'sopa',    name: 'Sopas',          icon: '🍲', color: '#B85C2A', bg: '#FAECE7' },
  { id: 'plato',   name: 'Platos fuertes', icon: '🍖', color: '#2A6648', bg: '#E1F5EE' },
  { id: 'postre',  name: 'Postres',        icon: '🍮', color: '#C2567A', bg: '#FBEAF0' },
  { id: 'bebida',  name: 'Bebidas',        icon: '🥤', color: '#2A5E8A', bg: '#E6F1FB' },
  { id: 'otro',    name: 'Otros',          icon: '✨', color: '#6B6057', bg: '#F1EFE8' },
];

/* ════════════════════════════════════════════════════════════
   DATOS DE EJEMPLO
   ════════════════════════════════════════════════════════════ */
const PLATILLOS_EJEMPLO = [
  { name: 'Ceviche mixto',          cat: 'entrada', price: 4500, icon: '🦐', desc: 'Camarón, pulpo y corvina marinados en limón con cebolla morada y culantro' },
  { name: 'Chifrijo',               cat: 'entrada', price: 3800, icon: '🫘', desc: 'Frijoles negros, chicharrón crujiente, pico de gallo y arroz' },
  { name: 'Patacones con guacamole',cat: 'entrada', price: 2800, icon: '🫓', desc: 'Plátano verde frito con guacamole fresco y salsa rosada' },
  { name: 'Sopa negra',             cat: 'sopa',    price: 2500, icon: '🍲', desc: 'Frijoles negros con huevo pochado, cilantro y cebollín' },
  { name: 'Sopa de mondongo',       cat: 'sopa',    price: 3200, icon: '🥣', desc: 'Mondongo tierno con papas, yuca y vegetales frescos' },
  { name: 'Casado de res',          cat: 'plato',   price: 5200, icon: '🥩', desc: 'Arroz, frijoles, ensalada, plátano maduro y carne de res' },
  { name: 'Pollo al ajillo',        cat: 'plato',   price: 5800, icon: '🍗', desc: 'Pechuga a la plancha con salsa de ajo, limón y hierbas finas' },
  { name: 'Tilapia a la plancha',   cat: 'plato',   price: 6200, icon: '🐟', desc: 'Filete de tilapia con arroz con vegetales y ensalada fresca' },
  { name: 'Gallo pinto completo',   cat: 'plato',   price: 3500, icon: '🍳', desc: 'Gallo pinto, huevos revueltos, natilla y queso blanco' },
  { name: 'Tres leches',            cat: 'postre',  price: 2200, icon: '🍰', desc: 'Pastel casero empapado en tres tipos de leche con crema batida' },
  { name: 'Arroz con leche',        cat: 'postre',  price: 1800, icon: '🍮', desc: 'Cremoso arroz con leche, canela y pasas al estilo casero' },
  { name: 'Flan de caramelo',       cat: 'postre',  price: 2000, icon: '🍯', desc: 'Flan suave con salsa de caramelo dorado' },
  { name: 'Refresco de guanábana',  cat: 'bebida',  price: 1200, icon: '🥤', desc: 'Natural con agua o leche, sin azúcar agregada' },
  { name: 'Horchata',               cat: 'bebida',  price: 1200, icon: '🥛', desc: 'Bebida de arroz con canela, helada y refrescante' },
  { name: 'Fresco de cas',          cat: 'bebida',  price: 1100, icon: '🍹', desc: 'Guayaba ácida típica costarricense, con agua o leche' },
  { name: 'Café chorreado',         cat: 'bebida',  price:  900, icon: '☕', desc: 'Café 100% costarricense pasado por chorreador tradicional' },
];