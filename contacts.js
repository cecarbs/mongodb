import { UUID } from "mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const contactSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
});

export default mongoose.model("Contact", contactSchema);
