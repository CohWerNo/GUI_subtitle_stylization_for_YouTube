/**
 * Создает окно для редоктарования субтитров
 */
class WindowSubtitles extends HalfWindow_SettingsSubtitles {
    constructor() {
        super("Subtitles");
        
        this.mainWindow.classList.add("windowSubtitles");
    }
}