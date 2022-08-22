import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    family_name : { type:String},
    given_name : {type:String},
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
    picture: { type: String }
});

export default mongoose.model("User", userSchema);