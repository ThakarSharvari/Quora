import { model, Schema } from "mongoose";

const question_schema = new Schema({
    userRef: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    topicRef: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    title: { type: String, required: true, maxlength: 150 },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }]
})

const Question = model('Question', question_schema);

export default Question