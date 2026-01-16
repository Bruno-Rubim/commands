import File from "./machine/file.js";
import Folder from "./machine/folder.js";
import Machine from "./machine/machine.js";
const defaultMachine = new Machine({
    "C:": new Folder({
        documents: new Folder({
            document: new File("here are some words for the document"),
            "intro.txt": new File("Thanks for wanting to be part of the clan.\n\nDon't forget to join us at username@123.456.789"),
        }),
    }),
});
export default class GameState {
    currentMachine = defaultMachine;
    currentPath = "C:";
    currentFolder = this.currentMachine.drives[this.currentPath];
}
