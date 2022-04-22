Pruebe los contenedores de desarrollo: Node.js
Abrir en Remoto - Contenedores

Un contenedor de desarrollo es un contenedor de Docker en ejecución con una herramienta/pila de tiempo de ejecución bien definida y sus requisitos previos. Puede probar contenedores de desarrollo con GitHub Codespaces o Visual Studio Code Remote-Containers .

Este es un proyecto de muestra que le permite probar cualquiera de las opciones en unos sencillos pasos. También tenemos una variedad de otros proyectos de muestra de vscode-remote-try-* .

Nota: Si ya tiene un Codespace o un contenedor de desarrollo, puede ir a la sección Cosas para probar .

Configuración del contenedor de desarrollo
Espacios de código de GitHub
Siga estos pasos para abrir esta muestra en un Codespace:

Haga clic en el menú desplegable Código y seleccione la opción Abrir con Codespaces .
Seleccione + Nuevo espacio de código en la parte inferior del panel.
Para obtener más información, consulte la documentación de GitHub .

VS Code Remote - Contenedores
Si ya tiene VS Code y Docker instalados, puede hacer clic en la insignia de arriba o aquí para comenzar. Al hacer clic en estos enlaces, VS Code instalará automáticamente la extensión Remote - Containers si es necesario, clonará el código fuente en un volumen de contenedor y activará un contenedor de desarrollo para su uso.

Siga estos pasos para abrir esta muestra en un contenedor con la extensión VS Code Remote - Containers:

Si es la primera vez que usa un contenedor de desarrollo, asegúrese de que su sistema cumpla con los requisitos previos (es decir, que tenga Docker instalado) en los pasos de inicio .

Para usar este repositorio, puede abrir el repositorio en un volumen Docker aislado:

Pulse F1y seleccione el comando Remote-Containers: Try a Sample....
Elija la muestra "Nodo", espere a que se inicie el contenedor y pruebe las cosas.
Nota: En el fondo, esto usará el comando Contenedores remotos: Clonar repositorio en volumen contenedor... para clonar el código fuente en un volumen de Docker en lugar del sistema de archivos local. Los volúmenes son el mecanismo preferido para conservar los datos del contenedor.

O abra una copia clonada localmente del código:

Clone este repositorio en su sistema de archivos local.
Pulse F1y seleccione el comando Contenedores remotos: Abrir carpeta en contenedor....
Seleccione la copia clonada de esta carpeta, espere a que se inicie el contenedor y pruebe las cosas.
cosas para probar
Una vez que haya abierto esta muestra, podrá trabajar con ella como lo haría localmente.

Nota: este contenedor se ejecuta como un usuario no raíz con acceso sudo de forma predeterminada. Comenta si prefieres ejecutar como root "remoteUser": "node"..devcontainer/devcontainer.json

Algunas cosas para probar:

Editar:

Abiertoserver.js
Intente agregar algo de código y verifique las características del lenguaje.
Tenga en cuenta que eslintla vscode-eslintextensión ya está instalada en el contenedor, ya que las .devcontainer/devcontainer.jsonlistas "dbaeumer.vscode-eslint"como una extensión se instalarán automáticamente cuando se cree el contenedor.
Terminal: presione Ctrl++ Shifty `escriba unamey otros comandos de Linux desde la ventana del terminal.

Compilación, ejecución y depuración:

Abiertoserver.js
Agregue un punto de interrupción (por ejemplo, en la línea 20).
Presione F5para iniciar la aplicación en el contenedor.
Una vez que se alcanza el punto de interrupción, intente pasar el mouse sobre las variables, examinar los locales y más.
Continuar ( F5). Puede conectarse al servidor en el contenedor mediante:
Haciendo clic en Open in Browseren la notificación que te indica: Your service running on port 
