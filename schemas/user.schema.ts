import * as mongoose from "mongoose";
import IUser from "../models/user";

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true, maxlength: 20 },
    lastname: { type: String, required: true, maxlength: 20 },
    email: { type: String, required: true, maxlength: 20 }
})

const User = mongoose.model<IUser>('User', userSchema);

export default User