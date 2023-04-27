import { boolean, number, object, string } from 'yup';

import { Model } from '@common/model/model';
import { StringOrNull, ValueOrNull } from '@common/types/interfaces/common';

import { LicenseModel } from './LicenseModel';
import { OwnerModel } from './OwnerModel';

export class RepositoryDetailsModel extends Model {
	id: StringOrNull = null;
	name: StringOrNull = null;
	private = false;
	watchers = 0;
	has_issues = false;
	has_projects = false;
	description: StringOrNull = null;
	owner: OwnerModel = new OwnerModel({});
	license: ValueOrNull<LicenseModel> = null;

	getSchema() {
		return object().shape({
			id: string(),
			name: string(),
			private: boolean(),
			watchers: number(),
			has_issues: boolean(),
			has_projects: boolean(),
			description: string().nullable(),
			owner: OwnerModel.getSchema(),
			license: LicenseModel.getSchema().nullable()
		});
	}
}
