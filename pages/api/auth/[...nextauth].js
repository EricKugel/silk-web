import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "../../../helpers/mongohelper";
import { compare, hash } from "bcryptjs";
import User from "../../../models/user";

export const authOptions = {
    secret: 
}