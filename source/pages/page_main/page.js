/**
 * Создает оснавную страницу
 */
class PAGE_SITE{
    /**
     * Основная страница для редоктированиясубтитров
     */
    static mainWindow() {
        const topTools = new TopPanel();
        const button_load = topTools.addTextButton("Load");
        const button_save = topTools.addTextButton("Save");
        const button_render = topTools.addTextButton("Render");
        button_render.addEventListener("click", function() {
            const class_window = new incompleteWindow();
            
            class_window.openWindow();
        });

        /** Основное окно */
        const mainWindow = document.createElement("div");
        mainWindow.setAttribute("class", "mainWindow");

        const windowStyle_Class = new WindowStyle(); // класс с окном со стилями
        const windowSubtitles_Class = new WindowSubtitles(); // класс с окном для субтитров
        mainWindow.append(windowStyle_Class.mainWindow, windowSubtitles_Class.mainWindow)
        
        const testWindow = new HalfWindow_SettingsSubtitles()
        mainWindow.append(testWindow.mainWindow)

        document.body.append(topTools.mainWindow, mainWindow)
        
    }
}

PAGE.mainPage = PAGE_SITE.mainWindow