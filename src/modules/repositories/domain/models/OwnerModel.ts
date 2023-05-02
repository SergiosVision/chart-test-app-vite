import { boolean, object, string } from 'yup';

import { Model } from '@common/model/model';

export class OwnerModel extends Model {
	avatar_url: StringOrNull = null;
	events_url: StringOrNull = null;
	followers_url: StringOrNull = null;
	following_url: StringOrNull = null;
	gists_url: StringOrNull = null;
	gravatar_id: StringOrNull = null;
	html_url: StringOrNull = null;
	id: NumberOrNull = null;
	login: StringOrNull = null;
	node_id: StringOrNull = null;
	organizations_url: StringOrNull = null;
	received_events_url: StringOrNull = null;
	repos_url: StringOrNull = null;
	site_admin = false;
	subscriptions_url: StringOrNull = null;
	type: StringOrNull = null;
	url: StringOrNull = null;

	static getSchema() {
		return object().shape({
			avatar_url: string().nullable(),
			events_url: string().nullable(),
			followers_url: string().nullable(),
			following_url: string().nullable(),
			gists_url: string().nullable(),
			gravatar_id: string().nullable(),
			html_url: string().nullable(),
			id: string(),
			login: string(),
			node_id: string().nullable(),
			organizations_url: string().nullable(),
			received_events_url: string().nullable(),
			repos_url: string().nullable(),
			site_admin: boolean(),
			subscriptions_url: string().nullable(),
			type: string().nullable(),
			url: string().nullable()
		});
	}
}
