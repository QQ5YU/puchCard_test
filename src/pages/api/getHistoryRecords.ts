import { NextApiResponse, NextApiRequest } from "next";
import axiosInstance from "@/pages/api/axiosInstance";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    // console.log(session);
    const token = session.user.accessToken;
    // console.log(" --------------- token ----------------", token);
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
        if (err.response.status === 401) {
          return res
            .status(401)
            .json({ status: 401, message: "登入超時，請重新登入" });
        } else
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
