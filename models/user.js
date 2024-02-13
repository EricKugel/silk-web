import { Schema, model, models } from "mongoose";

export const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

const User = models?.User || model("User", UserSchema);