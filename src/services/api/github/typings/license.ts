import { StringOrNull } from '@common/types/interfaces/common';

export type License = {
	key: string;
	name: string;
	spdx_id: StringOrNull;
	url: StringOrNull;
	node_id: StringOrNull;
};
