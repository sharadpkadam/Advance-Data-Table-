import { Schema, model } from "mongoose";

const productSchema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    category: {type: String, required: true},
    subcategory: {type: String, required: true},
    createdAt: {type: Date, required: true},
    updatedAt:{type: Date, required: true},
    price: {type: Number, required: true},
    sale_price: {type: Number, required: true},
  });

export default model('Product', productSchema);
