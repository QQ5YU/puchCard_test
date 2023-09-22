import axiosInstance from "./axiosInstance";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = JSON.parse(Object.keys(req.body)[0]);
    axiosInstance
      .put("/api/ForgetPassword/RestPassword", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((result) => {
        if (result.status === 200) {
          return res.status(200).json({ message: result.data.message });
        }
      })
      .catch((err) => {
        console.log("err---------------------", err);
        return res.status(err.response.status).json({
          message: err.response.data.message,
        });
      });
  } catch (err) {
    console.log("error on reset password ------------", err);
    return res.status(500).json({ error: err });
  }
}
