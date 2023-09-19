import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
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
          const url = "http://20.243.17.49:83/api/token/signIn/";
          const authData = {
            employeeId: employeeId,
            password: password,
          };
          const res = await axios.post(url, authData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.statusText === "OK") {
            console.log({ ...credentials });
            const jwtToken: string = res.data.access_token;
            return { ...credentials, jwt: jwtToken } as any;
          }
          return null;
        } catch (err) {
          console.log("AUTH_ERROR: ", err);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: { signIn: "/login" },
};

export default NextAuth(authOptions);
