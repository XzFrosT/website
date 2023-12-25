export const Config = {
	domains: ["www.ihsan.fun"],
	name: "ihsan's portfolio",
	description: "Let me introduce myself to you my name is ihsan, and this is my personal website. Welcome!"
}

export const staticImageLoader = ({ src, width, height }) => {
	let path = "https://" + Config["domains"][0] + "/images" + src;
	
	return path;
}