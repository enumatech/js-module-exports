if (typeof module !== 'undefined') {
    // Require any modules you need
    Hybrid = module.require('./hybrid')
} else {
    window.Hybrid2 = exports = {}
    // We assume any required modules have already been imported
}

exports.hybrid2 = hybrid2

/** Another function accessible from NodeJS and browsers.
 * @returns {string} the string "hybrid2"
 */
function hybrid2 () {
    // FIXME: no auto-complete for the Hybrid module
    return Hybrid.hybrid() + '2'
}
