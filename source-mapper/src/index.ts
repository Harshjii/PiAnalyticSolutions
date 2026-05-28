import type { PluginObj } from "@babel/core";

export default function sourceMapperPlugin(): PluginObj {
	return {
		name: "source-mapper",
		visitor: {},
	};
}