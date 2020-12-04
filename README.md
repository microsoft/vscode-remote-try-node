# Try Out Development Containers: Node.js

A **development container** is a running [Docker](https://www.docker.com) container with a well-defined tool/runtime stack and its prerequisites. You can try out development containers with GtiHub Codespaces or **[VS Code Remote - Containers](https://aka.ms/vscode-remote/containers)**.

[GitHub Codespaces](https://github.com/features/codespaces) both use this same concept to quickly create customized, cloud-based development environments accessible [from VS Code](https://aka.ms/vso-dl) or the web. _Request access to beta if user does not already have it_

The [VS Code Remote - Containers](https://aka.ms/vscode-remote/download/containers) extension allows you to clone a repository or open any folder mounted into (or already inside) a dev container and take advantage of VS Code's full development feature set. 

This is a sample project that lets you try out either option in a few easy steps.

> **Note:** If you're following the quick start, you can jump to the [Things to try](#things-to-try) section.

## Setting up the development container

### GitHub Codespaces
Follow these steps to open this sample in a codespace:
1. **Insert instructions on creating a repo from the template** 
1. Use the  Code drop-down menu, and select Open with Codespaces.
  - Insert screenshot of Code button
  
### VS Code Remote - Containers
Follow these steps to open this sample in a container using the VS Code Remote - Containers extension:

1. If this is your first time using a development container, please follow the [getting started steps](https://aka.ms/vscode-remote/containers/getting-started).

2. To use this repository, you can either open the repository in an isolated Docker volume:

    - Press <kbd>F1</kbd> and select the **Remote-Containers: Try a Sample...** command.
    - Choose the "Node" sample, wait for the container to start and try things out!
        > **Note:** Under the hood, this will use **Remote-Containers: Open Repository in Container...** command to clone the source code in a Docker volume instead of the local filesystem.

    Or open a locally cloned copy of the code:

   - Clone this repository to your local filesystem.
   - Press <kbd>F1</kbd> and select the **Remote-Containers: Open Folder in Container...** command.
   - Select the cloned copy of this folder, wait for the container to start, and try things out!

## Things to try

Once you have this sample opened, you'll be able to work with it like you would locally.

> **Note:** This container runs as a non-root user with sudo access by default. Comment out `"remoteUser": "node"` in `.devcontainer/devcontainer.json` if you'd prefer to run as root.

Some things to try:

1. **Edit:**
   - Open `server.js`
   - Try adding some code and check out the language features. Notice that `eslint` and the `vscode-eslint` extension are already installed in the container _insert reasoning_.
2. **Terminal:** Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>\`</kbd> and type `uname` and other Linux commands from the terminal window.
3. **Build, Run, and Debug:**
   - Open `server.js`
   - Add a breakpoint (e.g. on line 20).
   - Press <kbd>F5</kbd> to launch the app in the container.
   - Once the breakpoint is hit, try hovering over variables, examining locals, and more.
   - Continue and from the notification that is shown open a browser. Note you can connect to the server in the container. 
   - The status line shows '1 Port Available'. Clicking the status bar entry shows the 'Ports' view that lists the currently available ports.
4. Rebuild or update your container _Brigit_
  - Note: This only applies to containers with the VS Code Remote - Containers ext.
**Forward a port statically:** You can also forward a port statically in the `.devcontainer/devcontainer.json` file.
   - Open the `.devcontainer/devcontainer.json` file.
   - Uncomment the `forwardedPorts` attribute and adjust the port number as needed.
   - Press <kbd>F1</kbd> and select the **Remote-Containers: Rebuild Container** command so the modifications are picked up.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

Copyright © Microsoft Corporation All rights reserved.<br />
Licensed under the MIT License. See LICENSE in the project root for license information.
