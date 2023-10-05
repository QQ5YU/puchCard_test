import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import axiosInstance from "@/pages/api/axiosInstance";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ViewHistoryRecordPage from "@/app/(site)/recordsSearch/viewHistory/[record]/page";

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    const token = session.user.accessToken;
    const recordId = JSON.parse(req.body);
    axiosInstance
      .get(`/api/PunchRecordSearch/${recordId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        if (result.status === 200) {
          return res.status(200).json({
            status: 200,
            recordData: result.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(err.status);
      });
  } catch (err) {
    console.log("----- ViewHistoryRecordError ----- \n", err);
  }
}
