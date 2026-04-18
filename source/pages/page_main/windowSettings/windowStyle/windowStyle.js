class windowStyle{
    #mainWindow = document.createElement("div");
    get mainWindow() {
        return this.#mainWindow;
    }
    
    constructor() {
        this.#mainWindow.setAttribute("class", "windowStyle");
    }
}