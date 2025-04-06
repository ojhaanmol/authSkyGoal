import addRefreshToken from "../../../../../../db/repo/User/Session/addRefreshToken"

export type User = {id:string, refreshToken: string}

export type CreateSession = {
    addRefreshToken: typeof addRefreshToken,
    user: User
}