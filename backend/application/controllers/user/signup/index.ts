import {Request, Response} from "express"

import { generateUserId } from "../../../services/User/signup/generate-user-id";
import generateOtp from "../../../services/User/signup/generate-a-otp";
import assignOtpDataToUser from "../../../../db/repo/User/Otp/assignOtpDataToUser";
import assignUserOtp from "../../../services/User/signup/assign-user-otp";
import sendOtpToUser from "../../../services/User/signup/send-otp-to-user";

import { userSchema } from "./userSchema";
import { emailUserOtp } from "../../../../smtp/client/User/emailUserOtp";
import addAUser from "../../../services/User/signup/add-user";
import hashPassword from "../../../services/User/signup/hash-password";
import addAUserInDb from "../../../../db/repo/User/addAUserInDb";

export default async function signup (request: Request, response: Response){
    const { body } = request;
    const user = userSchema.parse( body );

    const id = generateUserId( user.email );
    const otp = generateOtp();

    await assignUserOtp({
        assignOtpDataToUser,
        userId: id,
        otp
    });

    await sendOtpToUser({
        emailUserOtp,
        email: user.email,
        otp
    });

    await addAUser({ user:{...user, id, valid: false}, addAUserInDb, hashPassword });

    response.status(201).json({
        status: "success",
        message: "User created successfully",
        data: {
            userId: id
        }
    });
}