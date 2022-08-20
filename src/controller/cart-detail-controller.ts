import { Request, Response } from "express";
import { User } from "../model/user";
import {  CartDetail } from "../model/cartDetail";

class CartDetailController {
    getCartByUserID = async (req: Request, res: Response) => {
        let id = req.params.id
        let user = await User.findById(id);
        if(!user){
            res.status(404).json;
        }else{
            let cartDetail = await CartDetail.find({"user" : {"_id": user.id}});
            res.status(200).json(cartDetail);
        }
    }
    addCart = async (req:Request,res:Response)=>{
        let cart = req.body
        let cartdetail = await CartDetail.create(cart)
        res.status(200).json
    }
    deleteCartId =async (req:Request,res:Response)=> {
        let id = req.params.id
        let cart = await CartDetail.findById(id);
        console.log(cart)
        if (!cart) {
            res.status(404).json;
        } else {
            let cartDetail = await CartDetail.deleteOne({id:id})
            res.status(200).json(cartDetail);
        }
    }
    UpdateCartId = async (req:Request,res:Response)=>{
        let id = req.params.id
        let cart = await CartDetail.findById(id);
        if(!cart){
            res.status(404).json
        }else {
            let data = req.body;
           let cartDetail = await CartDetail.findByIdAndUpdate({id:id})
            console.log(cartDetail)
            res.status(200).json(cartDetail)
        }

    }
}

export default new CartDetailController();
