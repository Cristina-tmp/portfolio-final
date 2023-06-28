import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "pageInfo",
  type: "document",
  fields: [
    // {
    //   name: "name",
    //   title: "Name",
    //   type: "string",
    // },

    // {
    //   name: "title",
    //   title: "Role",
    //   type: "string",
    // },

    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "bgInfo",
      title: "BackgroundInfo",
      type: "string",
    },
    {
      name: "profilePic",
      title: "profilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "phoneNumber",
      title: "phoneNumber",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },

    {
      name: "address",
      title: "Address",
      type: "string",
    },

    // {
    //   name: "socials",
    //   title: "Socials",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "socials" } }],
    // },
  ],
});
