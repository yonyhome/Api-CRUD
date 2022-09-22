import { Router } from "express";
import { createBuy } from "../controllers/purchases.controller";
import passport from "passport";
const router = Router()

router.post('/purchases', passport.authenticate('jwt', {session: false}) ,  createBuy )


export default router