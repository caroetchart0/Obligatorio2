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

### Uso de ramas separadas de 'main'
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
  
<img width="1059" alt="RaribleInterfaz" src="https://user-images.githubusercontent.com/102233707/169900438-a6bb93ba-b8dd-4c6e-a22e-3c272f0cc0ad.png">
  
    - Explorar:
  
<img width="1066" alt="Captura de Pantalla 2022-05-23 a la(s) 17 29 02" src="https://user-images.githubusercontent.com/102233707/169900796-450f5a26-73aa-4847-9f0a-c9b4b1fe3f64.png">
  
    - Mi perfil y seguidos: Previo a la visualización del perfil, se debe crear una cuenta
 
<img width="1067" alt="RariblePerfil" src="https://user-images.githubusercontent.com/102233707/169901434-336c1ab7-515d-4931-9cdb-46b5302d4eeb.png">
  
    - Actividad:
  
<img width="1053" alt="RaribleActividad" src="https://user-images.githubusercontent.com/102233707/169901596-7885859a-820c-47ba-b15e-107ed9fa08d3.png">
  
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

## Entrevista

  <li>¿Qué funcionalidades son básicas para el desarrollo de un mercado web de NFT?</li>
La posibilidad de poder vender y comprar NFT´s,  autentificar quienes son sus dueños actuales y el valor que tiene en el mercado.
Es necesario tener una cuenta dentro de la página web porque es lo que te permite publicar y comprar NFT´s.
No necesariamente se tiene que abonar el pago del NFT con cripto-monedas, de hecho en OpenSea (el marketplace más grande de NFT´s que existe actualmente) tiene la opción de abonar en dólares.

  
  <li>¿Existen restricciones legales en torno a las NFT?</li>
En Uruguay no existen restricciones legales respecto a NFT´s ni a cripto en general, es como un vacío legal de por medio. Hay un proyecto de ley pero todavía no está implementado, por lo que por ahora es un vacío legal.

  
  <li>¿Qué perspectivas futuras tienen los NFT en su opinión?</li>
Yo creo que los NFT´s, a futuro, van a representar un montón de cosas porque no simplemente se limitan a archivos sino que pueden generarse derechos de propiedad, derechos de uso o incluso su fruto de actividades en forma de NFT´s. Por ejemplo, existe un proyecto para hacer real-estate NFT, es como comprar y vender los derechos de propiedad como NFT. O tokenizar industrias, por ejemplo hacer una producción de vinos de un viñedo y poder vender los frutos de esa producción como NFT.

  
  <li>¿Por qué crees que los NFT suscitan tanto interés en el mercado?</li>
Creo que las personas, en general, no tienen mucho conocimiento acerca de cripto o NFT entonces lo que hacen es escuchar que eso está on-demand y la gente va a comprar debido a eso. Es como una moda. Es más, hay artistas que lo que hacen es publicar dibujos generados por AI (por una computadora) que simplemente son dibujos 8 bits que no tienen ningún tipo de valor pero la gente los compra porque son artistas con prestigio, entonces es como una moda que se está dando; la gente compra simplemente por el hecho de comprar NFT´s.
En conclusión, van a suscitar más que nada por el tema de los derechos de propiedad y etc., o porque, por ejemplo, hay empresas discográficas que están vendiendo masters originales de ciertos álbumes (por ejemplo de “The Beatles”) en forma de NFT’s por mucho dinero. Entonces, van a tener bastante futuro  pero actualmente la mayor cantidad de personas que ingresan al mercado de NFT’s es por escuchar que son una moda

  
  <li>¿Cómo es el proceso de compra de un NFT?</li>
Por ejemplo, tomando en cuenta OpenSea, lo único que hay que hacer es abrir una cuenta (o crearse una en el caso de no tener) y ya se pueden realizar compras.
Para vender, hay que abrir la cuenta, publicar el archivo (esta parte tiene un costo de $200 dólares aproximadamente) y por último, cuando se vaya a realizar la venta, el precio mínimo es de $200 dólares; a partir de ese monto se puede fijar el precio que cada persona quiera o tambien se puede poner en una subasta a partir de cierto precio, pero nada te asegura que se venda rápido.

  
  <li>¿Cómo se vinculan los NFT con la tecnología blockchain?</li>
De hecho, sin blockchain no existirían NFT´s, porque los NFT´s se verifican a través de blockchain.
Blockchain sería como un gran libro en donde están anotadas todas las transacciones, entonces si alguien quiere verificar la autenticidad de un NFT, se fija en el blockchain que ese archivo/NFT le corresponda a ese usuario. Todo está anotado en forma de código en el blockchain, por lo que sin blockchain no hay NFT’s.
Hacer un blockchain no es imposible, se puede hacer un blockchain, pero es muy difícil que la gente lo empiece a hacer. Por lo general, ya existen blockchains creados con distintas finalidades y las personas nada más los implementan en su mercado de NFT’s, ya que es mucho más sencillo hacer esto que crear un blockchain de cero.

  
  <li>¿Cómo se determina el valor de un NFT?</li>
El valor de un NFT depende del valor que el artista quiera darle o el valor que el público piense que va a valer el NFT. Por ejemplo: si el artista le dedicó cierto tiempo y esfuerzo a hacer una pintura y para él eso representa determinada cantidad de dinero, es el valor que el artista le va a dar. Por otro lado, cuando se someten a subastas el valor va a ser determinado por el público y lo que éste esté dispuesto a gastar.



## Referencias a fuentes de información
  https://www.scribbr.es/detector-de-plagio/generador-apa/
<p>
1 S. (2022, 9 febrero). Qué son los NFT y por qué suscitan tanto interés en el mercado digital. Semana.com Últimas Noticias de Colombia y el Mundo. Recuperado 23 de abril de 2022, de https://www.semana.com/tecnologia/articuloque-son-los-nft-y-por-que-suscitan-tanto-interes-en-el-mercado-digital/202254/ 
</p>
<p>
2 Ciberninjas. (2022, 23 marzo). 16 Mejores Mercados de Arte Digital NFT u Tokens No Fungibles. Recuperado 23 de abril de 2022, de https://ciberninjas.com/mejores-mercados-nft/ 
</p>
<p>
3 Observador, E. (2022, 14 febrero). ¿Cómo se compran NFT y qué tiendas hay en el mercado? El Observador. Recuperado 23 de abril de 2022, de https://www.elobservador.com.uy/nota/como-se-compran-nft-y-que-tiendas-hay-en-el-mercado--20222135037 
</p>
<p>
4 SDPnoticias, R. (2021, 2 diciembre). ¿Qué es el mercado NFT y cuáles son sus perspectivas para 2022? Sdpnoticias. Recuperado 23 de abril de 2022, de https://www.sdpnoticias.com/negocios/que-es-el-mercado-nft-y-cuales-son-sus-perspectivas-para-2022/ 
</p>
<p>
5 Fernández, Y. (2022, 22 abril). Criptomonedas: qué son, cómo funcionan y qué otras existen además de Bitcoin. Xataka. Recuperado 23 de abril de 2022, de https://www.xataka.com/basics/criptomonedas-que-como-funcionan-que-otras-existen-bitcoin 
</p>
<p>
6 Llamas, J. (2021, 12 mayo). Activos digitales. Economipedia. Recuperado 23 de abril de 2022, de https://economipedia.com/definiciones/activos-digitales.html 
</p>
<p>
7 Pastor, J. (2018, 23 septiembre). Qué es blockchain: la explicación definitiva para la tecnología más de moda. Xataka. Recuperado 23 de abril de 2022, de https://www.xataka.com/especiales/que-es-blockchain-la-explicacion-definitiva-para-la-tecnologia-mas-de-moda 
</p>
<p>
8 Smart Contracts: ¿Qué son, cómo funcionan y qué aportan? (2022, 20 abril). Bit2Me Academy. Recuperado 23 de abril de 2022, de https://academy.bit2me.com/que-son-los-smart-contracts/ 
</p>
<p>
9 Fernández, M. (2022, 10 marzo). Qué es un Exchange de criptomonedas - Letslaw. LetsLaw. Recuperado 23 de abril de 2022, de https://letslaw.es/exchange-de-criptomonedas/ 
</p>
<p>
10 ¿Qué es un token? (2022, 23 marzo). Bit2Me Academy. Recuperado 23 de abril de 2022, de https://academy.bit2me.com/que-es-un-token/ 
</p>
<p>
11 S., A. (2022, 24 abril). Reseña OpenSea. BitDegree.org Crypto Exchanges. Recuperado 23 de abril de 2022, de https://es.bitdegree.org/crypto/resena-opensea 
</p>
<p>
12 Rarible: todo lo que necesita saber sobre el marketplace NFT. (2022, 24 febrero). BeInCrypto. Recuperado 24 de abril de 2022, de https://es.beincrypto.com/aprende/rarible-todo-necesita-saber/#:%7E:text=Ventajas%20de%20Rarible,-Rarible%20tiene%20una&text=Este%20marketplace%20es%20f%C3%A1cil%20de,que%20afecten%20a%20la%20plataforma. 
</p>
<p>
13 colaboradores de Wikipedia. (2022, 15 marzo). Git. Wikipedia, la enciclopedia libre. Recuperado 26 de abril de 2022, de https://es.wikipedia.org/wiki/Git#Caracter%C3%ADsticas 
</p>
<p>
14 Buenas prácticas para gestionar tu código. (2022, 6 abril). La Naturaleza del Software. Recuperado 26 de abril de 2022, de https://lnds.net/blog/lnds/2020/08/21/buenas-practicas-para-gestionar-tu-codigo/ 
</p>
<p>15 Peterson, Z. (2022, 17 febrero). Buenas prácticas para sistemas de control de versiones de Hardware. Altium. Recuperado 26 de abril de 2022, de https://resources.altium.com/es/p/best-practices-hardware-version-control-systems 
</p>
<p>16 INFORME DE REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES. (2020). https://www.enabel.be/sites/default/files/tenders/anexo_a_requerimientos_funcionales_y_no_funcionales.pdf 
</p>

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
  <h4>Funcionales</h4>
<p>Los requerimientos funcionales especifican servicios o funciones del sistema, una descripción del comportamiento del sistema en condiciones específicas y cómo se procesa la información es decir, las entradas y salidas.</p>
<p>Luego del análisis y elicitación de información sobre el sitio a desarrollar, decidimos priorizar los requisitos que son, a nuestro entender, los correctos y adecuados para nuestro nivel de conocimientos. Pasamos por una etapa de priorización estableciendo un valor de prioridad para cada funcionalidad para poder luego planificar mejor el desarrollo y así, proporcionar un sitio que aporte gran valor al cliente y los usuarios que lo utilicen.
Para la priorización, tuvimos en cuenta seis elementos:</p>
<ul>
  <li> Las necesidades del cliente y los usuarios. Que en nuestro caso el “cliente” conforma la letra del obligatorio y los usuarios serían por ejemplo las personas a las que les consultamos por información.</li>
  <li>La importancia relativa de los requisitos para los usuarios. (Este punto lo validamos mayoritariamente nosotros ya que entraríamos dentro de los perfiles de usuario que especificamos)</li>
  <li>El momento en el que las funcionalidades deben ser entregadas. (Es decir, la fecha de entrega).</li>
  <li>Qué requisitos deben ser implementados como un grupo. (Como se verá a continuación que el perfil del usuario implementa varias funcionalidades del mismo)</li>
</ul>
<p>La técnica de priorización que utilizamos fue la de “Dentro o Fuera”. La dinámica se dió a partir de un listado de las funcionalidades que encontramos en los sitios (aplicando la ingeniería inversa) fuimos analizando cada uno, y decidimos si los mismos están a nuestro alcance de tiempo y esfuerzo.</p>

<li>Crear Usuario
Objetivo: Permitir a una persona registrarse en el mercado NFT desarrollado.
  <br>
 Pre-condiciones: El usuario debe ser mayor de 18 años. Billetera/wallet de NFTs (Metamask, entre otros).
  <br>
 Particularidades: El nombre de usuario es único para cada registro, se debe proveer un mail válido (verificable).</li>
<br>
<li>Eliminar Usuario
 Objetivo: Permitir a un usuario eliminar su cuenta  en el sitio.
  <br>
 Pre-condiciones: -
  <br>
 Particularidades: El usuario se elimina, liberando ese nombre de usuario.  Los NFTs del usuario que no fueron vendidos, se eliminan y los vendidos permanecen.
<br>
</li>
<li>Modificar Usuario:
 Objetivo: Modificar billetera del usuario, nombre de usuario o email.
  <br>
 Pre-condiciones: -
  <br>
 Particularidades: Mismas particularidades para la creación de usuario.
</li>
<li>Subir NFT a la venta:
 Objetivo: Publicar un NFT en el marketplace.
  <br>
 Pre-condiciones: Estar registrado en el mercado NFT desarrollado. 
  <br>
 Particularidades: El precio mínimo para vender un NFT es de $100 dólares.</li>
<li>Eliminar NFT a la venta:
  <br>
 Objetivo: Quitar un NFT deseado del marketplace.
  <br>
 Pre-condiciones: Que el NFT esté publicado a la venta en el marketplace desarrollado.
  <br>
 Particularidades: -</li>
<li>Modificar NFT a la venta:
  <br>
 Objetivo: Cambiar el precio de un NFT publicado.
  <br>
 Pre-condiciones: No se puede cambiar a un precio menor al  mínimo establecido ($100 dólares)
  <br>
 Particularidades: - </li>
<li>Buscar y Filtrar NFT:
  <br>
 Objetivo: El usuario debe poder seleccionar filtros para su búsqueda y a su vez, buscar usuarios como obras.
  <br>
 Pre-condiciones: - 
  <br>
 Particularidades: -</li>
<li>Comprar NFT:
  <br>
 Objetivo: Después que un usuario selecciona un NFT para comprar, se realiza la transacción para la obtención de ella.
  <br>
 Pre-condiciones: El monto del NFT no puede exceder del saldo de la billetera del usuario. Un NFT puede ser adquirido por un usuario a la vez, es decir que simultáneamente puede tener un único dueño.
  <br>
 Particularidades: -</li>
<li>Acceder a Ayuda:
  <br>
 Objetivo: Ayudar al usuario a navegar por el sitio y que se informe sobre el tema.
  <br>
 Pre-condiciones: -
  <br>
 Particularidades: -</li>
<li>Contactarnos:
  <br>
 Objetivo: Que el usuario pueda sacarse dudas que no están plasmadas en el requerimiento anterior.
  <br>
 Pre-condiciones: -
  <br>
 Particularidades: -</li>
<br>

<h4>No Funcionales</h4>
<p>Los requerimientos no funcionales, por otra parte, forman parte de las restricciones a los servicios provistos por el sistema. Los mismos pueden estar vinculados a un requerimiento funcional, pero habitualmente se aplican transversalmente a todo el sistema.</p>
<Eficiencia>
El sistema debe ser capaz de procesar N transacciones por segundo.
Toda funcionalidad del sistema y transacción de negocio debe responder al usuario en menos de 5 segundos.
El sistema debe ser capaz de operar adecuadamente con hasta 100.000 usuarios con sesiones concurrentes.
Los datos modificados en la base de datos deben ser actualizados para todos los usuarios que acceden en menos de 2 segundos.</li>
  <li>Seguridad lógica y de datos
  Los permisos de acceso al sistema podrán ser cambiados solamente por el administrador de acceso a datos.
  El nuevo sistema debe desarrollarse aplicando patrones y recomendaciones de programación que incrementen la seguridad de datos.
  Todos los sistemas deben respaldarse cada 24 horas. Los respaldos deben ser almacenados en una localidad segura ubicada en un edificio distinto al que reside el sistema.
  Todas las comunicaciones externas entre servidores de datos, aplicación y cliente del sistema deben estar encriptadas utilizando el algoritmo RSA.
  Si se identifican ataques de seguridad o brecha del sistema, el mismo no continuará operando hasta ser desbloqueado por un administrador de seguridad.</li>
  <li>Usabilidad
  El tiempo de aprendizaje del sistema por un usuario deberá ser menor a 1 hora.
  La tasa de errores cometidos por el usuario deberá ser menor del 1% de las transacciones totales ejecutadas en el sistema.
  El sistema debe contar con manuales de usuario estructurados adecuadamente.
  El sistema debe proporcionar mensajes de error que sean informativos y orientados al usuario final.
  El sistema debe contar con un módulo de ayuda en línea.
  La aplicación web debe poseer un diseño “Responsive” a fin de garantizar la adecuada visualización en múltiples computadores personales, dispositivos tablets y  teléfonos inteligentes.
  El sistema debe poseer interfaces gráficas bien formadas.</li>
  <li>Dependabilidad
  El sistema debe tener una disponibilidad del 99,99% de las veces en que un usuario intente acceder.
  El tiempo para iniciar o reiniciar el sistema no podrá ser mayor a 5 minutos.
  La tasa de tiempos de falla del sistema no podrá ser mayor al 0,5% del tiempo de operación total.
  El promedio de duración de fallas no podrá ser mayor a 15 minutos.
  La probabilidad de falla del Sistema no podrá ser mayor a 0,05.</li>

User Stories / Use Cases detallados

Bocetos de IU

## Validación y verificación

###Validación de requisitos
Durante la actividad de ingeniería de requisitos, es necesario revisar la calidad de los requisitos desarrollados. Se presentan los requisitos a los interesados (o en nuestro caso, entre nosotros) con el propósito de identificar diferencias entre los requisitos definidos y las necesidades reales de los supuestos “interesados”.
Desempeñamos esta etapa de validación para asegurarnos que los requisitos describen con precisión las capacidades y propiedades del sistema, que satisfacen las necesidades de los interesados, son completos, factibles y verificables. También validar que los requisitos definidos son necesarios y en su conjunto cumplen los objetivos del trabajo, y finalmente proporcionan una buena base para proceder con las siguientes etapas de diseño y construcción.
Como lo recomendado es que los autores no validen los requisitos, decidimos que realizar entrevistas a personas externas al equipo, y a su vez, que tengan conocimientos sobre el tema y otros no. 
  
###Validar la solución con personas no involucradas con el proyecto
En cuanto a la validación, decidimos mostrar el prototipo a personas interesadas e interiorizadas en el tema. Al ser un proyecto pequeño, decidimos que los requisitos a validar son todos, a excepción de algunos, que en la entrevista no se abordaron por redundancia como fue el inicio de sesión. Los entrevistados fueron Camilo Rodriguez y Federico Midaglia, ambos entusiastas en el área de inversión en criptomonedas y NFT.
A medida que navegamos en el prototipo, los entrevistados identificaron bien las funcionalidades del sitio y fueron agregando funcionalidades que les parecía que faltaban. Cabe aclarar que los entrevistados conocen varios marketplace de NFT´s. 
Los entrevistados remarcaron lo siguiente (resumen):
<li>Página Principal: En la parte del Footer, al igual que presentan otros marketplace, mostrar confiabilidad a través de “partners” o empresas de manejo de datos que sean confiables como por ejemplo Certix, Coinbase, TrustWallet, entre otros. A su vez, mencionan de agregar un video explicativo de cómo se maneja el sitio, que es una ayuda al usuario para introducirse a los mercados NFT que posee OpenSea.</li>
<li>Registro: A los entrevistados no les pareció práctico que la parte del registro del usuario involucrara el ingreso de nombre y contraseña. Aconsejan que sea a través de una wallet que se ingrese el usuario sin necesidad de crear una cuenta. Una vez que se conecta la wallet al marketplace, se “genera el usuario”.</li>
<li>Explorar: En esta funcionalidad, resaltaron la paleta de colores aplicada a los filtros, uno de los entrevistados menciona que el gris no resalta en el sitio. También mencionaron de agregar en esta funcionalidad una sección de los NFT más populares dentro de un rango determinado de tiempo y en una categoría en específico.</li>
<li>Perfil: En cuanto al perfil del usuario, los entrevistados estuvieron de acuerdo con las funcionalidades que presentaban pero agregarían en el submenú una sección de NFTs “ocultos”, es decir que son creados por el mismo usuario pero no están a la venta.</li>
<li>Categoría de NFTs: Agregar a la creación del NFT una categoría, es decir, qué tipo de archivo es el token.</li>
<li>Ayuda: Si bien en el prototipo no se ven todas las FAQs que vamos a desarrollar, los entrevistados mencionan algunas de las preguntas que podemos abordar. Por ejemplo,  ¿Qué porcentaje de comisión se aplica?, ¿En qué casos?, ¿Es gratuita la creación de mis NFTs?, entre otras.</li>

###Conclusiones:
Al finalizar la entrevista y plasmar un resumen de lo que mencionaron, entendemos que en los requisitos que elaboramos faltan varias claves del funcionamiento del marketplace que no son intercambiables tan simplemente como puede ser el inicio de sesión con una billetera en vez de un usuario y contraseña. Lo que decidimos implementar para la próxima versión es la categoría de NFTs, NFTs ocultos para cada perfil, los “partners” en la página principal, los filtrados mencionados en Explorar y re-evaluaremos la parte de registro del usuario.


## Reflexión
###Detalle del trabajo individual
Martín Edelman
<li>Investigación</li>
<li>Repositorio Git</li>
<li>Caracterización de Usuarios</li>
<li>Reflexión</li>
  
Carolina Etchart
<li>Comandos GIT ejecutados desde terminal y desde IDE</li>
<li>Técnicas de versionado</li>
<li>Investigación</li>
<li>Definición de requerimientos</li>
<li>Use Cases</li>
<li>Bocetos de IU</li>
<li>Reflexión</li>
  
Renata Flangini
<li>Uso de ramas separadas de “main”</li>
<li>Resumen de commits y evolución del proyecto</li>
<li>Investigación</li>
<li>Caracterización de Usuarios</li>
<li>Definición de requerimientos</li>
<li>Use Cases</li>
<li>Bocetos de IU</li>
<li>Validación y verificación</li>
<li>Reflexión</li>

###Técnicas aplicadas y aprendizajes
<li>Reflexión Martín:
En tema de proyecto, me parecto el tiempo para entregar el obligatorio, me sentía muy cómodo con GIT pero por suerte me ayudarnos mis compañeras donde no me siento cómodo como el diseño de interfaz y los user stories. El grupo de trabajo era balanceado, cómodo y nos llevamos muy bien.</li>

<li>Reflexión Carolina:
Me sentí muy cómoda con este grupo ya que sentí que todos pusimos de nuestra parte para que este trabajo nos salga de la mejor manera posible. Siento que fuimos capaces de apoyarnos en nuestros compañeros en los aspectos en los que cada uno de nosotros se sentía más flojo, pudiendo reforzar nuestro conocimiento a través de la ayuda de nuestros compañeros. 
También me sentí muy tranquila con respecto a la fecha de entrega ya que nunca sentimos que nos faltaba tiempo, ni tampoco que algún aspecto de la entrega nos fuera imposible de realizar; supimos afrontar como grupo todas las dificultades que se nos presentaron.</li>

<li>Reflexión Renata: 
Personalmente, me gustó trabajar en esta primera etapa con Carolina y Martín. Siento que trabajamos bien como equipo y pudimos entendernos y balancear nuestras virtudes y defectos. Tuve muchos problemas para adaptarme a la herramienta de git, por lo cual me apoyé mucho en mis compañeros para poder aportar y me ayudaron mucho. Yo me sentía mucho más cómoda en la parte de especificación y por eso aporté lo mayor que pude en eso. Por otro lado, me gustó que en los momentos que me estresé o simplemente no se me ocurrían soluciones, ambos compañeros tomaron la “posta” o me ayudaron a seguir con el problema que tuviera. Me pareció bueno haber hecho instancias presenciales para el seguimiento del trabajo y luego hacer lo que quede de manera remota y asíncrona. Sé que puedo confiar en mis compañeros que van a hacer su parte asignada del trabajo de la mejor manera posible y creo que ellos también confían en mi trabajo. Si bien por ahí podríamos haber empezado antes con el obligatorio, no sentí en ningún momento que no íbamos a llegar o que nos iban a faltar muchas cosas. Así que en cuanto al tiempo, siento que lo manejamos bastante bien.</li>
