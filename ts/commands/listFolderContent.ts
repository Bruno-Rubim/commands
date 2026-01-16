import Folder from "../machine/folder.js";
import { gameState } from "../main.js";
import terminal from "../terminal.js";

export default function listFolderContent() {
  for (const key in gameState.currentFolder.content) {
    if (gameState.currentFolder.content[key] instanceof Folder) {
      terminal.writeLine(key + "/");
    } else {
      terminal.writeLine(key);
    }
  }
}
