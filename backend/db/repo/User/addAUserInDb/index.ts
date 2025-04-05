import Connection from "../../../connection";
import { User } from "./addAUserInDb";
import { USER_STORE } from "./constants";

export default async function addAUserInDb(user: User){
    const database = await Connection.getDatabase();
    const userCollection = database.collection(USER_STORE);
    userCollection.insertOne( user );
    return user.id
} 