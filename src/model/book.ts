import { model, Schema } from 'mongoose';
import { IGerne } from "./gerne";
import {IAuthor} from "./author"


export interface IBook {
    name?: string;
    author?: IAuthor
    yearOfPublish?: number;
    reprint?: number;
    ISBN?: number;
    description?: string;
    image?: string;
    gerne?:IGerne
    price?:number;
    publisher?:string
}

const bookSchema = new Schema<IBook>({
    name: String,
    publisher: String,
    yearOfPublish: Number,
    reprint: Number,
    ISBN: Number,
    description:String,
    image: String,
    gerne:{
        type:Schema.Types.ObjectId,
        ref:'gerne'
    },
    author:{
      type:Schema.Types.ObjectId,
      ref:'author'
    },
    price:String
})
const Book = model<IBook>('Book',bookSchema)
export {Book}