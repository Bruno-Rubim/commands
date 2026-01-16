import { gameState } from "../main.js";
import terminal from "../terminal.js";

export function printFileContent(fileName: string | undefined) {
  console.log(gameState.currentFolder.content);
  if (!fileName) {
    terminal.writeLine(`Insert a valid file name.`);
    return;
  }
  const file = gameState.currentFolder.content[fileName];
  if (!file) {
    terminal.writeLine(`"${fileName}" is not a valid file.`);
    return;
  }
  terminal.writeLine("\n" + file.content + "\n");
}
