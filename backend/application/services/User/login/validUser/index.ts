import { VALIDATION_ERROR, VALIDATION_ERROR_NAME } from "./constants";

export default function validUser(valid: boolean){
    if(!valid) throw new ValidationError();
}  

export class ValidationError extends Error{
    constructor(){
        super();
        this.message = VALIDATION_ERROR
        this.name = VALIDATION_ERROR_NAME
    }
}