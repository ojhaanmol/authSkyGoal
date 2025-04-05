import { FetchUser } from "./fetchUserData";

export default async function fetchUser ({ id, getUserById }: FetchUser){
    return await getUserById( id );
}