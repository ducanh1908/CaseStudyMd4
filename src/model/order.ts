import { Schema, model } from "mongoose";


import { IBook } from "./book";
export interface IOrder {
    books: IBook;
    quantity : number;
    price : number;
   
}
const orderSchema = new Schema<IOrder>({
    books: [{
        type: Schema.Types.ObjectId,
        ref :'Book'
    }],
    quantity : Number,
    price : {
        type: Number,
        required: true
    },

},
{
    timestamps: true
}
)


const Order = model<IOrder>('order', orderSchema);
export {Order}
