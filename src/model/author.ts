import { Schema, model } from "mongoose";

interface IAuthor{
    name : string;
    yearOfBirth: string;
    worksAmount: {
        type: number,
        default : 0
    };
    nationality: string;
    linkWiki : string;
    image: string;
}

const authorSchema = new Schema<IAuthor>({
    name : String,
    yearOfBirth: String,
    worksAmount: {
        type: Number,
        default : 0
    },
    nationality: String,
    linkWiki : String,
    image: String,
})

const Author = model<IAuthor>('author', authorSchema);

export {Author}