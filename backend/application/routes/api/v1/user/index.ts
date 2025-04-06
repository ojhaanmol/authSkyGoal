import { Router } from "express"; 
import searchUser from "../../../../controllers/api/v1/getUserDataBy/id"

const user = Router();

user.get( '/:id', searchUser )

export default user;