import * as mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    questinRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    likes: { type: Number, default: 0 }
})

const Answer = mongoose.model('Answer', answerSchema);

export default Answer