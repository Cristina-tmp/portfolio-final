import { Design } from "@/typings";

const base_url = "http://localhost:3001/";
export const fetchDesigns = async () => {
  const res = await fetch(`${base_url}api/getDesigns`);
  const data = await res.json();
  const designs: Design[] = data.designs;
  return designs;
};
