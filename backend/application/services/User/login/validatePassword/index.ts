import bcrypt from "bcrypt";
import { Password } from "./validatePassword";

export default async function verify({ validPasswordHash, validatingPassword }: Password){
    return await bcrypt.compare( validatingPassword, validPasswordHash );
}