import { Router } from "express";
import cartDetailController from "../controller/cart-detail-controller";

 export const cartdetailRoute = Router()
cartdetailRoute.post('',cartDetailController.addCart)
cartdetailRoute.get('/:id',cartDetailController.getCartByUserID)
cartdetailRoute.delete('/:id',cartDetailController.deleteCartId)
cartdetailRoute.put('/:id',cartDetailController.UpdateCartId)