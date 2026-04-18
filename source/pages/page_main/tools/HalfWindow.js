class HalfWindow{
    #mainWindow = document.createElement("div");
    get mainWindow() {
        return this.#mainWindow;
    }

    #contentWindow = document.createElement("div");
    get contentWindow() {
        return this.#contentWindow;
    }
    
    #title = document.createElement("div");
    get title() {
        return this.#title;
    }

    constructor(titleText="title") {
        this.#mainWindow.setAttribute("class", "halfWindow");
        this.#contentWindow.setAttribute("class", "content");
        this.#title.setAttribute("class", "title");
        this.#title.textContent = titleText;
        
        this.#mainWindow.append(this.#title, this.#contentWindow);
    }
}