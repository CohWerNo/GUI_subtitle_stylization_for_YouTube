/**
 * Создает оснавную страницу
 */
function mainPage() {
    /** Основное окно */
    const mainWindow = document.createElement("div");
    mainWindow.setAttribute("class", "mainWindow");
    
    /** Окно с "ID" */
    const idWindow = document.createElement("div");
    idWindow.setAttribute("class", "idWindow");
    const styleWindow = document.createElement("div");
    styleWindow.setAttribute("class", "styleWindow");
    mainWindow.append(idWindow, styleWindow)

    document.body.append(mainWindow)
}

PAGE.mainPage = mainPage