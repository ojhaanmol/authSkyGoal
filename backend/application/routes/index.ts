import { Router } from "express";
import api from "./api";
import userRoute from "./user";

const rootRouter = Router();

rootRouter.use('/api', api);
rootRouter.use('/user', userRoute)

export default rootRouter