import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosInstance from "../axiosInstance";

interface AuthData {
  employeeId: string;
  password: string;
}

export const authOptions = {
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID || "",
      clientSecret: process.env.LINE_CLIENT_SECRET || "",
    }),
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
    async redirect({ baseUrl }: any) {
      return baseUrl + "/gpsLocation";
    },
    async jwt({ token, user, trigger, session }: any) {
      if (trigger === "update" && session?.user.accessToken) {
        token.accessToken = session.user.accessToken;
      }
      // console.log("--------- {token} ----------", { ...token });
      // console.log("--------- user -------: ", { ...user });
      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      // console.log("--------- session token ----------", token);

      if (session.user.name === undefined) {
        if (token.user.employeeId) {
          session.user.employeeId = token.user.employeeId;
          session.user.accessToken = token.user.accessToken;
        }
      }

      if (token.id) {
        session.user.userId = token.id;
        session.user.accessToken = token.accessToken;
      }
      // console.log("--------- session ----------", session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: { signIn: "/login" },
};

export default NextAuth(authOptions);
