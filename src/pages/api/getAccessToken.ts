import { NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "./axiosInstance";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const authData = await JSON.parse(req.body);
    axiosInstance
      .post("/api/token/signIn/", authData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        return res.status(200).json({ data: result.data });
      })
      .catch((err) => {
        return res
          .status(500)
          .json({ message: "getAccessToken Axios error: ", err });
      });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "getAccessToken error", error: err });
  }
}
