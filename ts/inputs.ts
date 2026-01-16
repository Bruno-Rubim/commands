import { changePath } from "./commands/changePath.js";
import { helpText } from "./commands/helpText.js";
import listFolderContent from "./commands/listFolderContent.js";
import { addToHistory, navigateHistory } from "./commands/navigateHistory.js";
import { printFileContent } from "./commands/printFileContent.js";
import { inputElement } from "./elements.js";
import { gameState } from "./main.js";
import terminal from "./terminal.js";

let lastCommandTime = Date.now();

function inputInterpreter(inputValue: string) {
  // Fixing that weird bug that happens only locally
  if (lastCommandTime >= Date.now() - 5) {
    return;
  }

  lastCommandTime = Date.now();
  terminal.writeLine(gameState.currentPath + "> " + inputValue);
  if (inputValue.trim() == "") {
    return;
  }
  const command = inputValue.trim();
  const commandArguments = command.split(" ");

  console.log(
    JSON.parse(JSON.stringify(gameState.currentFolder.content)),
    "before command"
  );
  switch (commandArguments[0]) {
    case "cd":
      changePath(commandArguments[1], gameState.currentMachine);
      console.log(
        JSON.parse(JSON.stringify(gameState.currentFolder.content)),
        "after changePath"
      );
      break;
    case "ls":
      listFolderContent();
      break;
    case "cat":
      printFileContent(commandArguments[1]);
      console.log(
        JSON.parse(JSON.stringify(gameState.currentFolder.content)),
        "after cat"
      );
      break;
    case "help":
      terminal.writeLine(helpText);
      break;
    case "cls":
      terminal.clearScreen();
      break;
    default:
      terminal.writeLine(`Unknown command "${commandArguments[0]}"`);
      break;
  }
  terminal.writeLine(" ");

  inputElement.value = "";
  addToHistory(command);

  console.log(
    JSON.parse(JSON.stringify(gameState.currentFolder.content)),
    "end of input handler"
  );
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
