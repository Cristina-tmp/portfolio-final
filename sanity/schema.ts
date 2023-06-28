import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemas/pageInfo";
import skill from "./schemas/skill";
import project from "./schemas/project";
import design from "./schemas/design";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skill, project, design],
};
