Pruebe los contenedores de desarrollo: Node.js
Un contenedor de desarrollo es un contenedor Docker en ejecución con una pila de herramientas / tiempo de ejecución bien definida y sus requisitos previos. Puede probar contenedores de desarrollo con GitHub Codespaces o Visual Studio Code Remote - Containers .

Este es un proyecto de muestra que le permite probar cualquiera de las opciones en unos sencillos pasos. También tenemos una variedad de otros proyectos de muestra de vscode-remote-try- * .

Nota: Si ya tiene un espacio de código o un contenedor de desarrollo, puede saltar a la sección Cosas para probar .

Configurar el contenedor de desarrollo
Espacios de códigos de GitHub
Siga estos pasos para abrir esta muestra en un espacio de código:

Haga clic en el menú desplegable Código y seleccione la opción Abrir con espacios de código .
Seleccione + Nuevo espacio de código en la parte inferior del panel.
Para obtener más información, consulte la documentación de GitHub .

VS Code Remote - Contenedores
Siga estos pasos para abrir esta muestra en un contenedor usando la extensión VS Code Remote - Containers:

Si es la primera vez que usa un contenedor de desarrollo, asegúrese de que su sistema cumpla con los requisitos previos (es decir, tenga Docker instalado) en los pasos de introducción .

Para usar este repositorio, puede abrir el repositorio en un volumen Docker aislado:

Presione F1y seleccione el comando Contenedores remotos: Pruebe una muestra ...
Elija la muestra "Nodo", espere a que se inicie el contenedor y pruebe las cosas.
Nota: Bajo el capó, esto usará el comando Remote-Containers: Clone Repository in Container Volume ... para clonar el código fuente en un volumen Docker en lugar del sistema de archivos local. Los volúmenes son el mecanismo preferido para conservar los datos del contenedor.

O abra una copia clonada localmente del código:

Clone este repositorio en su sistema de archivos local.
Presione F1y seleccione el comando Contenedores remotos: Abrir carpeta en contenedor ...
Seleccione la copia clonada de esta carpeta, espere a que se inicie el contenedor y pruebe las cosas.
Cosas para probar
Una vez que haya abierto esta muestra, podrá trabajar con ella como lo haría localmente.

Nota: este contenedor se ejecuta como un usuario no root con acceso sudo de forma predeterminada. Comentar "remoteUser": "node"en .devcontainer/devcontainer.jsonsi prefiere ejecutar como root.

Algunas cosas para probar:

Editar:

Abierto server.js
Intente agregar un código y verifique las características del idioma.
Tenga en cuenta que eslinty la vscode-eslintextensión ya están instaladas en el contenedor, ya que las .devcontainer/devcontainer.jsonlistas "dbaeumer.vscode-eslint"como una extensión para instalar automáticamente cuando se crea el contenedor.
Terminal: presione Ctrl+ Shift+ `y escriba unamey otros comandos de Linux desde la ventana del terminal.

Compilar, ejecutar y depurar:

Abierto server.js
Agregue un punto de interrupción (por ejemplo, en la línea 20).
Presione F5para iniciar la aplicación en el contenedor.
Una vez que se alcanza el punto de interrupción, intente desplazarse sobre las variables, examinar los locales y más.
Continuar ( F5). Puede conectarse al servidor en el contenedor mediante:
Al hacer clic en Open in Browserla notificación que le dice: Your service running on port 3000 is available.
Haciendo clic en el icono del globo terráqueo en la vista 'Puertos'. La vista 'Puertos' le brinda una tabla organizada de sus puertos reenviados, y puede acceder a ella con el comando Puertos: Enfoque en la vista de puertos .
Observe que el puerto 3000 en la vista 'Puertos' tiene la etiqueta "Hola mundo remoto". En devcontainer.json, puede establecer "portsAttributes", como una etiqueta para sus puertos reenviados y la acción que se tomará cuando el puerto se reenvíe automáticamente.
Si no supiéramos que el puerto era 3000, podríamos haber usado una expresión regular en lugar de "3000" en "portsAttributes", como ". + / Server.js".
Nota: En Remote - Containers, puede acceder a su aplicación http://localhost:3000en un navegador local. Pero en un espacio de código basado en navegador, debe hacer clic en el enlace de la notificación o la Portsvista para que el servicio maneje el reenvío de puertos en el navegador y genere la URL correcta.

Reconstruya o actualice su contenedor

Es posible que desee realizar cambios en su contenedor, como instalar una versión diferente de un software o reenviar un nuevo puerto. Reconstruirá su contenedor para que los cambios surtan efecto.

Abrir navegador automáticamente: como cambio de ejemplo, actualice el portsAttributesen el .devcontainer/devcontainer.jsonarchivo para abrir un navegador cuando nuestro puerto se reenvíe automáticamente.

Abra el .devcontainer/devcontainer.jsonarchivo.
Modifique el "onAutoForward"atributo en su portsAttributesdesde "notify"a "openBrowser".
Presione F1y seleccione el comando Remote-Containers: Rebuild Container o Codespaces: Rebuild Container para que se recojan las modificaciones.
Contribuyendo
Este proyecto agradece contribuciones y sugerencias. La mayoría de las contribuciones requieren que acepte un Acuerdo de licencia de colaborador (CLA) que declara que tiene derecho a otorgarnos, y de hecho lo hace, los derechos para utilizar su contribución. Para obtener más información, visite https://cla.microsoft.com .

Cuando envía una solicitud de extracción, un CLA-bot determinará automáticamente si necesita proporcionar un CLA y decorar el PR de manera adecuada (por ejemplo, etiqueta, comentario). Simplemente siga las instrucciones proporcionadas por el bot. Solo necesitará hacer esto una vez en todos los repositorios usando nuestro CLA.

Este proyecto ha adoptado el Código de conducta de código abierto de Microsoft . Para obtener más información, consulte las preguntas frecuentes sobre el Código de conducta o póngase en contacto con opencode@microsoft.com si tiene preguntas o comentarios adicionales.

Licencia
Copyright © Microsoft Corporation Todos los derechos reservados.
Licenciado bajo la licencia MIT. Consulte LICENCIA en la raíz del proyecto para obtener información sobre la licencia.
