import * as mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    topicRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
    title: { type: String, required: true, maxlength: 150 },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }]
})

const Question = mongoose.model('Question', questionSchema);

export default Question