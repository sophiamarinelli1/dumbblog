import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
	projectId: "qicx32gi",
	dataset: "production",
	title: "My Projects",
	apiVersion: "2023-09-24",
	basePath: "/admin",
	plugins: [deskTool(), visionTool()],
	schema: { types: schemas },
});

export default config;
