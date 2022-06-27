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
Anatomía del componente:



Aplicar un sistema de diseño y principios de usabilidad

Cumplimiento de estándar de accesibilidad WCAG

Seguir especificación de estilo

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
