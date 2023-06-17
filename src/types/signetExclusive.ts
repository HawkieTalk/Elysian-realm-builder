import { BattlesuitTypes, SignetRarity } from '../enums';
import { EnumDictionary } from './enumDictionary';
import { Signet } from './signet';

type ExclusiveSignet =
	| { rarity: SignetRarity.Exclusive }
	| Omit<Signet, 'rarity'>;

export type SignetExlusive = EnumDictionary<
	BattlesuitTypes,
	{
		signets: ExclusiveSignet[];
	}
>;
