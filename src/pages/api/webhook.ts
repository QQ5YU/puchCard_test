import { NextApiResponse, NextApiRequest } from "next";
import { messagingApi } from "@line/bot-sdk";
const { MessagingApiClient } = messagingApi;

const port = process.env.PORT || 3002;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new MessagingApiClient({
    channelAccessToken:
      "HU/HzRXIEtiyvDQ/E8ejetrN8Vi8xE/+9bod5L7EWeJ2d+BxIteObuMINmhfmYwRBzq3u2fjbn+/eE1OiaZ2XrMfXuq+lEtNAsa0SVuPSXZGeEDkETJNDR8guTatlK+7PLIJHjkYD1ltFDAtO0AtEAdB04t89/1O/w1cDnyilFU=",
  });

  // 处理 LINE Webhook 事件
  if (req.method === "POST") {
    console.log(JSON.stringify(req.body));
    const userId = req.body.events[0].source.userId;
    console.log(userId);
    
    res.status(200).json({ message: "Received LINE Webhook event" });
    client
      .pushMessage({
        to: userId,
        messages: [{ type: "text", text: "hello, world" }],
      })
      .then(() => {
        console.log("Sent message");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.status(405).end();
  }
}
