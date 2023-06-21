import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    // 깃허브 auth 사용하는 provider
    GithubProvider({
      clientId: "6b2d3797324049b0b072",
      clientSecret: "740a890bc6131ce34484326c5211b61f60b77738",
    }),
  ],
  secret: "1234",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
