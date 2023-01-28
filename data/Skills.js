import { 
	SiCmake, SiCplusplus, SiCss3, 
	SiHtml5,
	SiJavascript, 
	SiMongodb,
	SiNextdotjs, SiNodedotjs, 
	SiReact, 
	SiTailwindcss, SiTypescript } from 'react-icons/si';

export const Skills = [
	{
		id: 0,
		name: 'Node.js',
		icon: (className) => {
			return <SiNodedotjs className={className}/>
		}
	},
	{
		id: 1,
		name: 'JavaScript',
		icon: (className) => {
			return <SiJavascript className={className}/>
		}
	},
	{
		id: 2,
		name: "HTML5",
		icon: (className) => {
			return <SiHtml5 className={className}/>
		}
	},
	{
		id: 3,
		name: "CSS3",
		icon: (className) => {
			return <SiCss3 className={className}/>
		}
	},
	{
		id: 10,
		name: "MongoDB",
		icon: (className) => {
			return <SiMongodb className={className}/>
		}
	},
	{
		id: 4,
		name: 'TypeScript',
		icon: (className) => {
			return <SiTypescript className={className}/>
		}
	},
	{
		id: 5,
		name: "C++",
		icon: (className) => {
    	return <SiCplusplus className={className}/>
    }
  },
  {
		id: 6,
		name: "CMake",
		icon: (className) => {
			return <SiCmake className={className}/>
		}
	},
  {
		id: 7,
		name: 'React',
		icon: (className) => {
			return <SiReact className={className}/>
		}
	},
	{
		id: 8,
		name: 'Next.js',
		icon: (className) => {
			return <SiNextdotjs className={className}/>
		}
	},
	{
		id: 9,
		name: "Tailwind CSS",
		icon: (className) => {
			return <SiTailwindcss className={className}/>
		}
	}
];