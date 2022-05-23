# Informe académico entrega 1
Fecha de entrega: 18-oct-2021

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
git clone
  Es una forma para comenzar a utilizar Git, clonando un repositorio ya existente. 
  Para ello ejecutamos:
    git clone [url_del_repositorio]
  La URL del repositorio varía según el protocolo utilizado para clonar el mismo, por ejemplo: git clone utilizando HTTPS
    git clone https://github.com/kidnixt/FIS.git
git commit
  Para guardar un nuevo snapshot con los archivos en estado staged.
git add .
  Es un shortcut que nos permite mover todos los archivos en los estados untracked y modified a staged sin tener que hacerlo uno por uno.
git checkout <nombre de la rama>
  Para movernos de branch/rama.
git checkout -b <nombre rama nueva>
  Shortcut que nos permite crear una nueva rama y automáticamente cambiarnos a esa rama.
git push
  Actualiza las referencias remotas usando las locales. Envío los cambios al repositorio remoto.
git pull
  Incorpora los cambios desde el repositorio remoto a la rama actual.

Como vimos anteriormente, nuestro proyecto en git va a estar organizado en ramificaciones. Una branch o rama en Git no es más que un puntero a un commit. Por defecto la branch inicial siempre se denomina master o main, aunque no difiere en su comportamiento con ninguna otra branch. Se pueden ramas crear por múltiples motivos:
  - Organización interna del equipo.
  - Aislar un grupo.
  - Variante del producto para un cliente
  
## Versionado

Buenas prácticas de versionado

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



