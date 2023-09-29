import { NextApiResponse, NextApiRequest } from "next";
import axiosInstance from "@/pages/api/axiosInstance";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import qs from "qs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    const data = JSON.parse(JSON.parse(JSON.stringify(req.body)));
    // console.log(session.user.accessToken);
    const recordData = {
      id: Number(data.id),
      notes: data.notes,
      img: data.img,
      type: data.type,
    };

    console.log(data);

    axiosInstance
      .put("/api/PunchEdit/", recordData, {
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
          .json({ message: "modify record error --- Internal Server Error" });
      });
  } catch (err) {
    console.log(err);
  }
}
