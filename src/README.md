# Informe académico entrega 2
Fecha de entrega: 29-nov-2021

## Construcción

### Implementación de funciones principales (sin la necesidad de persistencia de datos)
En principio, evaluamos como equipo qué funcionalidades están a nuestro alcance de desarrollo teniendo en cuenta el tiempo que tenemos hasta la entrega y el nivel de complejidad de las funciones que especificamos. Teniendo en cuenta estas dos restricciones que tenemos, y además que somos un integrante menos, llegamos a que las funcionalidades a implementar serán: 
<ol><b>1.</b> Login</ol>
<ol><b>2.</b> Crear NFT</ol>
<ol><b>3.</b> Borrar NFT</ol>
<ol><b>4.</b> Modificar NFT</ol>
<ol><b>5.</b> Comprar NFT</ol>


### Configuración de plataforma tecnológica para desarrollo y producción
Para la programación del sitio, utilizamos la plataforma Visual Studio Code. Por otro lado, utilizamos los estilos recomendados en Material Design y las recomendaciones de estilo de programación de Google Style Guide. Utilizamos a su vez, node.js como entorno de ejecución.
<br>
<br>
Para la instalación de Visual Studio Code y su uso con Github, no tuvimos que hacer ninguna descarga extra de la instalación común de dicha plataforma, si bien hay extensiones que pueden ayudar a tener más facilidad de manejo del repositorio. La instalación fue sencilla a través del siguiente link: https://code.visualstudio.com/ 
<br>
<br>
Luego hubo que hacer la instalación de NodeJS para poder construir nuestra plataforma. NodeJS es una entorno de ejecución de JavaScript fuera del navegador orientado a servidores. El beneficio del uso de NodeJS es que no es necesario un navegador para poder ejecutar el programa, simulando una aplicación independiente. Facilita la “creación de aplicaciones de red rápidas, ya que es capaz de manejar una gran cantidad de conexiones simultáneas con un alto nivel de rendimiento, lo  que equivale a una alta escalabilidad” 1 NodeJS tiene muchas ventajas a la hora de programar y probar el código de forma simultánea, si bien, una vez que llegan a hacerse relativamente muchos cambios en el código, en nuestro caso hubo que cortar la ejecución y volver a compilar. Ese fue el gran inconveniente que tuvimos con NodeJS, pero consideramos que fue una herramienta muy útil. Una de las principales ventajas que le encontramos a NodeJS es que hay mucha documentación e información disponible para consultar, lo que nos facilitó en algunos momentos. Para la instalación de node, ingresamos en el sitio oficial de node e instalamos la versión más nueva disponible para nuestros dispositivos (Link: https://nodejs.org/es/). Luego una vez ejecutado el .msi, damos continuar en la instalación. A continuación abrimos la línea de comandos para ver que la instalación quedó bien, a través del comando <b>Node --version</b>. Después debemos comprobar la versión de npm a través del comando <b>npm --version</b>. Esto anterior respecta a la instalación de node en la PC. Pero luego tenemos la instalación de node en nuestro directorio donde estemos trabajando en la plataforma. Cuando clonamos el repositorio y lo podemos ver en Visual Studio Code nuestro código, debemos abrir una nueva terminal y con el comando <b>cd</b> debemos ir a la dirección donde esté la interfaz y ejecutar el comando <b>npm init --yes</b>. Luego para inicializarlo debemos correr <b>npm run start</b>.
<br>
<br>
En cuanto a los estilos del sitio, como el estilo de programación, visitamos los sitios de Material Design (Link: https://material.io/) y Google Style Guide para JavaScript (Link: https://google.github.io/styleguide/jsguide.html).
<br>
<br>
Para Google Style Guide, algunas de las recomendaciones que aplicamos fueron el uso de variables y funciones mnemotécnicas para entender mejor el código, acompañado en algunos casos de comentarios. Por otro lado, intentamos separar las clases y funciones grandes en otros archivos para poder manejar mejor el código y claramente no escribir funciones de js en el archivo .html. A su vez, fuimos consistentes en escribir el código, es decir, que mantiene el mismo estilo a lo largo de todo el proyecto.
<br>
<br>
Respecto a Material Design, la plantilla ya tenía componentes de material como los tabs, pero también utilizamos las cards y los íconos. 
<br>
<br>
1- Lucas, J. (2020, 1 junio). Qué es NodeJS y para qué sirve. OpenWebinars.net. Recuperado 26 de junio de 2022, de https://openwebinars.net/blog/que-es-nodejs/ 
<br>
<br>

## Interfaz de usuario

### Interfaz de usuario web / mobile (responsive)
Si bien en la especificación desarrollamos una interfaz de usuario bastante compleja, con la plantilla que se nos presentó, se hizo complejo cumplir con el diseño de la especificación. Nuestra interfaz consiste en un banner con el título del mercado acompañado por un ícono que también se encuentra como favicon (ícono en la pestaña). Debajo tiene una barra de navegación con las distintas pestañas de la especificación, si bien no se llegaron a desarrollar todas. Cuando se abre por primera vez la página aparece un login y un botón para iniciar sesión. Luego aparece predeterminadamente la ventana de explorar con las distintas cartas de NFTs que están a la venta.

### Página única con navegación entre secciones
Para poder implementar el proyecto con un único archivo .html, agregamos una clase en scss que permitiera ocultar una sección dado un evento, en este caso, el click de cada componente de la barra de navegación.
<br>
<br>
En los div que corresponden a las distintas secciones de la barra de navegación se les agregó la clase ocultar (class="ocultar").

-- FOTO DIV

<br>
<br>
Luego, en el scss especificamos qué necesitan esos componentes de la clase ocultar:

.ocultar{<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; display:none;<br>
}

-- FOTO OCULTAR

<br>
<br>
Por último, para aplicar y quitar la clase ocultar, a cada componente que obtuvimos con document.getElementById(...); Le agregamos (.classList.add('ocultar');) o quitamos (classList.remove('ocultar');) el estilo de ocultar.

-- FOTO CLICK

<br>
<br>

### Implementación: Material Design Web Components
Uso de los Tabs: https://material.io/components/tabs#usage 
<br>
<br>
Utilizamos los Tabs para la barra de navegación. Estas permiten organizar el contenido relacionado en un mismo nivel. Separamos cada tab respecto a su contenido y nos enfocamos en no repetir el contenido de un tab en otro. Además de tener título, agregamos íconos a los tabs.
<br>
<br>
Principios de los Tabs:
<ul type="circle"> <li>Escalables: No hay una restricción de cantidad de tabs que se pueden agregar a una barra de navegación. </li>
<li>Informativos: Los tabs organizan el contenido en diferentes categorías para ayudar al usuario a encontrar fácilmente la información </li></ul type="circle">
El tipo de Tab que utilizamos en el proyecto es Fixed tabs. Este tipo de barra de navegación muestra todos los tabs en la misma pantalla, cada uno con igual espaciado.
<br>
<br>

### Anatomía del componente:


-- FOTO ANATOMIA DEL COMPONENTE

<ol><li>Contenedor</li>
<li>Ícono activo</li>
<li>Etiqueta de texto activa </li>
<li>Active tab indicator</li>
<li>Ícono inactivo</li>
<li>Etiqueta de texto inactiva</li>
<li>Tab ítem</li></ol>
<br>
<br>
En nuestro caso, el ícono se presenta del lado derecho del texto.
<br>
<br>
<b>Uso de Íconos:</b>
<br>
<br>
Las etiquetas de texto deben describir claramente el contenido que tendrán. A su vez, su contenido tiene que tener coherencia con su etiqueta. Idealmente, el texto debe ser breve y presentarse en una sola línea, pero en el caso de requerir una segunda línea, se debe truncar el texto. Es muy importante que si no entra el texto en la barra de navegación con el mismo espacio que los demás títulos, no se debe cambiar el tamaño del texto para que entre, en ese caso es preferible que se usen dos líneas. También es importante mantener consistencia en la barra de navegación, a esto nos referimos a no mezclar texto con íconos, mantener uno, otro o ambos en todos los tabs. Para la combinación de texto con íconos, los íconos deben transmitir, al igual que el texto, el contenido de una manera sencilla y reconocible. Es mejor utilizar los íconos para textos simples que para contenido complejo.
<br>
<br>
<b>Comportamiento del Tab:</b>
<br>
<br>
Para indicar el cambio de un tab a otro, se aplica un cambio en el color y se subraya para indicar el tab activo.

-- FOTO COMPORTAMIENTO DEL TAB
En cuanto a la agrupación de los tabs, es recomendado que queden en una sola línea de manera horizontal en la parte superior del sitio. No es recomendado anidar barras de navegación. Tampoco es recomendado disponer los componentes de la barra de navegación uno debajo de otro como una lista. El posicionamiento de los tabs puede ser junto con un top app bar.
<br>
<br>
Uso de Botones: https://material.io/components/buttons 
<br>
<br>
Principios de los botones:
<ul type="circle">
  <li>Identificables: Debe estar claro que el botón indica una acción.  </li>
  <li>Localizable: Los botones se deben diferenciar claramente de otros elementos y de otros botones. </li>
  <li>Claros: La acción y estado del botón debe ser claro </li>
</ul type="circle">
<br>
<br>
Tipos de botones:
<table>
  <tr>
    <td>Botón con texto: Utilizados para acciones con poco realce (baja importancia)</td>
    <td>FOTO BUTTON1 </td>
  </tr>
  <tr>
    <td>Botón con texto y contorno: Utilizados para acciones que tienen más importancia que el anterior (media importancia)</td>
    <td>FOTO BUTTON2 </td>
  </tr>
  <tr>
    <td>Botón con texto, contorno y fondo: Son los botones que se utilizan para acciones de más realce.</td>
    <td>FOTO BUTTON3 </td>
  </tr>
</table>
<br>
<br>
Anatomía de botones
<br>
<br>

--FOTO ANATOMIABOTONES1

<ol>
  <li> <b>Text button</b>
    <ol>A. &nbsp; Text label </ol>
    <ol>C. &nbsp; Icon (opcional)</ol>
  </li>
</ol>

  
<br>
<br>
  
--FOTO ANATOMIABOTONES2
<br>
<br>

&nbsp; <b> 2. &nbsp; Outlined button </b> </u>
    <ol>A. &nbsp; Text label</ol>
    <ol>B. &nbsp; Container</ol>
    <ol>C. &nbsp; Icon (opcional)</ol>
  
<br>
<br>
  
--FOTO ANATOMIABOTONES3
<br>
<br>

&nbsp; <b> 3. &nbsp; Contained button </b> </u></u>
    <ol>A. &nbsp; Text label</ol>
    <ol>B. &nbsp; Container</ol>
    <ol>C. &nbsp; Icon (opcional)</ol>
<br>
<br>

En cuanto al texto que tiene que contener el botón, el mismo debe describir la acción que se ejecutará una vez presionado el botón. Se puede usar también un ícono. Material design dispone el texto de los botones en mayúsculas para distinguirlo del texto que lo rodea. Es recomendado que el botón tenga una sola línea de texto, lo que obliga a que el texto sea breve y sencillo de entender.
<br>
<br>
Si en algún momento, es necesario disponer de dos o más botones para distintas acciones, lo ideal es aplicar los distintos tipos de botones para las acciones de distinto nivel.
<br>
<br>
Recomendado:

--FOTO HIDESHOW

<br>
<br>
No recomendado:

--FOTO CHASESAVE

<br>
<br>
Tampoco es recomendado disponer un botón debajo de otro, es mejor que estén secuenciados de forma horizontal.
<br>
<br>
Los botones, al igual que otros componentes, deben adaptarse al tamaño de la pantalla. Generalmente, los botones se disponen dentro de contenedores como las cards o los cuadros de diálogo. Los botones deben adaptar su tamaño con respecto a su contenedor.
<br>
<br>
Cards o Tarjetas: https://material.io/components/cards 
<br>
<br>
En este proyecto, utilizamos las tarjetas para disponer la información de los NFT
<br>
<br>
Principios:
<ul type="circle">
  <li>Contenido: Se deben identificar como una unidad.</li>
  <li>Independiente: No requiere de otros elementos o componentes para entender qué es.</li>
  <li>Individuales: Cada tarjeta es independiente de otra, no pueden unirse ni dividirse en otras cartas.</li>
</ul type="circle">
<br>
<br>
Anatomía:

-- FOTO ANATOMIA

<ol>
  <li>Container: Card containers hold all card elements, and their size is determined by the space those elements occupy. Card elevation is expressed by the container.</li>
  <li>Thumbnail: Cards can include thumbnails to display an avatar, logo, or icon.</li>
  <li>Header text: Header text can include things like the name of a photo album or article.</li>
  <li>Subhead: Subhead text can include text elements such as an article byline or a tagged location.</li>
  <li>Media: Cards can include a variety of media, including photos, and graphics, such as weather icons. </li>
  <li>Supporting text: Supporting text includes text like an article summary or a restaurant description.</li>
  <li>Buttons: Cards can include buttons for actions.</li>
  <li>Icons: Cards can include icons for actions.</li>
</ol>

### Aplicar un sistema de diseño y principios de usabilidad

Respecto a la usabilidad, nos enfocamos en que el usuario especificado pueda alcanzar con facilidad las funcionalidades de la aplicación.
<br>
<br>
Principios de usabilidad de Jakob Nielsen: 
<br>
<br>
https://profile.es/blog/los-10-principios-de-usabilidad-web-de-jakob-nielsen/ 
<br>
<br>
https://es.semrush.com/blog/usabilidad-web-principios-jakob-nielsen/ 
<br>
<br>
<ol>
  <li>Visibilidad del estado del sistema: “El sistema debe siempre mantener informado al usuario de lo que está ocurriendo” Además ofrecerle al usuario una respuesta en el menor tiempo posible. Algunos ejemplos para cumplir este principio pueden ser barras de carga y descarga.</li>
  <li>Relación entre el sistema y el mundo real: “El sitio web tiene que utilizar el lenguaje del usuario, con expresiones y palabras que le resulten familiares. Además la información debe aparecer en un orden lógico y natural.” Con esto, conseguimos que la interacción con el usuario sea natural y no sea conflictivo navegar por nuestro sitio.</li>
  <li>Control y libertad del usuario: “En caso de elegir alguna opción del sitio web por error, el usuario agradecerá disponer de una “salida de emergencia” para abandonar el estado no deseado en que se halla. Debe poder deshacer o repetir una acción previamente realizada.”</li>
  <li>Consistencia y estándares: “Es importante establecer convenciones lógicas y mantenerlas siempre. El usuario no tiene por qué saber que diferentes palabras, situaciones o acciones significan lo mismo.”</li>
  <li>Prevención de errores: “Tenemos, en todo lo posible, que prevenir cualquier error que pueda cometer el usuario. Y dado el caso de que este cometa uno, tenemos que poner a su alcance todas las opciones posibles para poder corregirlo.”</li>
  <li>Reconocimiento antes que recuerdo: “Debemos hacer visibles acciones y opciones para que el usuario no tenga que recordar información entre distintas secciones o partes del sitio web o aplicación.”</li>
  <li>Flexibilidad y eficiencia de uso: “Los aceleradores o atajos de teclado, por ejemplo, pueden hacer más rápida la interacción para usuarios expertos, de tal forma que el sitio web o aplicación sea útil tanto para usuarios básicos como avanzados.” </li>
  <li>Estética y diseño minimalista: “Las páginas no deben contener información innecesaria. Cada información extra compite con la información relevante y disminuye su visibilidad.”</li>
   <li>Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores: “Los mensajes de error se deben entregar en un lenguaje claro y simple, indicando en forma precisa el problema y sugerir una solución constructiva al problema.”</li>
   <li>Ayuda y documentación: “Aunque es mejor que el sitio web o aplicación pueda ser usado sin ayuda, puede ser necesario proveer cierto tipo de ayuda. En este caso, la ayuda debe ser fácil de localizar, especificar los pasos necesarios y no ser muy extensa.”</li>
</ol>
<br>
<br>

### Cumplimiento de estándar de accesibilidad WCAG
<br>
https://www.w3.org/WAI/standards-guidelines/wcag/glance/es 
<br>
<br>
<ul type="circle">
  <li>Perceptible: 
    <ul type="circle">
      <li> &nbsp; Proporcione alternativas textuales para contenido no textual</li>
      <li> &nbsp; Proporcione subtítulos y otras alternativas para multimedia</li>
      <li> &nbsp; Cree contenido que se pueda presentar de diferentes formas, incluyendo a las tecnologías de apoyo, sin perder información</li>
      <li> &nbsp; Facilite que los usuarios puedan ver y oír el contenido</li>
    </ul type="circle">
  </li>
  
  <li>Comprensible:
   <ul type="circle">
      <li> &nbsp; Proporcione texto legible y comprensible.</li>
      <li> &nbsp; Proporcione contenido que sea predecible en apariencia y operación</li>
      <li> &nbsp; Ayude a los usuarios a evitar y corregir errores</li>
    </ul type="circle">
  </li>
 <li>Operable:
   <ul type="circle">
      <li> &nbsp; Proporcione acceso a todas las funcionalidades mediante el teclado</li>
      <li> &nbsp; Conceda a los usuarios tiempo suficiente para leer y usar el contenido</li>
      <li> &nbsp; No use contenido que pudiera causar convulsiones o reacciones físicas</li>
      <li> &nbsp; Ayude a los usuarios a navegar y encontrar el contenido</li>
      <li> &nbsp; Facilite métodos de entrada diferentes al teclado.</li>
    </ul type="circle">
  </li>
  <li>Robusto:
   <ul type="circle">
      <li> &nbsp; Maximice la compatibilidad con herramientas de usuario actuales y futuras.</li>
    </ul type="circle">
  </li>
</ul type="circle">
<br>
<br>

### Seguir especificación de estilo

https://google.github.io/styleguide/jsguide.html 
<br>
<br>
Este documento sirve como la definición completa de los estándares de codificación de Google para el código fuente en el lenguaje de programación JavaScript. Se describe que un archivo fuente de JavaScript está en Google Style si y solo sí cumple con las reglas establecidas.<br>
Al igual que otras guías de estilo de programación, los temas tratados abarcan no sólo cuestiones estéticas de formato, sino también otro tipo de estándares de codificación. Sin embargo, este documento se enfoca principalmente en las reglas estrictas que seguimos universalmente y evita dar consejos que no se pueden cumplir claramente (ya sea por humanos o herramientas)<br>
<br>
Nombre del Archivo<br>
Los nombres de los archivos deben estar en minúsculas y pueden incluir guiones bajos _ o guiones -, pero sin puntuación adicional. La extensión de los nombres del archivo deben ser .js.<br>
<br>
Tab vs. Espacio<br>
Usar espacios, no tabs- Aparte del fin de línea (/n), el carácter ASCII de espacio es el único espacio de carácter en blanco que aparece en el código. Esto implica que los caracteres de TAB no se usan para indentar.<br>
<br>
Block de indentación +2 espacios<br>
Cada vez que se abre un nuevo bloque o construcción similar a un bloque. aumenta dos espacios. Cuando finaliza el bloque, vuelve al nivel anterior.
El ; es obligatorio. El alineamiento horizontal está desaconsejado (pero no prohibido).
<br>
<br>
No uses var<br> 
Declara todas las variables locales con const o let. Usa const por defecto, a menos que la variable vaya a ser reasignada. La palabra clave var no debe usarse.
<br>
<br>
Una variable por declaración<br>
Cada declaración de variable local declara una sola variable: Declaraciones como
let a=1, b=2, c=3 no se usan<br>
 &nbsp; //mal<br>
 &nbsp;  &nbsp;  &nbsp; let a=1, b=2, c=3<br>
 &nbsp; //bien<br>
 &nbsp;  &nbsp;  &nbsp; let a=1;<br>
 &nbsp;  &nbsp;  &nbsp; let b=2;<br>
 &nbsp;  &nbsp;  &nbsp; let c=3;
<br>
<br>
Usar camelCase para nombrar variables<br>
 &nbsp; //mal<br>
 &nbsp;  &nbsp;  &nbsp; let edadpersona = 20;<br>
 &nbsp; //bien<br>
 &nbsp;  &nbsp;  &nbsp; let edadPersona = 20;<br>
 
Las clases van con UpperCamelCase<br>
Los nombres de constantes serán en mayúsculas y separadas por un guión bajo.<br>
Los nombres de constantes usarán CONSTANT_CASE<br>
No usar continuaciones para strings largos<br>
No uses continuaciones de línea (es decir, terminar una línea dentro de un literal string con una contrabarra) ni en plantillas de literales string ni normales. Puede llevarnos a errores si un blanco de final de línea viene después de la barra, y es difícil de detectar)<br>



## Codificación

IDE Visual Studio Code: configuración común del equipo

Estándares de codificación Google (HTML, CSS, JavaScript)

Buenas prácticas de OOP: separación de lógica e interfaz

Análisis estático de código: mostrar reducción de problemas

## Test unitario

Test unitarios en Jest

100% cobertura en clases de dominio


| En la semana previa a la entrega se debe congelar el desarrollo (22-nov-2021).
A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y generación del informe académico.

## Test de sistema

Realizar test de sistema en un entorno separado del desarrollo

Generar casos de prueba aplicando técnica partición equivalente

Detallar sesiones de prueba exploratoria

## Reporte de issues

Reportar issues (bugs, improvements, missing features) en GitHub 

Aplicar buenas prácticas de reporte de issues

Definir labels para tipos de issue y niveles de severidad

Dejar issues abiertos para correcciones o mejoras futuras

Sumarizar número de issues reportados por tipo

Realizar una evaluación global de la calidad

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes
