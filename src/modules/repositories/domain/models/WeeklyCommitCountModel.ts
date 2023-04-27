import { array, number, object } from 'yup';

import { Model } from '@common/model/model';

export class WeeklyCommitCountModel extends Model {
	all: number[] = [];
	owner: number[] = [];

	getSchema() {
		return object().shape({
			all: array().of(number()),
			owner: array().of(number())
		});
	}
}
