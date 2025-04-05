export type User = {
    id: string,
    name: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    password: string,
    valid: boolean,
}

export type AddAUserInDb = ( user: User ) => Promise<string>;
export type Hash = ( word: string ) => string;

export type AddAUser = {
    user: User;
    addAUserInDb: AddAUserInDb;
    hashPassword: Hash;
}