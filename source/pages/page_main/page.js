/**
 * Создает оснавную страницу
 */
class PAGE_SITE{
    static mainWindow() {
        const topTools = new TopPanel();
        topTools.addTextButton("Save");
        topTools.addTextButton("Load");
        topTools.addTextButton("Render");

        /** Основное окно */
        const mainWindow = document.createElement("div");
        mainWindow.setAttribute("class", "mainWindow");

        const windowStyle_Class = new WindowStyle(); // класс с окном со стилями
        const windowSubtitles_Class = new WindowSubtitles(); // класс с окном для субтитров
        mainWindow.append(windowStyle_Class.mainWindow, windowSubtitles_Class.mainWindow)

        document.body.append(topTools.mainWindow, mainWindow)
    }
}

PAGE.mainPage = PAGE_SITE.mainWindow