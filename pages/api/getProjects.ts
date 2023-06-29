import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import urlFor from "../../sanity/lib/image";
import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "@/typings";

const query = groq`*[_type == "project"]`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await client.fetch(query);
  res.status(200).json({ projects });
}
