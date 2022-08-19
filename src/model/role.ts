import { model, Schema } from "mongoose";

export interface IRole{
name? : string
}

const RoleSchema = new Schema<IRole> ({
   name: String
})

const Role = model<IRole>('Role', RoleSchema);
export {Role};