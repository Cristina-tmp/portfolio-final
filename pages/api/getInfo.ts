import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import urlFor from "../../sanity/lib/image";
import type { NextApiRequest, NextApiResponse } from "next";
import { PageInfo } from "@/typings";

const query = groq`*[_type == "pageInfo"]`;

type Data = {
  pageInfo: PageInfo[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo[] = await client.fetch(query);
  res.status(200).json({ pageInfo });
}
