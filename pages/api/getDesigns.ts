import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import urlFor from "../../sanity/lib/image";
import type { NextApiRequest, NextApiResponse } from "next";
import { Design } from "@/typings";

const query = groq`*[_type == "design"]`;

type Data = {
  designs: Design[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const designs: Design[] = await client.fetch(query);
  res.status(200).json({ designs });
}
