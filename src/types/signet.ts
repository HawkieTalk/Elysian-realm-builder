import { SignetRarity } from '../enums';

export interface Signet {
	name: string;
	rarity: Exclude<
		SignetRarity,
		SignetRarity.Core | SignetRarity.Exclusive | SignetRarity.Enchanced
	>;
	description?: string;
}
