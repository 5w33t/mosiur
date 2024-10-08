import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'athena-gpt-flutter',
		color: '#5e95e3',
		description: 'Leveraged the capabilities of ChatGPT 3.5 with OpenAPI Integration. Implemented riverpod as state management and utilized speech-to-text and chatgpt_sdk package for natural conversations.',
			shortDescription:
			'Leveraged the capabilities of ChatGPT 3.5 with OpenAPI Integration. Implemented riverpod as state management and utilized speech-to-text and chatgpt_sdk package for natural conversations.',
			links: [{ to: 'https://github.com/5w33t/flutter_projects/tree/main/project_athena', label: 'GitHub' }],
		logo: Assets.Flutter,
		name: 'Athena GPT',
		period: {
			from: new Date(2024, 4, 1), to: new Date(2024, 4, 15),
		},
		skills: getSkills('flutter', 'dart', 'firebase'),
		type: 'Cross Platform App'
	},
	{
		slug: 'tong-flutter',
		color: '#5e95e3',
		description: 'Tong allows users to virtually connect with others through video, audio, and chat. Built using firebase and jitsi SDK',
			shortDescription:
			'Tong allows users to virtually connect with others through video, audio, and chat. Built using firebase and jitsi SDK',
			links: [{ to: 'https://github.com/5w33t/flutter_projects/tree/main/tong_app', label: 'GitHub' }],
		logo: Assets.Flutter,
		name: 'Tong - Unlimited Adda',
		period: {
			from: new Date(2024, 5, 1), to: new Date(2024, 5, 21),
		},
		skills: getSkills('flutter', 'dart', 'firebase'),
		type: 'Cross Platform App'
	},

	{
		slug: 'ramadan-app-flutter',
		color: '#ff3e00',
		description:
			'Access accurate Sehri and Iftar timings. Built using the BLoC architecture for efficient state management',
		shortDescription:
			'Access accurate Sehri and Iftar timings. Built using the BLoC architecture for efficient state management',
		links: [{ to: 'https://github.com/5w33t/flutter_projects/tree/main/ramadan_app', label: 'GitHub' }],
		logo: Assets.Flutter,
		name: 'Ramdan App',
		period: {
			from: new Date(2024, 5, 1), to: new Date(2024, 5, 7),
		},
		skills: getSkills('flutter', 'dart'),
		type: 'Cross Platform App',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projects';
