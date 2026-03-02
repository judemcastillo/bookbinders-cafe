export const brand = {
	name: "Bookbinder's Cafe",
	tagline: "A page-turning corner cafe for slow coffee and pastry rituals.",
	neighborhood: "Bellview Row, Portland",
	address: "148 Bellview Row, Portland, OR 97205",
	phone: "+1 (503) 555-0184",
	email: "hello@bookbinderscafe.com",
};

export const hours = [
	{ day: "Monday", time: "7:00 AM - 6:00 PM" },
	{ day: "Tuesday", time: "7:00 AM - 6:00 PM" },
	{ day: "Wednesday", time: "7:00 AM - 6:00 PM" },
	{ day: "Thursday", time: "7:00 AM - 8:00 PM" },
	{ day: "Friday", time: "7:00 AM - 9:00 PM" },
	{ day: "Saturday", time: "8:00 AM - 9:00 PM" },
	{ day: "Sunday", time: "8:00 AM - 5:00 PM" },
];

export const featured = [
	{
		name: "Maple Cardamom Latte",
		description:
			"House espresso, steamed oat milk, and a cardamom-maple syrup built in-house.",
		note: "Customer favorite",
		image: "/maple.jpg",
	},
	{
		name: "Rosemary Honey Bun",
		description:
			"Laminated brioche, rosemary sugar glaze, and orange blossom honey.",
		note: "Fresh every morning",
		image: "/rosemary.jpg"
	},
	{
		name: "Smoked Tomato Tartine",
		description:
			"Fire-roasted tomatoes, whipped ricotta, chili oil, and sourdough toast.",
		note: "All-day menu",
		image: "/tomato.jpg"
	},
	{
		name: "Night Shift Mocha",
		description: "70% cocoa, espresso, and toasted almond cream with sea salt.",
		note: "After 5PM",
		image: "/night.jpg",
	},
];

export const menu = [
	{
		category: "Starters",
		items: [
			{
				name: "Charred Citrus Yogurt",
				description: "Greek yogurt, blood orange, pistachio granola, and mint.",
				price: "$9",
				tags: ["V", "GF"],
			},
			{
				name: "Mushroom Toast",
				description: "Garlic confit mushrooms, whipped feta, and sourdough.",
				price: "$12",
				tags: ["V"],
			},
		],
	},
	{
		category: "Mains",
		items: [
			{
				name: "Bookbinder Breakfast Plate",
				description:
					"Soft eggs, braised greens, smashed potatoes, and chili jam.",
				price: "$16",
				tags: ["GF"],
			},
			{
				name: "Roast Chicken Panini",
				description:
					"Rosemary chicken, provolone, arugula, and sun-dried tomato aioli.",
				price: "$17",
				tags: [],
			},
		],
	},
	{
		category: "Desserts",
		items: [
			{
				name: "Brown Butter Cookie",
				description: "Sea salt, toasted pecans, and dark chocolate shards.",
				price: "$6",
				tags: ["V"],
			},
			{
				name: "Lemon Olive Oil Cake",
				description: "Citrus glaze, mascarpone cream, and thyme sugar.",
				price: "$8",
				tags: ["V"],
			},
		],
	},
	{
		category: "Drinks",
		items: [
			{
				name: "Single Origin Pour Over",
				description: "Rotating beans from women-led farms in Colombia.",
				price: "$6",
				tags: ["VE"],
			},
			{
				name: "Spiced Cascara Tonic",
				description:
					"Cascara tea, tonic water, lime peel, and pink peppercorn.",
				price: "$7",
				tags: ["VE", "GF"],
			},
		],
	},
];

export const values = [
	{
		title: "Sourcing with names",
		description:
			"We list who roasted the coffee and who milled the flour so every ingredient has a traceable story.",
	},
	{
		title: "Neighborhood first",
		description:
			"Bellview teachers, nurses, and students get refill pricing all day, every day.",
	},
	{
		title: "Slow hospitality",
		description:
			"No table rush. You can keep your book open and your cup warm.",
	},
];

export const team = [
	{
		name: "Mara Dela Cruz",
		role: "Founder & Head Baker",
		bio: "Former archivist who turned recipe cards into a daily pastry program.",
	},
	{
		name: "Evan Pike",
		role: "Coffee Lead",
		bio: "Builds seasonal espresso blends and weekly brew flights.",
	},
	{
		name: "Lin Ortega",
		role: "Floor Host",
		bio: "Keeps the room warm, the playlists soft, and the welcome personal.",
	},
];
