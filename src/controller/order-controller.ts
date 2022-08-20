import { Schema, model } from "mongoose";
import { NextFunction, Request, Response } from "express";
import { Book } from "../model/book";
import { Order } from "../model/order";

class Ordercontroler {
    createOrder = async(req: Request, res: Response)=>{
        let id = req.params.id
      await  Book.findOne({_id:id})
        .then(book =>{
            new Order({book:[book]}).save()
        });
    }
}
export default new Ordercontroler();