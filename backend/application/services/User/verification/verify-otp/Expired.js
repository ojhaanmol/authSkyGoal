"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expired = Expired;
function Expired(expirationTime) {
    return +new Date() < expirationTime;
}
