const mongoose = require("mongoose")

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/bink_education_dev')
        console.log("connect succesfully")
    } catch (error) {
        console.log("connect fail")
    }

}

module.exports = { connect }