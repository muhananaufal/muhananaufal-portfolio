"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { myProjects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
		<div className="py-20">
			<h1 className="heading" id="myProjects">
				A small selection of <span className="text-purple">recent projects</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
				{myProjects.map((item) => (
					<div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] bg-" key={item.id}>
						<PinContainer title={item.link}>
							<div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[300px] mb-10 ">
								<div className="relative w-full h-full overflow-hidden lg:rounded-3xl dark:bg-[rgb(15,20,40)] bg-[rgb(228,231,254)]">
									<img src="/bg.png" alt="bgimg" />
								</div>
								<img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
							</div>

							<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 dark:text-white text-black">{item.title}</h1>

							<p
								className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 dark:text-white-100 text-slate-400"
								style={{
									margin: '1vh 0',
								}}
							>
								{item.des}
							</p>

							<div className="flex items-center justify-between mt-7 mb-3">
								<div className="flex items-center">
									{item.iconLists.map((icon, index) => (
										<div
											key={index}
											className="border border-black/[.2] dark:border-white/[.2] rounded-full dark:bg-black bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
											style={{
												transform: `translateX(-${5 * index + 2}px)`,
											}}
										>
											<img src={icon} alt="icon5" className="p-2" />
										</div>
									))}
								</div>
								<a href={item.direct}>
									<div className="flex justify-center items-center ">
										<p className="flex lg:text-xl md:text-xs text-sm text-purple hover:text-[#BEC1DD]">Repository</p>
										<FaLocationArrow className="ms-3 hover:fill-[#BEC1DD]" color="#00D7FE" />
									</div>
								</a>
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentProjects;
