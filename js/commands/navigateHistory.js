import { inputElement } from "../elements.js";
const commandHistory = [];
let historyId = 0;
export function addToHistory(command) {
    commandHistory.push(command);
    historyId = commandHistory.length;
}
export function navigateHistory(dir) {
    if (commandHistory.length) {
        if (dir == "up") {
            historyId--;
            if (historyId < 0) {
                historyId = 0;
            }
            inputElement.value = commandHistory[historyId];
        }
        if (dir == "down") {
            historyId++;
            if (historyId > commandHistory.length - 1) {
                historyId = commandHistory.length - 1;
                inputElement.value = "";
            }
            else {
                inputElement.value = commandHistory[historyId];
            }
        }
    }
}
