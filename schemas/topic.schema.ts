import { model, Schema } from "mongoose";

const title_schema = new Schema({
    title: { type: String, required: true, maxlength: 50 }
}
    //{ versionKey: '_v1' }
)

const Topic = model('Topic', title_schema);

export default Topic