import {Request, Response} from "express";
import getUserById from "../../../../../../db/repo/User/getUserById";

import { userSchema } from "./userSchema";
export default async function user(request:Request, response: Response){
    const { id } = userSchema.parse(request.params);

    const { password, valid, ...safeUserData } = await getUserById( id );

    response.json( safeUserData );
}