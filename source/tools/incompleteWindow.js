class incompleteWindow{
    #mainWindow = document.createElement("window")
    get mainWindow() {
        return this.#mainWindow;
    }
    #shadowBG = document.createElement("div");
    get shadowBG() {
        return this.#shadowBG;
    }
    #topTools_window = document.createElement("topTools");
    get topTools_window() {
        return this.#topTools_window;
    }
    #topTools_elements = {}
    get topTools_elements() {
        return this.#topTools_elements;
    }
    #windowContent = document.createElement("windowContent");
    get windowContent() {
        return this.#windowContent;
    }

    constructor() {
        const self = this;

        this.#shadowBG.setAttribute("class", "IncompleteWindow");
        this.#mainWindow.append(this.#topTools_window, this.#windowContent);
        
        const exitButton = document.createElement("div");
        exitButton.setAttribute("class", "exit");
        exitButton.innerHTML = SVGicon.cross;
        const SVGicon_cross = exitButton.getElementsByTagName("svg")[0];
        SVGicon_cross.setAttribute("width", "25px");
        SVGicon_cross.setAttribute("height", "25px");
        exitButton.addEventListener("click", function() {
            self.#shadowBG.remove();
        });
        this.topTools_addElement("exitButton", exitButton);
    }
    
    openWindow() {
        this.#shadowBG.append(this.#mainWindow);
        document.body.append(this.#shadowBG);
    }
    topTools_addElement(propertyKey="property", value=HTMLElement) {
        Object.defineProperty(this.#topTools_elements, propertyKey, {value:value, writable:false});
        this.#topTools_window.append(value);
    }
}