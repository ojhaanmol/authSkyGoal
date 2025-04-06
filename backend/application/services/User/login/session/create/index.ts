import { CreateSession } from "./create";

export default async function create({addRefreshToken, user}: CreateSession){
    await addRefreshToken( user )
}