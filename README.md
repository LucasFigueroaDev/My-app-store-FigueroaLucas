# My App Store - Short Circuit

Bienvenido a *My App Store*, una aplicación construida con React Vite. Este proyecto utiliza diversas librerías como SweetAlert2 para mostrar alertas atractivas, classname para manejar clases de CSS de manera efectiva, y un spinner para la carga de datos.
Los datos de la aplicación se gestionan a través de Firebase y las imágenes se encuentran almacenadas en la nube. Además, este proyecto se ha desplegado en Vercel para un acceso fácil y rápido.

## Tabla de Contenidos
- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecutar el Proyecto](#ejecutar-el-proyecto)
- [Uso](#uso)
- [Licencia](#licencia)

## Características
- Interfaz amigable y responsiva.
- Notificaciones visuales agradables con SweetAlert2.
- Carga de componentes con spinner para mejorar la experiencia del usuario.
- Integración con Firebase para la gestión de datos.
- Imágenes almacenadas en la nube.

## Tecnologías utilizadas
- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Vite: Herramienta de construcción y desarrollo de aplicaciones web.
- Firebase: Plataforma de desarrollo de aplicaciones en la nube.
- SweetAlert2: Librería para mostrar alertas personalizadas.
- classnames: Paquete para manejar condicionalmente las clases CSS.
- Spinner: Componente para mostrar un indicador de carga.

## Requisitos Previos
Asegúrate de tener instalado en tu máquina:
- [Node.js](https://nodejs.org/): Para el entorno de ejecución de JavaScript.
- [npm](https://www.npmjs.com/): (se incluye con Node.js) Para la gestión de dependencias.

## Instalación
1. Clona el repositorio:
   bash
   git clone https://github.com/LucasFigueroaDev/My-app-store-FigueroaLucas.git
   
2. Navega al directorio del proyecto:
   bash
   cd my-app-store
   
3. Instala las dependencias:
   bash
   npm install
   

## Ejecutar el Proyecto
1. Asegúrate de tener tus credenciales de Firebase configuradas. Puedes hacerlo creando un archivo .env en la raíz del proyecto con la siguiente estructura:
   env
   VITE_API_KEY=tu_api_key
   VITE_AUTH_DOMAIN=tu_auth_domain
   VITE_PROJECT_ID=tu_project_id
   VITE_STORAGE_BUCKET=tu_storage_bucket
   VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   VITE_APP_ID=tu_app_id
   

2. Inicia el servidor de desarrollo:
   bash
   npm run dev
   
3. Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

## Uso
Después de abrir la aplicación, podrás navegar por la tienda de aplicaciones. Podras seleccionar tu producto ver si hay stock o no, con su propia descripción, con cada seleccion de producto saldra un alert, podras ver el carrito con los productos el monto total para luego proceder a finalizar a la compra.

---

¡Gracias por usar *My App Store*!
Proyecto de entrega para CoderHouse - ReactJs

###End