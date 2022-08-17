import { Schema, model } from "mongoose";
import { IOrder } from "./order";
import { IUser } from "./user";
export interface ICart {
    user : IUser;
    order : IOrder;
    total : number;
}

const cartSchema = new Schema<ICart>({
    user : {
        type: Schema.Types.ObjectId,
        ref : 'User',
    },
    order : {
        type : Schema.Types.ObjectId,
        ref :'Order',
    },
    total : Number,
});
const Cart = model<ICart>('cart', cartSchema);

export {Cart};