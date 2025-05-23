import {Request, Response} from "express";
import fetchUser from "../../../services/User/login/fetchUserData";
import getUserById from "../../../../db/repo/User/getUserById";
import verify from "../../../services/User/login/validatePassword";
import generateAccessToken from "../../../services/User/login/issueTokens/generateAccessToken";
import generateRefreshToken from "../../../services/User/login/issueTokens/generateRefreshToken";
import verifyUser from "../../../services/User/login/validUser";
import { userSchema } from "./userSchema";
import addRefreshToken from "../../../../db/repo/User/Session/addRefreshToken";
import create from "../../../services/User/login/session/create";

export default async function login (request:Request, response:Response){

    const {id, password: validatingPassword } = userSchema.parse( request.body );
    const {valid, password: validPasswordHash}  = await fetchUser( { id, getUserById } );

    verifyUser( valid );

    const password = { validPasswordHash, validatingPassword };
    await verify( password );

    const accessToken = generateAccessToken( id )
    const refreshToken = generateRefreshToken( id );

    const session = { user: {id, refreshToken}, addRefreshToken };
    await create(session)

    response.json({
        accessToken,
        refreshToken
    })
}