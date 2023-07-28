import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { collectionDb } from "../../../config/mongo-db";

interface IRegisterRequest {
  url: string;
}

async function saveShortUrl(url: string, shortUrl: string) {
  const db = await collectionDb("links");
  const createdAt = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const result = await db
    .insertOne({ url, createdAt, shortUrl })
    .then((result) => true)
    .catch((err) => false);

  return result;
}

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { url }: IRegisterRequest = JSON.parse(req.body);

    if (!url) {
      return res.status(400).json({ message: "Url field is required" });
    }

    const shortUrl = crypto.randomBytes(4).toString("hex");

    const saveUrl = await saveShortUrl(url, shortUrl);

    if (saveUrl) {
      return res.status(200).json({ shortUrl, message: "Success" });
    } else {
      return res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
