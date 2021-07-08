import { model, Schema } from "mongoose";

const answer_schema = new Schema({
    questinRef: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
    userRef: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    likes: { type: Number, default: 0 }
})

const Answer = model('Answer', answer_schema);

export default Answer