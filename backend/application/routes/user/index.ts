import { Router } from "express"; 
import signup from "../../controllers/user/signup"
import verification from "../../controllers/user/verification";
import login from "../../controllers/user/login";

const userRoute = Router();

userRoute.post( '/signup', signup );
userRoute.post( '/verify', verification );
userRoute.post( '/login', login );

export default userRoute;