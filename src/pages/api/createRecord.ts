import { NextApiResponse, NextApiRequest } from "next";
import axiosInstance from "./axiosInstance";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  const data = JSON.parse(JSON.parse(JSON.stringify(req.body)));
  const recordData = {
    punch_addr: data.punch_addr,
    punch_notes: data.punch_notes,
    punch_type: data.punch_type,
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
        return res.status(200).json({
          message: result.statusText,
        });
      else return null;
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: "create record error --- Internal Server Error" });
    });
}
