import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    reviews: [{
        type: String,
    }],
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
