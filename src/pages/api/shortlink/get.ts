import { WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { collectionDb } from "../../../config/mongo-db";

interface IResultGetLink extends WithId<Document> {
  url: string;
  createdAt: string;
  shortUrl: string;
};

async function getShortUrl(shortUrl: string) {
  const db = await collectionDb("links");
  const result = await db.findOne<IResultGetLink>({ shortUrl: shortUrl });
  
  return result?.url;
}

export default async function getShortLink(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { shortUrl } = req.query;

    if (!shortUrl) {
      return res.status(400).json({ message: "ShortUrl field is required" });
    }

    const getUrl = await getShortUrl(shortUrl as string);

    if (getUrl) {
      return res.status(200).json({ getUrl, message: "Success" });
    } else {
      return res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
