import Connection from "../../../../connection";
import { USER_STORE } from "./constants";

export type User = {
    id: string;
    refreshToken: string;
};

export default async function addRefreshToken(user: User){
    const db = await Connection.getDatabase();
    const userStore = db.collection<User>(USER_STORE);
    await userStore.updateOne(
        {id: user.id},
        { $set: { refreshToken: user.refreshToken  } }
    );
}