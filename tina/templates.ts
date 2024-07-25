import type { TinaField } from "tinacms";
export function imageFields() {
  return [
    {
      type: "object",
      name: "image",
      label: "Image",
      fields: [
        {
          type: "image",
          name: "feature",
          label: "Feature",
        },
        {
          type: "image",
          name: "teaser",
          label: "Teaser",
        },
        {
          type: "string",
          name: "credit",
          label: "Image Credit",
        },
      ],
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "short_title",
      nameOverride: "short-title",
      label: "Short Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "datetime",
      name: "modified",
      label: "Date Modified",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    ...imageFields(),
    {
      type: "string",
      name: "layout",
      label: "Layout",
      options: ["article", "archive", "basic", "default"],
      required: true,
    },
  ] as TinaField[];
}
