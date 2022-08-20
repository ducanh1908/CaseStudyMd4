import { model, Schema } from "mongoose";
import { IUser } from "./user";

export interface IRole {
    name?: string;
    user?: IUser;
}
const roleSchema = new Schema<IRole>({
    name: String,
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
});
const Role = model<IRole>('role', roleSchema);
export {Role}