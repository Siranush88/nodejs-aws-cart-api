"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCartTotal = void 0;
/**
 * @param {Cart} cart
 * @returns {number}
 */
function calculateCartTotal(cart) {
    return cart
        ? cart.items.reduce(function (acc, _a) {
            var price = _a.product.price, count = _a.count;
            return (acc += price * count);
        }, 0)
        : 0;
}
exports.calculateCartTotal = calculateCartTotal;
