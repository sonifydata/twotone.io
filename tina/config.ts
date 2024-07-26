import { defineConfig } from "tinacms";

import { imageFields } from "./templates";
import { postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: 'Posts',
        name: 'post',
        path: '/_posts',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'datetime',
            label: 'Date',
            name: 'date',
          },
          {
            type: 'string',
            label: 'Categories',
            name: 'categories',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: 'boolean',
            label: 'Featured',
            name: 'featured',
          },
          {
            type: 'object',
            label: 'Image',
            name: 'image',
            fields: imageFields(),
          },
          {
            type: 'string',
            label: 'Excerpt',
            name: 'excerpt'
          },
          {
            type: 'rich-text',
            label: 'Post Body',
            name: 'body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
