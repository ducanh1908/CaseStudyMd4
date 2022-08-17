import { model, Schema } from "mongoose";
import { IRole } from "./role";

export interface IUser {
  name?: string;
  username?: string;
  password?: string;
  phone?: string;
  email?: string;
  address?: string;
  role?: IRole;
}

const userSchema = new Schema<IUser>({
  name: String,
  username: String,
  password: String,
  email: String,
  address: String,
  phone: String,
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
  },
});

const User = model<IUser>("User", userSchema);
export { User };
