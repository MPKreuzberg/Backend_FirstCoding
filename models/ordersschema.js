import mongoose from "mongoose"

const Schema = mongoose.Schema;


// order document structure
const orderSchema = new Schema({
    //records:{type:Array, required:true}
    records: [{type:String, required:true}],
    totalPrice: {type:Number, required:true}
   
});

// create collection and store such type of documents in that collection

const OrdersCollection = mongoose.model("orders", orderSchema)



export default OrdersCollection;