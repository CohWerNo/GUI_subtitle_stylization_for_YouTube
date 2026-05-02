/**
 * Создает окно, где контент можно поместить вертикально
 * 
 * `<String> titleText="title" -- задает название окна`
 */
class HalfWindow{
    /** основное окно, где распаложены остальные элементы */
    #mainWindow = document.createElement("div");
    /** основное окно, где распаложены остальные элементы */
    get mainWindow() {
        return this.#mainWindow;
    }
    /** элемент с контентом */
    #contentWindow = document.createElement("div");
    /** элемент с контентом */
    get contentWindow() {
        return this.#contentWindow;
    }
    /** Строка заголовка */
    #titleBar = {};
    /** Строка заголовка */
    get titleBar() {
        return this.#titleBar;
    }

    constructor(titleText="title") {
        this.#mainWindow.setAttribute("class", "HalfWindow");
        this.#contentWindow.setAttribute("class", "content");
        
        /** основное окно "Строки загаловка" */
        const titleBarWindow = document.createElement("titleBar");
        Object.defineProperty(this.#titleBar, "mainWindow", {value:titleBarWindow, writable:false})
        /** загаловок основного окна */
        const title = document.createElement("div")
        title.setAttribute("class", "title");
        title.textContent = titleText;
        Object.defineProperty(this.#titleBar, title, {value:title, writable:false})
        titleBarWindow.append(title)
        
        this.#mainWindow.append(titleBarWindow, this.#contentWindow);
    }
}