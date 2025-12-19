import { inputElement } from "../elements.js";

const commandHistory: string[] = [];
let historyId = 0;

export function addToHistory(command: string) {
  commandHistory.push(command);
  historyId = commandHistory.length;
}

export function navigateHistory(dir: "up" | "down") {
  if (commandHistory.length) {
    if (dir == "up") {
      historyId--;
      if (historyId < 0) {
        historyId = 0;
      }
      inputElement.value = commandHistory[historyId] as string;
    }
    if (dir == "down") {
      historyId++;
      if (historyId > commandHistory.length - 1) {
        historyId = commandHistory.length - 1;
        inputElement.value = "";
      } else {
        inputElement.value = commandHistory[historyId] as string;
      }
    }
  }
}
