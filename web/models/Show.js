export default class Show {
    /**
     * Example: "Ted Lasso"
     * @type {string}
     */
    showTitle
    /**
     * Example: "The best show in the world."
     * @type {string}
     */
    showDescription
    /**
     * Example: "Ended"
     * @type {string}
     */
    showStatus
    /**
     * Example: "22:00"
     * @type {string}
     */
    showNextEpisode24HourTime
    /**
     * Example: "America/New York"
     * @type {string}
     */
    showTimezone // todo: replace _ with spaces
    /**
     * Example: ["Sunday", "Monday"]
     * @type {string[]}
     */
    showNextEpisodeDayOfWeek
    /**
     * Example: "Netflix"
     * @type {string}
     */
    showNetwork
    /**
     * Example: "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"
     * @type {string}
     */
    showImageSmall
    /**
     * Example: "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
     * @type {string}
     */
    showImageLarge

    /**
     * Constructor cherry-picks fields from the obj parameter.
     * @param {object} obj
     */
    constructor(obj) {
        if (obj.showTitle) {
            this.showTitle = obj.showTitle
        }
        if (obj.showDescription) {
            this.showDescription = obj.showDescription
        }
        if (obj.showStatus) {
            this.showStatus = obj.showStatus
        }
        if (obj.showNextEpisode24HourTime) {
            this.showNextEpisode24HourTime = obj.showNextEpisode24HourTime
        }
        if (obj.showTimezone) {
            this.showTimezone = obj.showTimezone
        }
        if (obj.showNextEpisodeDayOfWeek) {
            this.showNextEpisodeDayOfWeek = obj.showNextEpisodeDayOfWeek
        }
        if (obj.showNetwork) {
            this.showNetwork = obj.showNetwork
        }
        if (obj.showImageSmall) {
            this.showImageSmall = obj.showImageSmall
        }
        if (obj.showImageLarge) {
            this.showImageLarge = obj.showImageLarge
        }
    }
}
