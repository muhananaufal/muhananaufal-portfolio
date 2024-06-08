import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { AudioPlayer } from 'react-audio-play';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const AudioPlayerComponent = () => {
	const { theme } = useTheme();
	const [color, setColor] = useState(theme === 'light' ? '#ffffff' : '#000000');
	const { scrollYProgress } = useScroll();
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		setColor(theme === 'light' ? '#ffffff' : '#000000');
	}, [theme]);

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

	return (
		<AnimatePresence mode="wait">
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
				className="fixed bottom-[10rem] right-6 z-[9999] dark:text-black light:text-white"
			>
				<AudioPlayer
					autoPlay
					loop
					preload="none"
					src="/audio.mp3"
					volume={100}
					style={{
						background: '#00D7FE',
						color: color,
						borderRadius: '9999px',
						transition: 'background 0.3s ease',
						minWidth: 'fit-content',
						boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.5), 0 10px 10px -5px rgba(59, 130, 246, 0.5)',
						paddingLeft: '27px' 
					}}
					className="relative flex items-center justify-center rounded-full w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] xl:w-[4rem] xl:h-[4rem]"
				/>
			</motion.div>
		</AnimatePresence>
	);
};

export default AudioPlayerComponent;
