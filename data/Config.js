export const Config = {
	cdn: "cdn.statically.io",
	domains: ["ihsanhardiansah.me", "xzfrost.fun", "muhamadihsan.tech"]
}

export const staticImageLoader = ({ src, width, height }) => {
	let path = "https://" + Config["cdn"] + "/img/" + Config["domains"][0] + "/f=auto&q=100/images" + src;
	
	return path;
}