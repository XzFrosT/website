import Layouts from '@/components/Layouts';
import { Skills } from '@/data/Skills';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation } from '@/components/Animations';

const About = () => {
	const MyAge = () => {
		const birthYear = new Date("June 10, 2006 06:59:00").getFullYear();
		const currentYear = new Date().getFullYear();
		
		return currentYear - birthYear;
	}
	
  return (
    <Layouts pageTitle=" | About">
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          ABOUT
        </motion.span>

        <motion.div {...ContentAnimation} className="relative order-2 flex w-3/4 flex-col items-end justify-end md:order-1 md:w-1/3">
          <div className="my-5 mr-2 text-left font-semibold text-primary-light">My Skills</div>
          <div className="flex w-4/5 flex-wrap justify-evenly">
            {Skills.map((skill) => (
              <div key={skill.id} className="skills-icon">
                {skill.icon("h-12 w-12")}
                <span className="skills-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative order-1 my-10 w-3/4 text-justify md:order-2 md:my-0 md:w-1/4">
          <p className="text-md font-light text-primary-light">
            {`Hello! My name is Ihsan (Muhamad Ihsan Hardiansah), you can call me ihsan, isan or whatever you want. I'm a ${MyAge()} years old high school student at SMAN 6 Cimahi and is part of science major. I'm also a Back-End Developer, I love physics or any computer related things.`}
          </p>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default About;