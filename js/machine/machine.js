import Folder from "./folder.js";
export default class Machine {
    drives;
    constructor(content) {
        this.drives = content;
    }
    moveTo(path) {
        const paths = path.split("/");
        const drive = paths.splice(0, 1)[0];
        if (this.drives[drive]) {
            let currentFolder = this.drives[drive];
            try {
                paths.forEach((p) => {
                    const folder = currentFolder.content?.[p];
                    if (folder instanceof Folder) {
                        currentFolder = folder;
                    }
                    else {
                        throw new Error("not found");
                    }
                });
                return currentFolder;
            }
            catch {
                return undefined;
            }
        }
        return undefined;
    }
}
