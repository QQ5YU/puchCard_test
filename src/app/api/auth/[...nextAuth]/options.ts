import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { EmployeeId, Password } = credentials as {
          EmployeeId: string;
          Password: string;
        };
        const url = "http://20.243.17.49:83/api/token/signIn/";
        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ EmployeeId, Password }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (res.ok) {
          return data.access_token;
        } else {
          throw new Error(
            `LogInError: status: ${res.status} , ${data.message}`
          );
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: { signIn: "/login" },
};
