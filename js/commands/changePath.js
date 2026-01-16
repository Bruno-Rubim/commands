import { inputElement, pathElement } from "../elements.js";
import { gameState } from "../main.js";
import terminal from "../terminal.js";
export function changePath(path, machine) {
    if (!path) {
        terminal.writeLine(gameState.currentPath);
        return;
    }
    let fullPath;
    if (path == "..") {
        const pathParts = gameState.currentPath.split("/");
        pathParts.pop();
        fullPath = pathParts.join("");
    }
    else {
        fullPath = gameState.currentPath
            ? gameState.currentPath + "/" + path
            : path;
    }
    const folder = machine.moveTo(fullPath);
    if (folder) {
        gameState.currentFolder = folder;
        pathElement.textContent = fullPath + ">";
        inputElement.style.width =
            750 - 13 - pathElement.textContent.length * 9.60606061 + "px";
        gameState.currentPath = fullPath;
        terminal.writeLine(fullPath);
    }
    else {
        terminal.writeLine(`Path "${fullPath}" not found or is not a valid directory.`);
    }
    console.log(JSON.parse(JSON.stringify(gameState.currentFolder.content)), "end of change path");
}
