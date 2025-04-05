import { JWT_REFRESH_EXPIRES_IN } from "./constants";
import { generateToken } from "./generateToken";


export default function generateRefreshToken(id:string){
    return generateToken( {payload: {id}, expiresIn: JWT_REFRESH_EXPIRES_IN} )
}