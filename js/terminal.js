import { logElement } from "./elements.js";
const terminal = {
    writeLine(line) {
        const pre = document.createElement("pre");
        pre.textContent = line;
        logElement.appendChild(pre);
        logElement.scrollTo(0, logElement.scrollHeight);
    },
};
export default terminal;
