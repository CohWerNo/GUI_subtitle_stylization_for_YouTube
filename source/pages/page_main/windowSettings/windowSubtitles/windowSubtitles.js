class windowSubtitles{
    #mainWindow = document.createElement("div");
    get mainWindow() {
        return this.#mainWindow;
    }

    constructor() {
        this.#mainWindow.setAttribute("class", "windowSubtitles");
    }
}