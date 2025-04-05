import { AddAUser } from "./add-a-user";

export default async function addAUser({ user, addAUserInDb, hashPassword }: AddAUser){
    user.password = hashPassword( user.password );
    return await addAUserInDb( user );
}