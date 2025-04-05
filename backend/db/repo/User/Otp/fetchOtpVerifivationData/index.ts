import Connection from "../../../../connection";
import { OTP_STORE } from "./constants";
import { OtpStore } from "./fetchOtpVerifivationData";

export default async function fetchOtpVerificationData(identifire: string) {
    const db = await Connection.getDatabase();
    const collection = db.collection<OtpStore>(OTP_STORE);
    return (await collection.findOne({ userId: identifire }) as OtpStore );
}