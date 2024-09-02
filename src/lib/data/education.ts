import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor Degree of Computer Science & Engineering',
		description: 'Valedictorian of Batch 11',
		location: 'Rajshahi, Bangladesh',
		logo: Assets.VU,
		name: '',
		organization: 'Varendra University',
		period: { from: new Date(2016, 1, 1), to: new Date(2020, 1, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'C++', 'Java', 'English', 'Algorithm', 'Data Structure', 'Web Programming', 'Machine Learning' ]
	},
];

export const title = 'Education';
