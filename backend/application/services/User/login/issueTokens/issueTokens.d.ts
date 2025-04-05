export type GenerateToken = {
    payload : Record<string, any>,
    expiresIn: number | ms.StringValue
}