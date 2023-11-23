export const Config = {
	cdn: "cdn.statically.io",
	domains: ["ihsan.fun"],
	name: "ihsan's portfolio",
	description: "Let me introduce myself to you my name is ihsan, and this is my personal website. Welcome!"
}

export const staticImageLoader = ({ src, width, height }) => {
	let path = "https://" + Config["cdn"] + "/img/" + Config["domains"][0] + "/f=auto/images" + src;
	
	return path;
}