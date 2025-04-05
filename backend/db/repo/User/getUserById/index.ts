import Connection from "../../../connection";
import { USER_STORE } from "./constants";
import { User } from "./getUserById";  

export default async function getUserById(id:string){
    const db = await Connection.getDatabase();
    const userStore = db.collection<User>(USER_STORE);
    return ( await userStore.findOne({id}) ) as User
}