import Connection from "../../../../connection";
import { OTP_STORE, REDUCTION } from "./constants";

export default async function decrementRetries(userId: string){
    const db = await Connection.getDatabase()
    const otpStore = db.collection(OTP_STORE)
    await otpStore.updateOne(
      { userId: userId },
      { $inc: { maxRetries: REDUCTION } }
    );
}