import { model, Schema } from "mongoose";

export interface IPublisher{
    name?:string
}
const publisherSchema = new Schema<IPublisher>({
    name:String
})
const Publisher = model<IPublisher>('publisher',publisherSchema)
export {Publisher}