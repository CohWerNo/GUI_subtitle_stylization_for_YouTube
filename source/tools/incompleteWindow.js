class incompleteWindow{
    #mainWindow = document.createElement("div")
    get mainWindow() {
        return this.#mainWindow;
    }
    #windowContent = document.createElement("windowContent");
    get windowContent() {
        return this.#windowContent;
    }
    #window_topTools = document.createElement("topTools");
    get window_topTools() {
        return this.#window_topTools;
    }

    constructor() {
        this.#mainWindow.setAttribute("class", "IncompleteWindow"); 
    }
}