import { GithubApiService } from '@services/api/github/github.api.service';

import { RepositoriesListModel } from '../domain/models/RepositoriesListModel';
import { RepositoryDetailsModel } from '../domain/models/RepositoryDetailsModel';
import { WeeklyCommitCountModel } from '../domain/models/WeeklyCommitCountModel';
import { RepositoryDefaultError } from '../exceptions/repositoryDefaultError';
import { RepositoryNotFound } from '../exceptions/repositoryNotFound';

interface IRepositoriesRepository {
	getList(): Promise<RepositoriesListModel[]>;

	getDetails(owner: string, repo: string): Promise<RepositoryDetailsModel>;

	getWeeklyCommitCount(
		owner: string,
		repo: string
	): Promise<WeeklyCommitCountModel>;
}

export class RepositoriesRepositoryImpl implements IRepositoriesRepository {
	constructor(private readonly api: GithubApiService) {}

	async getList() {
		try {
			const response = await this.api.getRepositories();

			return response.map(
				item =>
					new RepositoriesListModel({
						id: item.id,
						name: item.name,
						private: item.private,
						description: item.description,
						owner: item.owner,
						watchers: item.watchers
					})
			);
		} catch (error: any) {
			switch (error.status) {
				case 404:
					throw new RepositoryNotFound('Organization repositories not found');
				default:
					throw new RepositoryDefaultError(
						'Cannot get list of repositories. Try again later'
					);
			}
		}
	}

	async getDetails(owner: string, repo: string) {
		try {
			const response = await this.api.getRepositoryDetails(owner, repo);

			return new RepositoryDetailsModel({
				id: response.id,
				name: response.name,
				private: response.private,
				watchers: response.watchers,
				has_issues: response.has_issues,
				has_projects: response.has_projects,
				description: response.description,
				owner: response.owner,
				license: response.license
			});
		} catch (error: any) {
			switch (error.status) {
				case 404:
					throw new RepositoryNotFound('Repository not found');
				default:
					throw new RepositoryDefaultError(
						'Cannot get repository details. Try again later'
					);
			}
		}
	}

	async getWeeklyCommitCount(owner: string, repo: string) {
		try {
			const response = await this.api.getWeeklyCommitCount(owner, repo);

			return new WeeklyCommitCountModel({
				all: response.all,
				owner: response.owner
			});
		} catch (error: any) {
			switch (error.status) {
				case 404:
					throw new RepositoryNotFound('Commits count not found');
				default:
					throw new RepositoryDefaultError(
						'Cannot get weekly commits count. Try again later'
					);
			}
		}
	}
}
