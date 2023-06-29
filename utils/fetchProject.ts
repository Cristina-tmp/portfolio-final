import { Project } from "@/typings";

const base_url = "http://localhost:3001/";
export const fetchProjects = async () => {
  const res = await fetch(`${base_url}api/getProjects`);
  const data = await res.json();
  const projects: Project[] = data.projects;
  return projects;
};
