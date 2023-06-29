import { Project } from "@/typings";

//const base_url = "http://localhost:3001/";
export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getProjects`);
  const data = await res.json();
  const projects: Project[] = data.projects;
  return projects;
};
