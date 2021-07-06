import * as mongoose from "mongoose";
import user from "../models/user";

let User: user & mongoose.Document;
const userSchema = new mongoose.Schema(User)

const userModel = mongoose.model<typeof User>('users', userSchema);

export { userModel }