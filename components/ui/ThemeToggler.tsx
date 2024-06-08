'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export const ThemeToggler = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const { scrollYProgress } = useScroll();
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		setMounted(true);
	}, []);

	useMotionValueEvent(scrollYProgress, 'change', (current) => {
		if (typeof current === 'number') {
			let direction = current - scrollYProgress.getPrevious()!;
			if (scrollYProgress.get() < 0.05) {
				setVisible(true);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
		}
	});

	if (!mounted) return null;

	const isLightTheme = theme === 'light';

	return (
		<AnimatePresence>
			<motion.div
				initial={{
					x: 0,
				}}
				animate={{
					x: visible ? 0 : 100,
				}}
				transition={{
					duration: 0.2,
				}}
				className="fixed bottom-[5rem] right-[-4.5rem] md:right-[-4rem] xl:right-[-3.5rem] z-[9999]"
			>
				<button
					onClick={() => setTheme(isLightTheme ? 'dark' : 'light')}
					className="relative flex items-center justify-center rounded-full min-w-[145px]  w-[3.5rem] h-[3.5rem] xl:w-[4rem] transition-all shadow-xl shadow-blue-500/50"
					style={{
						backgroundColor: '#00D7FE',
						color: isLightTheme ? '#000000' : '#ffffff',
						// Set pointerEvents to none to allow clicks only on the icons
						pointerEvents: 'none',
					}}
				>
					<div className="flex items-center justify-center pr-[4.5rem]">
						<MoonIcon
							className={`w-[1.75rem] h-[1.75rem] transition-transform duration-500 ease-in-out ${
								isLightTheme ? 'transform scale-0 rotate-90 opacity-0' : 'transform scale-100 rotate-0 opacity-100'
							} absolute cursor-pointer pointer-events-auto`}
							style={{
								pointerEvents: 'auto', // Make only the icon clickable
							}}
						/>
						<SunIcon
							className={`w-[1.75rem] h-[1.75rem] transition-transform duration-500 ease-in-out ${
								isLightTheme ? 'transform scale-100 rotate-0 opacity-100' : 'transform scale-0 rotate-90 opacity-0'
							} absolute cursor-pointer pointer-events-auto`}
							style={{
								pointerEvents: 'auto', // Make only the icon clickable
							}}
						/>
					</div>
				</button>
			</motion.div>
		</AnimatePresence>
	);
};

export default ThemeToggler;
