import mongoose from "mongoose"

import { DB_URI, NODE_ENV } from "../config/env.js"


if (!DB_URI) {
    throw new Error('Please define the MONGO_URI  env variable inside .env.<dev/prod>.local')
}

const connectToDb = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log("connected to db in dev mode")
    }
    catch (error) {
        console.error("Error connecting to db: ", error)
        process.exit(1)
    }
}

export default connectToDb