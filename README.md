# CatMarket — E-commerce React + Firebase

CatMarket es una aplicación de comercio electrónico desarrollada como parte del proyecto final del curso de React de CoderHouse. Permite navegar por categorías, visualizar listados y detalles de productos, administrar un carrito de compras y registrar órdenes en Firebase.

---

## Tecnologías utilizadas

- React + Vite  
- React Router DOM  
- Firebase / Firestore  
- Bootstrap 5  
- Context API  
- Promises y async/await  
- CSS personalizado  

---

## Estructura del proyecto
src/
├── components/
│    ├── Navbar.jsx
│    ├── CartWidget.jsx
│    ├── Cart.jsx
│    ├── ItemListContainer.jsx
│    ├── ItemList.jsx
│    ├── Item.jsx
│    ├── ItemDetailContainer.jsx
│    ├── ItemDetail.jsx
│    ├── ItemCount.jsx
│    ├── CheckoutForm.jsx
│    └── context/
│         └── CartContext.jsx
│
├── firebase/
│    ├── config.js
│    └── bbdd.js
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css

---

## Navegación con React Router

La aplicación utiliza React Router DOM para proporcionar navegación de tipo Single Page Application sin recargas de la página.

### Rutas implementadas:

| Ruta | Vista |
|------|-------|
| `/` | Catálogo general |
| `/category/:categoryId` | Catálogo filtrado por categoría |
| `/item/:id` | Detalle de producto |
| `/cart` | Carrito de compras |
| `/checkout` | Formulario de checkout |

Se emplea el hook `useParams()` para obtener parámetros dinámicos de la URL y renderizar el contenido correspondiente.

---

## Carrito de compras (Context API)

La aplicación implementa un estado global mediante Context para gestionar el carrito de compras.

### Funcionalidades principales

- Agregar productos al carrito  
- Sumar cantidades cuando un producto ya existe  
- Eliminar productos del carrito  
- Vaciar el carrito  
- Calcular total de unidades  
- Calcular el total a pagar  
- Mostrar la cantidad de productos en el CartWidget  

Archivo principal: `src/components/context/CartContext.jsx`

---

## Conexión con Firebase / Firestore

Se utiliza Firestore como base de datos para:

- Obtener todos los productos  
- Filtrar productos por categoría  
- Obtener un producto específico  
- Registrar órdenes de compra  

### Colecciones utilizadas

- `productos`  
- `orders`

Archivos:

- `src/firebase/config.js`  
- `src/firebase/bbdd.js`

---

## Listado y detalle de productos

- **ItemListContainer**: obtiene productos desde Firebase y envía los datos a ItemList.  
- **ItemList**: renderiza la lista usando `.map()` con `key` única.  
- **ItemDetailContainer**: obtiene un único producto por id.  
- **ItemDetail**: muestra imagen, descripción, precio y permite agregar unidades.  
- **ItemCount**: selector de cantidad con validación de stock.

---

## Checkout

Incluye:

- Formulario de datos del comprador  
- Validación de campos  
- Registro de la orden en Firestore  
- Limpieza del carrito al finalizar  
- Renderizado condicional mostrando el ID de la orden generada  

Archivo: `src/components/CheckoutForm.jsx`

---

## Estilos

- Bootstrap utilizado para layout y componentes.  
- CSS personalizado en `App.css` e `index.css` para ajustes adicionales.  

---

## Instalación y uso

```bash
# Clonar repositorio
git clone <URL_DEL_REPO>

# Instalar dependencias
npm install

# Ejecutar proyecto
npm run dev

---
