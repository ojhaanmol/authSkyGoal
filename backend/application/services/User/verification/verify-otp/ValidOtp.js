"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidOtp = ValidOtp;
function ValidOtp({ validOtp, otp }) {
    return validOtp === otp;
}
