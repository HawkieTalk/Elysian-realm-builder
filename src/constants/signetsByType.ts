import { SignetTypes, SignetRarity } from '../enums';
import { SignetsByType } from '../types';

export const SIGNETS_BY_TYPE: SignetsByType = {
	[SignetTypes.Deliverance]: [
		{ name: 'Goblet of the Giver', rarity: SignetRarity.Normal },
		{ name: 'Pendant of the Watcher', rarity: SignetRarity.Normal },
		{ name: 'Brand of the Undead', rarity: SignetRarity.Normal },
		{ name: 'Mask of the Predator', rarity: SignetRarity.Normal },
		{ name: 'Artifact of the Inhibitor', rarity: SignetRarity.Normal },
		{ name: 'Rochet of the Pilgrim', rarity: SignetRarity.Normal },
		{
			name: 'Blade of the Deliverer',
			rarity: SignetRarity.Core,
			signets: [
				{ name: 'Flock of the Deliverer', rarity: SignetRarity.Enchanced },
				{ name: 'Crusade of the Deliverer', rarity: SignetRarity.Enchanced },
				{ name: 'Echo of the Deliverer', rarity: SignetRarity.Enchanced },
			],
		},
		{
			name: 'Shadow of the Deliverer',
			rarity: SignetRarity.Core,
			signets: [
				{ name: 'Dream of the Deliverer', rarity: SignetRarity.Enchanced },
				{ name: 'Resolve of the Deliverer', rarity: SignetRarity.Enchanced },
				{ name: 'Triumph of the Deliverer', rarity: SignetRarity.Enchanced },
			],
		},
	],
	[SignetTypes.Gold]: [
		{ name: 'Recitatif of Eden', rarity: SignetRarity.Normal },
		{ name: 'Recitatif of Creeks', rarity: SignetRarity.Normal },
		{ name: 'Recitatif of Birds', rarity: SignetRarity.Normal },
		{ name: 'Recitatif of Fruit Trees', rarity: SignetRarity.Normal },
		{ name: 'Recitatif of Good Wine', rarity: SignetRarity.Normal },
		{ name: 'Recitatif of Fine Jade', rarity: SignetRarity.Normal },
		{
			name: 'Aria of Gold',
			rarity: SignetRarity.Core,
			signets: [
				{ name: 'Aria of Soil', rarity: SignetRarity.Enchanced },
				{ name: 'Aria of Life', rarity: SignetRarity.Enchanced },
				{ name: 'Aria of Dawn', rarity: SignetRarity.Enchanced },
			],
		},
		{
			name: 'Echo of Gold',
			rarity: SignetRarity.Core,
			signets: [
				{ name: 'Echo of Withered Soil', rarity: SignetRarity.Enchanced },
				{ name: 'Echo of Shrill Wind', rarity: SignetRarity.Enchanced },
				{ name: 'Echo of Silent Night', rarity: SignetRarity.Enchanced },
			],
		},
	],
	[SignetTypes.Decimation]: [
		{ name: 'Blade, Grave, and Scar', rarity: SignetRarity.Normal },
		{ name: 'Bone, Blood, and Ribbon', rarity: SignetRarity.Normal },
		{ name: 'Letter, Maniac, and Ravings', rarity: SignetRarity.Normal },
		{ name: 'Path, Misfortune, and Written Fate', rarity: SignetRarity.Normal },
		{ name: 'Desireless, Mindless, and Homeless', rarity: SignetRarity.Normal },
		{ name: 'God, Me, and the Only', rarity: SignetRarity.Normal },
		{
			name: 'Fight, Struggle, and Decimation',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Inhuman, Unevil, and Ungodly',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Man, Mask, and Contract', rarity: SignetRarity.Enchanced },
				{
					name: 'Burden, Difficulty, and Calamity',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: 'Soldiers, Scissors, Spoils and Slaughter',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Death, Life, Oblivion and Existence',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Homeland and Friends', rarity: SignetRarity.Enchanced },
				{
					name: 'Body, Bones, Heart and Soul',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
	[SignetTypes.Bodhi]: [
		{ name: 'Motto of Pubbe-Nivasanussati', rarity: SignetRarity.Normal },
		{ name: 'Motto of Dibba-Cakkhu', rarity: SignetRarity.Normal },
		{ name: 'Motto of Dibba-Sota', rarity: SignetRarity.Normal },
		{ name: 'Motto of Ceto-Pariya-Nana', rarity: SignetRarity.Normal },
		{ name: 'Motto of Iddhi-Vidha', rarity: SignetRarity.Normal },
		{ name: 'Motto of Asavakkhaya', rarity: SignetRarity.Normal },
		{
			name: 'Maxim of Bodhi',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Maxim of Anitya',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Maxim of Anatman', rarity: SignetRarity.Enchanced },
				{
					name: 'Maxim of Santam',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: 'Dictum of Bodhi',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Dictum of Anitya',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Dictum of Anatman', rarity: SignetRarity.Enchanced },
				{
					name: 'Dictum of Santam',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
	[SignetTypes.Setsuna]: [
		{ name: 'Bountiful Blossom: Ume', rarity: SignetRarity.Normal },
		{ name: 'Bountiful Blossom: Koyo', rarity: SignetRarity.Normal },
		{ name: 'Bountiful Blossom: Botan', rarity: SignetRarity.Normal },
		{ name: 'Bountiful Blossom: Kiku', rarity: SignetRarity.Normal },
		{ name: 'Bountiful Blossom: Fuji', rarity: SignetRarity.Normal },
		{ name: 'Bountiful Blossom: Ayame', rarity: SignetRarity.Normal },
		{
			name: 'Setsuna Blade: Sakura ni Maku',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Setsuna Blade: Ame-Shiko',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Setsuna Blade: Tsukimi-de Ippai',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Setsuna Blade: Ino-Shika-Cho',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: 'Setsuna Blade: Yasha',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Setsuna Blade: Shinra Bansho',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Setsuna Blade: Mugenjigoku', rarity: SignetRarity.Enchanced },
				{
					name: 'Setsuna Blade: Mumyo',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
	[SignetTypes.Infinity]: [
		{ name: 'Rodent [V]', rarity: SignetRarity.Normal },
		{ name: 'Entwined [P]', rarity: SignetRarity.Normal },
		{ name: 'Silent [B]', rarity: SignetRarity.Normal },
		{ name: 'Lip Poison [E]', rarity: SignetRarity.Normal },
		{ name: 'Lodging [C]', rarity: SignetRarity.Normal },
		{ name: 'Dark Pupil [T]', rarity: SignetRarity.Normal },
		{
			name: 'Infinite [X]',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Dead [X]',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Unknown [X]',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Newborn [X]',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: 'Infinite [M]',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Sacrificial [M]',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Immortal [M]', rarity: SignetRarity.Enchanced },
				{
					name: 'Collapsed [M]',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
	[SignetTypes.Vicissitude]: [
		{ name: 'Long Trip', rarity: SignetRarity.Normal },
		{ name: 'Days Gone', rarity: SignetRarity.Normal },
		{ name: 'Dark Garb No More', rarity: SignetRarity.Normal },
		{ name: 'Old Dreams Again', rarity: SignetRarity.Normal },
		{ name: 'Lost and Found', rarity: SignetRarity.Normal },
		{ name: 'No One to Share', rarity: SignetRarity.Normal },
		{
			name: 'Vivid Vicissitude',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Fleeting Fantasy',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Fallen Flowers',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Forgotten and Forsaken',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: 'Forgotten and Forsaken',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Worldly Troubles',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Go with the Flow', rarity: SignetRarity.Enchanced },
				{
					name: 'Broken Dream',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
	[SignetTypes.Ego]: [],
	[SignetTypes.Discipline]: [
		{ name: 'First, No Betrayal', rarity: SignetRarity.Normal },
		{ name: 'Second, No Deception', rarity: SignetRarity.Normal },
		{ name: 'Third, No Brutality', rarity: SignetRarity.Normal },
		{ name: 'Fourth, No Insolence', rarity: SignetRarity.Normal },
		{ name: 'Fifth, No Falsehood', rarity: SignetRarity.Normal },
		{ name: 'Sixth, No Decadence', rarity: SignetRarity.Normal },
		{
			name: 'You Shall Be Subject to Numerous Disciplines',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'You Shall Be Bound by Thy Body',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'You Shall Be Committed to Thy Life',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'You Shall Be Witnessed by Thy Heart',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: `You Shall Receive Disciplines' Blessing`,
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'You Shall Punish Evil',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'You Shall Follow Good', rarity: SignetRarity.Enchanced },
				{
					name: 'You Shall Answer Prayers',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
	[SignetTypes.Helix]: [
		{ name: 'Act I: Magic', rarity: SignetRarity.Normal },
		{ name: 'Act II: Pendulum', rarity: SignetRarity.Normal },
		{ name: 'Act III: Conflict', rarity: SignetRarity.Normal },
		{ name: 'Act IV: Spoon', rarity: SignetRarity.Normal },
		{ name: 'Act V: Spider Web', rarity: SignetRarity.Normal },
		{ name: 'Act VI: Sneer', rarity: SignetRarity.Normal },
		{
			name: 'Interlude: Reversed Spiral',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Act VII: Half-Closed Door',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Act VIII: Adorned Chamber',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Finale: Broken Truth',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: 'Intermezzo: Holistic Helix',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Puppetry: Interlacing Cells',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Drama: Origin of Slumber', rarity: SignetRarity.Enchanced },
				{
					name: 'Saga: Overlapping Needles',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
	[SignetTypes.Daybreak]: [
		{ name: 'Talons that Desecrate the Santuary', rarity: SignetRarity.Normal },
		{ name: 'Wings that Mask the Sanguine Moon', rarity: SignetRarity.Normal },
		{ name: 'Horns that Rip the Bleak Sky', rarity: SignetRarity.Normal },
		{
			name: 'Eyes that Overlook the Vicious Abyss',
			rarity: SignetRarity.Normal,
		},
		{ name: 'Breath that Slanders Sulphur', rarity: SignetRarity.Normal },
		{ name: 'Heart that Committed Seven Crimes', rarity: SignetRarity.Normal },
		{
			name: 'Daybreak, an Undying Light',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Unbending Hero',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Undetermined Judgement',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Unwavering Promise',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: 'Daybreak, Lone Beacon',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Dawn. Perpetual Wait',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Choice, Ensuing Regret', rarity: SignetRarity.Enchanced },
				{
					name: 'Heart, Unshakable Character',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
	[SignetTypes.Stars]: [
		{ name: 'Red & Hot', rarity: SignetRarity.Normal },
		{ name: 'Blue & Cold', rarity: SignetRarity.Normal },
		{ name: 'Yellow & Warm', rarity: SignetRarity.Normal },
		{
			name: 'Black & Dark',
			rarity: SignetRarity.Normal,
		},
		{ name: 'White & Bright', rarity: SignetRarity.Normal },
		{ name: 'Grey & Empty', rarity: SignetRarity.Normal },
		{
			name: 'Shining Like Stars',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Blooming Like Flowers',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Burning Like Flames',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Stretching Like Leaves',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: 'Faded Stars',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Petals in the Wind',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Fallen Leaves', rarity: SignetRarity.Enchanced },
				{
					name: 'A Flame Extinguished',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
	[SignetTypes.Reverie]: [
		{ name: 'Motto of Meow', rarity: SignetRarity.Normal },
		{ name: 'Back-Curled Tail', rarity: SignetRarity.Normal },
		{ name: 'Neighborhood Chatters', rarity: SignetRarity.Normal },
		{
			name: 'Flexible P&C',
			rarity: SignetRarity.Normal,
		},
		{ name: `Merchant's Philosophy`, rarity: SignetRarity.Normal },
		{ name: 'Shiny & Valuable', rarity: SignetRarity.Normal },
		{
			name: 'Empty Dreams, Self, Set, and Joy',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Improvised Drama',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'Setsuna Paw',
					rarity: SignetRarity.Enchanced,
				},
				{
					name: 'This Is Not Where We Die',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
		{
			name: 'Empty Illusions, Empty Fantasies',
			rarity: SignetRarity.Core,
			signets: [
				{
					name: 'Improv Magic: Zeroing',
					rarity: SignetRarity.Enchanced,
				},
				{ name: 'Snowy Paw', rarity: SignetRarity.Enchanced },
				{
					name: 'My Dreams Will Come True',
					rarity: SignetRarity.Enchanced,
				},
			],
		},
	],
};
