import { Schema,model } from "mongoose";
import { IBook } from "./book";
import { IOrder } from "./order";
import { IUser } from "./user";

export interface ICart {
    user: IUser;
    orders : IOrder;
    subtotal: number;
    status: string;
}
const cartSchema = new Schema<ICart>({
    user :  {
        type: Schema.Types.ObjectId,
        ref :'User'
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref :'Order'
    }],
    
    subtotal : {
        type: Number,
        default:0,
        required: true,
    },
    status: String
},
{timestamps: true},

)

const Cart = model<ICart>('cart', cartSchema);
export {Cart}