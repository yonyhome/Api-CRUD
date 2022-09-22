import { Router } from "express";
import { createProduct, getAllProducts, updateProducts, deleteProduct, getOneProduct } from "../controllers/products.controller";
import passport from "passport";
const router = Router()

router.post('/products', passport.authenticate('jwt', {session: false}), createProduct)

router.get('/products', getAllProducts)

router.get('/products/:id', getOneProduct)

router.put('/products/:id', passport.authenticate('jwt', {session: false}), updateProducts)

router.delete('/products/:id', passport.authenticate('jwt', {session: false}), deleteProduct)


export default router