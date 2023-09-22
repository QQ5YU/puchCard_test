import { NextApiResponse, NextApiRequest } from "next";
import axiosInstance from "@/pages/api/axiosInstance";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  try {
    const token = session.user.accessToken;

    axiosInstance
      .get("/api/PunchRecordSearch/AdminGetAllPunch", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        if (result.status === 200) {
          return res.status(200).json({
            data: result.data,
          });
        } else
          return res.status(result.status).json({ message: result.statusText });
      })
      .catch((err) => {
        console.log("err-------------------------", err);
        return res.status(err.response.status).json({
          message: err.response.data.message,
        });
      });
  } catch (err) {
    return res.status(500).json({
      message: "get History record Error ------- " + err,
    });
  }
}
