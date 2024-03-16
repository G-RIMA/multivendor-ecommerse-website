import mongoose from "mongoose";
const ObjectID = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
    owner: {
        type: ObjectID,
        required: true,
        ref: 'Vendor'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: Buffer,
        required: true
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;