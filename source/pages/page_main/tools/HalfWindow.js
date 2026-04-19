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
    /** загаловок основного окна */
    #title = document.createElement("div");
    /** загаловок основного окна */
    get title() {
        return this.#title;
    }

    constructor(titleText="title") {
        this.#mainWindow.setAttribute("class", "HalfWindow");
        this.#contentWindow.setAttribute("class", "content");
        this.#title.setAttribute("class", "title");
        this.#title.textContent = titleText;
        
        this.#mainWindow.append(this.#title, this.#contentWindow);
    }
}