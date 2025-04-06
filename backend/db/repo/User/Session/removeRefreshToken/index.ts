import Connection from "../../../../connection";
import { EMPTY_REFRESH_TOKEN, USER_STORE } from "./constants";
import { User } from "./removeRefreshToken";

export default async function removeRefreshToken(id:string){
    const db = await Connection.getDatabase();
    const userStore = db.collection<User>(USER_STORE);
    await userStore.updateOne( {id}, EMPTY_REFRESH_TOKEN );
}