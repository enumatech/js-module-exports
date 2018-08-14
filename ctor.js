/**
 * Exported constructor (caller should `new`).
 */
module.exports = ctor

// We need to seperate the ctor from the export declaration to fix auto-complete
function ctor () {
    this.field = 'field'
}

/** Object method
 * @returns {string} the string "method"
 */
ctor.prototype.method = function () {
    return 'method'
}
