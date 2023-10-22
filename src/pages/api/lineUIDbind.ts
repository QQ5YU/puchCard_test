import { NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "@/pages/api/axiosInstance";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    const userData = {
      line_name: session.user.name,
      line_uid: session.user.userId,
    };

    try {
      axiosInstance
        .post("/api/LineBinding", userData, {
          headers: { "Content-Type": "application/json" },
        })
        .then((result) => {
          return res.status(200).json({ data: result.data });
        })
        .catch((err) => {
          return res
            .status(500)
            .json({ message: "LINE UID BIND AXIOS ERROR", error: err });
        });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "LINE UID BIND AXIOS ERROR", error: err });
    }
  } catch (err) {
    return res.status(500).json({ message: "LINE UID BIND ERROR", error: err });
  }
}
