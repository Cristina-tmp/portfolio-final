import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = "817y7qc1";
const dataset = "production";
const apiVersion = " 2023-06-24";
const base_url = "http://localhost:3001/";

export const config = {
  dataset: dataset,
  projectId: projectId,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: apiVersion,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
