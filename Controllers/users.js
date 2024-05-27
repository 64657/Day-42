import { client, ObjectId } from "../db.js";
import jwt from "jsonwebtoken";

export async function addUser(data) {
    return await client
        .db("URLuserData")
        .collection("users")
        .insertOne(data);
}

export async function getUser(data) {
    return await client
        .db("URLuserData")
        .collection("users")
        .findOne(data);
}

export async function getUserByID(id) {
    return await client
        .db("URLuserData")
        .collection("users")
        .findOne({ _id: new ObjectId(id) });
}

export async function resetPassword(id, data) {
    return await client
        .db("URLuserData")
        .collection("users")
        .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
}

export async function activationMail(email, data) {
    return await client
        .db("URLuserData")
        .collection("users")
        .findOneAndUpdate({ email: email }, { $set: data });
}

export async function forgotPassword(email, data) {
    return await client
        .db("URLuserData")
        .collection("users")
        .findOneAndUpdate({ email: email }, { $set: data });
}

export async function activateAccount(email, data) {
    return await client
        .db("URLuserData")
        .collection("users")
        .findOneAndUpdate({ email: email }, { $set: data });
}

export function generateToken(id, secret) {
    return jwt.sign(
        { id },
        secret,
        { expiresIn: "10m" }
    );
}

export function generateActivationToken(id, secret) {
    return jwt.sign(
        { id },
        secret,
        { expiresIn: "2d" }
    );
}

export function generateUserToken(id, secret) {
    return jwt.sign(
        { id },
        secret,
        { expiresIn: "1d" }
    );
}
