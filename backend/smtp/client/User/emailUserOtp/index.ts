import Smtp from "../../../transporter";
import { sendMailOptions } from "./sendMailOptions";
import { SendOtp } from "./sendOtp";


export async function emailUserOtp(options: SendOtp){
    const transporter = Smtp.getTransporter();
    transporter?.sendMail(sendMailOptions( options ))
}