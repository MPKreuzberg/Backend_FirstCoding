import mongoose from "mongoose"

const Schema = mongoose.Schema


// user document structure
const usersSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// create collection and store such type of documents in that collection

const UsersCollection = mongoose.model("users", usersSchema)

// Create index

UsersCollection.createIndexes({ email: -1 })

export default UsersCollection;