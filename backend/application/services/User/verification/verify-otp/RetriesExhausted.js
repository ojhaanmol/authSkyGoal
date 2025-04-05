"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetriesExhausted = RetriesExhausted;
function RetriesExhausted(retry) {
    return retry <= 0;
}
