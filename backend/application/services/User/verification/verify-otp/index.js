"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailOtpVerificationError = void 0;
exports.default = emailOtpVerification;
const constants_1 = require("./constants");
const Expired_1 = require("./Expired");
const RetriesExhausted_1 = require("./RetriesExhausted");
const ValidOtp_1 = require("./ValidOtp");
function emailOtpVerification(_a) {
    return __awaiter(this, arguments, void 0, function* ({ fetchOtpVerificationData, otp, identifire }) {
        const { otp: validOtp, expirationTime, maxRetries } = yield fetchOtpVerificationData(identifire);
        if ((0, RetriesExhausted_1.RetriesExhausted)(+maxRetries))
            throw new EmailOtpVerificationError(constants_1.EXHAUSTED_RETRIES);
        if ((0, Expired_1.Expired)(+expirationTime))
            throw new EmailOtpVerificationError(constants_1.EXPIRED);
        if (!(0, ValidOtp_1.ValidOtp)({ otp, validOtp }))
            throw new EmailOtpVerificationError(constants_1.INVALID_OTP);
        return validOtp;
    });
}
class EmailOtpVerificationError extends Error {
    constructor({ exhaustedRetries = false, expired = false, invalid = false }) {
        super();
        this.name = constants_1.DEFAULT_VERIFICATION_ERROR_NAME;
        this.message = constants_1.DEFAULT_VERIFICATION_ERROR_MESSAGE;
        if (exhaustedRetries)
            this.message = constants_1.RETRIES_EXHAUSTED_MESSAGE;
        else if (expired)
            this.message = constants_1.EXPIRED_MESSAGE;
        else if (invalid)
            this.message = constants_1.OTP_INVALID_MESSAGE;
    }
}
exports.EmailOtpVerificationError = EmailOtpVerificationError;
