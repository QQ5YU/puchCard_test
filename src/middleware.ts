import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/gpsLocation", "/gpsLocation/:path*", "/recordsSearch/:path*"],
};
