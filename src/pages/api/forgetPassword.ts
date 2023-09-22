import axiosInstance from "./axiosInstance";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.url) {
      const reqUrl = new URL(`${process.env.NEXT_PUBLIC_HOST_URL}${req.url}`);
      const getData = {
        email: reqUrl.searchParams.get("email"),
        employeeId: reqUrl.searchParams.get("employeeId"),
      };
      if (!getData.email || !getData.employeeId)
        return res.status(404).json({ message: " missing info" });

      console.log(process.env.NEXT_PUBLIC_HOST_URL);
      axiosInstance
        .get("/api/ForgetPassword/Send", {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            email: getData.email,
            employeeId: getData.employeeId,
            // C109118108@nkust.edu.tw
            // 0534
          },
        })
        .then((result) => {
          console.log("res-------------------------------", result);
          if (result.status === 200) {
            return res.status(200).json({
              message: result.data.message,
              verifyCode: result.data.data,
              email: getData.email,
            });
          }
        })
        .catch((err) => {
          console.log("err-------------------------", err);
          return res.status(err.response.status).json({
            message: err.response.data.message,
          });
        });
    }
  } catch (e) {
    return res.status(500).json({
      message: "forgetPassword Error ------- " + e,
    });
  }
}
