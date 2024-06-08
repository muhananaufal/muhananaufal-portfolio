'use client';
import { useRef } from "react";
import { navItems } from '@/data';

import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Contact from '@/components/Contact';
import Clients from '@/components/Clients';
import Approach from '@/components/Approach';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import RecentProjects from '@/components/RecentProjects';
import {Progressbar} from '@/components/ui/Progressbar';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import ThemeToggler from '@/components/ui/ThemeToggler';
import AudioPlayerComponent from '@/components/ui/AudioPlayer';


const Home = () => {
	const mainRef = useRef<HTMLElement | null>(null);

	return (
		<main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip" ref={mainRef}>
			<div className="max-w-7xl w-full">
				<Progressbar target={mainRef} />
				<FloatingNav navItems={navItems} />
				<Hero />
				<AudioPlayerComponent />
				<ThemeToggler />
				<Grid />
				<Skills />
				<RecentProjects />
				<Clients />
				<Experience />
				<Approach />
				<Contact />
			</div>
		</main>
	);
};

export default Home;
