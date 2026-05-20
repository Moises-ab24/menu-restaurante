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