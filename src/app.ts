import express from "express"
import "reflect-metadata"
import passport from "passport"
import passportMiddleware from "./middelwares/passport"

import userRoutes from './routes/users.routes'
import productRoutes from './routes/products.routes'
import purchaseRoutes from './routes/Purchases.routes'
import authRoutes from './routes/auth.routes'


const app = express()


//puerto de variable de entorno o 4000
app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(passport.initialize())
passport.use(passportMiddleware)



app.use(userRoutes)
app.use(productRoutes)
app.use(purchaseRoutes)
app.use(authRoutes)

module.exports =  app