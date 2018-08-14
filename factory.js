/**
 * Exported factory method.
 */
module.exports = function factory () {
    return new ctor()
}

function ctor () {
    this.field = 'field'
}

/** Object method
 * @returns {string} the string "method"
 */
ctor.prototype.method = function () {
    return 'method'
}
