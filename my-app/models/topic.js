import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        row: Int32,
        col: Int32,
    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;