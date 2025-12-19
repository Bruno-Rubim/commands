import File from "./machine/file.js";
import Folder from "./machine/folder.js";
import Machine from "./machine/machine.js";

const defaultMachine = new Machine({
  "C:": new Folder({
    documents: new Folder({
      document: new File("here are some words for the document"),
    }),
  }),
});

export default class GameState {
  currentMachine: Machine = defaultMachine;
  currentPath: string = "C:";
  currentFolder: Folder = this.currentMachine.drives[
    this.currentPath
  ] as Folder;
}
