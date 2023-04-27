import { object, string } from 'yup';

import { Model } from '@common/model/model';
import { StringOrNull } from '@common/types/interfaces/common';

export class LicenseModel extends Model {
	key: StringOrNull = null;
	name: StringOrNull = null;
	spdx_id: StringOrNull = null;
	url: StringOrNull = null;
	node_id: StringOrNull = null;

	static getSchema() {
		return object().shape({
			key: string(),
			name: string(),
			spdx_id: string().nullable(),
			url: string().nullable(),
			node_id: string().nullable()
		});
	}
}
