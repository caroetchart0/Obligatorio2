# Informe académico entrega 1

## Repositorio Git
GIT es un DVCS (sistema de control de versiones distribuido) el cual permite a cada usuario el acceso total a cada archivo, rama e iteración de un proyecto, teniendo acceso al completo historial de cambio. Su propósito es llevar registro de los cambios en archivos de computadora incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código.
Creación y uso de repositorios locales y remotos

### Creación y uso de repositorios locales y remotos
La creación del repositorio y el manejo general del mismo se asignó al integrante Martín Edelman ya que en conjunto consideramos que él maneja mejor la herramienta. Para evitar perder mucho tiempo en el manejo de la herramienta de git, decidimos optar por una plataforma conocida por los tres integrantes que es google docs para el desarrollo del proyecto y dejar a Martín actualizar la información que se desarrolla allí a GitHub.

### Comandos Git ejecutados desde terminal y desde el IDE
Para el correcto entendimiento de las funcionalidades de los comandos mencionados a continuación, resulta de gran utilidad conocer los 3 distintos estados en los cuales se puede encontrar un archivo:
  1. Modified: Se han realizado cambios en el archivo pero no se ha hecho un commit.
  2. Staged: Se lo marcó para que vaya en el siguiente snapshot. Hago stage de los cambios que quiero que se incluyan en el próximo commit
  3. Committed: La información fue guardada localmente de forma segura. Hago commit, agarra el staging area y guarda snapshot permanentemente en mi directorio de git

Utilizamos los siguientes comandos principalmente desde la terminal:
- git clone
  - Es una forma para comenzar a utilizar Git, clonando un repositorio ya existente. 
  - Para ello ejecutamos:
  - git clone [url_del_repositorio]
  - La URL del repositorio varía según el protocolo utilizado para clonar el mismo, por ejemplo: git clone utilizando HTTPS
  - git clone https://github.com/kidnixt/FIS.git
- git commit
  - Para guardar un nuevo snapshot con los archivos en estado staged.
- git add .
  - Es un shortcut que nos permite mover todos los archivos en los estados untracked y modified a staged sin tener que hacerlo uno por uno.
- git checkout <nombre de la rama>
  - Para movernos de branch/rama.
- git checkout -b <nombre rama nueva>
  - Shortcut que nos permite crear una nueva rama y automáticamente cambiarnos a esa rama.
- git push
  - Actualiza las referencias remotas usando las locales. Envío los cambios al repositorio remoto.
- git pull
  - Incorpora los cambios desde el repositorio remoto a la rama actual.

Como vimos anteriormente, nuestro proyecto en git va a estar organizado en ramificaciones. Una branch o rama en Git no es más que un puntero a un commit. Por defecto la branch inicial siempre se denomina master o main, aunque no difiere en su comportamiento con ninguna otra branch. Se pueden ramas crear por múltiples motivos:
  - Organización interna del equipo.
  - Aislar un grupo.
  - Variante del producto para un cliente

## Versionado

Buenas prácticas de versionado
Siempre que colabores con un equipo remoto, necesitarás hacer un seguimiento a las revisiones a lo largo del ciclo de vida del proyecto con un sistema de control de versiones de hardware.

Desde hace años las comunidades open source han adoptado una serie de prácticas muy sencillas, pero potentes, que ayudan a gestionar mejor su código.
Algunas de estas son:
  - ReadMe First:
Una solución muy sencilla, propuesta por el fundador de GitHub, para asegurar que todas los integrantes del grupo que estarán trabajando sobre el repositorio tienen el mismo entendimiento sobre qué hay que hacer y cómo se va a hace. Antes de empezar nuestro trabajo debemos escribir un documento, llamado README (léeme). En este documento especificamos lo que se construirá. Es una descripción del proyecto y de su implementación en código. Es usual que acá se describan las interfaces públicas y la forma de ocuparlas. Junto con otras consideraciones, como el modo de instalar el software, pasos para ejecutarlo, etc.
  - Mantener una bitácora de cambios:
La bitácora de cambios, o changelog, es un archivo que describe todos los cambios importantes en un proyecto. Hay un proyecto que describe una forma estándar de mantener una bitácora de cambios, se trata de Keep a Changelog. La idea es muy sencilla, debes mantener un archivo llamado CHANGELOG.md, que se trata de un simple archivo en markdown que contiene todos los cambios valiosos, pero descritos de manera correlativa.
  - Versionado Semántico:
El versionado semántico es una convención para enumerar las versiones de nuestro software. Su definición se mantiene en el sitio SemVer.org. Y en principio es muy sencilla.En SemVer usamos tres números para designar una nueva versión, estos números se separan con un punto, así que el formato es algo así:1.0.1
Al primer número le llamamos MAJOR, al segundo MINOR, y al tercero PATCH. Así que el formato es: MAJOR.MINOR.PATCH
    - MAJOR: se incrementa cuando se agrega un cambio que es incompatible con versiones anteriores.
    - MINOR: se incrementa cuando se agrega funcionalidad, pero sigue siendo compatible con versiones anteriores.
    - PATCH: se incrementa cuando se corrigen errores en la versión vigente.
En el ejemplo anterior 1.0.1 podemos entender que corresponde a la versión 1.0 del producto; sin embargo, lleva una o varias correcciones a errores (bugs).
  - Commits Convencionales:
Conventional Commits es una forma de escribir los mensajes cada vez que hacemos un commit en GIT de una forma estructurada.La forma de un commit convencional es la siguiente:
<tipo>[ámbito opcional]: <descripción>
[cuerpo opcional]
[nota de pie opcional]
El tipo puede ser uno de estos:
    - fix: en que documentamos una corrección
    - feat: en que introducimos nuevas características al software
    - BREAKING CHANGE: es un cambio que rompe la compatibilidad hacia atrás (y, por lo tanto, debería afectar el valor MAJOR).
Hay otros posibles tipos: chore, docs, style, refactor, perf, test y otros, que se describen en el sitio oficial de Conventional Commits.
Un ejemplo de un commit convencional:
fix(core): corrige algunos errores de tipeo en el nombre de las clases
Ver el issue #45 para más detalles
Closes #45

  Los mejores sistemas de control de versiones para desarrollo de hardware ofrecen algunas funciones y datos importantes:
  - Lista cronológica de revisiones de un proyecto. Cualquier documento de diseño agregado o eliminado, cambios en los datos de diseño de PCB, fechas prometidas o cualquier comentario o revisión de diseños puede verse en orden cronológico.
  - Quién ha hecho los cambios. El usuario responsable de hacer y enviar los cambios listados en el historial de revisiones debe listarse junto con cada revisión. 
  - Versiones de proyectos de PCB creados. En cualquier momento en que se crea una versión sin archivos de salida, esta versión debe poder verse y estar accesible en el historial de revisiones. 
  - Capacidad de descargar o clonar cada revisión. La capacidad de clonar una revisión previa de un proyecto como una versión nueva es clave para el control de versiones.
  Los sistemas de control de versiones pueden hacer seguimiento a todos estos datos y revisiones en un servidor local, o en la nube con un servidor gestionado. Esto le brinda acceso a versiones anteriores de un proyecto, ya sea para clonar o regresar a un proyecto en un estado previo, o simplemente para descargar los datos de un proyecto anterior para otros propósitos.

Uso de ramas separadas de 'main'
  En sí, no manejamos el documento de investigación en git, utilizamos la plataforma de google docs con la plantilla dada y a partir de allí fuimos desarrollando cada punto y en una fecha designada, se plasmaba la nueva información en el repositorio. Asignamos a Martín y Carolina para esta tarea. En el repositorio de git, en un inicio quisimos separar las ramas de acuerdo a los puntos que necesitábamos abordar, pero al ver que la mayoría de la información ya estaba desarrollada, decidimos únicamente utilizar una rama separada al main para ir agregando la información una vez que todos estuviéramos de acuerdo con lo que estaba en el documento de google docs.

### Resumen de commits y evolución del proyecto

  Resumen de Commits
  Aclaración: Aquí detallamos los commits que agregan información y no simplemente fueron pruebas.
  <table>
  <tr>
    <td>Fecha</td>
    <td>Autor</td>
    <td>Mensaje</td>
  </tr>
  <tr>
    <td>18/04</td>
    <td>Martín Edelman</td>
    <td>Creación del Repositorio</td>
  </tr>
    <td>18/04</td>
    <td>Martín Edelman</td>
    <td>Prueba</td>
  </tr>
  <tr>
    <td>18/04</td>
    <td>Martín Edelman</td>
    <td>Inicio de archivo</td>
  </tr>
  <tr>
    <td>18/04</td>
    <td>Martín Edelman</td>
    <td>Agregación de comandos</td>
  </tr>
  <tr>
    <td>19/04</td>
    <td>Martín Edelman</td>
    <td>README bien indentado</td>
  </tr>
  <tr>
    <td>25/04</td>
    <td>Renata Flangini</td>
    <td>Actividades de investigación</td>
  </tr>
  <tr>
    <td>25/04</td>
    <td>Renata Flangini</td>
    <td>Cambio formato readme (x6 veces)</td>
  </tr>
  <tr>
    <td>30/04</td>
    <td>Carolina Etchart</td>
    <td>Update README</td>
  </tr>
  <tr>
    <td>30/04</td>
    <td>Carolina Etchart</td>
    <td>Update README (Actualicé hasta la entrevista inclusive)</td>
  </tr>
  <tr>
    <td>30/04</td>
    <td>Carolina Etchart</td>
    <td>Update README (Actualicé hasta bibliografía inclusive)</td>
  </tr>
  <tr>
    <td>30/04</td>
    <td>Carolina Etchart</td>
    <td>Update README (Actualicé hasta la User Stories inclusive)</td>
  </tr>
  <tr>
    <td>30/04</td>
    <td>Carolina Etchart</td>
    <td>Update README (Actualicé hasta la Bocetos IU inclusive)</td>
  </tr>
  <tr>
    <td>01/05</td>
    <td>Martín Edelman</td>
    <td>Merge branch 'Develop' of https://github.com/ORTFIS2022/Edelman-Etchart-Flangini into Develop</td>
  </tr>
  <tr>
    <td>02/05
    <td>Martín Edelman
    <td>Agregación de reflexión e imagenes
  </tr>
</table>
  
  Evolución del Proyecto
  <table>
  <tr>
    <td>Fecha</td>
    <td>Autor</td>
    <td>Mensaje</td>
  </tr>
  <tr>
    <td>18/4</td>
    <td>Renata Flangini</td>
    <td>Creación del Google Docs</td>
  </tr>
  <tr>
    <td>23/4</td>
    <td>Renata Flangini</td>
    <td>Elicitación (Investigación)</td>
  </tr>
  <tr>
    <td>24/4</td>
    <td>Renata Flangini</td>
    <td>Terminada la Investigación</td>
  </tr>
  <tr>
    <td>25/4</td>
    <td>Martín Edelman</td>
    <td>Realiza entrevista</td>
  </tr>
  <tr>
    <td>25/4</td>
    <td>Renata Flangini</td>
    <td>Modelo Conceptual del Problema</td>
  </tr>
  <tr>
    <td>25/4</td>
    <td>Carolina Etchart</td>
    <td>Comandos Git ejecutados desde terminal y desde IDE</td>
  </tr>
  <tr>
    <td>25/4</td>
    <td>Carolina Etchart</td>
    <td>Buenas prácticas de versionado</td>
  </tr>
  <tr>
    <td>26/4</td>
    <td>Renata Flangini</td>
    <td>Definición de requerimientos funcionales</td>
  </tr>
  <tr>
    <td>27/4</td>
    <td>Carolina Etchart</td>
    <td>Transcripción de Entrevista</td>
  </tr>
  <tr>
    <td>27/4</td>
    <td>Martín Edelman</td>
    <td>Caracterización de Usuarios: User Personas</td>
  </tr>
  <tr>
    <td>27/4</td>
    <td>Carolina Etchart</td>
    <td>Definición de Requerimientos no funcionales</td>
  </tr>
  <tr>
    <td>28/4</td>
    <td>Renata y Carolina</td>
    <td>Termino Especificación de requerimientos funcionales</td>
  </tr>
  <tr>
    <td>28/4</td>
    <td>Renata Flangini</td>
    <td>User Stories/ Use Cases detallados</td>
  </tr>
  <tr>
    <td>29/4</td>
    <td>Renata y Carolina</td>
    <td>Termino Use cases</td>
  </tr>
  <tr>
    <td>29/4</td>
    <td>Renata y Carolina</td>
    <td>Comienzo y fin de Bocetos de IU</td>
  </tr>
  <tr>
    <td>30/4</td>
    <td>Renata Flangini</td>
    <td>Uso de ramas separadas de “main”</td>
  </tr>
  <tr>
    <td>1/5</td>
    <td>Renata Flangini</td>
    <td>Resumen de commits y evolución del proyecto</td>
  </tr>
  <tr>
    <td>1/5</td>
    <td>Renata Flangini</td>
    <td>Validación y Verificación</td>
  </tr>
  <tr>
    <td>1/5</td>
    <td>Renata, Carolina y Martín</td>
    <td>Reflexión</td>
  </tr>
  <tr>
    <td>2/5</td>
    <td>Carolina Etchart</td>
    <td>Imagen de Bocetos IU - Página principal</td>
  </tr> 
  <tr>
    <td>2/5</td>
    <td>Carolina Etchart</td>
    <td>Imagen de Bocetos IU - Inicio de Sesión</td>
  </tr> 
  <tr>
    <td>2/5</td>
    <td>Carolina Etchart</td>
    <td>Imagen de Bocetos IU - Registro de Usuario</td>
  </tr> 
  <tr>
    <td>2/5</td>
    <td>Carolina Etchart</td>
    <td>Imagen de Bocetos IU - Explorar NFT s</td>
  </tr>
  <tr>
    <td>2/5</td>
    <td>Carolina Etchart</td>
    <td>Imagen de Bocetos IU - Crear NFT</td>
  </tr>
  <tr>
    <td>2/5</td>
    <td>Carolina Etchart</td>
    <td>Imagen de Bocetos IU - Perfil de Usuario</td>
  </tr>    
  <tr>
    <td>2/5</td>
    <td>Carolina Etchart</td>
    <td>Imagen de Bocetos IU - Contacto</td>
  </tr> 
  <tr>
    <td>2/5</td>
    <td>Carolina Etchart</td>
    <td>Imagen de Bocetos IU - Ayuda</td>
  </tr> 
  <tr>
    <td> 23/5 </td>
    <td> Carolina Etchart </td>
    <td> Creación de nuevo repositorio y ramas separadas de main para segunda entrega </td>
  </tr>
  <tr>
    <td> 23/5 </td>
    <td> Renata Flangini </td>
    <td> Pasaje de repositorio viejo a nuevo </td>
  </tr>
  </table>
  
  ## Elicitación

Evidencia de actividades de investigación:
  
  Definiciones Iniciales
  
  - Activo digital- “Son recursos de carácter intangible, ya que se basan en una construcción mediante datos informáticos.”6
  - Criptomoneda- “Tipo de activo digital utilizada como medio digital de intercambio. También se las llaman criptodivisas o criptoactivos. Es algo totalmente digital, a través de métodos criptográficos se aseguran transacciones financieras, controlan la creación de nuevas y verifican transferencia de activos. También se pueden considerar como una alternativa descentralizada ya que no son controladas por un único servicio o empresa”5.
  - NFT- “Tokens no fungibles”
  - Marketplace- Mercado donde se comercializan los activos digitales.
  - Blockchain- “Una base de datos distribuida y segura (gracias al cifrado) que se puede aplicar a todo tipo de transacciones que no tienen por qué ser necesariamente económicas”7
  - Smart Contract- “Es un tipo especial de instrucciones que es almacenada en la blockchain. Y que además tiene la capacidad de ejecutar acciones de acuerdo a una serie de parámetros ya programados. Todo esto de forma inmutable, transparente y completamente segura”8
  - Exchange- “Es un espacio generalmente virtual, esto es, una plataforma de intercambio que permita a los usuarios comprar o vender sus criptoactivos.” “Muchos exchange permiten operar también con acciones o cualquier otro título financiero que sea aceptado por la comunidad que lo conforma”9
  - Token- “Son objetos similares a las monedas pero estos carecen de valor de curso legal. Esto se debe a que los tokens son emitidos por una entidad privada para un determinado uso y en su elaboración normalmente se hace uso de materiales de escaso valor”10
  
  Análisis de Documentos
  - ¿Qué es un NFT?
  
“Los “tokens no fungibles” (NFT) son certificados de propiedad almacenados en una cadena de bloques y respaldados por la tecnología blockchain (por ejemplo, Ethereum) que suelen estar asociados a un activo digital, como las artes visuales, los videos, la música o los objetos de colección.” 1
A diferencia de las criptomonedas, dichas son fácilmente intercambiables, en cambio, los NFT son únicos y no pueden eliminarse ni falsificarse. “Es decir, cada NFT es único y el comprobante de posesión no se encuentra en ningún registro centralizado, sino dentro de una blockchain.”4
Se hace mención a que los NFT revolucionaron el mundo del arte, ya que representan obras digitales de distintos autores/usuarios. 

  - ¿En qué se diferencia de una criptomoneda?
  
“Lo que hace que las NFT sean diferentes de una criptomoneda es el carácter distintivo de cada token.
Con una criptomoneda como Bitcoin, cada unidad individual es indistinguible de otra y tiene un valor idéntico. Cada Bitcoin individual se puede intercambiar o dividir como cualquier otro Bitcoin (es decir, los Bitcoins son intercambiables).”2

  - ¿Qué requisitos se necesitan para comprar un NFT?
  
Un usuario que quiera comprar un NFT debe poseer una billetera para NFT y tener acceso a los distintos marketplace. Los NFT se disponen en distintos marketplace de criptoarte como puede ser la red Ethereum (la obtención del NFT se da a través de la cripto Ether). Es decir, si se obtiene un NFT a través de otro marketplace, debe adquirirse en la criptomoneda nativa a ese marketplace. (Para Binance Smart Chain se utiliza BNB, para Solana se utiliza SOL, entre otros). 

  - ¿Cómo se da concretamente el pago de un NFT?
  
“Durante el proceso de compra, se ejecutará un contrato inteligente o smart contract. Gracias a este pequeño script informático, el vendedor recibirá su pago y allí se obtiene el NFT.”3

  - ¿Qué ventajas presentan los mercados NFT?
  
“Los NFT son programables por medio de contratos inteligentes, como consecuencia: Su poseedor puede acceder a un porcentaje de las ganancias por futuras ventas de manera automática y establecer contacto directo con una comunidad determinada”4

  - Perspectivas de los mercados NFT
  
“Activate consulting”, empresa de consultoría de gestión para las industrias de tecnología y entretenimiento destacó que los mercados NFT podrían convertirse en la corriente principal para 2022. Dicha empresa recomienda la implementación de compra/venta de NFT. En un futuro aseguran que se ampliará el uso de los NFT a distintas industrias. “A medida que más tiempo de los consumidores migran hacia las experiencias digitales y crece el interés en el metaverso, creemos que todas las empresas de tecnología y medios necesitarán una estrategia NFT.”4 Afirma Activate Consulting. El mercado de los NFT creció un 5000% durante el primer trimestre del 2021 con respecto al mismo período en el año anterior.
  
  Análisis de Interfases de Usuario
  
OpenSea-
  
 “OpenSea es el primer y más grande mercado de bienes digitales propiedad de los usuarios, que incluyen objetos de colección, artículos de juegos, nombres de dominio, arte digital y otros activos respaldados por una Blockchain.”2

  - Interfaz: 

En la barra de navegación encontramos las opciones: Explorar, estadísticas y recursos.
   - Explorar: tiene las diferentes categorías de NFT como Arte, coleccionables, nombres de dominio, música, fotografía, deportes, cartas intercambiables, utilidades y mundos virtuales.
  
<img width="1232" alt="OpenSeaExplorar" src="https://user-images.githubusercontent.com/102233707/169897128-045480d2-fa44-40ce-ab77-3b3064cc3cd5.png">

   - Estadísticas: Tiene opciones de ranking y actividad
  
<img width="999" alt="OpenSeaEstadisticas" src="https://user-images.githubusercontent.com/102233707/169897514-86c0a727-aa45-4ef7-ab17-2112bdeabc34.png">
  
   - Recursos: Tiene opciones de ayuda, estado de la plataforma, asociados, blog, documentos y noticias.
  
<img width="1019" alt="Captura de Pantalla 2022-05-23 a la(s) 17 07 18" src="https://user-images.githubusercontent.com/102233707/169897724-3d4fe9db-9371-401e-b916-06e8d1c6b805.png">
  
  Al inicio del sitio encontramos dos opciones para comenzar a interactuar con este marketplace. Dichas opciones son “explore” o explorar y “create” crear en inglés.
Luego en ese mismo inicio presenta algunos NFT destacados, al igual que los “Top collections” y también los que están “trending” en las diferentes categorías.
  
<img width="955" alt="OpenSeaInicio" src="https://user-images.githubusercontent.com/102233707/169897912-ca0f04eb-2eec-4884-b9de-f50ddb9fd169.png">


  Ventajas y Desventajas del uso de OpenSea:11
  <table>
        <tr>
            <td>Ventajas</td>
            <td>Desventajas</td>
        </tr>
        <tr>
            <td>Apto para principiantes</td>
            <td>Sólo Admite Ethereum, Polygon y Klatyn</td>
        </tr>
        <tr>
            <td>Buenos Honorarios, Bajas comisiones</td>
            <td>No admite Pagos con dinero fiduciario</td>
        </tr>
        <tr>
            <td>El Mercado de NFTs mejor establecido</td>
            <td></td>
        </tr>
        <tr>
            <td>Amplia Variedad de NFTs</td>
            <td></td>
        </tr>
</table>
  
  Rarible-
  
“Es una plataforma NFT para proteger objetos de colección digitales protegidos con tecnología blockchain”. “Los usuarios de Rarible también pueden crear y acuñar sus propias NFT dentro de la plataforma, ofreciendo la accesibilidad necesaria para quienes no tienen una gran experiencia en el mundo de la codificación”2
  
  - Interfaz
En la barra de navegación hay un buscador, un menú con las opciones Explore (explorar), My Profile (mi perfil), Following (seguidos)  y Activity (actividad). También están las opciones de crear e iniciar sesión.
  
  ****** IMAGEN ******
  
    - Explorar:
  
  ****** IMAGEN ******
  
    - Mi perfil y seguidos: Previo a la visualización del perfil, se debe crear una cuenta
 
  ****** IMAGEN ******
  
    - Actividad:
  
  ****** IMAGEN ******
  
  Guía para el uso de rarible: https://ciberninjas.com/guia-nft-rarible/ 

  Ventajas y Desventajas de Rarible 12
<table>
    <tr>
        <td>Ventajas</td>
        <td>Desventajas</td>
    </tr>
    <tr>
        <td>Este marketplace es fácil de usar y no requiere conocimientos de codificación.</td>
        <td>RARI no es compatible con las API o el almacenamiento de IPFS, ni tiene una hoja de ruta oficial o un whitepaper.</td>
    </tr>
    <tr>
        <td>La plataforma recompensa con tokens RARI a vendedores y compradores de NFT en la red.</td>
        <td>Este servicio cobra una tarifa de 2,5% tanto al vendedor como al comprador</td>
    </tr>
    <tr>
        <td>Los holders de tokens RARI pueden votar sobre propuestas que afecten a la plataforma.</td>
        <td></td>
    </tr>
    <tr>
        <td>Los usuarios pueden pagar con su tarjeta de crédito, débito o Google Play en Rarible</td>
        <td></td>
    </tr>
</table>



## Referencias a fuentes de información
  

## Caracterización de usuarios: User Personas
  
  Comprador:
  ![comprador](https://user-images.githubusercontent.com/102233707/169891190-e79ffbd7-cde3-4874-9da4-9b71e5360cd9.jpeg)
  
  Vendedor:
  ![vendedor](https://user-images.githubusercontent.com/102233707/169891327-448cbc3d-2c95-4f81-b5f1-9409368c08c9.jpeg)
  
  Interesado en tecnología:
  ![InteresadoEnTecnologia](https://user-images.githubusercontent.com/102233707/169891469-5a9b2053-0716-4d2d-a950-410ddcb19524.jpeg)

## Modelo conceptual del problema
El sitio a desarrollar debe contemplar las principales funcionalidades de los sitios del estilo, como por ejemplo OpenSea. A partir de la investigación, el análisis de interfaces y la entrevista, llegamos a un acuerdo de los requerimientos necesarios para poder desarrollar dicho sistema lo más acercado a un sitio oficial de marketplace.
El alcance del proyecto abarca funcionalidades para los distintos usuarios que definimos anteriormente. Si bien un interesado en la tecnología no se ve reflejado como un usuario final en el sistema, puede tomar el rol de cualquiera de los dos usuarios definidos que son Comprador y Vendedor. 
Comenzaremos desarrollando las funcionalidades comunes de Comprador y Vendedor. Estas son la creación de un usuario en el sitio, en el momento de la creación del usuario no se especifica que ese usuario será Comprador o Vendedor. Ambos tipos de usuario deben vincular su billetera, en nuestro caso, será únicamente MetaMask que es un software de criptomoneda que es instalado como extensión de un navegador web. Este interactúa con la plataforma de blockchain de Ethereum. Ambos roles tienen una funcionalidad donde se muestra el perfil de usuario que muestra listados de NFTs para la venta, comprados. Por otro lado, se permite editar el perfil.
En el inicio del sitio se mostrarán los NFTs distribuidos en toda la página y habrán opciones variadas de filtrado de los NFTs.

## Especificación

Definición de requerimientos funcionales y no funcionales

User Stories / Use Cases detallados

Bocetos de IU

## Validación y verificación

Verificar la especificación

Validar la solución con personas no involucradas en el proyecto

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes



