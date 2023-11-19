import mongoose, { Schema } from "mongoose";

const deskSchema = new Schema(
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

const Desk = mongoose.models.Desk || mongoose.model("Desk", deskSchema);

export default Desk;