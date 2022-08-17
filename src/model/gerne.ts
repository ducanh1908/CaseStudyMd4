import { model, Schema } from "mongoose";

export interface IGerne{
    name?:string
}
const gerneSchema = new Schema<IGerne>({
    name:String
})
const Gerne = model<IGerne>('gerne',gerneSchema);
export {Gerne}