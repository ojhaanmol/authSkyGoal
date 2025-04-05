import getUserById from "../../../../../db/repo/User/getUserById";

export type FetchUser = {
    getUserById: GetUserById,
    id: string
}

export type GetUserById = typeof getUserById;
