import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const mongoConnectString = process.env.MONGO_URL;

if (!mongoConnectString) {
  throw new Error('MONGO_URL is not defined in the environment variables');
}

let client;

export async function dbConnection() {
  if (!client) {
    client = new MongoClient(mongoConnectString);
    await client.connect();
    console.log("MongoDB connected successfully");
  }
  return client;
}

export { ObjectId, client };
