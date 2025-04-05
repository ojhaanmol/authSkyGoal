import { PIN_STRENGTH } from "./constants";
import crypto from "crypto";

export default function generateOtp(){
  const max = Math.pow(10, PIN_STRENGTH);
  const otp = crypto.randomInt(0, max);
  return otp.toString().padStart(PIN_STRENGTH, '0');
}
