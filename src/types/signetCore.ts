import { SignetRarity } from '../enums';
import { Signet } from './signet';

type SignetEnchanced =
	| { rarity: SignetRarity.Enchanced }
	| Pick<Signet, 'name' | 'description'>;

export interface SignetCore extends Pick<Signet, 'name'> {
	rarity: SignetRarity.Core;
	signets: SignetEnchanced[];
}
