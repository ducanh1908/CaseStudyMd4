
import { Response, Request } from "express";
import { Cart } from "../model/cart";
import { User } from "../model/user";

class CartController {
    getCart = async(req: Request, res: Response)=>{
        let carts = await Cart.find().populate({
            path:"orders.book", select:"name price total"
        })
        res.status(200).json(carts);
    }
    addCart = async (req: Request, res: Response)=>{
            let users = '62fee7c81e6b1da9fea2ce3a'
        const {  
            books, subtotal,user
        } = req.body;
        const quantity = Number.parseInt(req.body.quantity);
            // -------Get users Cart ------
            let cart = await Cart.findOne({users})
    }
    
}
export default new CartController();