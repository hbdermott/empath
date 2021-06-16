import blue from "./blue.gif";
import red from "./red.gif";
import yellow from "./yellow.gif";

const page_data = {
	id: "10283102938",
	entries: [
		{
			img: blue,
			side: 0,
			color: "blue",
			text: [["Hello World!"]],
			speed: 40,
		},
		{
			color: "blue",
			side: 0,
			text: [["Hello World!"]],
			speed: 40,
		},
		{
			img: red,
			color: "red",
			side: 1,
			text: [["Hello World!"]],
			speed: 40,
		},
		{
			img: yellow,
			color: "yellow",
			side: 0,
			text: [["Hello World!"]],
			speed: 40,
		},
		{
			img: blue,
			color: "blue",
			side: 1,
			text: [["Hello World!"]],
			speed: 40,
		},
	],
	buttons: [{ text: "First!" }, { text: "Second!" }, { text: "Third!" }],
};

export default page_data;