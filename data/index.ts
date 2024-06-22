export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Skills', link: '#skills' },
	{ name: 'Contact', link: '#contact' },
];

export const gridItems = [
	{
		id: 1,
		title: 'I prioritize client collaboration, fostering open communication ',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Tech enthusiast with a passion for development.',
		// title: 'Fascinated in the realm of AI/ML and Game Development.',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		// title: 'Currently building a JS Animation library',
		// title: 'Tech enthusiast with a passion for development.',
		title: 'Currently exploring the realm of AI/ML',
		description: 'The Inside Scoop',
		// description: '',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
];

export const projects = [
	{
		id: 1,
		title: 'Filmpire - Movie App',
		des: 'Dynamic React-based web app offering an extensive film database, enhanced with voice AI.',
		img: '/pro1.png',
		iconLists: ['/react.svg', '/redux.svg', '/mui.svg', '/docker.svg', '/azure.svg'],
		link: 'https://github.com/Amit-10101/Filmpire-AI-Powered-Movie-App',
		livelink: 'https://filmpire.azurewebsites.net/',
	},
	{
		id: 2,
		title: 'EchoLink - Real Time Chat App',
		des: 'Simplify your communication experience with EchoLink. Seamlessly connect with colleagues and friends.',
		img: '/pro2.png',
		iconLists: ['/react.svg', '/tail.svg', '/expressjs.svg', '/mongodb.svg', '/nodejs.svg'],
		link: 'https://github.com/Amit-10101/EchoLink',
		livelink: 'https://echo-link.netlify.app/',
	},
	{
		id: 3,
		title: 'CosmicNexus - Gaming Dashboard',
		des: 'A gaming dashboard UI showcasing games, purchases, login functionalities and much more.',
		img: '/pro3.png',
		iconLists: ['/angular.svg', '/bootstrap.svg', '/ts.svg', '/git.svg', '/netlify.svg'],
		link: 'https://github.com/Amit-10101/CosmicNexus',
		livelink: 'https://cosmicnexus.netlify.app/',
	},
	{
		id: 4,
		title: 'Sneaker Spectrum',
		des: 'A sneaker brand website UI for showcasing products, sales and promote marketing of the brand.',
		img: '/pro4.png',
		iconLists: ['/react.svg', '/tail.svg', '/js.svg', '/git.svg', '/netlify.svg'],
		link: 'https://github.com/Amit-10101/Sneaker-Spectrum',
		livelink: 'https://sneaker-spectrum.netlify.app/',
	},
];

export const skillset: { title: string; img: string; backgroundColorEffect: string }[] = [
	{
		title: 'C++',
		img: '/cpp.svg',
		backgroundColorEffect: '#6a9dd3',
	},
	{
		title: 'Python',
		img: '/python.svg',
		backgroundColorEffect: '#f6d855',
	},
	{
		title: 'Java',
		img: '/java.svg',
		backgroundColorEffect: '#e87408',
	},
	{
		title: 'C',
		img: '/c.svg',
		backgroundColorEffect: '#085e9f',
	},
	{
		title: 'HTML',
		img: '/html.svg',
		backgroundColorEffect: '#e5532d',
	},
	{
		title: 'CSS',
		img: '/css.svg',
		backgroundColorEffect: '#2d53e5',
	},
	{
		title: 'JavaScript',
		img: '/js.svg',
		backgroundColorEffect: '#f7e025',
	},
	{
		title: 'TypeScript',
		img: '/ts.svg',
		backgroundColorEffect: '#377cc8',
	},
	{
		title: 'React',
		img: '/react.svg',
		backgroundColorEffect: '#58c4dc',
	},
	{
		title: 'Redux',
		img: '/redux.svg',
		backgroundColorEffect: '#7a50be',
	},
	{
		title: 'Angular',
		img: '/angular.svg',
		backgroundColorEffect: '#de0837',
	},
	{
		title: 'Tailwind',
		img: '/tail.svg',
		backgroundColorEffect: '#3ebff8',
	},
	{
		title: 'Bootstrap',
		img: '/bootstrap.svg',
		backgroundColorEffect: '#7818f7',
	},
	{
		title: 'jQuery',
		img: '/jquery.svg',
		backgroundColorEffect: '#28659e',
	},
	{
		title: 'Material UI',
		img: '/mui.svg',
		backgroundColorEffect: '#007fff',
	},
	{
		title: 'Next.js',
		img: '/next.svg',
		backgroundColorEffect: '#ffffff',
	},
	{
		title: 'Node.js',
		img: '/nodejs.svg',
		backgroundColorEffect: '#90ca51',
	},
	{
		title: 'Express.js',
		img: '/expressjs.svg',
		backgroundColorEffect: '#868686',
	},
	{
		title: 'FastAPI',
		img: '/fastapi.svg',
		backgroundColorEffect: '#0d9c8f',
	},
	{
		title: 'MongoDB',
		img: '/mongodb.svg',
		backgroundColorEffect: '#199555',
	},
	{
		title: 'PostgreSQL',
		img: '/postgres.svg',
		backgroundColorEffect: '#396c94',
	},
	{
		title: 'Docker',
		img: '/docker.svg',
		backgroundColorEffect: '#2468ee',
	},
	{
		title: 'Azure',
		img: '/azure.svg',
		backgroundColorEffect: '#36a9e9',
	},
	{
		title: 'AWS',
		img: '/aws.svg',
		backgroundColorEffect: '#ff9a08',
	},
];

export const testimonials = [
	{
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
	},
	{
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
	},
	{
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
	},
	{
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
	},
	{
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
	},
];

export const companies = [
	{
		id: 1,
		name: 'cloudinary',
		img: '/cloud.svg',
		nameImg: '/cloudName.svg',
	},
	{
		id: 2,
		name: 'appwrite',
		img: '/app.svg',
		nameImg: '/appName.svg',
	},
	{
		id: 3,
		name: 'HOSTINGER',
		img: '/host.svg',
		nameImg: '/hostName.svg',
	},
	{
		id: 4,
		name: 'stream',
		img: '/s.svg',
		nameImg: '/streamName.svg',
	},
	{
		id: 5,
		name: 'docker.',
		img: '/dock.svg',
		nameImg: '/dockerName.svg',
	},
];

export const workExperience = [
	{
		id: 1,
		title: 'Microsoft Learn Student Ambassador',
		desc: 'Became a part of an amazing community, where we learn and grow together.',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
	},
	{
		id: 2,
		title: 'SAP HackFest 2024',
		desc: 'Led a team for hackathon on Green Credit Management and got selected for the final round.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp2.svg',
	},
	{
		id: 3,
		title: 'AI Ambassador Project',
		desc: 'Our team became the Top 5 finalists team for our AI project, AgriVision AI, built with Azure and Python.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp3.svg',
	},
	{
		id: 4,
		title: 'Competitive Programming',
		desc: 'Developed a logical mindset and have solved 150+ Leetcode problems.',
		className: 'md:col-span-2',
		thumbnail: '/exp4.svg',
	},
];

// export const workExperience = [
// 	{
// 		id: 1,
// 		title: 'Frontend Engineer Intern',
// 		desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
// 		className: 'md:col-span-2',
// 		thumbnail: '/exp1.svg',
// 	},
// 	{
// 		id: 2,
// 		title: 'Mobile App Dev - JSM Tech',
// 		desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
// 		className: 'md:col-span-2', // change to md:col-span-2
// 		thumbnail: '/exp2.svg',
// 	},
// 	{
// 		id: 3,
// 		title: 'Freelance App Dev Project',
// 		desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
// 		className: 'md:col-span-2', // change to md:col-span-2
// 		thumbnail: '/exp3.svg',
// 	},
// 	{
// 		id: 4,
// 		title: 'Lead Frontend Developer',
// 		desc: 'Developed and maintained user-facing features using modern frontend technologies.',
// 		className: 'md:col-span-2',
// 		thumbnail: '/exp4.svg',
// 	},
// ];

export const socialMedia = [
	{
		id: 1,
		img: '/github.svg',
		link: 'https://github.com/Amit-10101',
	},
	{
		id: 2,
		img: '/link.svg',
		link: 'https://www.linkedin.com/in/amit-dev/',
	},
	{
		id: 3,
		img: '/leetcode.svg',
		link: 'https://leetcode.com/u/Amit-Kumar-1001/',
	},
];
