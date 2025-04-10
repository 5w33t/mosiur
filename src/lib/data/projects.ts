import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'expense-manager',
		color: '#5e95e3',
		description: 'Wise Owl - Expense Manager is the perfect companion for managing your personal finances in a simple, user-friendly, and secure way. Whether you want to keep track of your income or expenses, Wise Owl makes it easy to manage your financial data efficiently, with a minimalistic and intuitive design.',
			shortDescription:
			'Track income and expenses easily with Wise Owl—secure, offline, and insightful.',
			links: [{ to: 'https://play.google.com/store/apps/details?id=dev.orangeowl.wise_owl', label: 'Playstore' }],
		logo: Assets.Flutter,
		name: 'Wise Owl - Expense Manager App',
		period: {
			from: new Date(2024, 9, 1), to: new Date(2024, 10, 5),
		},
		skills: getSkills('flutter', 'dart'),
		type: 'Cross Platform App',
		screenshots: [
			{
				label: 'Feature Graphics',
				src: 'https://ibb.co.com/WBbfs6r'
			},
			{
				label: 'Splash',
				src: 'https://i.ibb.co.com/6Xmy23V/Screenshot-1729748406.png'
			},
			{
				label: 'Update Info',
				src: 'https://i.ibb.co.com/120420H/Screenshot-1729748397.png'
			},
			{
				label: 'Add Transaction - Light Mode',
				src: 'https://i.ibb.co.com/QcW7THd/Screenshot-1729746759.png'
			},
			{
				label: 'Add Transaction - Dark Mode',
				src: 'https://i.ibb.co.com/QDW5CFL/Screenshot-1729746794.png'
			},
			{
				label: 'Home Screen - Light Mode',
				src: 'https://i.ibb.co.com/HT8s0ZY/Screenshot-1729748243.png'
			},
			{
				label: 'Transaction Log',
				src: 'https://i.ibb.co.com/prWGkc8/Screenshot-1729748327.png'
			},
			{
				label: 'Home Screen - Dark Mode',
				src: 'https://i.ibb.co.com/HdMNfSZ/Screenshot-1729748330.png'
			},
			{
				label: 'Statistics',
				src: 'https://i.ibb.co.com/MZSbVQj/Screenshot-1729748364.png'
			},
		],
	},
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
		type: 'Cross Platform App',
		screenshots: [
			{
				label: 'Feature Graphics',
				src: 'https://ibb.co.com/P9Wt83S'
			},
		],
	},
	{
		slug: 'tong-flutter',
		color: '#5e95e3',
		description: 'Tong is a communication platform that enables users to connect virtually through video calls, audio calls, and instant chat. Built with Firebase for seamless backend integration and the Jitsi SDK for reliable and high-quality video conferencing, the app delivers a smooth and interactive communication experience. Whether for personal or professional use, Tong is designed to keep users connected anytime, anywhere.',
			shortDescription:
			'Tong allows users to virtually connect with others through video, audio, and chat. Built using firebase and jitsi SDK',
			links: [{ to: 'https://github.com/5w33t/flutter_projects/tree/main/tong_app', label: 'GitHub' }],
		logo: Assets.Flutter,
		name: 'Tong - Unlimited Adda',
		period: {
			from: new Date(2024, 5, 1), to: new Date(2024, 5, 21),
		},
		skills: getSkills('flutter', 'dart', 'firebase'),
		type: 'Cross Platform App',
		
		screenshots: [
			{
				label: 'Home Screen',
				src: 'https://i.ibb.co.com/Sn4XD82/68747470733a2f2f692e6962622e636f2f53775a4b3933462f686f6d652e6a7067.jpg'
			},
			{
				label: 'Join Adda',
				src: 'https://i.ibb.co.com/N9thjT2/68747470733a2f2f692e6962622e636f2f7a7272793237372f6a6f696e2d616464612e6a7067.jpg'
			},
			{
				label: 'Sign Out',
				src: 'https://i.ibb.co.com/BZcnDT1/68747470733a2f2f692e6962622e636f2f67766d795864742f6c6f672d6f75742e6a7067.jpg'
			},
		],
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
		name: 'Ramadan App',
		period: {
			from: new Date(2024, 5, 1), to: new Date(2024, 5, 7),
		},
		skills: getSkills('flutter', 'dart'),
		type: 'Cross Platform App',
		screenshots: [
			{
				label: 'Home Screen',
				src: 'https://ibb.co.com/RB1b0My'
			},
			
		]
	}
];

export const title = 'Projects';
