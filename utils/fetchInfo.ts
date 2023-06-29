import { PageInfo } from "@/typings";

//const base_url = "http://localhost:3001/";
export const fetchInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getInfo`);
  const data = await res.json();
  const pageInfo: PageInfo[] = data.pageInfo[0];
  return pageInfo;
};
