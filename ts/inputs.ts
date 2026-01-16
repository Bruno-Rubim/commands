import { changePath } from "./commands/changePath.js";
import { helpText } from "./commands/helpText.js";
import listFolderContent from "./commands/listFolderContent.js";
import { addToHistory, navigateHistory } from "./commands/navigateHistory.js";
import { printFileContent } from "./commands/readFile.js";
import { inputElement } from "./elements.js";
import { gameState } from "./main.js";
import terminal from "./terminal.js";

function inputInterpreter(inputValue: string) {
  terminal.writeLine(gameState.currentPath + "> " + inputValue);

  if (inputValue.trim() == "") {
    return;
  }
  const command = inputValue.trim();
  const commandArguments = command.split(" ");

  switch (commandArguments[0]) {
    case "cd":
      changePath(commandArguments[1], gameState.currentMachine);
      break;
    case "ls":
      listFolderContent();
      break;
    case "cat":
      printFileContent(commandArguments[1]);
      break;
    case "help":
      terminal.writeLine(helpText);
      break;
    default:
      terminal.writeLine(`Unknown command "${commandArguments[0]}"`);
      break;
  }
  terminal.writeLine(" ");

  inputElement.value = "";

  addToHistory(command);
}

export function bindListeners() {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    inputElement.focus();
  });

  inputElement.addEventListener("keyup", (e) => {
    // debugElement.textContent = e.key;
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp":
        navigateHistory("up");
        break;
      case "ArrowDown":
        navigateHistory("down");
        break;
      case "Enter":
        inputInterpreter(inputElement.value);
        break;
    }
    inputElement.focus();
  });
}
