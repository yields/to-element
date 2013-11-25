
/**
 * Dependencies
 */

var trim = require('trim').left;
var domify = require('domify');
var query = require('query');

/**
 * Export `toElement`
 */

module.exports = toElement;

/**
 * Get a native element from `value`.
 *
 * @param {String|Element|List|jQuery} value
 * @return {Element}
 * @api public
 */

function toElement(value){
  if (value.nodeType) return value;
  if (value.get) return value.get(0);
  if (value.toElement) return value.toElement();
  if (value.el) return toElement(value.el);
  if ('string' != typeof value) return;
  if ('<' == trim(value).charAt(0)) return domify(value);
  return query(value);
}
