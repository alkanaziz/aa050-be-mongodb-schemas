import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bands: [String],
    instrument: String,
    albums: [
        {
            title: String,
            year: Number
        },
    ],
    birthday: { type: Date, required: true },
    createdOn: { type: Date, default: Date.now(), immutable: true }
})

const User = model('User', userSchema);

export default User;