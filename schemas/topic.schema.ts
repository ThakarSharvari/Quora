import * as mongoose from "mongoose";

const titleSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 50 }
}
    //{ versionKey: '_v1' }
)

const Topic = mongoose.model('Topic', titleSchema);

export default Topic