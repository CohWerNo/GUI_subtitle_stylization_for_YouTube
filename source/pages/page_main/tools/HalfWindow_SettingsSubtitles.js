/**
 * Создает окно которое можно расположите вертикально. Также на этом окне можно создать настройки для субтитров
 * 
 * String $titleText="title" -- задаёт загаловок для окна 
 */
class HalfWindow_SettingsSubtitles extends HalfWindow {
    /** Здесь находятся все инструменты видимые пользщователю */
    #guiTools = {
        /** Основное окно инструментов */
        window:document.createElement("guiTools"),
        /** Инструменты видимые пользователю */
        tools:{},
    };
    /** Здесь находятся все инструменты видимые пользщователю */
    get guiTools() {
        return this.#guiTools;
    }

    constructor(titleText="title") {
        super(titleText)
        
        this.mainWindow.classList.add("HalfWindow_SettingsSubtitles")
        
        this.addTool_Button("addWindow", "Create new window")
        this.contentWindow.append(this.#guiTools.window)
    }

    /**
     * Добавляет кнопку в список инструментов
     */
    addTool_Button(name="name", textOnButton="PlaceHolder") {
        const button = document.createElement("button");
        button.textContent = textOnButton;
        
        this.#guiTools.tools[name] = {}
        this.#guiTools.tools[name].element = button
        this.#guiTools.window.append(button);
    }
}