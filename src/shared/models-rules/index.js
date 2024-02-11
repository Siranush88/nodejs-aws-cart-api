"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIdFromRequest = void 0;
/**
 * @param {AppRequest} request
 * @returns {string}
 */
function getUserIdFromRequest(request) {
    return request.user && request.user.id;
}
exports.getUserIdFromRequest = getUserIdFromRequest;
