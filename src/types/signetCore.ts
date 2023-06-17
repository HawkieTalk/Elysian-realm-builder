import { SignetRarity } from '../enums';
import { Signet } from './signet';

type SignetEnchanced =
	| { rarity: SignetRarity.Enchanced }
	| Omit<Signet, 'rarity'>;

export interface SignetCore extends Pick<Signet, 'name'> {
	rarity: SignetRarity.Core;
	signets: SignetEnchanced[];
}
