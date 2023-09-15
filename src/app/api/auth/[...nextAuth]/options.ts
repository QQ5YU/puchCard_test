import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { employeeId, password } = credentials as {
          employeeId: string;
          password: string;
        };
        const url = "http://20.243.17.49:83/api/token/signIn/";
        const { data } = await axios
          .post(
            url,
            {
              employeeId: employeeId,
              password: password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            return res.data;
          })
          .catch((err) => {
            throw new Error(JSON.stringify(err.response.data));
          });
        return { data } as any;
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
