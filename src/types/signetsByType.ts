import { SignetTypes } from '../enums';
import { EnumDictionary } from './enumDictionary';
import { Signet } from './signet';
import { SignetCore } from './signetCore';

export type SignetsByType = EnumDictionary<
	SignetTypes,
	(Signet | SignetCore)[]
>;