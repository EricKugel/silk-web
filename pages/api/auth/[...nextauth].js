import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "../../../helpers/mongohelper";
import User from "../../../models/user";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                try {
                    await connectDB();
                    const userExist = await User.findOne({ email: profile.email });
                    if (!userExist) {
                        const user = await User.create({
                            email: profile.email,
                            name: profile.name
                        });
                    }
                    return true;
                } catch (error) {
                    console.log(error);
                    throw new Error("Something went wrong");
                }
            } else {
                return true;
            }
        },
    },
};
const handler = NextAuth(authOptions);

export default handler;