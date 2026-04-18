/**
 * Создает окно для редоктирования стилий для субтитров
 */
class WindowStyle extends HalfWindow{
    constructor() {
        super("ID style");
        
        this.mainWindow.classList.add("windowStyle");
    }
}