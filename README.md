# 🍽️ La Mesa del Chef

> **Menú digital con panel de administración en tiempo real — desplegado en GitHub Pages**

## 📖 ¿Qué es?

**La Mesa del Chef** es una aplicación web liviana para gestionar y visualizar el menú de un restaurante. Tiene dos vistas principales:

- **Menú público** — muestra los platillos agrupados por categoría con filtros interactivos, precios en colones y un diseño tipo carta de restaurante.
- **Panel de mantenimiento** — permite agregar, editar y eliminar platillos en tiempo real sin necesidad de recargar la página.

Los datos se sincronizan automáticamente entre todos los dispositivos conectados gracias a Firebase Realtime Database.

Ya disponible en (https://moises-ab24.github.io/menu-restaurante/)

## 🛠️ Stack

| Capa | Tecnología |
|---|---|
| Estructura | HTML |
| Estilos | CSS |
| Lógica | JavaScript |
| Base de datos | Firebase Realtime Database |
| Tipografía | Playfair Display · DM Sans (Google Fonts) |
| Deploy | GitHub Pages |

> Sin frameworks, sin bundlers, sin dependencias de Node. Solo tres archivos: `index.html`, `styles.css` y `app.js`.

## ✨ Funcionalidades

- 📋 **Vista de menú** agrupada por categoría con pills de filtro dinámicos
- ⚡ **Sync en tiempo real** — los cambios del admin se reflejan al instante en el menú público
- ✏️ **CRUD completo** de platillos (nombre, precio, categoría, emoji, descripción)
- 📊 **Estadísticas** — total de platillos, categorías activas y precio promedio
- 🌐 **Indicador de conexión** Firebase en el header
- 🔔 **Toast notifications** para feedback de acciones
- ⬇️ **Carga de datos de ejemplo** (solo si la BD está vacía)
- 📱 **Diseño responsive** — funciona en móvil y escritorio

## 🏷️ Categorías disponibles

| Nombre | Ícono |
|---|---|
| Entradas | 🥗 |
| Sopas | 🍲 |
| Platos fuertes | 🍖 |
| Postres | 🍮 |
| Bebidas | 🥤 |
| Otros | ✨ |

## 📝 Resumen general de todo el proyecto

```text
👤 Usuario abre la app
   ↓
🌐 GitHub Pages sirve los archivos estáticos
   ↓
🧩 El navegador carga HTML + CSS + JS
   ↓
🔥 firebase-config.js inicializa el SDK de Firebase
   ↓
📡 Se abre listener en tiempo real sobre /platillos
   ↓
📋 El menú público renderiza los platillos por categoría
   ↓
⚙️ Usuario agrega / edita / elimina un platillo
   ↓
🔄 Firebase actualiza el nodo en Realtime Database
   ↓
⚡ El listener dispara automáticamente en todos los dispositivos
   ↓
✅ Cambios visibles al instante sin recargar
```

## 📄 Licencia

Desarrollado como proyecto de práctica — Desarrollo de Aplicaciones Móviles · Moisés Abarca · Deyker Lanza · 2026
