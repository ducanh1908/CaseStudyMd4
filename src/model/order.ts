import { Schema,model } from "mongoose";
import { IBook } from "./book";

export interface IOrder {
    book : IBook;
    quantity : number;
    price : number;
    total: number;
}
const orderSchema = new Schema<IOrder>({
    book: {
        type: Schema.Types.ObjectId,
        ref :'Book'
    },
    quantity : Number,
    price : Number,
    total : Number
})

const Order = model<IOrder>('order', orderSchema);
export {Order}