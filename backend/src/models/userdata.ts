import mongoose from "mongoose";

const schema = mongoose.Schema;

const DetailsSchema = new schema({
  Seller: {
    required: true,
    type: String,
  },
  Buyer: {
    required: true,
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

const modelDetailschema = mongoose.model("SellerBuyer", DetailsSchema);

export default modelDetailschema;