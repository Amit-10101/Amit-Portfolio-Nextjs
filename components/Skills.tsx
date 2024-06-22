'use client';

import { skillset } from '@/data';
import React, { useState } from 'react';

const Skills = () => {
	return (
		<div className="py-20" id="skills">
			<h1 className="heading">
				My <span className="text-purple">skill set</span>
			</h1>

			<div className="w-full mt-12 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8 lg:gap-14 justify-center items-center">
				{skillset.map(({ img, title, backgroundColorEffect }) => (
					<SkillButton
						key={title}
						img={img}
						title={title}
						backgroundEffectColor={backgroundColorEffect}
					/>
				))}
			</div>
		</div>
	);
};

const SkillButton = ({
	img,
	title,
	backgroundEffectColor,
}: {
	img: string;
	title: string;
	backgroundEffectColor: string;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const defaultBoxShadow =
		'5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.1), 5px -5px 10px rgba(255, 255, 255, 0.1), -5px 5px 10px rgba(0, 0, 0, 0.3)';
	const hoverBoxShadow = `5px 5px 15px ${backgroundEffectColor}, -5px -5px 15px ${backgroundEffectColor}, 5px -5px 15px ${backgroundEffectColor}, -5px 5px 15px ${backgroundEffectColor}`;

	return (
		<div
			className="h-[7.5rem] w-28 p-4 rounded-xl bg-[#0d1429] border border-slate-800 hover:shadow ease-in-out hover:ease-in-out duration-300 flex justify-center items-center"
			style={{
				boxShadow: isHovered ? hoverBoxShadow : defaultBoxShadow,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={img} alt={title} className="w-full h-full p-3" />
		</div>
	);
};

export default Skills;
