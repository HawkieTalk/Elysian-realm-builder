import { BattlesuitTypes } from '../enums';
import { EnumDictionary } from '../types';

export const BATTLESUITS_DETAILS: EnumDictionary<
	BattlesuitTypes,
	{
		name: string;
		keyWords: string;
	}
> = {
	[BattlesuitTypes.HerrscherOfThunder]: {
		name: 'Herrscher of Thunder',
		keyWords: 'HoT',
	},
	[BattlesuitTypes.HerrscherOfReason]: {
		name: 'Herrscher of Reason',
		keyWords: 'HoR',
	},
	[BattlesuitTypes.HerrscherOflamescion]: {
		name: 'Herrscher of Flamescion',
		keyWords: 'HoF',
	},
};
