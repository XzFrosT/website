import Image from 'next/image';
import Link from 'next/link';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation, CardHomeAnimation } from '@/components/Animations';
import { staticImageLoader } from "@/data/Config";

const Home = () => {
  return (
    <Layouts>
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          IHSAN
        </motion.span>

        <motion.div {...ContentAnimation} className="relative order-2 flex w-1/2 justify-end md:order-1 md:w-1/3">
          <motion.div {...CardHomeAnimation} animate={{ rotate: -12 }} className="card-home absolute bg-[#464646]" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-secondary-light" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-primary-light">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <Image loader={staticImageLoader} src="/profile/profile.png" priority layout="intrinsic" width={500} height={500} alt="Muhamad Ihsan" className="relative" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative order-1 w-1/3 md:order-2">
          <h3 className="-mb-3 text-base font-normal">Hi! My name is</h3>
          <h1 className="-ml-1 mb-1 text-6xl font-bold text-primary-light">Ihsan</h1>
          <Link href="/about">
            <h4 className="text-sm font-light transition-all duration-500 hover:text-primary-light">Back-End Dev | Student</h4>
          </Link>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default Home;