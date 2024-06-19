import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

const Footer = () => {
	return (
		// <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
		<footer className="w-full pt-20 pb-10 mb-[100px] md:mb-10" id="contact">
			<div className="w-full absolute left-0 -bottom-72 min-h-96">
				<img
					src="/footer-grid.svg"
					alt="Footer Grid"
					className="w-full h-full opacity-50"
				/>
			</div>

			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Ready to take <span className="text-purple">your</span> digital presence to the
					next level?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Reach out to me today and let&apos;s discuss how I can help you achieve your
					goals.
				</p>
				<a href="mailto:amitkm.4211@gmail.com" title="amitkm.4211@gmail.com">
					<MagicButton
						title="Let's get in touch"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>

			<div className="flex md:flex-row flex-col mt-16 justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright &copy; 2024 Amit Kumar
				</p>

				<div className="flex items-center gap-3 md:gap-6">
					{socialMedia.map(({ id, img, link }) => (
						<a
							key={id}
							href={link}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<img src={img} alt={id.toString()} width={20} height={20} />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
