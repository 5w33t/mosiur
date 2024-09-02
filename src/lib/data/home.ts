import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Mosiur';

export const lastName = 'Rahman Sweet';

export const description =
	'A passionate Flutter developer with hands-on experience in leveraging state management solutions like GetX, BLoC, and Riverpod. Extensive knowledge of Dart Language and Flutter SDK. Committed to staying ahead of the curve and continuously expanding my skillset.';
export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/5w33t' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/rahmansweet'
	},
	{
		platform: Platform.Twitter,
		link: 'https://https://x.com/MrOct8'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'sweet.csevu@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/mosiur.csevu'
	}
];

export const skills = getSkills('java', 'kotlin', 'dart', 'flutter', 'firebase');
