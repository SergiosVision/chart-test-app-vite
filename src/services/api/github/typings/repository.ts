import { License } from './license';
import { Owner } from './owner';

export type RepositoryShort = {
	id: string;
	watchers: number;
	name: string;
	private: boolean;
	description: StringOrNull;
	owner: Owner;
};

export type Repository = {
	id: string;
	name: string;
	private: boolean;
	watchers: number;
	has_issues: boolean;
	has_projects: boolean;
	description: StringOrNull;
	owner: Owner;
	license: ValueOrNull<License>;
};
