# Informe académico entrega 1
## Índice


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

Resumen de commits y evolución del proyecto

## Elicitación

Evidencia de actividades de investigación

Referencias a fuentes de información

Caracterización de usuarios: User Personas

Modelo conceptual del problema

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



