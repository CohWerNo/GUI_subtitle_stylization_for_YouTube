class PAGE_SITE{
    /**
     * Создает оснавную страницу
     */
    static mainWindow() {
        const topTools = new TopPanel();
        topTools.addTextButton("Save");
        topTools.addTextButton("Load");
        topTools.addTextButton("render");

        /** Основное окно */
        const mainWindow = document.createElement("div");
        mainWindow.setAttribute("class", "mainWindow");

        const windowStyle_Class = new windowStyle(); // класс с окном со стилями
        const windowSubtitles_Class = new windowSubtitles(); // класс с окном для субтитров
        mainWindow.append(windowStyle_Class.mainWindow, windowSubtitles_Class.mainWindow)

        document.body.append(topTools.mainWindow, mainWindow)
    }
}

PAGE.mainPage = PAGE_SITE.mainWindow