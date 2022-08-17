import { Schema, model } from "mongoose";

export interface IRole {
    name : string;
}

const roleSchema = new Schema<IRole>({
    name: String
});

const Role = model<IRole>('role', roleSchema);

export {Role}