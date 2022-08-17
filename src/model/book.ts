import { model, Schema } from 'mongoose';
import { IGerne } from "./gerne";
import { IPublisher } from "./publisher";


interface IBook {
    name?: string;
    author?: string;
    yearOfPublish?: number;
    reprint?: number;
    ISBN?: number;
    description?: string;
    image?: string;
    gerne?:IGerne;
    price?:number;
    publisher?:IPublisher


}

const bookSchema = new Schema<IBook>({
    name: String,
    author: String,
    yearOfPublish: Number,
    reprint: Number,
    ISBN: Number,
    description:String,
    image: String,
    gerne:{
        type:Schema.Types.ObjectId,
        ref:'Gerne'
    },
    publisher:{
      type:Schema.Types.ObjectId,
      ref:'Publisher'
    },
    price:String
})
const Book = model<IBook>('Book',bookSchema)
export {Book}