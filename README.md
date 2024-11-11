# Parcel template

Este proyecto fue creado usando Parcel. Para introducción y configuración.
características adicionales [consulte la documentación](https://parceljs.org/).

## Preparando un nuevo proyecto

1. Asegúrese de que la versión LTS de Node.js esté instalada en su computadora.
   [Descargue e instale](https://nodejs.org/en/) si es necesario.
2. Clona este repositorio.
3. Cambie el nombre de la carpeta de `parcel-project-template` al nombre de su proyecto.
4. Cree un nuevo repositorio vacío en GitHub.
5. Abra el proyecto en VSCode, inicie una terminal y vincule el proyecto al repositorio de GitHub.
   [según las instrucciones](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositories-url).
6. Instale las dependencias del proyecto en la terminal usando el comando `npm install`.
7. Inicie el modo de desarrollo ejecutando el comando `npm start`.
8. Vaya a la dirección [http://localhost:1234](http://localhost:1234) en su navegador.
   Esta página se recargará automáticamente después de guardar los cambios en archivos del proyecto.

## Archivos y carpetas

- Todos los análisis de archivos de estilo deben ubicarse en la carpeta `src/sass` e importarse a
  archivos de estilo de página. Por ejemplo, para `index.html` el archivo de estilo se llama
 `índice.scss`.
- Agregar imágenes a la carpeta `src/images`. El ensamblador los optimiza, pero sólo
  al implementar la versión de producción del proyecto. Todo esto sucede en la nube, por lo que no hay
  Cargue su computadora, ya que en máquinas débiles puede tomar mucho tiempo.

## Desplegar

Para configurar la implementación de un proyecto, debe realizar varios pasos adicionales
sobre cómo configurar su repositorio. Vaya a la pestaña "Configuración" y a las subsecciones
`Acciones` seleccione seleccione `General`.

![Configuración de acciones de GitHub](./assets/actions-config-step-1.png)

Desplázate hasta la última sección donde te aseguras de que aparezcan opciones como
en la siguiente imagen y haga clic en "Guardar". Sin estos ajustes, el conjunto tendrá
No hay suficientes derechos para automatizar el proceso de implementación.

![Configuración de acciones de GitHub](./assets/actions-config-step-2.png)

La versión de producción del proyecto se creará e implementará automáticamente en GitHub.
Pages, a la rama `gh-pages`, cada vez que se actualiza la rama `main`. Por ejemplo,
después de un envío directo o una solicitud de extracción aceptada. Para hacer esto necesitas en el archivo.
`package.json` edita el campo `homepage` y el script `build`, reemplazando
`your_username` y `your_repo_name` como suyo y envíe los cambios a GitHub.

```json
"página de inicio": "https://tu_nombre de usuario.github.io/tu_nombre_repo/",
"guiones": {
 "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

A continuación, debe ir a la configuración del repositorio de GitHub (`Configuración` > `Páginas`) y
establezca la distribución de la versión de producción de los archivos de la carpeta `/root` de la rama `gh-pages`, si
esto no se hizo automáticamente.

![Configuración de páginas de GitHub](./assets/repo-settings.png)

### Estado de implementación

El estado de implementación de la última confirmación se muestra mediante un icono junto a su identificador.

- **Color amarillo**: el proyecto se está ensamblando e implementando.
- **Verde**: la implementación se completó correctamente.
- **Rojo**: se produjo un error durante el linting, la compilación o la implementación.

Se puede ver información más detallada sobre el estado haciendo clic en el icono y en
en la ventana desplegable, siga el enlace "Detalles".

![Estado de implementación](./assets/status.png)

### Página en vivo

Después de un tiempo, generalmente un par de minutos, se puede ver la página en vivo.
a la dirección especificada en la propiedad "página de inicio" editada. Por ejemplo, aquí
enlace a la versión en vivo de este repositorio
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Si se abre una página en blanco, asegúrese de que no haya errores en la pestaña "Consola".
asociado con rutas incorrectas a archivos de proyecto CSS y JS (**404**). Más rápido
todo lo que tienes es un valor incorrecto para la propiedad "página de inicio" o el script "compilación" en
archivo `paquete.json`.

## Cómo funciona

![Cómo funciona](./assets/how-it-works.png)

1. Después de cada envío a la rama "principal" del repositorio de GitHub, aparecerá un mensaje especial
   script (Acción GitHub) del archivo `.github/workflows/deploy.yml`.
2. Todos los archivos del repositorio se copian al servidor, donde se inicializa y ejecuta el proyecto.
   se somete a ensamblaje antes del despliegue.
3. Si todos los pasos fueron exitosos, la versión de producción ensamblada de los archivos del proyecto
   va a la rama `gh-pages`. De lo contrario, en el registro de ejecución el script indicará cuál es el problema.

# Fresh Harvest Box: Documentación del Proyecto

![HTML Icon](https://img.icons8.com/color/48/000000/html-5--v1.png) ![CSS Icon](https://img.icons8.com/color/48/000000/css3.png) ![JavaScript Icon](https://img.icons8.com/color/48/000000/javascript--v1.png) ![SASS Icon](https://img.icons8.com/color/48/000000/sass-avatar.png) ![Normalize Icon](https://img.icons8.com/color/48/000000/checked.png) ![Prettier Icon](https://img.icons8.com/color/48/000000/developer.png)

---

## Índice de Contenido

1. [Introducción](#introducción)
2. [Estructura del sitio web](#estructura-del-sitio-web)
   - Fresh Harvest Box: How It Works
   - Fresh Harvest Box: Fruits
   - Fresh Harvest Box: Contacts
   - Icono Carrito de Pagos
3. [Visualización](#visualización)
4. [Tecnologías empleadas](#tecnologías-empleadas)
   - HTML
   - CSS
   - JavaScript
   - SASS
   - Modern Normalize
   - .prettierrc
5. [Codificación](#codificación)
6. [Despliegue](#despliegue)

---

## Introducción

**Fresh Harvest Box** es una landing page orientada a presentar un servicio de suscripción de frutas frescas directamente de granjas locales. Los clientes pueden aprender sobre el funcionamiento del servicio, ver las frutas disponibles, y ponerse en contacto o hacer una compra directa mediante un carrito de pago.

---

## Estructura del Sitio Web

### Fresh Harvest Box: How It Works
Una sección que explica el proceso de suscripción y entrega.

### Fresh Harvest Box: Fruits
Lista de frutas disponibles, con detalles sobre su origen y frescura.

### Fresh Harvest Box: Contacts
Información de contacto para servicio al cliente y atención.

### Icono Carrito de Pagos
Un ícono de carrito de compras que lleva al cliente a la página de pago para completar la compra de frutas seleccionadas.

---

## Visualización

La página está diseñada para verse uniformemente en dispositivos de diferentes tamaños y en todos los navegadores modernos, empleando **Modern Normalize** para asegurar la consistencia entre plataformas.

---

## Tecnologías empleadas

- **HTML** - Lenguaje de marcado para la estructura de la página.
  ![HTML Icon](https://img.icons8.com/color/48/000000/html-5--v1.png)

- **CSS** - Estilización de los elementos y diseño responsivo.
  ![CSS Icon](https://img.icons8.com/color/48/000000/css3.png)

- **JavaScript** - Funcionalidades interactivas, como el carrito de pagos.
  ![JavaScript Icon](https://img.icons8.com/color/48/000000/javascript--v1.png)

- **SASS** - Preprocesador CSS para optimizar el mantenimiento y escalabilidad del estilo.
  ![SASS Icon](https://img.icons8.com/color/48/000000/sass-avatar.png)

- **Modern Normalize** - Normalización de estilos para asegurar consistencia entre navegadores.
  ![Normalize Icon](https://img.icons8.com/color/48/000000/checked.png)

- **Prettier** - Herramienta de formateo para mantener el código limpio y legible.
  ![Prettier Icon](https://img.icons8.com/color/48/000000/developer.png)

---

## Codificación

La estructura del proyecto está organizada en carpetas y archivos específicos para una mejor organización y legibilidad:

# proyecto-fs-team2/ 
- index.html
- sass/
  - utils/
     - variables.css
  - components/
  - ... archivos de los componentes
- CSS/
  - main.min.css
  - ... archivos de los mapas
- images/
- ... archivos de las imágenes

### Criterios de Aceptación

#### Proyecto
- Refactorización de HTML y CSS utilizando la metodología **BEM**.
- Refactorización de los estilos usando **SASS**.
- Estructura de archivos organizada con `variables.scss` para definir colores, fuentes, y otros valores reutilizables.
- Uso de `main.scss` para importar y gestionar todos los archivos de componentes.

#### Marcado
- Clases nombradas en inglés, utilizando la metodología **BEM**.
- Organización de clases de bloques, elementos y modificadores BEM para asegurar consistencia y claridad.

#### Diseño
- Utilización de selectores anidados, con un máximo de dos niveles de anidación.
- Operador `&` aplicado para describir pseudo-clases y pseudo-elementos.

---

## Despliegue

El proyecto está optimizado para el despliegue en producción con un archivo CSS minificado `main.min.css`, que está enlazado en la estructura HTML de la landing page. La página está lista para implementarse y ofrecer un rendimiento optimizado para los usuarios finales.

---

¡Gracias por revisar la documentación de **Fresh Harvest Box**!.
