import { Router } from "express";
import { login } from "../controllers/users.controller";
import passport from "passport";
const router = Router()


router.post('/login', login)
export default router