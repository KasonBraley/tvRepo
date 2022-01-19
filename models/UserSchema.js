const mongoose = require("mongoose")
const ShowModel = require("./ShowSchema")

const UserSchema = new mongoose.Schema({
    userEmail: { type: "String", required: true }, // unique id
    userPassword: { type: "String", required: true },
    userIsLoggedIn: { type: "Boolean", required: true },
    userShows: { type: [ShowModel.ShowSchema], required: true },
})

module.exports = mongoose.model("User", UserSchema)
