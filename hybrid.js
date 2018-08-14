if (typeof module !== 'undefined') {
    // Require any modules you need here
} else {
    window.Hybrid = exports = {}
    // We assume any required modules have already been imported
}

/** Function accessible from NodeJS and browsers.
 * @returns {string} the string "hybrid"
 */
exports.hybrid = function () {
    return 'hybrid'
}
