import { NextApiResponse, NextApiRequest } from "next";
import axiosInstance from "./axiosInstance";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import qs from "qs";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  const body = JSON.parse(req.body);

  const recordData = {
    punch_addr: body.punch_addr,
    punch_notes: body.punch_notes,
    punch_type: body.punch_type,
  };

  axiosInstance
    .post("/api/CreatePunch/", recordData, {
      headers: {
        "Access-Control-Allow-Headers": "Authorization",
        "content-type": "application/x-www-form-urlencoded",
        Authorization: session.user.accessToken,
      },
    })
    .then((result) => {
      console.log(result);
      if (result.statusText === "OK")
        return res.json({
          status: 200,
          message: result.statusText,
        });
      else return null;
    })
    .catch((err) => {
      console.log(err);
      if (err.response.status === 401)
        return res.json({ status: 401, message: "登入超時，請重新登入" });
      else
        return res
          .status(500)
          .json({ message: "create record error --- Internal Server Error" });
    });
}
