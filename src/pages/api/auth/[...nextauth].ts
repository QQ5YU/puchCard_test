import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import axiosInstance from "../axiosInstance";
interface AuthData {
  employeeId: string;
  password: string;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          const { employeeId, password } = credentials as AuthData;
          const authData = {
            employeeId: employeeId,
            password: password,
          };
          const res = await axiosInstance.post("/api/token/signIn/", authData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.statusText === "OK") {
            const jwtToken: string = res.data.access_token;
            return {
              user: {
                employeeId: employeeId,
                accessToken: jwtToken,
              },
            } as any;
          }
          return null;
        } catch (err) {
          console.log("AUTH_ERROR: ", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      // console.log("--------- token ----------", { ...token });
      // console.log("--------- user -------: ", { ...user });
      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      session.user.employeeId = token.user.employeeId;
      session.user.accessToken = token.user.accessToken;
      // console.log("--------- session ----------", session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: { signIn: "/login" },
};

export default NextAuth(authOptions);
