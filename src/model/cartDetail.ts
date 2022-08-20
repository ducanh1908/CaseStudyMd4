import { Schema,model } from "mongoose";
import { IOrder } from "./order";
import { IUser } from "./user";
import { IBook } from "./book";

export interface ICartDetail{
    user: IUser;
   book:IBook;
   quantity:number;

}
const cartDetailSchema = new Schema<ICartDetail>({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },

        book: {
            type: Schema.Types.ObjectId,
            ref: 'book'
        },
        quantity:Number
    }
)

const CartDetail = model<ICartDetail>('cartDetail', cartDetailSchema);
export {CartDetail}