import { Request, Response } from "express";
import { UserSchema } from "../entity/UserSchema";
import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";

export async function createUser(req: Request, res: Response){
    try{
        if (!req.body.password || !req.body.username) {
            return res.status(400).json({Message: "Envie nombre de usario y contraseña"})
        }
        const {username, password, money} = req.body;
        const salt = await bcrypt.genSalt(10)
        
        const user = new UserSchema();
        user.username = username;
        user.password = await bcrypt.hash(password, salt);
        user.money = money;
        
        await user.save()
    
        return res.status(201).json(user)

    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }
}

export async function login(req: Request, res: Response){
    try{
        if (!req.body.password || !req.body.username) {
            return res.status(400).json({Message: "Envie nombre de usario y contraseña"})
        }

        const user = await UserSchema.findOneBy({username: req.body.username})

        if (!user) {
            return res.status(400).json({Message: "Usuario no encontrado"})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (isMatch) {
            return res.status(200).json({token: await createToken(user) })
        }
        
        return res.status(400).json({Message: "La contraseña es incorrecta"})
    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }
    
}

export async function getAllUserss(req: Request, res: Response) {
    
    try{
        const users = await UserSchema.find()
        return res.json(users)
        
    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }
}

export async function updateUser(req: Request, res: Response) {
    
    try{
   
        const {id} = req.params
        
        const user = await UserSchema.findOneBy({id: parseInt(id)})
        if (!user) return res.status(404).json({message: "Usuario no existe"})
        
        await UserSchema.update({id: parseInt(id)}, req.body);
        
        return res.sendStatus(204)

    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }


}

export async function deleteUser(req: Request, res: Response){
    try{
        const {id} = req.params
        const result = await UserSchema.delete({id: parseInt(id)}) 
        if(result.affected === 0){
            res.status(404).json({message: "Usuario no encontrado"})
        }
        return res.sendStatus(204)

    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }
}

async function createToken(user: UserSchema) {
    return Jwt.sign({id: user.id, username: user.username}, 'mySecret')
}