/**
 * Верхняя панель
 * 
 */
class TopPanel {
    /** Основное окно верхней понели */
    #mainWindow = document.createElement("div");
    /** Основное окно верхней понели */
    get mainWindow() {
        return this.#mainWindow;
    }

    /** Сдесь будут находится все элементы, что находятся в понели */
    #allButton = []
    /** Сдесь будут находится все элементы, что находятся в понели */
    get allButton() {
        return this.#allButton;
    }

    constructor() {
        this.#mainWindow.setAttribute("class", "topPanel");
    }
    
    /**
     * Создает текстовую кнопку в этой панели
     * 
     * string> text = "Button" -- назначает текст кнопки\
     * function> click -- переданная функция будет активироватся, когда пользователь нажимает на текст
     * 
     * return - "HTML" элемент с текстом
     */
    addTextButton(text="Button", click) {
        // создание основной кнопки
        const textButton = document.createElement("div");
        textButton.setAttribute("class", "textButton");
        textButton.textContent = text;
        textButton.addEventListener("click", click=function(){});
        if (this.#allButton[0]) {
            textButton.style.setProperty("border-left-style", "solid");
            textButton.style.setProperty("border-left-width", "2.5px");
            textButton.style.setProperty("border-left-color", "#666666");
        }
        
        this.#mainWindow.append(textButton);
        this.#allButton.push(textButton);

        return textButton;
    }
}