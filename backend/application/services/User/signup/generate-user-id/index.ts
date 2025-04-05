export function generateUserId( email: string ){
    return email.split('@')[0]+( + new Date())
}