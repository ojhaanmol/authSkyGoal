import Connection from "../../../../connection"
import { UserOtp } from "./assignOtpDataToUser";
import { OTP_STORE } from "./constants";

export default async function assignOtpDataToUser(userOtp: UserOtp){
    const db = await Connection.getDatabase();
    const collection = db.collection(OTP_STORE);
    await collection.insertOne(userOtp)
}