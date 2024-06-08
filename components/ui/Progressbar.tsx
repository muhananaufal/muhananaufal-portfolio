'use client';

import { useCallback, useEffect, useState } from 'react';

type ProgressbarProps = {
	target: React.RefObject<HTMLElement>;
};

export const Progressbar = ({ target }: ProgressbarProps) => {
	const [readingProgressTop, setReadingProgressTop] = useState(100);
	const [readingProgressBottom, setReadingProgressBottom] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

	const scrollListener = useCallback(() => {
		setIsScrolling(true);
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		const newTimeoutId = setTimeout(() => {
			setIsScrolling(false);
		}, 1000);
		setTimeoutId(newTimeoutId);

		if (!target.current) {
			return;
		}

		const element = target.current;
		const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight;
		const windowScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

		if (windowScrollTop === 0) {
			setReadingProgressTop(100);
			setReadingProgressBottom(0);
		} else if (windowScrollTop > totalHeight) {
			setReadingProgressTop(0);
			setReadingProgressBottom(100);
		} else {
			const progress = (windowScrollTop / totalHeight) * 100;
			setReadingProgressTop(100 - progress);
			setReadingProgressBottom(progress);
		}
	}, [target, timeoutId]);

	useEffect(() => {
		window.addEventListener('scroll', scrollListener);

		return () => window.removeEventListener('scroll', scrollListener);
	}, [scrollListener]);

	return (
		<>
			<div className={`w-full fixed top-0 right-0 z-[9999] transition-transform duration-500 ${isScrolling ? 'translate-y-0' : '-translate-y-2'}`}>
				<div
					className="h-2 bg-gradient-to-r from-[#30cbe5] via-[#2074a8] to-[#14298d]"
					style={{
						width: `${readingProgressTop}%`,
					}}
				/>
			</div>
			<div className={`w-full fixed bottom-0 left-0 z-[9999] transition-transform duration-500 ${isScrolling ? 'translate-y-0' : 'translate-y-2'}`}>
				<div
					className="h-2 bg-gradient-to-r from-[#30cbe5] via-[#2074a8] to-[#14298d]"
					style={{
						width: `${readingProgressBottom}%`,
            direction: 'ltr',
					}}
				/>
			</div>
		</>
	);
};
