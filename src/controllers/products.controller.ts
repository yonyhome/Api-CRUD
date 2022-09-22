import { Request, Response } from "express";
import { ProductSchema } from "../entity/ProductSchema";


export async function createProduct(req: Request, res: Response){
    try{
        const {name, categoryName, price, quantity} = req.body;
        
        const product = new ProductSchema();
        product.name = name;
        product.categoryName = categoryName;
        product.price = price;
        product.quantity = quantity;
        
        await product.save()
    
        return res.json(product)

    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }
    
}

export async function getAllProducts(req: Request, res: Response) {
    
    try{
        const products = await ProductSchema.find()
        return res.json(products)
        
    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }
}

export async function updateProducts(req: Request, res: Response) {
    
    try{
   
        const {id} = req.params
        
        const products = await ProductSchema.findOneBy({id: parseInt(id)})
        if (!products) return res.status(404).json({message: "Producto no existe"})
        
        await ProductSchema.update({id: parseInt(id)}, req.body);
        
        return res.sendStatus(204)

    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }


}

export async function deleteProduct(req: Request, res: Response){
    try{
        const {id} = req.params
        const result = await ProductSchema.delete({id: parseInt(id)}) 
        if(result.affected === 0){
            res.status(404).json({message: "Producto no encontrado"})
        }
        return res.sendStatus(204)

    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }
}

export async function getOneProduct(req: Request, res: Response){
    try{
        const {id} = req.params
        const product = await ProductSchema.findOneBy({id: parseInt(id)}) 
        return res.status(200).json(product)

    }catch(err){
        if (err instanceof Error) {
            return res.status(500).json({Message: err.message})
        }
    }
}