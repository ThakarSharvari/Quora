import { model, Schema } from "mongoose";

const user_schema = new Schema({
    firstname: { type: String, required: true, maxlength: 20 },
    lastname: { type: String, required: true, maxlength: 20 },
    email: { type: String, required: true, maxlength: 20 }
})

const User = model('User', user_schema);

export default User