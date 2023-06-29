import { Skill } from "@/typings";

const base_url = "http://localhost:3001/";
export const fetchSkills = async () => {
  const res = await fetch(`${base_url}api/getSkills`);
  const data = await res.json();
  const skills: Skill[] = data.skills;
  return skills;
};
