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
    #titleBar_window = document.createElement("titleBar");
    /** Строка заголовка */
    get titleBar_window() {
        return this.#titleBar_window;
    }
    /** Элементы в "строке загаловка" */
    #titleBar_elements = {};
    /** Элементы в "строке загаловка" */
    get titleBar_elements() {
        return this.#titleBar_elements;
    }

    constructor(titleText="title") {
        this.#mainWindow.setAttribute("class", "HalfWindow");
        this.#contentWindow.setAttribute("class", "content");
        
        /** загаловок основного окна */
        const title = document.createElement("div")
        title.setAttribute("class", "title");
        title.textContent = titleText;
        Object.defineProperty(this.#titleBar_elements, "title", {value:title, writable:false})
        this.#titleBar_window.append(title)
        
        console.log(this.#titleBar_elements);
        
        this.#mainWindow.append(this.#titleBar_window, this.#contentWindow);
    }
}