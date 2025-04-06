import user from "./user";
import { Router } from "express";

const v1 = Router();

v1.use( '/user', user )

export default v1;