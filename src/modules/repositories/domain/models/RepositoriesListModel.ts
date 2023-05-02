import { boolean, number, object, string } from 'yup';

import { Model } from '@common/model/model';

import { OwnerModel } from './OwnerModel';

export class RepositoriesListModel extends Model {
	id: StringOrNull = null;
	watchers = 0;
	name: StringOrNull = null;
	private = false;
	description: StringOrNull = null;
	owner: OwnerModel = new OwnerModel({});

	getSchema() {
		return object().shape({
			watchers: number(),
			private: boolean(),
			id: string().nullable(),
			name: string().nullable(),
			description: string().nullable(),
			owner: OwnerModel.getSchema()
		});
	}
}
