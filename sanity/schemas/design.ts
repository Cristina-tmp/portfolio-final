import { defineType } from "sanity";

export default defineType({
  name: "design",
  title: "Design",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "summary",
    //   title: "Summary",
    //   type: "text",
    // },

    // {
    //   name: "dateStarted",
    //   title: "DateStarted",
    //   type: "date",
    // },

    // {
    //   name: "techStack",
    //   title: "TechStack",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "skill" } }],
    // },

    // {
    //   name: "linkToBuild",
    //   title: "LinkToBuild",
    //   type: "url",
    // },
  ],
});
