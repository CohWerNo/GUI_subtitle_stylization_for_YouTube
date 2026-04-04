/**
 * Создает оснавную страницу
 */
function mainPage() {
    const topTools = new TopPanel()
    topTools.addTextButton("Save")
    topTools.addTextButton("Load")
    topTools.addTextButton("render")

    /** Основное окно */
    const mainWindow = document.createElement("div");
    mainWindow.setAttribute("class", "mainWindow");
    
    /** Окно со стилями */
    const styleWindow = document.createElement("div");
    styleWindow.setAttribute("class", "styleWindow");
    /** Окно с субтитрами */
    const subtitlesWindow = document.createElement("div");
    subtitlesWindow.setAttribute("class", "subtitlesWindow");
    mainWindow.append(styleWindow, subtitlesWindow)

    document.body.append(topTools.mainWindow, mainWindow)
}

PAGE.mainPage = mainPage