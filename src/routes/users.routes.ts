import { Router } from "express";
import {createUser, updateUser, getAllUserss, deleteUser } from "../controllers/users.controller";

const router = Router()

router.post('/users', createUser)

router.get('/users', getAllUserss)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)


export default router