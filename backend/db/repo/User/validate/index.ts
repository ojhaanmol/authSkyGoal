import Connection from "../../../connection";
import { USER_STORE, VALIDATION } from "./constants";

export default async function validateUser(identifire: string){
    const database = await Connection.getDatabase();
    const userCollection = database.collection(USER_STORE);
    await userCollection.updateOne(
        { id: identifire },
        { $set: VALIDATION }
    );      
} 