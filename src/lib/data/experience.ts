import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	// {
	// 	slug: 'cofounder-orange-owl',
	// 	company: 'Orange Owl',
	// 	description: 'As the Co-founder and CEO of Orange Owl, I oversee the strategic direction and operations of the company. My role involves leading product innovation, managing key partnerships, and ensuring the successful execution of our projects. I focus on driving growth while fostering a collaborative and results-oriented work environment.',
	// 	contract: ContractType.FullTime,
	// 	type: 'Software Development',
	// 	location: 'Rajshahi, Bangladesh',
	// 	period: { from: new Date(2024, 8, 1) },
	// 	skills: getSkills('dart', 'flutter', 'firebase', 'kotlin'),
	// 	name: 'Co-founder and CEO',
	// 	color: 'orange',
	// 	links: [],
	// 	logo: Assets.Owl,
	// 	shortDescription: 'As the Co-founder and CEO of Orange Owl, I oversee the strategic direction and operations of the company. My role involves leading product innovation, managing key partnerships, and ensuring the successful execution of our projects. I focus on driving growth while fostering a collaborative and results-oriented work environment.',
	// },
	{
		slug: 'software-engineer-infai',
		company: 'AppLab',
		description: 'As a Software Engineer at InfAI, I craft dynamic and scalable web and mobile applications. My expertise lies in architecting intuitive user experiences, optimizing performance, and delivering high-quality solutions that align with modern development standards and industry best practices.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2024, 12, 1), },
		skills: getSkills('dart', 'flutter', 'firebase'),
		name: 'Mobile Application Developer (Flutter)',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'As a Software Engineer at InfAI, I craft dynamic and scalable web and mobile applications. My expertise lies in architecting intuitive user experiences, optimizing performance, and delivering high-quality solutions that align with modern development standards and industry best practices.',
	},	
	{
		slug: 'software-engineer-applab',
		company: 'AppLab',
		description: 'As a Flutter Developer, I designed and implemented cross-platform mobile applications, ensuring high performance and responsiveness. I collaborated closely with UI/UX designers to create intuitive user interfaces, integrated RESTful APIs, and utilized Flutter\'s widget library to deliver robust and scalable apps. My role involved optimizing code for efficiency and maintaining clean architecture to support long-term project success',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2022	, 1, 1), to: new Date(2024, 5, 1), },
		skills: getSkills('dart', 'flutter', 'firebase'),
		name: 'Mobile Application Developer (Flutter)',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'As a Flutter Developer, I designed and implemented cross-platform mobile applications, ensuring high performance and responsiveness. I collaborated closely with UI/UX designers to create intuitive user interfaces, integrated RESTful APIs, and utilized Flutter\'s widget library to deliver robust and scalable apps. My role involved optimizing code for efficiency and maintaining clean architecture to support long-term project success'
	},	
	
	{
		slug: 'education',
		company: 'Varendra University',
		description:
		'-Fostered supportive learning environment, helping students develop advanced level and subject-specific skills.\n- Produced high-quality teaching material for supporting and developing student learning.\n- Participated actively in committees responsible for making decisions regarding departmental policies and procedures.\n- Researched current trends in the field of education and incorporated them into curriculum design.\n- Attended conferences, workshops, seminars related to educational topics in order to stay up-to-date with best practices.',
		contract: ContractType.FullTime,
		type: 'Education',
		location: 'Rajshahi, Bangladesh',
		period: { from: new Date(2020, 2, 18), to: new Date(2023, 2, 28), },
		skills: getSkills('c', 'cplusplus', 'java', 'python', 'html', 'css', 'js'),
		name: 'Lecturer of CSE',
		color: 'maroon',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Teaching Computer Science to University Students.'
	},
	{
		slug: 'software-freelance',
		company: 'Telus International',
		description: 'Analyzing data, extracting valuable insights, and informing data-driven decisions for improved business performance.',
		contract: ContractType.PartTime,
		type: 'Data Analysis',
		location: 'Remote',
		period:  { from: new Date(2020, 12, 1), to: new Date(2023, 1, 10), },
		skills: [],
		name: 'Analyst',
		color: 'yellow',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Analyzing data, extracting valuable insights, and informing data-driven decisions for improved business performance..'
	},
	{
		slug: 'software-engineer-enosis',
		company: 'Enosis Solutions',
		description: 'Design, develop, and maintain software applications, implement solutions, conduct testing, and collaborate in agile teams for successful project delivery.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Dhaka, Bangladesh',
		period: { from: new Date(2020, 1, 1), to: new Date(2020, 3, 1), },
		skills: getSkills('css', 'html', 'js','angular','csharp'),
		name: 'Software Engineer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Design, develop, and maintain software applications, implement solutions, conduct testing, and collaborate in agile teams for successful project delivery.'
	}
];

export const title = 'Experience';
