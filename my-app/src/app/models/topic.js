import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        pid: String,
        state: Number,
        row: Number,
        col: Number,
    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;