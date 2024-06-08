"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { skillsUpper, skillsLower } from "@/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Skills = () => {
	
  return (
		<section className="py-20 flex items-center justify-center">
			<div className="flex flex-col gap-10 md:gap-20 max-w-[100%] text-center items-center ">
				<div className="flex flex-col items-center gap-4">
					<h1 className="heading mt-8" id="skills">
						Empowering
						<span className="text-purple"> skills </span>
						and advanced tech
					</h1>
				</div>
				<Swiper
					slidesPerView={5}
					loop={true}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
					}}
					speed={5000}
					modules={[Autoplay]}
					className="max-w-[100%] "
				>
					{skillsUpper.map((skill, index) => (
						<SwiperSlide key={index} className="mr-2  md:mr-0 ">
							<Image src={skill.Image} alt={skill.name} width={skill.width} height={skill.height} className="max-w[80%] md:max-w[100%]" />
						</SwiperSlide>
					))}
				</Swiper>
				<Swiper
					slidesPerView={5}
					loop={true}
					autoplay={{
						reverseDirection: true,
						delay: 0,
						disableOnInteraction: false,
					}}
					speed={5000}
					modules={[Autoplay]}
					className="max-w-[100%] "
				>
					{skillsLower.map((skill, index) => (
						<SwiperSlide key={index} className="mr-2  md:mr-0 ">
							<Image src={skill.Image} alt={skill.name} width={skill.width} height={skill.height} className="max-w[80%] md:max-w[100%]" />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Skills;
