import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	// create a generator
	plop.setGenerator("Generator name", {
		description: "Generator description",
		// gather information from the user
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name of the component?",
			},
		],
		// perform actions based on the prompts
		actions: [
			{
				type: "add",
				path: "src/{{kebabCase name}}.tsx",
				templateFile: "templates/component.hbs",
			},
			{
				type: "append",
				path: "package.json",
				pattern: /"exports": {(?<insertion>)/g,
				template: '"./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
			},
		],
	});
}
