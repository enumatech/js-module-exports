/** Regular exported function (shortest form)
 * @returns {string} the string "Regular"
 */
exports.regular = function () {
    return 'regular'
}

/** Second exported function (long form)
 * @returns {string} the string "second"
 */
module.exports.second = function () {
    return 'second'
}

/** Third exported function (seperation)
 * @returns {string} the string "third"
 */
function third () {
    return 'third'
}

exports.third = third
