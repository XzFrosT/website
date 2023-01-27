import { SiCplusplus, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from 'react-icons/si';

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
		name: 'TypeScript',
		icon: (className) => {
			return <SiTypescript className={className}/>
		}
	},
	{
		id: 3,
		name: "C++",
		icon: (className) => {
    	return <SiCplusplus className={className}/>
    }
  },
  {
		id: 4,
		name: 'React',
		icon: (className) => {
			return <SiReact className={className}/>
		}
	},
	{
		id: 5,
		name: 'Next.js',
		icon: (className) => {
			return <SiNextdotjs className={className}/>
		}
	}
];