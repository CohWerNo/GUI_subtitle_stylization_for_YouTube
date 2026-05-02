/**
 * Создает неполное окно, которая перекрывает весь контент что находится за этим окном
 */
class incompleteWindow{
    /** Основное окно */
    #mainWindow = document.createElement("window")
    /** Основное окно */
    get mainWindow() {
        return this.#mainWindow;
    }
    /** Тень под окном, которая перекрывает весь контент за ним */
    #shadowBG = document.createElement("div");
    /** Тень под окном, которая перекрывает весь контент за ним */
    get shadowBG() {
        return this.#shadowBG;
    }
    /** Верхняя панель с инструментами */
    #topTools_window = document.createElement("topTools");
    /** Верхняя панель с инструментами */
    get topTools_window() {
        return this.#topTools_window;
    }
    /** Элементы находящюеся в верхней панели */
    #topTools_elements = {}
    /** Элементы находящюеся в верхней панели */
    get topTools_elements() {
        return this.#topTools_elements;
    }
    /** Дополнительное окно, в котором должны находится все элементы, для их отображения у пользователя */
    #windowContent = document.createElement("windowContent");
    /** Дополнительное окно, в котором должны находится все элементы, для их отображения у пользователя */
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
    
    /**
     * Отображает окно у пользователя
     */
    openWindow() {
        this.#shadowBG.append(this.#mainWindow);
        document.body.append(this.#shadowBG);
    }
    /**
     * Добавляет элемент в верхнюю панель
     * 
     * `<string> propertyKey = "property" -- устанавливает ключь для значения, по которому этот элемент можно найти в "topTools_elements"`\
     * `<HTMLElement> value = HTMLElement -- элемент будет установлен в "topTools_window"`
     */
    topTools_addElement(propertyKey="property", value=HTMLElement) {
        Object.defineProperty(this.#topTools_elements, propertyKey, {value:value, writable:false});
        this.#topTools_window.append(value);
    }
}