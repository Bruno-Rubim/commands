import Folder from "./folder.js";

export default class Machine {
  drives: Record<string, Folder>;

  constructor(content: Record<string, Folder>) {
    this.drives = content;
  }

  moveTo(path: string): Folder | undefined {
    const paths = path.split("/");
    const drive = paths.splice(0, 1)[0] as string;
    if (this.drives[drive]) {
      let currentFolder = this.drives[drive];
      try {
        paths.forEach((p: string) => {
          const folder = currentFolder.content?.[p];
          if (folder instanceof Folder) {
            currentFolder = folder;
          } else {
            throw new Error("not found");
          }
        });
        return currentFolder;
      } catch {
        return undefined;
      }
    }
    return undefined;
  }
}
