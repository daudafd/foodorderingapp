    import mongoose from "mongoose";

    const OrderSchema = new mongoose.Schema({
        customer: {
            type: String,
            required: true,
            maxlength: 60,
        },
        address: {
            type: String,
            required: true,
            maxlength: 200,
        },
        total: {
            type: String,
            required: true,
        },
        status: {
            type: number,
            default: 0,
        },
        method: {
            type: number,
            required: true,
        },
    },
        { timestamps: true }
    );

    export default mongoose.mongo.OrderSchema ||
        mongoose.model("Order", OrderSchema);